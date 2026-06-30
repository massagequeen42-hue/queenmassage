'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Calendar, Clock, User, MapPin, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/toaster'
import { bookingSchema, type BookingFormData } from '@/lib/validations'
import { SERVICES, TIME_SLOTS } from '@/lib/constants'
import { formatPrice, getWhatsAppUrl } from '@/lib/utils'
import { cn } from '@/lib/utils'

export function BookingForm() {
  const [selectedService, setSelectedService] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      duration: 60,
      therapistGender: 'no_preference',
      totalPrice: 0,
    },
  })

  const watchService = watch('serviceId')
  const watchDuration = watch('duration')

  const selectedServiceData = SERVICES.find((s) => s.slug === watchService)
  const calculatedPrice = selectedServiceData
    ? selectedServiceData.price * (watchDuration / 60)
    : 0

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    try {
      // Submit to API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, totalPrice: calculatedPrice }),
      })

      if (response.ok) {
        toast({
          title: 'Booking Berhasil!',
          description: 'Tim kami akan menghubungi Anda via WhatsApp untuk konfirmasi.',
          variant: 'success',
        })

        // Redirect to WhatsApp for confirmation
        const service = SERVICES.find((s) => s.slug === data.serviceId)
        const message = `Halo QueenMassage, saya ingin booking:\n\nNama: ${data.customerName}\nLayanan: ${service?.name}\nTanggal: ${data.date}\nWaktu: ${data.time}\nDurasi: ${data.duration} menit\nAlamat: ${data.address}\nTotal: ${formatPrice(calculatedPrice)}`
        window.open(getWhatsAppUrl(message), '_blank')
      } else {
        toast({
          title: 'Gagal!',
          description: 'Terjadi kesalahan. Silakan coba lagi.',
          variant: 'error',
        })
      }
    } catch {
      toast({
        title: 'Error!',
        description: 'Tidak dapat terhubung ke server.',
        variant: 'error',
      })
    }
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Personal Info */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Informasi Pribadi
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Nama Lengkap *</label>
              <Input
                placeholder="Nama Anda"
                {...register('customerName')}
                className={errors.customerName ? 'border-red-500' : ''}
              />
              {errors.customerName && (
                <p className="text-xs text-red-500 mt-1">{errors.customerName.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">No. WhatsApp *</label>
              <Input
                placeholder="08xxxxxxxxxx"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Email (Opsional)</label>
            <Input
              type="email"
              placeholder="email@contoh.com"
              {...register('email')}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              Alamat Lengkap *
            </label>
            <Textarea
              placeholder="Nama jalan, nomor rumah, RT/RW, kelurahan, kecamatan..."
              {...register('address')}
              className={errors.address ? 'border-red-500' : ''}
            />
            {errors.address && (
              <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Service Selection */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <MessageSquare className="h-4 w-4 text-primary" />
            Pilih Layanan
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => {
                  setValue('serviceId', service.slug)
                  setSelectedService(service.slug)
                }}
                className={cn(
                  'rounded-lg border p-3 text-left text-xs transition-all',
                  watchService === service.slug
                    ? 'border-primary bg-primary/5 ring-1 ring-primary'
                    : 'hover:border-primary/50'
                )}
              >
                <span className="font-medium block truncate">{service.name}</span>
                <span className="text-muted-foreground">{formatPrice(service.price)}</span>
              </button>
            ))}
          </div>
          {errors.serviceId && (
            <p className="text-xs text-red-500">{errors.serviceId.message}</p>
          )}
        </CardContent>
      </Card>

      {/* Schedule */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            Jadwal
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Tanggal *</label>
              <Input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                {...register('date')}
                className={errors.date ? 'border-red-500' : ''}
              />
              {errors.date && (
                <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Waktu *</label>
              <select
                {...register('time')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Pilih Waktu</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-xs text-red-500 mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                Durasi
              </label>
              <select
                {...register('duration', { valueAsNumber: true })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value={60}>60 Menit</option>
                <option value={90}>90 Menit</option>
                <option value={120}>120 Menit</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Preferensi Terapis</label>
              <select
                {...register('therapistGender')}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="no_preference">Tidak Ada Preferensi</option>
                <option value="female">Terapis Wanita</option>
                <option value="male">Terapis Pria</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Catatan Khusus (Opsional)</label>
            <Textarea
              placeholder="Area yang ingin difokuskan, alergi, kondisi kesehatan khusus..."
              {...register('notes')}
            />
          </div>
        </CardContent>
      </Card>

      {/* Price Summary */}
      {selectedServiceData && (
        <Card className="border-primary/30 bg-primary/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Harga</p>
                <p className="text-2xl font-bold text-primary">
                  {formatPrice(calculatedPrice)}
                </p>
              </div>
              <Badge variant="gold">
                {selectedServiceData.name} • {watchDuration} menit
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit */}
      <Button
        type="submit"
        variant="gold"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        <Phone className="h-5 w-5" />
        {isSubmitting ? 'Memproses...' : 'Booking & Konfirmasi WhatsApp'}
      </Button>
    </form>
  )
}
