import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Terms of Service',
  description: 'Syarat dan ketentuan layanan QueenMassage. Baca sebelum menggunakan layanan pijat panggilan kami.',
  url: 'https://queenmassage.id/terms',
  noIndex: true,
})

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Terms of Service</h1>
          <p><em>Terakhir diperbarui: Januari 2025</em></p>

          <h2>1. Ketentuan Umum</h2>
          <p>
            Dengan menggunakan layanan QueenMassage, Anda menyetujui semua syarat dan 
            ketentuan yang tercantum di sini.
          </p>

          <h2>2. Layanan</h2>
          <p>
            QueenMassage menyediakan layanan pijat panggilan profesional di area Bandung 
            dan sekitarnya. Layanan diberikan oleh terapis independen yang bekerja sama dengan kami.
          </p>

          <h2>3. Booking & Pembatalan</h2>
          <ul>
            <li>Booking dapat dilakukan melalui website, WhatsApp, atau telepon</li>
            <li>Pembatalan minimal 2 jam sebelum jadwal yang ditentukan</li>
            <li>Pembatalan mendadak dapat dikenakan biaya 50% dari harga layanan</li>
          </ul>

          <h2>4. Pembayaran</h2>
          <ul>
            <li>Pembayaran dilakukan setelah layanan selesai</li>
            <li>Metode: Cash, Transfer Bank, GoPay, OVO, Dana</li>
            <li>Harga sesuai yang tercantum di website/konfirmasi booking</li>
          </ul>

          <h2>5. Tanggung Jawab</h2>
          <p>
            Pelanggan wajib memberikan informasi yang benar mengenai kondisi kesehatan. 
            QueenMassage tidak bertanggung jawab atas komplikasi akibat informasi yang tidak akurat.
          </p>

          <h2>6. Garansi</h2>
          <p>
            Jika Anda tidak puas dengan layanan, laporkan dalam 24 jam. Kami akan 
            mengirimkan terapis pengganti atau memberikan refund sesuai kebijakan.
          </p>

          <h2>7. Perubahan Ketentuan</h2>
          <p>
            Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan berlaku 
            sejak dipublikasikan di website.
          </p>
        </div>
      </div>
    </div>
  )
}
