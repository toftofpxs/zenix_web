'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="px-6 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Logo + Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-white">Zenix</span>
                <span className="text-accent ml-2">Web</span>
              </h3>
              <p className="text-gray-400 text-sm leading-generous">{content.footer.tagline}</p>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                {content.footer.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="font-semibold text-white mb-4">Commencer</h4>
              <a
                href="#contact"
                className="inline-block bg-accent text-black px-6 py-2.5 rounded-xl font-medium hover:bg-white transition-all hover:shadow-lg shadow-md hover:scale-105 active:scale-95 cursor-pointer"
              >
                Devis gratuit
              </a>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8" />

          {/* Copyright */}
          <motion.p
            className="text-center text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {content.footer.copyright}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
