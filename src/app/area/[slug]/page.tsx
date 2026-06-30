import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MapPin, Phone, Check, Star, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { generateSEO, generateBreadcrumbSchema } from '@/lib/seo'
import { COVERAGE_AREAS, SERVICES } from '@/lib/constants'
import { formatPrice, getWhatsAppUrl } from '@/lib/utils'

interface AreaPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const area = COVERAGE_AREAS.find((a) => a.slug === slug)
  if (!area) return {}

  return generateSEO({
    title: `Pijat Panggilan ${area.name} - Massage Home Service`,
    description: `Layanan pijat panggilan profesional di ${area.name}, Bandung. Terapis bersertifikat datang ke rumah/hotel Anda. Traditional, Sport, Reflexology, Aromatherapy. Mulai Rp125.000. Booking sekarang!`,
    keywords: [
      `pijat panggilan ${area.name.toLowerCase()}`,
      `massage ${area.name.toLowerCase()}`,
      `spa panggilan ${area.name.toLowerCase()}`,
      `pijat rumah ${area.name.toLowerCase()}`,
    ],
    url: `https://queenmassage.id/area/${slug}`,
  })
}

export function generateStaticParams() {
  return COVERAGE_AREAS.map((area) => ({ slug: area.slug }))
}

export default async function AreaDetailPage({ params }: AreaPageProps) {
  const { slug } = await params
  const area = COVERAGE_AREAS.find((a) => a.slug === slug)
  if (!area) notFound()

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://queenmassage.id' },
    { name: 'Area Layanan', url: 'https://queenmassage.id/area' },
    { name: area.name, url: `https://queenmassage.id/area/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/area" className="hover:text-primary">Area</Link>
            <span>/</span>
            <span className="text-foreground">{area.name}</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <Badge variant="gold" className="mb-4">
              <MapPin className="h-3 w-3 mr-1" />
              Area Layanan
            </Badge>
            <h1 className="font-heading text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
              Pijat Panggilan {area.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nikmati layanan pijat profesional langsung di rumah, hotel, atau kantor Anda 
              di area {area.name} dan sekitarnya. Terapis bersertifikat siap melayani Anda.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Layanan Massage Home Service di {area.name}
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>
                    QueenMassage menyediakan layanan pijat panggilan profesional di area {area.name}, Bandung. 
                    Tim terapis kami yang bersertifikat dan berpengalaman siap datang langsung ke lokasi Anda 
                    untuk memberikan pengalaman relaksasi premium tanpa perlu keluar rumah.
                  </p>
                  <p>
                    Kami melayani berbagai jenis pijat mulai dari Traditional Massage, Relaxation Massage, 
                    Sport Massage, Deep Tissue, Reflexology, Aromatherapy, hingga Prenatal Massage. 
                    Semua peralatan dan perlengkapan dibawa oleh terapis kami, Anda cukup menyiapkan 
                    ruangan yang nyaman.
                  </p>
                  <p>
                    Area layanan kami di {area.name} mencakup seluruh kelurahan dan perumahan di sekitarnya. 
                    Tidak ada biaya transport tambahan untuk area ini. Layanan tersedia setiap hari 
                    dari pukul 08:00 hingga 22:00 WIB.
                  </p>
                </div>
              </section>

              {/* Services Available */}
              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Layanan Tersedia di {area.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/layanan/${service.slug}`}
                      className="flex items-center gap-3 rounded-lg border p-3 hover:border-primary hover:bg-primary/5 transition-all"
                    >
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium block truncate">{service.name}</span>
                        <span className="text-xs text-muted-foreground">Mulai {formatPrice(service.price)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Why Choose Us */}
              <section>
                <h2 className="font-heading text-2xl font-bold mb-4">
                  Kenapa Memilih QueenMassage di {area.name}?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Terapis profesional bersertifikat',
                    'Gratis biaya transport',
                    'Peralatan lengkap dibawa',
                    'Garansi kepuasan 100%',
                    'Tersedia setiap hari',
                    'Harga transparan tanpa biaya tersembunyi',
                    'Bisa pilih terapis pria/wanita',
                    'Booking mudah via WhatsApp',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-gold-500 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Pijat di {area.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">Mulai dari</p>
                    <p className="text-2xl font-bold text-primary">{formatPrice(125000)}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Setiap hari 08:00 - 22:00</span>
                  </div>

                  <div className="space-y-3 pt-2">
                    <Button variant="gold" className="w-full" size="lg" asChild>
                      <Link href="/booking">Booking Sekarang</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a
                        href={getWhatsAppUrl(`Halo, saya ingin booking pijat di area ${area.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="h-4 w-4" />
                        Chat WhatsApp
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
