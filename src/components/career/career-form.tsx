'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/components/ui/toaster'
import { careerSchema, type CareerFormData } from '@/lib/validations'

export function CareerForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CareerFormData>({
    resolver: zodResolver(careerSchema),
  })

  const onSubmit = async (data: CareerFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Lamaran Terkirim!',
          description: 'Tim HR kami akan menghubungi Anda.',
          variant: 'success',
        })
        reset()
      } else {
        toast({ title: 'Gagal mengirim lamaran.', variant: 'error' })
      }
    } catch {
      toast({ title: 'Error koneksi.', variant: 'error' })
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input placeholder="Nama Lengkap" {...register('name')} className={errors.name ? 'border-red-500' : ''} />
          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input placeholder="No. Telepon" {...register('phone')} className={errors.phone ? 'border-red-500' : ''} />
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
        </div>
      </div>
      <Input type="email" placeholder="Email" {...register('email')} className={errors.email ? 'border-red-500' : ''} />
      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      <div>
        <select
          {...register('position')}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        >
          <option value="">Pilih Posisi</option>
          <option value="terapis_wanita">Terapis Wanita</option>
          <option value="terapis_pria">Terapis Pria</option>
          <option value="admin">Admin</option>
          <option value="marketing">Marketing</option>
        </select>
        {errors.position && <p className="text-xs text-red-500 mt-1">{errors.position.message}</p>}
      </div>
      <Input placeholder="Pengalaman (e.g. 2 tahun di spa X)" {...register('experience')} />
      <Textarea placeholder="Ceritakan tentang diri Anda..." rows={4} {...register('message')} />
      <Button type="submit" variant="gold" className="w-full" disabled={isSubmitting}>
        <Send className="h-4 w-4" />
        {isSubmitting ? 'Mengirim...' : 'Kirim Lamaran'}
      </Button>
    </form>
  )
}
