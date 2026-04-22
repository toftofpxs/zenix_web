'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/data/content'

export default function Process() {
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="process" ref={ref} className="w-full py-24 bg-white">
      <div className="px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{content.process.title}</h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {content.process.steps.map((step, i) => (
            <motion.div key={i} className="relative" variants={itemVariants}>
              {/* Number + Title + Description */}
              <div className="flex flex-col items-start">
                <div className="text-6xl font-bold text-secondary opacity-20 mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-black mb-3">{step.title}</h3>
                <p className="text-secondary leading-generous">{step.description}</p>
              </div>

              {/* Connector line on desktop */}
              {i < content.process.steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 w-12 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
