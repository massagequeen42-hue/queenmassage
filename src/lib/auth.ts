import { prisma } from './prisma'

interface Session {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
    role?: string
  }
}

export async function getServerSession(): Promise<Session | null> {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('fake')) {
    return null
  }
  try {
    const adminEmail = process.env.ADMIN_EMAIL
    if (!adminEmail) return null

    const user = await prisma.user.findUnique({
      where: { email: adminEmail },
    })

    if (user && user.role === 'ADMIN') {
      return {
        user: {
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        },
      }
    }
    return null
  } catch {
    return null
  }
}
