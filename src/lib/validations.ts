import { z } from 'zod'

export const bookingSchema = z.object({
  customerName: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  phone: z.string().min(10, 'Nomor telepon tidak valid').max(15),
  email: z.string().email('Email tidak valid').optional().or(z.literal('')),
  address: z.string().min(10, 'Alamat minimal 10 karakter').max(500),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  serviceId: z.string().min(1, 'Pilih layanan'),
  date: z.string().min(1, 'Pilih tanggal'),
  time: z.string().min(1, 'Pilih waktu'),
  duration: z.number().min(60).max(180),
  therapistGender: z.enum(['male', 'female', 'no_preference']).optional(),
  notes: z.string().max(500).optional(),
  totalPrice: z.number().min(0),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon tidak valid').max(15).optional(),
  subject: z.string().min(5, 'Subject minimal 5 karakter').max(200),
  message: z.string().min(10, 'Pesan minimal 10 karakter').max(2000),
})

export const careerSchema = z.object({
  name: z.string().min(2, 'Nama minimal 2 karakter').max(100),
  email: z.string().email('Email tidak valid'),
  phone: z.string().min(10, 'Nomor telepon tidak valid').max(15),
  position: z.string().min(1, 'Pilih posisi'),
  experience: z.string().max(500).optional(),
  message: z.string().max(2000).optional(),
})

export const blogPostSchema = z.object({
  title: z.string().min(5).max(200),
  slug: z.string().min(3).max(200),
  excerpt: z.string().min(50).max(500),
  content: z.string().min(100),
  featuredImage: z.string().url().optional(),
  category: z.string().min(1),
  tags: z.array(z.string()),
  isPublished: z.boolean().default(false),
  metaTitle: z.string().max(70).optional(),
  metaDesc: z.string().max(160).optional(),
})

export const serviceSchema = z.object({
  name: z.string().min(3).max(100),
  slug: z.string().min(3).max(100),
  description: z.string().min(50),
  shortDesc: z.string().min(20).max(200),
  duration: z.number().min(30).max(240),
  price: z.number().min(0),
  priceMax: z.number().optional(),
  image: z.string().optional(),
  icon: z.string().optional(),
  benefits: z.array(z.string()),
  isActive: z.boolean().default(true),
  category: z.string().default('massage'),
})

export type BookingFormData = z.infer<typeof bookingSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type CareerFormData = z.infer<typeof careerSchema>
export type BlogPostFormData = z.infer<typeof blogPostSchema>
export type ServiceFormData = z.infer<typeof serviceSchema>
