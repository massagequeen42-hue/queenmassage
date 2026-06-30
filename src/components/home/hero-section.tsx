'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Calendar, Star, MapPin, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getWhatsAppUrl } from '@/lib/utils'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      container.style.setProperty('--mouse-x', `${x}%`)
      container.style.setProperty('--mouse-y', `${y}%`)
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-background to-purple-900/50" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Mouse Glow */}
      <div className="mouse-glow inset-0 z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gold" className="mb-6 px-4 py-1.5 text-sm">
              ✨ #1 Pijat Panggilan Profesional Bandung
            </Badge>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="block">Relaksasi Premium</span>
            <span className="block mt-2">
              <span className="gradient-text">Di Rumah Anda</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Nikmati layanan pijat profesional langsung di rumah, hotel, atau kantor Anda. 
            Terapis bersertifikat dengan pengalaman lebih dari 5 tahun melayani seluruh area Bandung.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="gold" size="xl" asChild>
              <Link href="/booking">
                <Calendar className="h-5 w-5" />
                Booking Sekarang
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a
                href={getWhatsAppUrl('Halo QueenMassage, saya ingin konsultasi layanan pijat.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-5 w-5" />
                Hubungi WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-gold-500" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold-500" />
              <span>Seluruh Bandung</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-gold-500" />
              <span>Terapis Bersertifikat</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold-500 font-bold">500+</span>
              <span>Pelanggan Puas</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
