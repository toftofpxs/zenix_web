'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-16 px-6 lg:grid-cols-[0.47fr_0.53fr] lg:px-12">
        <div>
          <h2 className="max-w-xl text-display leading-[1.02] tracking-tighter">{content.contact.title}</h2>
          <a href={`mailto:${content.contact.email}`} className="mt-9 inline-block text-2xl tracking-tight underline underline-offset-8">
            {content.contact.email}
          </a>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ink" style={{ animation: 'blink 1.3s ease-in-out infinite' }} />
            <span className="mono text-[11px] uppercase tracking-[0.16em] text-muted">{content.contact.availability}</span>
          </div>
        </div>

        <motion.form
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <label className="block">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">Nom</span>
            <input
              type="text"
              required
              className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-1 text-lg outline-none transition-colors focus:border-ink"
            />
          </label>

          <label className="block">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">Email</span>
            <input
              type="email"
              required
              className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-1 text-lg outline-none transition-colors focus:border-ink"
            />
          </label>

          <label className="block">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">Budget</span>
            <select className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-1 text-lg outline-none">
              {content.contact.form.budget.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">Delai</span>
            <select className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 pb-3 pt-1 text-lg outline-none">
              {content.contact.form.timeline.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mono text-[11px] uppercase tracking-[0.2em] text-muted">Message</span>
            <textarea
              required
              rows={4}
              className="mt-3 w-full resize-none border-0 border-b border-line bg-transparent px-0 pb-3 pt-1 text-lg outline-none"
            />
          </label>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-ink px-7 py-3 text-sm text-paper transition duration-300 hover:-translate-y-0.5"
          >
            Envoyer
            <span aria-hidden="true">↗</span>
          </button>
        </motion.form>
      </div>
    </section>
  )
}
