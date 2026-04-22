'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/data/content'

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="portfolio" ref={ref} className="w-full py-24 bg-surface">
      <div className="px-6 lg:px-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-20 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">{content.portfolio.title}</h2>
          <p className="text-secondary text-lg">{content.portfolio.subtitle}</p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {content.portfolio.projects.map((project, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white border border-border rounded-sharp hover:border-accent transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <p className="text-xs text-accent font-medium mb-3 uppercase tracking-wide">{project.category}</p>
              <h3 className="text-lg font-bold text-black mb-3">{project.name}</h3>
              <p className="text-accent font-semibold text-sm">{project.result}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
