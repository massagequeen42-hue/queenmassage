'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SectionHeading } from '@/components/ui/section-heading'
import { formatPrice } from '@/lib/utils'

const pricingPlans = [
  {
    name: 'Basic',
    duration: '60 menit',
    price: 150000,
    features: [
      'Traditional Massage',
      'Terapis Bersertifikat',
      'Minyak Pijat Premium',
      'Gratis Transport',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    duration: '90 menit',
    price: 250000,
    features: [
      'Semua Jenis Massage',
      'Aromatherapy Oil',
      'Terapis Senior',
      'Gratis Transport',
      'Hot Stone Therapy',
      'Konsultasi Gratis',
    ],
    popular: true,
  },
  {
    name: 'Royal',
    duration: '120 menit',
    price: 350000,
    features: [
      'Full Body Treatment',
      'Premium Essential Oil',
      'Terapis Expert',
      'Gratis Transport',
      'Hot Stone + Scrub',
      'After Care Tips',
      'Diskon 10% Next Visit',
    ],
    popular: false,
  },
]

export function PricingPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Harga"
          title="Paket Massage Terjangkau"
          subtitle="Harga transparan tanpa biaya tersembunyi. Pilih paket yang sesuai kebutuhan Anda."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border p-6 ${
                plan.popular
                  ? 'border-primary bg-card shadow-xl shadow-primary/10 scale-105'
                  : 'bg-card'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                  Most Popular
                </Badge>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(plan.price)}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-green-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? 'gold' : 'outline'}
                className="w-full"
                asChild
              >
                <Link href="/booking">Booking Sekarang</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" asChild>
            <Link href="/harga">
              Lihat Detail Harga Lengkap
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
