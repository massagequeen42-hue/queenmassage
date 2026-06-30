'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Flower2, Heart, Dumbbell, Layers, Footprints, Sparkles, Baby, Users, Building, Briefcase, Star, Zap, Gem } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { SERVICES } from '@/lib/constants'
import { formatPrice } from '@/lib/utils'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flower2,
  Heart,
  Dumbbell,
  Layers,
  Footprints,
  Sparkles,
  Baby,
  Users,
  Building,
  Briefcase,
  Star,
  Zap,
  Gem,
}

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Layanan Kami"
          title="Pilihan Massage Profesional"
          subtitle="Berbagai pilihan layanan massage untuk kebutuhan Anda, dilakukan oleh terapis berpengalaman."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Flower2
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link
                  href={`/layanan/${service.slug}`}
                  className={`group block h-full rounded-2xl border p-6 card-hover ${
                    service.recommended ? 'border-gold-500/50 bg-gradient-to-br from-card to-gold-500/5' : 'bg-card'
                  }`}
                >
                  {service.recommended && (
                    <span className="inline-flex items-center rounded-full bg-gold-500/10 border border-gold-500/30 px-2 py-0.5 text-xs font-semibold text-gold-500 mb-3">
                      ⭐ Rekomendasi
                    </span>
                  )}
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary group-hover:from-primary group-hover:to-purple-700 group-hover:text-white transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {service.shortDesc}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary">
                        {formatPrice(service.price)}
                      </span>
                      <span className="text-xs text-muted-foreground">/{service.duration} min</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button variant="luxury" size="lg" asChild>
            <Link href="/layanan">
              Lihat Semua Layanan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
