import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { bookingSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'
    const { success } = await rateLimit(ip)
    if (!success) {
      return NextResponse.json(
        { error: 'Terlalu banyak request. Coba lagi nanti.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = bookingSchema.parse(body)

    const booking = await prisma.booking.create({
      data: {
        customerName: validatedData.customerName,
        phone: validatedData.phone,
        email: validatedData.email || null,
        address: validatedData.address,
        latitude: validatedData.latitude,
        longitude: validatedData.longitude,
        serviceId: validatedData.serviceId,
        date: new Date(validatedData.date),
        time: validatedData.time,
        duration: validatedData.duration,
        therapistGender: validatedData.therapistGender,
        notes: validatedData.notes,
        totalPrice: validatedData.totalPrice,
      },
    })

    return NextResponse.json({ success: true, booking }, { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Data tidak valid', details: error },
        { status: 400 }
      )
    }
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const status = searchParams.get('status')

    const where = status ? { status: status as never } : {}

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: { service: true },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.booking.count({ where }),
    ])

    return NextResponse.json({
      bookings,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    })
  } catch (error) {
    console.error('Get bookings error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
