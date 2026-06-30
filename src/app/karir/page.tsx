import { Metadata } from 'next'
import { Briefcase, Heart, Clock, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { CareerForm } from '@/components/career/career-form'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Karir - Lowongan Terapis Massage',
  description: 'Bergabung dengan QueenMassage sebagai terapis pijat profesional di Bandung. Gaji menarik, jadwal fleksibel, pelatihan gratis.',
  keywords: ['lowongan terapis bandung', 'karir massage', 'kerja pijat bandung'],
  url: 'https://queenmassage.id/karir',
})

const benefits = [
  { icon: DollarSign, title: 'Penghasilan Menarik', desc: 'Komisi hingga 70% per sesi' },
  { icon: Clock, title: 'Jadwal Fleksibel', desc: 'Atur jadwal kerja sendiri' },
  { icon: Heart, title: 'Pelatihan Gratis', desc: 'Training dan sertifikasi ditanggung' },
  { icon: Briefcase, title: 'Karir Berkembang', desc: 'Jenjang karir yang jelas' },
]

export default function CareerPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Karir"
          title="Bergabung Bersama Kami"
          subtitle="Jadilah bagian dari tim terapis profesional terbaik di Bandung."
        />

        {/* Benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {benefits.map((b) => (
            <Card key={b.title}>
              <CardContent className="p-4 text-center">
                <b.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{b.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Form Lamaran</h3>
              <CareerForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
