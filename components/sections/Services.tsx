'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Services() {
  return (
    <section id="services" className="section-divider py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-12 px-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-16 lg:px-12">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="mono mb-4 text-xs uppercase tracking-[0.24em] text-muted">{content.services.number}</p>
          <h2 className="text-display tracking-tighter">{content.services.title}</h2>
          <span className="mt-8 inline-flex h-24 w-24 items-center justify-center rounded-full border border-line bg-card text-xl">
            {content.services.badge}
          </span>
        </div>

        <motion.div
          className="space-y-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {content.services.items.map((service) => (
            <motion.article
              key={service.number}
              className="group hover-lift section-divider relative grid grid-cols-[auto_1fr_auto] items-start gap-5 py-8"
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ backgroundColor: 'var(--card)' }}
            >
              <p className="mono pt-1 text-xs tracking-[0.22em] text-muted">{service.number}</p>
              <div>
                <h3 className="mb-2 text-2xl tracking-tight">{service.title}</h3>
                <p className="max-w-xl text-sm leading-relaxed text-muted">{service.description}</p>
              </div>
              <motion.span
                className="pt-2 text-xl"
                initial={{ opacity: 0, x: -8 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                ↗
              </motion.span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
