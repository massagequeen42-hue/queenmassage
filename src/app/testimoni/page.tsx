import { Metadata } from 'next'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Testimoni Pelanggan',
  description: 'Baca testimoni pelanggan QueenMassage yang sudah merasakan layanan pijat panggilan profesional kami di Bandung. Rating 4.9/5 dari 500+ pelanggan.',
  keywords: ['testimoni pijat bandung', 'review massage bandung', 'ulasan queen massage'],
  url: 'https://queenmassage.id/testimoni',
})

export default function TestimoniPage() {
  return (
    <div className="pt-24 pb-16">
      <TestimonialsSection />
    </div>
  )
}
