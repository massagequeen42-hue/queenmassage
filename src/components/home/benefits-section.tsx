'use client'

import { motion } from 'framer-motion'
import { Clock, Shield, Award, Heart, Truck, CreditCard } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const benefits = [
  {
    icon: Clock,
    title: 'Tersedia 08:00 - 22:00',
    description: 'Layanan pijat tersedia setiap hari, termasuk hari libur dan weekend.',
  },
  {
    icon: Shield,
    title: 'Terapis Bersertifikat',
    description: 'Semua terapis kami telah melalui pelatihan dan sertifikasi profesional.',
  },
  {
    icon: Award,
    title: 'Garansi Kepuasan',
    description: 'Tidak puas? Kami kirim terapis pengganti atau uang kembali.',
  },
  {
    icon: Heart,
    title: 'Pijat di Rumah',
    description: 'Nikmati relaksasi tanpa perlu keluar rumah. Kami datang ke lokasi Anda.',
  },
  {
    icon: Truck,
    title: 'Gratis Transport',
    description: 'Tidak ada biaya tambahan transport untuk area coverage kami.',
  },
  {
    icon: CreditCard,
    title: 'Pembayaran Fleksibel',
    description: 'Terima cash, transfer bank, dan e-wallet (GoPay, OVO, Dana).',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Kenapa QueenMassage?"
          title="Layanan Pijat Terbaik di Bandung"
          subtitle="Kami berkomitmen memberikan pengalaman pijat premium dengan standar tertinggi untuk kenyamanan Anda."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border bg-card p-6 card-hover"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
