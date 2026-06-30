import { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/section-heading'
import { generateSEO } from '@/lib/seo'

export const metadata: Metadata = generateSEO({
  title: 'Galeri',
  description: 'Galeri foto layanan pijat QueenMassage Bandung. Lihat suasana spa, terapis profesional, dan fasilitas kami.',
  url: 'https://queenmassage.id/galeri',
})

const galleryItems = [
  { title: 'Suasana Terapi', category: 'Spa' },
  { title: 'Aromatherapy Setup', category: 'Layanan' },
  { title: 'Terapis Profesional', category: 'Tim' },
  { title: 'Essential Oils', category: 'Produk' },
  { title: 'Hot Stone Therapy', category: 'Layanan' },
  { title: 'Relaxation Space', category: 'Spa' },
  { title: 'Traditional Massage', category: 'Layanan' },
  { title: 'Reflexology Session', category: 'Layanan' },
  { title: 'Team Photo', category: 'Tim' },
]

export default function GalleryPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Galeri"
          title="Galeri QueenMassage"
          subtitle="Intip suasana dan layanan profesional kami."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">💆</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
