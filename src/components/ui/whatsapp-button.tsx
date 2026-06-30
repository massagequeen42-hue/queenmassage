'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { getWhatsAppUrl } from '@/lib/utils'

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 
    'Halo QueenMassage, saya ingin booking massage.'

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-16 right-0 mb-2 w-72 rounded-2xl glass-dark p-4 shadow-2xl"
          >
            <div className="mb-3">
              <h4 className="font-semibold text-sm">QueenMassage</h4>
              <p className="text-xs text-muted-foreground">
                Online • Biasanya membalas dalam 5 menit
              </p>
            </div>
            <div className="rounded-lg bg-muted/50 p-3 mb-3">
              <p className="text-sm">
                Halo! 👋 Ada yang bisa kami bantu? Booking pijat atau konsultasi gratis.
              </p>
            </div>
            <a
              href={getWhatsAppUrl(defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg bg-green-500 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-green-600 transition-colors"
            >
              Mulai Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:bg-green-600 transition-colors"
        aria-label="Chat WhatsApp"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
