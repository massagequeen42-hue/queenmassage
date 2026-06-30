import Link from 'next/link'
import { Crown, MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import { SITE_CONFIG, SERVICES, COVERAGE_AREAS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t bg-card/50">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Crown className="h-8 w-8 text-gold-500" />
              <span className="font-heading text-xl font-bold">
                <span className="text-gold-500">Queen</span>Massage
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Layanan pijat panggilan profesional terbaik di Bandung. 
              Terapis bersertifikat, harga terjangkau, kepuasan terjamin.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-accent hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Layanan Kami</h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Areas */}
          <div>
            <h3 className="font-semibold mb-4">Area Layanan</h3>
            <ul className="space-y-2">
              {COVERAGE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/area/${area.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Pijat Panggilan {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-primary transition-colors">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Setiap Hari, {SITE_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
