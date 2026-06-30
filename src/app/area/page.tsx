import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO } from '@/lib/seo'
import { COVERAGE_AREAS } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Area Layanan Pijat Panggilan',
  description: 'Area coverage layanan pijat panggilan QueenMassage di Bandung, Cimahi, Lembang, Dago, Setiabudi, Pasteur, Antapani, Buah Batu, Kopo, dan Soreang.',
  keywords: ['area pijat panggilan bandung', 'coverage massage bandung', 'jangkauan layanan pijat'],
  url: 'https://queenmassage.id/area',
})

export default function AreaPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Area Layanan"
          title="Jangkauan Layanan Kami"
          subtitle="QueenMassage melayani seluruh area Bandung Raya. Pilih lokasi Anda untuk informasi lebih detail."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COVERAGE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/area/${area.slug}`}
              className="group rounded-2xl border bg-card p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    Pijat Panggilan {area.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Layanan massage profesional ke rumah, hotel, dan kantor di area {area.name} dan sekitarnya.
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
