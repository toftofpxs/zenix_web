'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/data/content'

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section ref={ref} className="w-full py-20 bg-surface">
      <div className="px-6 lg:px-12">
        <motion.div
          className="flex items-center justify-between gap-8 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {content.stats.map((stat, i) => (
            <motion.div
              key={i}
              className={`flex-1 text-center ${i !== content.stats.length - 1 ? 'border-r border-border' : ''}`}
              variants={itemVariants}
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-black mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-secondary text-sm lg:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
