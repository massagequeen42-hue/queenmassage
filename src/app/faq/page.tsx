import { Metadata } from 'next'
import { FAQSection } from '@/components/home/faq-section'
import { generateSEO, generateFAQSchema } from '@/lib/seo'
import { FAQ_DATA } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'FAQ - Pertanyaan yang Sering Diajukan',
  description: 'Jawaban untuk pertanyaan umum tentang layanan pijat panggilan QueenMassage Bandung. Booking, harga, area layanan, terapis, dan informasi lainnya.',
  keywords: ['faq pijat panggilan', 'pertanyaan massage bandung', 'info pijat rumah'],
  url: 'https://queenmassage.id/faq',
})

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(FAQ_DATA)),
        }}
      />
      <div className="pt-24 pb-16">
        <FAQSection />
      </div>
    </>
  )
}
