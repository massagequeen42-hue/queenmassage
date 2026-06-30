import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { careerSchema } from '@/lib/validations'
import { rateLimit } from '@/lib/rate-limit'

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous'
    const { success } = await rateLimit(ip)
    if (!success) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 })
    }

    const body = await request.json()
    const data = careerSchema.parse(body)

    const application = await prisma.careerApplication.create({
      data,
    })

    return NextResponse.json({ success: true, application }, { status: 201 })
  } catch (error: unknown) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json({ error: 'Data tidak valid' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
