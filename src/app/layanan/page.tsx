import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

export const metadata: Metadata = generateSEO({
  title: 'Layanan Pijat Panggilan Profesional',
  description: 'Daftar lengkap layanan pijat panggilan QueenMassage Bandung. Traditional Massage, Sport Massage, Reflexology, Aromatherapy, Prenatal Massage, dan lainnya.',
  keywords: ['layanan pijat bandung', 'jenis massage', 'pijat profesional'],
  url: 'https://queenmassage.id/layanan',
})

export default function ServicesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://queenmassage.id' },
    { name: 'Layanan', url: 'https://queenmassage.id/layanan' },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Layanan Kami"
            title="Layanan Pijat Profesional"
            subtitle="Pilih layanan massage yang sesuai kebutuhan Anda. Semua dilakukan oleh terapis bersertifikat."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group rounded-2xl border bg-card overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl text-primary">💆</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(service.price)}
                      </span>
                      <span className="text-xs text-muted-foreground">/{service.duration} min</span>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/layanan/${service.slug}`}>
                        Detail
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
