'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { content } from '@/data/content'

export default function Portfolio() {
  const slides = content.portfolio.slides
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideWidth, setSlideWidth] = useState(0)

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth >= 1024 ? Math.min(940, window.innerWidth * 0.7) : window.innerWidth - 48
      setSlideWidth(width)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1))
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex((prev) => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [slides.length])

  const progress = useMemo(() => ((activeIndex + 1) / slides.length) * 100, [activeIndex, slides.length])

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0))
  const goNext = () => setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1))

  return (
    <section id="portfolio" className="section-divider py-20 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-8">
          <div>
            <h2 className="text-display tracking-tighter">{content.portfolio.title}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">{content.portfolio.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="h-11 w-11 rounded-full border border-line bg-card disabled:opacity-40"
              disabled={activeIndex === 0}
              aria-label="Projet precedent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="h-11 w-11 rounded-full border border-line bg-card disabled:opacity-40"
              disabled={activeIndex === slides.length - 1}
              aria-label="Projet suivant"
            >
              →
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={{ left: -(slides.length - 1) * (slideWidth + 24), right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -120) {
                goNext()
              }

              if (info.offset.x > 120) {
                goPrev()
              }
            }}
            animate={{ x: -activeIndex * (slideWidth + 24) }}
            transition={{ type: 'spring', stiffness: 120, damping: 28, mass: 0.8 }}
          >
            {slides.map((slide) => (
              <motion.article
                key={slide.id}
                className="group relative h-[480px] shrink-0 overflow-hidden rounded-[24px] border border-line bg-card p-8"
                style={{ width: slideWidth || 900 }}
                whileHover={{ scale: 0.99 }}
              >
                <p className="outline-word text-[140px] leading-none">{slide.outlineWord}</p>
                <motion.span
                  className="absolute bottom-7 left-7 inline-flex h-16 w-16 items-center justify-center rounded-full border border-line bg-paper text-xs uppercase tracking-[0.14em]"
                  whileHover={{ scale: 1.04 }}
                >
                  {slide.id}
                </motion.span>
                <motion.div
                  className="absolute inset-x-0 bottom-0 translate-y-6 border-t border-line bg-paper/95 px-8 py-6 opacity-0 backdrop-blur-sm transition duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <p className="mono mb-2 text-xs uppercase tracking-[0.2em] text-muted">{slide.category}</p>
                  <h3 className="mb-2 text-2xl tracking-tight">{slide.title}</h3>
                  <p className="max-w-2xl text-sm text-muted">{slide.summary}</p>
                  <p className="mt-4 inline-block rounded-full border border-line px-3 py-1 text-xs">{slide.badge}</p>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6">
          <div className="h-1.5 flex-1 rounded-full bg-card">
            <motion.div
              className="h-full rounded-full bg-ink"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p className="mono text-xs tracking-[0.2em] text-muted">
            {String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </p>
        </div>
      </div>
    </section>
  )
}
