import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { SectionHeading } from '@/components/ui/section-heading'
import { ContactForm } from '@/components/contact/contact-form'
import { generateSEO } from '@/lib/seo'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = generateSEO({
  title: 'Kontak Kami',
  description: 'Hubungi QueenMassage untuk booking pijat panggilan atau pertanyaan. WhatsApp, telepon, email, atau kunjungi kami. Respon cepat dalam 5 menit.',
  keywords: ['kontak queen massage', 'hubungi pijat bandung', 'whatsapp massage bandung'],
  url: 'https://queenmassage.id/kontak',
})

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Kontak"
          title="Hubungi Kami"
          subtitle="Ada pertanyaan atau ingin booking? Kami siap membantu Anda."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-lg">Informasi Kontak</h3>
                <div className="space-y-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <p className="font-medium text-sm">WhatsApp</p>
                      <p className="text-sm text-muted-foreground">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Telepon</p>
                      <p className="text-sm text-muted-foreground">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-sm text-muted-foreground">{SITE_CONFIG.email}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Alamat</p>
                      <p className="text-sm text-muted-foreground">{SITE_CONFIG.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-sm">Jam Operasional</p>
                      <p className="text-sm text-muted-foreground">Setiap Hari, {SITE_CONFIG.openingHours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Social Media</h3>
                <div className="flex gap-3">
                  <a
                    href={SITE_CONFIG.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE_CONFIG.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Kirim Pesan</h3>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
