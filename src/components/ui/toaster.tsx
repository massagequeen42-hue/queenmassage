'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: 'default' | 'success' | 'error'
}

let toastListeners: ((toast: Toast) => void)[] = []

export function toast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).slice(2)
  toastListeners.forEach((listener) => listener({ id, title, description, variant }))
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([])

  useEffect(() => {
    const listener = (newToast: Toast) => {
      setToasts((prev) => [...prev, newToast])
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id))
      }, 5000)
    }
    toastListeners.push(listener)
    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={cn(
            'animate-in slide-in-from-right-full rounded-lg border p-4 shadow-lg backdrop-blur-sm min-w-[300px]',
            t.variant === 'success' && 'border-green-500/30 bg-green-500/10',
            t.variant === 'error' && 'border-red-500/30 bg-red-500/10',
            t.variant === 'default' && 'border-border bg-card'
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium text-sm">{t.title}</p>
              {t.description && (
                <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
              )}
            </div>
            <button
              onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
