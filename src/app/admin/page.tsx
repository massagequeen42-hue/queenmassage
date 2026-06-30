import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { prisma } from '@/lib/prisma'
import { Calendar, Users, DollarSign, TrendingUp } from 'lucide-react'
import { formatPrice } from '@/lib/utils'

async function getDashboardStats() {
  if (!process.env.DATABASE_URL || process.env.DATABASE_URL.includes('fake')) {
    return { totalBookings: 0, pendingBookings: 0, totalRevenue: 0, totalCustomers: 0 }
  }
  try {
    const [totalBookings, pendingBookings, totalRevenue, totalCustomers] = await Promise.all([
      prisma.booking.count(),
      prisma.booking.count({ where: { status: 'PENDING' } }),
      prisma.booking.aggregate({ _sum: { totalPrice: true } }),
      prisma.booking.groupBy({ by: ['phone'], _count: true }).then(r => r.length),
    ])

    return {
      totalBookings,
      pendingBookings,
      totalRevenue: totalRevenue._sum.totalPrice || 0,
      totalCustomers,
    }
  } catch {
    return { totalBookings: 0, pendingBookings: 0, totalRevenue: 0, totalCustomers: 0 }
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats()

  const cards = [
    {
      title: 'Total Booking',
      value: stats.totalBookings.toString(),
      icon: Calendar,
      description: 'Semua booking',
    },
    {
      title: 'Booking Pending',
      value: stats.pendingBookings.toString(),
      icon: TrendingUp,
      description: 'Menunggu konfirmasi',
    },
    {
      title: 'Total Revenue',
      value: formatPrice(stats.totalRevenue),
      icon: DollarSign,
      description: 'Total pendapatan',
    },
    {
      title: 'Total Pelanggan',
      value: stats.totalCustomers.toString(),
      icon: Users,
      description: 'Pelanggan unik',
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview bisnis QueenMassage</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <p className="text-xs text-muted-foreground">{card.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
