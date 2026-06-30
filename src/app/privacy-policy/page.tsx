import { Metadata } from 'next'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Kebijakan privasi QueenMassage. Pelajari bagaimana kami melindungi data dan informasi pribadi Anda.',
  url: 'https://queenmassage.id/privacy-policy',
  noIndex: true,
})

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p><em>Terakhir diperbarui: Januari 2025</em></p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara langsung, termasuk:
          </p>
          <ul>
            <li>Nama lengkap</li>
            <li>Nomor telepon / WhatsApp</li>
            <li>Alamat email</li>
            <li>Alamat rumah/lokasi untuk layanan</li>
            <li>Preferensi layanan</li>
          </ul>

          <h2>2. Penggunaan Informasi</h2>
          <p>Informasi Anda digunakan untuk:</p>
          <ul>
            <li>Memproses dan mengkonfirmasi booking</li>
            <li>Mengirimkan terapis ke lokasi Anda</li>
            <li>Komunikasi terkait layanan</li>
            <li>Meningkatkan kualitas layanan</li>
          </ul>

          <h2>3. Keamanan Data</h2>
          <p>
            Kami menggunakan langkah-langkah keamanan yang wajar untuk melindungi informasi 
            pribadi Anda dari akses, pengungkapan, atau penghancuran yang tidak sah.
          </p>

          <h2>4. Berbagi Informasi</h2>
          <p>
            Kami tidak menjual atau membagikan informasi pribadi Anda kepada pihak ketiga 
            kecuali diperlukan untuk memberikan layanan atau diwajibkan oleh hukum.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Website kami menggunakan cookies untuk meningkatkan pengalaman browsing dan 
            analitik. Anda dapat menonaktifkan cookies melalui pengaturan browser.
          </p>

          <h2>6. Hak Anda</h2>
          <p>Anda memiliki hak untuk:</p>
          <ul>
            <li>Mengakses data pribadi Anda</li>
            <li>Meminta koreksi data yang tidak akurat</li>
            <li>Meminta penghapusan data</li>
            <li>Menarik persetujuan</li>
          </ul>

          <h2>7. Hubungi Kami</h2>
          <p>
            Untuk pertanyaan tentang kebijakan privasi ini, hubungi kami di{' '}
            <a href="mailto:info@queenmassage.id">info@queenmassage.id</a>
          </p>
        </div>
      </div>
    </div>
  )
}
