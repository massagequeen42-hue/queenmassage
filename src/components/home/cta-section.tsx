'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getWhatsAppUrl } from '@/lib/utils'

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gold-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Siap Merasakan
            <span className="block text-gold-400 mt-2">Relaksasi Premium?</span>
          </h2>
          <p className="mt-4 text-lg text-purple-200 max-w-xl mx-auto">
            Jangan tunda lagi! Booking sekarang dan nikmati pijat profesional di kenyamanan rumah Anda.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link href="/booking">
                <Calendar className="h-5 w-5" />
                Booking Sekarang
              </Link>
            </Button>
            <Button
              size="xl"
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20"
              asChild
            >
              <a
                href={getWhatsAppUrl('Halo QueenMassage, saya ingin booking pijat panggilan.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                WhatsApp Kami
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
