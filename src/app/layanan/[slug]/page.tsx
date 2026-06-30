import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Check, Clock, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { generateSEO, generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo'
import { SERVICES } from '@/lib/constants'
import { formatPrice, getWhatsAppUrl } from '@/lib/utils'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

const serviceDetails: Record<string, { description: string; benefits: string[] }> = {
  'pijat-traditional-refleksi': {
    description: 'Pijat Traditional & Refleksi adalah kombinasi sempurna antara pijat tradisional Indonesia dan terapi refleksi. Sesi dimulai dengan pijat seluruh tubuh menggunakan teknik tradisional untuk melancarkan peredaran darah dan melepas ketegangan otot, dilanjutkan dengan refleksi pada titik-titik saraf kaki yang terhubung dengan organ tubuh. Kombinasi ini memberikan manfaat ganda: relaksasi total sekaligus keseimbangan energi tubuh.',
    benefits: ['Melancarkan peredaran darah', 'Menyeimbangkan energi tubuh', 'Mengurangi nyeri otot dan sendi', 'Meningkatkan fungsi organ melalui refleksi', 'Mengurangi stress dan kecemasan', 'Meningkatkan kualitas tidur'],
  },
  'pijat-kebugaran': {
    description: 'Pijat Kebugaran adalah layanan premium yang dirancang untuk memulihkan kebugaran tubuh secara menyeluruh. Menggunakan teknik deep pressure dan stretching yang intensif, terapis kami bekerja pada seluruh kelompok otot untuk menghilangkan kelelahan, mengembalikan vitalitas, dan meningkatkan performa fisik. Sangat cocok untuk Anda yang aktif, sering berolahraga, atau membutuhkan pemulihan total dari rutinitas yang berat.',
    benefits: ['Memulihkan kebugaran secara total', 'Menghilangkan kelelahan kronis', 'Meningkatkan vitalitas dan energi', 'Deep muscle recovery', 'Meningkatkan fleksibilitas tubuh', 'Detoksifikasi dan revitalisasi'],
  },
  'pijat-lulur': {
    description: 'Pijat Lulur adalah perawatan lengkap yang menggabungkan pijat relaksasi dengan treatment lulur tradisional. Sesi 120 menit ini dimulai dengan pijat seluruh tubuh untuk merilekskan otot, dilanjutkan dengan aplikasi lulur alami yang mengangkat sel kulit mati, mencerahkan kulit, dan melembabkan. Hasilnya: tubuh rileks, kulit halus, cerah, dan bersinar. Pengalaman spa premium langsung di rumah Anda.',
    benefits: ['Kulit halus dan cerah', 'Mengangkat sel kulit mati', 'Relaksasi tubuh menyeluruh', 'Melembabkan dan menutrisi kulit', 'Detoksifikasi kulit', 'Pengalaman spa premium di rumah'],
  },
  'traditional-massage': {
    description: 'Pijat tradisional Indonesia adalah warisan budaya yang telah digunakan selama berabad-abad untuk menjaga kesehatan dan kebugaran tubuh. Teknik pemijatan ini menggunakan jari, telapak tangan, dan siku untuk menekan titik-titik tertentu pada tubuh, melancarkan peredaran darah, dan melepas ketegangan otot. Terapis QueenMassage yang berpengalaman akan menyesuaikan tekanan sesuai kebutuhan dan kenyamanan Anda.',
    benefits: ['Melancarkan peredaran darah', 'Mengurangi nyeri otot', 'Meningkatkan fleksibilitas', 'Mengurangi stress', 'Meningkatkan kualitas tidur', 'Membuang racun dalam tubuh'],
  },
  'relaxation-massage': {
    description: 'Relaxation massage menggunakan teknik Swedish massage yang lembut dan menenangkan. Gerakan panjang dan mengalir dengan tekanan ringan hingga sedang akan membantu Anda melepas penat dan mencapai ketenangan total. Cocok untuk Anda yang membutuhkan waktu istirahat dari rutinitas yang padat.',
    benefits: ['Mengurangi kecemasan', 'Menurunkan tekanan darah', 'Relaksasi total', 'Meningkatkan mood', 'Mengurangi sakit kepala', 'Meningkatkan konsentrasi'],
  },
  'sport-massage': {
    description: 'Sport massage dirancang khusus untuk atlet dan mereka yang aktif berolahraga. Teknik pemijatan yang lebih intens fokus pada kelompok otot yang sering digunakan saat olahraga. Membantu mempercepat pemulihan setelah latihan, mencegah cedera, dan meningkatkan performa atletik.',
    benefits: ['Mempercepat recovery otot', 'Mencegah cedera', 'Meningkatkan fleksibilitas', 'Mengurangi muscle soreness', 'Meningkatkan range of motion', 'Meningkatkan performa atletik'],
  },
  'deep-tissue-massage': {
    description: 'Deep tissue massage menggunakan tekanan yang lebih dalam untuk mencapai lapisan otot dan jaringan ikat yang lebih dalam. Sangat efektif untuk mengatasi ketegangan kronis, nyeri punggung, dan area yang tegang akibat postur buruk atau cedera lama.',
    benefits: ['Mengatasi nyeri kronis', 'Memperbaiki postur', 'Melepas trigger points', 'Mengurangi inflamasi', 'Meningkatkan mobilitas', 'Mengatasi cedera lama'],
  },
  'reflexology': {
    description: 'Reflexology adalah terapi pijat yang fokus pada titik-titik refleksi di telapak kaki yang terhubung dengan organ-organ tubuh. Melalui penekanan pada titik-titik tertentu, reflexology dapat membantu menyeimbangkan energi tubuh dan meningkatkan fungsi organ.',
    benefits: ['Menyeimbangkan energi tubuh', 'Meningkatkan fungsi organ', 'Mengurangi nyeri kaki', 'Melancarkan peredaran darah kaki', 'Mengurangi stress', 'Meningkatkan kualitas tidur'],
  },
  'aromatherapy-massage': {
    description: 'Aromatherapy massage menggabungkan teknik pijat lembut dengan essential oil berkualitas tinggi. Setiap oil dipilih sesuai kebutuhan Anda - lavender untuk relaksasi, peppermint untuk energi, atau eucalyptus untuk pernapasan. Pengalaman multisensory yang memanjakan tubuh dan pikiran.',
    benefits: ['Relaksasi mendalam', 'Manfaat aromatherapy oil', 'Mengurangi kecemasan', 'Meningkatkan mood', 'Melembabkan kulit', 'Pengalaman spa premium'],
  },
  'prenatal-massage': {
    description: 'Prenatal massage dirancang khusus untuk ibu hamil dengan teknik yang aman dan nyaman. Membantu mengurangi ketidaknyamanan kehamilan seperti nyeri punggung, kaki bengkak, dan stress. Terapis kami terlatih khusus untuk menangani ibu hamil dengan posisi yang aman.',
    benefits: ['Mengurangi nyeri punggung', 'Mengurangi kaki bengkak', 'Mengurangi stress kehamilan', 'Meningkatkan sirkulasi', 'Meredakan nyeri sendi', 'Meningkatkan kualitas tidur'],
  },
  'couple-massage': {
    description: 'Couple massage adalah pengalaman relaksasi yang dapat dinikmati bersama pasangan. Dua terapis akan memberikan pijat secara bersamaan, menciptakan momen intim dan rileks yang sempurna. Pilihan ideal untuk anniversary, birthday, atau quality time bersama.',
    benefits: ['Pengalaman bersama pasangan', 'Meningkatkan bonding', 'Relaksasi berdua', 'Hadiah romantis', 'Mengurangi stress bersama', 'Momen berkualitas'],
  },
  'hotel-massage': {
    description: 'Hotel massage service kami hadir langsung ke kamar hotel Anda di seluruh area Bandung. Nikmati pijat profesional tanpa perlu keluar dari kenyamanan hotel. Cocok untuk wisatawan, business traveler, atau yang sedang staycation.',
    benefits: ['Layanan ke kamar hotel', 'Tidak perlu keluar hotel', 'Cocok untuk traveler', 'Peralatan lengkap dibawa', 'Berbagai pilihan massage', 'Terapis profesional'],
  },
  'office-massage': {
    description: 'Office massage dirancang untuk meningkatkan kesejahteraan karyawan di tempat kerja. Terapis kami akan datang ke kantor dengan chair massage atau table massage. Program corporate wellness yang efektif untuk meningkatkan produktivitas dan mengurangi absensi.',
    benefits: ['Meningkatkan produktivitas', 'Mengurangi stress kerja', 'Corporate wellness', 'Fleksibel jadwal', 'Chair massage tersedia', 'Paket group discount'],
  },
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return generateSEO({
    title: `${service.name} - Pijat Panggilan Bandung`,
    description: `Layanan ${service.name} profesional di Bandung. ${service.shortDesc} Mulai ${formatPrice(service.price)}. Booking sekarang!`,
    keywords: [`${service.name.toLowerCase()} bandung`, `pijat ${service.name.toLowerCase()}`, `${service.slug} panggilan`],
    url: `https://queenmassage.id/layanan/${slug}`,
  })
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const details = serviceDetails[slug] || {
    description: service.shortDesc,
    benefits: ['Terapis profesional', 'Peralatan lengkap', 'Gratis transport'],
  }

  const schema = generateServiceSchema({
    name: service.name,
    description: details.description,
    price: service.price,
    duration: service.duration,
  })

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://queenmassage.id' },
    { name: 'Layanan', url: 'https://queenmassage.id/layanan' },
    { name: service.name, url: `https://queenmassage.id/layanan/${slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
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
            <Link href="/layanan" className="hover:text-primary">Layanan</Link>
            <span>/</span>
            <span className="text-foreground">{service.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Badge variant="gold" className="mb-4">Layanan Premium</Badge>
                <h1 className="font-heading text-3xl font-bold sm:text-4xl mb-4">
                  {service.name}
                </h1>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {details.description}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-heading text-xl font-bold mb-4">
                  Manfaat {service.name}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500 shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Who is it for */}
              <div>
                <h2 className="font-heading text-xl font-bold mb-4">
                  Cocok Untuk Siapa?
                </h2>
                <p className="text-muted-foreground">
                  Layanan {service.name} cocok untuk semua kalangan usia dewasa. 
                  Baik Anda seorang pekerja kantoran yang lelah, atlet yang butuh recovery, 
                  atau siapapun yang ingin relaksasi setelah aktivitas padat. 
                  Terapis kami akan menyesuaikan teknik dan tekanan sesuai kondisi tubuh Anda.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  {service.recommended && (
                    <div className="text-center">
                      <span className="inline-flex items-center rounded-full bg-gold-500/10 border border-gold-500/30 px-3 py-1 text-xs font-semibold text-gold-500">
                        ⭐ Layanan Rekomendasi
                      </span>
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Mulai dari</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatPrice(service.price)}
                    </p>
                    <div className="flex items-center justify-center gap-1 mt-1 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{service.duration} menit</span>
                    </div>
                  </div>

                  {/* Price options per duration */}
                  {service.priceOptions && service.priceOptions.length > 1 && (
                    <div className="space-y-2 pt-2 border-t">
                      <p className="text-xs font-medium text-muted-foreground">Pilihan Durasi:</p>
                      {service.priceOptions.map((opt: { duration: number; price: number }) => (
                        <div key={opt.duration} className="flex items-center justify-between text-sm rounded-lg bg-muted/50 px-3 py-2">
                          <span>{opt.duration} menit</span>
                          <span className="font-semibold text-primary">{formatPrice(opt.price)}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-3">
                    <Button variant="gold" className="w-full" size="lg" asChild>
                      <Link href="/booking">
                        Booking Sekarang
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full" size="lg" asChild>
                      <a
                        href={getWhatsAppUrl(`Halo, saya ingin booking ${service.name}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Phone className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div className="pt-4 border-t space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Terapis Bersertifikat</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Gratis Transport</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Garansi Kepuasan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Peralatan Lengkap</span>
                    </div>
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
