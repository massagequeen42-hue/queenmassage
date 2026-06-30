'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Crown, LayoutDashboard, Calendar, FileText, MessageSquare, Image, DollarSign, HelpCircle, MapPin, Users, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/bookings', label: 'Bookings', icon: Calendar },
  { href: '/admin/services', label: 'Services', icon: Settings },
  { href: '/admin/blog', label: 'Blog', icon: FileText },
  { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
  { href: '/admin/gallery', label: 'Gallery', icon: Image },
  { href: '/admin/pricing', label: 'Pricing', icon: DollarSign },
  { href: '/admin/faq', label: 'FAQ', icon: HelpCircle },
  { href: '/admin/areas', label: 'Areas', icon: MapPin },
  { href: '/admin/customers', label: 'Customers', icon: Users },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-card hidden lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <Crown className="h-6 w-6 text-gold-500" />
          <span className="font-heading text-lg font-bold">Admin</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <Link href="/" className="text-xs text-muted-foreground hover:text-primary">
            ← Kembali ke Website
          </Link>
        </div>
      </div>
    </aside>
  )
}
