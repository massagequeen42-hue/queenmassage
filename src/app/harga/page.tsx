import { Metadata } from 'next'
import Link from 'next/link'
import { Check, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { formatPrice, getWhatsAppUrl } from '@/lib/utils'

export const metadata: Metadata = generateSEO({
  title: 'Harga Pijat Panggilan Bandung',
  description: 'Daftar harga layanan pijat panggilan QueenMassage Bandung. Mulai dari Rp125.000. Harga transparan, tanpa biaya tersembunyi. Gratis transport.',
  keywords: ['harga pijat panggilan bandung', 'tarif massage bandung', 'biaya pijat rumah'],
  url: 'https://queenmassage.id/harga',
})

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Harga"
          title="Daftar Harga Layanan"
          subtitle="Harga transparan tanpa biaya tersembunyi. Sudah termasuk transport untuk area Bandung."
        />

        {/* Price Table */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border overflow-hidden">
            <div className="grid grid-cols-4 bg-primary/5 p-4 font-semibold text-sm">
              <span>Layanan</span>
              <span className="text-center">Durasi</span>
              <span className="text-center">Harga</span>
              <span className="text-center">Aksi</span>
            </div>
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`grid grid-cols-4 items-center p-4 text-sm ${
                  index % 2 === 0 ? '' : 'bg-muted/30'
                }`}
              >
                <div>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </div>
                <div className="text-center flex items-center justify-center gap-1 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {service.duration} min
                </div>
                <div className="text-center font-semibold text-primary">
                  {formatPrice(service.price)}
                </div>
                <div className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/booking">Booking</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          <h3 className="font-semibold text-lg">Keterangan:</h3>
          <ul className="space-y-2">
            {[
              'Harga sudah termasuk biaya transport dalam area coverage',
              'Harga untuk durasi standar. Durasi lebih lama tersedia dengan biaya tambahan proporsional',
              'Couple Massage: 2 terapis untuk 2 orang secara bersamaan',
              'Pembayaran bisa dilakukan dengan Cash, Transfer Bank, GoPay, OVO, atau Dana',
              'Tidak ada biaya tersembunyi atau surcharge',
            ].map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ada pertanyaan tentang harga?</p>
          <Button variant="gold" size="lg" asChild>
            <a
              href={getWhatsAppUrl('Halo QueenMassage, saya ingin tanya tentang harga.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="h-4 w-4" />
              Tanya via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
