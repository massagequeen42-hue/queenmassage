import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/sidebar'
import { getServerSession } from '@/lib/auth'

export const metadata: Metadata = {
  title: 'Admin Dashboard | QueenMassage',
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  if (!session || session.user?.role !== 'ADMIN') {
    redirect('/admin/login')
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-6 pt-20 lg:pt-6 lg:ml-64">
        {children}
      </main>
    </div>
  )
}
