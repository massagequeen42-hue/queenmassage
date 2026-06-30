'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const testimonials = [
  {
    name: 'Sarah Wijaya',
    role: 'Karyawan Swasta',
    content: 'Pijat tradisionalnya luar biasa! Setelah seharian kerja, badan langsung terasa ringan. Terapisnya ramah dan profesional. Sangat recommended!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Atlet',
    content: 'Sport massage di QueenMassage sangat membantu recovery setelah latihan berat. Terapisnya paham betul titik-titik otot yang tegang.',
    rating: 5,
  },
  {
    name: 'Rina Agustina',
    role: 'Ibu Hamil',
    content: 'Prenatal massage-nya sangat nyaman dan aman. Terapisnya sangat hati-hati dan profesional. Rasa pegal di punggung langsung hilang.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Tamu Hotel',
    content: 'Saya order hotel massage saat staycation di Bandung. Terapisnya datang tepat waktu dan sangat profesional. Pengalaman yang menyenangkan!',
    rating: 5,
  },
  {
    name: 'Ibu Siti',
    role: 'Pensiunan',
    content: 'Sudah langganan QueenMassage lebih dari 6 bulan. Reflexology-nya sangat bagus untuk kesehatan kaki saya. Pelayanan selalu memuaskan.',
    rating: 5,
  },
  {
    name: 'Andi Pratama',
    role: 'Manajer',
    content: 'Pesan office massage untuk tim kantor. Semua karyawan sangat puas. Produktivitas kerja meningkat setelahnya. Worth it banget!',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Testimoni"
          title="Pelanggan Kami Puas"
          subtitle="Lihat apa kata mereka yang sudah merasakan layanan pijat profesional QueenMassage."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border bg-card p-6 card-hover"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
