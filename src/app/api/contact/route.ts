import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { contactSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'
    const { success } = await rateLimit(ip)
    if (!success) {
      return NextResponse.json(
        { error: 'Terlalu banyak request.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    const submission = await prisma.contactSubmission.create({
      data: validatedData,
    })

    return NextResponse.json({ success: true, submission }, { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ error: 'Data tidak valid' }, { status: 400 })
    }
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
