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
  // Simplified auth check - in production, use NextAuth properly
  // This is a placeholder that checks for admin access
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
