'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Process() {
  return (
    <section id="process" className="section-divider py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <h2 className="text-display tracking-tighter">{content.process.title}</h2>
        <p className="mt-3 text-sm text-muted">{content.process.subtitle}</p>

        <div className="mt-12 border-t border-line">
          {content.process.steps.map((step) => (
            <motion.article
              key={step.number}
              className="group section-divider grid grid-cols-[auto_1fr] gap-6 py-8 lg:grid-cols-[auto_auto_1fr_auto] lg:items-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 10 }}
            >
              <span className="mono text-xs tracking-[0.2em] text-muted">{step.number}</span>
              <span className="relative h-8 w-8 rounded-full border border-line">
                <motion.span
                  className="absolute inset-0 rounded-full bg-ink"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.35 }}
                />
              </span>
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-2xl tracking-tight">{step.title}</h3>
                  <motion.span
                    className="mono rounded-full border border-line px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted"
                    initial={{ opacity: 0, y: 8 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    {step.tag}
                  </motion.span>
                </div>
                <p className="max-w-xl text-sm text-muted">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
