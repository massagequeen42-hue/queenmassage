'use client'

import { motion } from 'framer-motion'
import { Calendar, UserCheck, Clock, Smile } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const steps = [
  {
    icon: Calendar,
    step: '01',
    title: 'Pilih & Booking',
    description: 'Pilih layanan massage, tanggal, waktu, dan lokasi yang diinginkan melalui website atau WhatsApp.',
  },
  {
    icon: UserCheck,
    step: '02',
    title: 'Konfirmasi',
    description: 'Tim kami akan mengkonfirmasi booking dan menugaskan terapis sesuai preferensi Anda.',
  },
  {
    icon: Clock,
    step: '03',
    title: 'Terapis Datang',
    description: 'Terapis profesional kami akan datang tepat waktu ke lokasi Anda dengan peralatan lengkap.',
  },
  {
    icon: Smile,
    step: '04',
    title: 'Nikmati Relaksasi',
    description: 'Nikmati sesi pijat premium dan rasakan tubuh Anda kembali segar dan bugar.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Cara Kerja"
          title="Mudah dan Cepat"
          subtitle="Hanya 4 langkah mudah untuk menikmati pijat profesional di rumah Anda."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="relative inline-flex mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold-500 text-xs font-bold text-black">
                  {step.step}
                </span>
              </div>

              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
