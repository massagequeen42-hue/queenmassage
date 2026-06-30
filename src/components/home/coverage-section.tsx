'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { COVERAGE_AREAS } from '@/lib/constants'

export function CoverageSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Area Layanan"
          title="Melayani Seluruh Bandung"
          subtitle="Kami hadir di berbagai lokasi strategis di Bandung dan sekitarnya. Cek area terdekat Anda."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-4xl mx-auto">
          {COVERAGE_AREAS.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/area/${area.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 text-center hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium group-hover:text-primary transition-colors">
                  {area.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="luxury" asChild>
            <Link href="/area">
              Lihat Semua Area Layanan
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
