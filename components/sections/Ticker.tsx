'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

const repeated = [...content.ticker, ...content.ticker, ...content.ticker]

export default function Ticker() {
  return (
    <section className="section-divider overflow-hidden py-5">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-8">
            <span className="mono text-xs uppercase tracking-[0.22em] text-muted">{item}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-dot/40" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
