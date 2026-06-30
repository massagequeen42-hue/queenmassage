import { Metadata } from 'next'
import { Award, Users, Heart, Shield, Clock, Star } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Tentang QueenMassage',
  description: 'QueenMassage adalah layanan pijat panggilan profesional terbaik di Bandung sejak 2020. Terapis bersertifikat, pengalaman premium, kepuasan terjamin.',
  url: 'https://queenmassage.id/tentang',
})

const stats = [
  { value: '500+', label: 'Pelanggan Puas' },
  { value: '20+', label: 'Terapis Profesional' },
  { value: '4.9', label: 'Rating' },
  { value: '10+', label: 'Area Layanan' },
]

const values = [
  { icon: Award, title: 'Profesionalisme', desc: 'Setiap terapis kami telah melalui seleksi ketat dan pelatihan intensif.' },
  { icon: Heart, title: 'Kepedulian', desc: 'Kami peduli dengan kesehatan dan kenyamanan setiap pelanggan.' },
  { icon: Shield, title: 'Keamanan', desc: 'Background check dan standar keamanan tertinggi untuk ketenangan Anda.' },
  { icon: Users, title: 'Keberagaman', desc: 'Melayani semua kalangan tanpa memandang latar belakang.' },
  { icon: Clock, title: 'Ketepatan Waktu', desc: 'Kami menghargai waktu Anda dengan selalu datang tepat jadwal.' },
  { icon: Star, title: 'Kualitas', desc: 'Standar layanan premium dengan harga yang terjangkau.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero */}
        <SectionHeading
          badge="Tentang Kami"
          title="Cerita QueenMassage"
          subtitle="Layanan pijat panggilan profesional terpercaya di Bandung sejak 2020"
        />

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p>
              <strong>QueenMassage</strong> lahir dari visi sederhana: memberikan layanan pijat berkualitas spa 
              langsung di kenyamanan rumah Anda. Kami percaya bahwa setiap orang berhak mendapatkan relaksasi 
              premium tanpa harus repot keluar rumah.
            </p>
            <p>
              Didirikan pada tahun 2020 di Bandung, kami memulai dengan hanya 3 terapis dan kini telah berkembang 
              menjadi tim yang terdiri dari lebih dari 20 terapis profesional bersertifikat yang melayani 
              seluruh area Bandung Raya.
            </p>
            <p>
              Setiap terapis QueenMassage telah melalui proses seleksi yang ketat, pelatihan intensif, 
              dan sertifikasi resmi. Kami juga melakukan background check menyeluruh untuk memastikan 
              keamanan dan kenyamanan pelanggan kami.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center rounded-2xl border bg-card p-6">
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <SectionHeading
          badge="Nilai Kami"
          title="Apa yang Kami Percaya"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div key={value.title} className="rounded-2xl border bg-card p-6">
              <value.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
