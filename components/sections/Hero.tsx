'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { content } from '@/data/content'

function useTypewriter(text: string, enabled: boolean, startDelay = 120, speed = 36) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!enabled) {
      setDisplayed('')
      setDone(false)
      return
    }

    let outerTimer: ReturnType<typeof setTimeout>
    let interval: ReturnType<typeof setInterval>

    outerTimer = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
    }, startDelay)

    return () => {
      clearTimeout(outerTimer)
      clearInterval(interval)
    }
  }, [text, enabled, startDelay, speed])

  return { displayed, done }
}

interface HeroProps {
  isReady?: boolean
}

export default function Hero({ isReady = true }: HeroProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const titleY = useTransform(scrollY, [0, 500], [0, -156])
  const subtitleY = useTransform(scrollY, [0, 500], [0, -84])
  const shouldReduceMotion = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.4 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.4 })
  const pointerX = useTransform(smoothMouseX, (value) => value * 0.22)
  const pointerY = useTransform(smoothMouseY, (value) => value * 0.22)
  const pointerXSoft = useTransform(smoothMouseX, (value) => value * 0.12)
  const pointerYSoft = useTransform(smoothMouseY, (value) => value * 0.12)
  const backgroundY = useTransform(scrollY, [0, 900], [0, 120])
  const gridY = useTransform(scrollY, [0, 900], [0, 90])
  const glowY = useTransform(scrollY, [0, 900], [0, 140])
  const pointsY = useTransform(scrollY, [0, 900], [0, 28])
  const contentY = useTransform(scrollY, [0, 900], [0, -36])
  const heroTagText = content.hero.tag.replace(/^●\s*/, '')
  const { displayed: subtitleTyped, done: subtitleDone } = useTypewriter(content.hero.subtitle, isReady)
  const titleLines = content.hero.title

  const scrollIndicatorVariants = {
    animate: {
      y: [0, 12, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    mouseX.set(offsetX)
    mouseY.set(offsetY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={ref}
      className="h-screen w-full flex flex-col items-center justify-center px-6 lg:px-12 pt-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="hero-animated-bg" aria-hidden="true" style={{ y: backgroundY }}>
        <motion.div className="hero-grid" style={{ y: gridY }} />
        <motion.div className="hero-radial-glow" style={{ y: glowY }} />

        <motion.div className="hero-point-field" style={{ y: pointsY }} />

        {!shouldReduceMotion && (
          <>
            <motion.div
              className="hero-pointer-orb hero-pointer-orb-main"
              style={{ x: pointerX, y: pointerY }}
            />
            <motion.div
              className="hero-pointer-orb hero-pointer-orb-soft"
              style={{ x: pointerXSoft, y: pointerYSoft }}
            />
          </>
        )}
      </motion.div>

      {/* Title */}
      <motion.div
        style={{ y: titleY }}
        className="hero-title-wrap mb-8 text-center relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.2, 1, 0.22, 1] }}
      >
        <h1 className="hero-title text-hero font-bold text-black leading-generous">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, filter: 'blur(7px)' }}
            animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(7px)' }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.2, 1, 0.22, 1] }}
          >
            {titleLines[0]}
          </motion.span>
          <motion.span
            className="block text-secondary"
            initial={{ opacity: 0, y: 30, filter: 'blur(7px)' }}
            animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(7px)' }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.2, 1, 0.22, 1] }}
          >
            {titleLines[1]}
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 30, filter: 'blur(7px)' }}
            animate={isReady ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 30, filter: 'blur(7px)' }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.2, 1, 0.22, 1] }}
          >
            {titleLines[2].split(content.hero.highlightWord).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && <span className="text-accent">{content.hero.highlightWord}</span>}
              </React.Fragment>
            ))}
          </motion.span>
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        style={{ y: subtitleY }}
        className="hero-subtitle text-secondary text-lg max-w-2xl text-center mb-12 font-light relative z-10"
        initial={{ opacity: 0, y: 16 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.2, 1, 0.22, 1] }}
      >
        {shouldReduceMotion ? content.hero.subtitle : (
          <>
            {subtitleTyped}
            {!subtitleDone && <span className="hero-cursor" aria-hidden="true" />}
          </>
        )}
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="#contact"
        style={{ y: contentY }}
        className="hero-cta bg-black text-white px-8 py-3.5 rounded-xl font-medium hover:bg-accent hover:shadow-lg transition-all mb-20 relative z-10 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.32, ease: [0.2, 1, 0.22, 1] }}
      >
        {content.hero.cta}
      </motion.a>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center z-10"
        variants={scrollIndicatorVariants}
        animate={isReady ? 'animate' : undefined}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="w-0.5 h-8 bg-secondary rounded-full" />
      </motion.div>
    </section>
  )
}
