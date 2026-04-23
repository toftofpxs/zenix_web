'use client'

import { motion } from 'framer-motion'
import { content } from '@/data/content'

interface HeroProps {
  isReady?: boolean
}

export default function Hero({ isReady = true }: HeroProps) {
  return (
    <section className="relative mx-auto grid min-h-screen w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-6 pb-14 pt-28 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:pt-36">
      <div className="relative hidden h-[560px] items-center justify-center lg:flex">
        <motion.div
          className="absolute h-[440px] w-[440px] rounded-full border border-line bg-card"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={isReady ? { scale: 1, opacity: 1 } : { scale: 0.75, opacity: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="dot-grid absolute h-[510px] w-[510px] rounded-full opacity-30" />
        <motion.div
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        >
          <svg viewBox="0 0 500 500" className="h-[490px] w-[490px]">
            <defs>
              <path id="hero-circle-path" d="M250,250 m-200,0 a200,200 0 1,1 400,0 a200,200 0 1,1 -400,0" />
            </defs>
            <text className="mono fill-muted text-[16px] uppercase tracking-[0.35em]">
              <textPath href="#hero-circle-path">{content.hero.circularText}</textPath>
            </text>
          </svg>
        </motion.div>
        <span className="text-7xl font-semibold tracking-tighter">z.</span>
      </div>

      <div>
        <motion.p
          className="mono mb-6 text-xs uppercase tracking-[0.24em] text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.18, duration: 0.6 }}
        >
          {content.hero.tag}
        </motion.p>
        <h1 className="text-hero leading-[0.98] tracking-tighter">
          {content.hero.title.map((line, index) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 36 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
              transition={{
                delay: 0.26 + index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 22 }}
          animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
          transition={{ delay: 0.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="rounded-full border border-line bg-ink px-7 py-3 text-sm text-paper transition duration-300 hover:-translate-y-0.5"
          >
            {content.hero.primaryCta}
          </a>
          <a
            href="#portfolio"
            className="rounded-full border border-line bg-card px-7 py-3 text-sm transition duration-300 hover:bg-paper"
          >
            {content.hero.secondaryCta}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
