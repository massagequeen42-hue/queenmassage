'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/toaster'
import { contactSchema, type ContactFormData } from '@/lib/validations'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Pesan Terkirim!',
          description: 'Kami akan membalas pesan Anda segera.',
          variant: 'success',
        })
        reset()
      } else {
        toast({ title: 'Gagal mengirim pesan.', variant: 'error' })
      }
    } catch {
      toast({ title: 'Error koneksi.', variant: 'error' })
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Nama Lengkap"
          {...register('name')}
          className={errors.name ? 'border-red-500' : ''}
        />
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>
      <div>
        <Input
          type="email"
          placeholder="Email"
          {...register('email')}
          className={errors.email ? 'border-red-500' : ''}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          placeholder="No. Telepon (Opsional)"
          {...register('phone')}
        />
      </div>
      <div>
        <Input
          placeholder="Subject"
          {...register('subject')}
          className={errors.subject ? 'border-red-500' : ''}
        />
        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject.message}</p>}
      </div>
      <div>
        <Textarea
          placeholder="Pesan Anda..."
          rows={5}
          {...register('message')}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </Button>
    </form>
  )
}
