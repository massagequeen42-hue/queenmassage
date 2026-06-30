import { prisma } from '@/lib/prisma'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPrice, formatDate } from '@/lib/utils'

async function getBookings() {
  try {
    return await prisma.booking.findMany({
      include: { service: true },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })
  } catch {
    return []
  }
}

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
  CONFIRMED: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
  IN_PROGRESS: 'bg-purple-500/10 text-purple-500 border-purple-500/30',
  COMPLETED: 'bg-green-500/10 text-green-500 border-green-500/30',
  CANCELLED: 'bg-red-500/10 text-red-500 border-red-500/30',
}

export default async function AdminBookingsPage() {
  const bookings = await getBookings()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Booking Management</h1>
        <p className="text-muted-foreground">Kelola semua booking masuk</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Semua Booking</CardTitle>
        </CardHeader>
        <CardContent>
          {bookings.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">Belum ada booking.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-medium">Nama</th>
                    <th className="text-left p-3 font-medium">Layanan</th>
                    <th className="text-left p-3 font-medium">Tanggal</th>
                    <th className="text-left p-3 font-medium">Harga</th>
                    <th className="text-left p-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b hover:bg-muted/50">
                      <td className="p-3">
                        <div>
                          <p className="font-medium">{booking.customerName}</p>
                          <p className="text-xs text-muted-foreground">{booking.phone}</p>
                        </div>
                      </td>
                      <td className="p-3">{booking.service?.name || '-'}</td>
                      <td className="p-3">
                        <div>
                          <p>{formatDate(booking.date)}</p>
                          <p className="text-xs text-muted-foreground">{booking.time}</p>
                        </div>
                      </td>
                      <td className="p-3 font-medium">{formatPrice(booking.totalPrice)}</td>
                      <td className="p-3">
                        <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${statusColors[booking.status] || ''}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
