import { Metadata } from 'next'
import { BookingForm } from '@/components/booking/booking-form'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Booking Pijat Panggilan',
  description: 'Booking pijat panggilan profesional di Bandung. Pilih layanan, tanggal, waktu, dan lokasi. Terapis datang ke rumah, hotel, atau kantor Anda.',
  keywords: ['booking pijat bandung', 'pesan pijat panggilan', 'reservasi massage bandung'],
  url: 'https://queenmassage.id/booking',
})

export default function BookingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-heading text-3xl font-bold sm:text-4xl">
              Booking Pijat Panggilan
            </h1>
            <p className="mt-3 text-muted-foreground">
              Isi form di bawah untuk memesan layanan pijat. Kami akan mengkonfirmasi via WhatsApp.
            </p>
          </div>
          <BookingForm />
        </div>
      </div>
    </div>
  )
}
