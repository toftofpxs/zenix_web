'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/data/content'

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" ref={ref} className="w-full py-24 bg-white">
      <div className="px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{content.services.title}</h2>
          <p className="text-secondary text-lg">{content.services.subtitle}</p>
        </motion.div>

        {/* Services list */}
        <motion.div
          className="space-y-0"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {content.services.items.map((service, i) => (
            <motion.div
              key={i}
              className="py-8 border-b border-border hover:translate-x-2 transition-transform duration-300"
              variants={itemVariants}
              whileHover={{ translateX: 8 }}
            >
              <div className="flex items-start gap-8">
                <div className="text-3xl font-bold text-secondary flex-shrink-0">{service.number}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-accent">{service.title}</h3>
                  <p className="text-secondary leading-generous">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
