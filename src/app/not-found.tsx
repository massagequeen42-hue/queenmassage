import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="font-heading text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold">Halaman Tidak Ditemukan</h2>
        <p className="text-muted-foreground max-w-md">
          Halaman yang Anda cari tidak tersedia. Mungkin URL salah atau halaman telah dipindahkan.
        </p>
        <Button variant="gold" asChild>
          <Link href="/">
            <Home className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  )
}
