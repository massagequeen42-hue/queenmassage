'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Badge } from './badge'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {badge && (
        <Badge variant="gold" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
