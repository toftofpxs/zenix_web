'use client'

import React, { useEffect, ReactNode, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import Process from '@/components/sections/Process'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import CustomCursor from '@/components/CustomCursor'

function SectionReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2, margin: '-60px 0px' }}
      transition={{ duration: 0.9, ease: [0.2, 1, 0.22, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSiteLoaded, setIsSiteLoaded] = useState(false)
  const [isLogoAnimationDone, setIsLogoAnimationDone] = useState(false)
  const [logoOffset, setLogoOffset] = useState({ x: 0, y: 0 })
  const loaderLogoRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<any>(null)

  useEffect(() => {
    const measureLogoOffset = () => {
      if (!loaderLogoRef.current || !navbarRef.current?.logoRef?.current) {
        return
      }

      const navbarLogoRect = navbarRef.current.logoRef.current.getBoundingClientRect()

      // Le logo du loader démarre visuellement au centre de l'écran.
      // Utiliser ce repère évite les décalages liés aux tailles de texte selon les écrans.
      const navbarCenter = {
        x: navbarLogoRect.left + navbarLogoRect.width / 2,
        y: navbarLogoRect.top + navbarLogoRect.height / 2,
      }

      const viewportCenter = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      }

      const rawOffset = {
        x: navbarCenter.x - viewportCenter.x,
        y: navbarCenter.y - viewportCenter.y,
      }

      const maxYTravel = window.innerHeight * 0.45

      setLogoOffset({
        x: rawOffset.x,
        y: Math.max(-maxYTravel, Math.min(maxYTravel, rawOffset.y)),
      })
    }

    // Attendre plusieurs frames pour s'assurer que tout est rendu correctement
    let frameCount = 0
    const countFrames = () => {
      frameCount++
      if (frameCount < 3) {
        window.requestAnimationFrame(countFrames)
      } else {
        measureLogoOffset()
      }
    }

    const initialTimer = window.setTimeout(() => {
      window.requestAnimationFrame(countFrames)
    }, 600)

    window.addEventListener('resize', measureLogoOffset)

    return () => {
      window.clearTimeout(initialTimer)
      window.removeEventListener('resize', measureLogoOffset)
    }
  }, [])

  useEffect(() => {
    const markLoaded = () => setIsSiteLoaded(true)

    if (document.readyState === 'complete') {
      markLoaded()
      return
    }

    window.addEventListener('load', markLoaded)
    return () => window.removeEventListener('load', markLoaded)
  }, [])

  useEffect(() => {
    if (isSiteLoaded && isLogoAnimationDone) {
      setIsLoading(false)
    }
  }, [isSiteLoaded, isLogoAnimationDone])

  return (
    <>
      <CustomCursor />
      <motion.div
        initial={false}
        animate={{ opacity: isLoading ? 0 : 1, pointerEvents: isLoading ? 'none' : 'auto' }}
        transition={{
          opacity: { duration: 0.45, delay: isLoading ? 0 : 0.1, ease: [0.4, 0, 0.2, 1] },
          pointerEvents: { duration: 0, delay: isLoading ? 0 : 0.1 },
        }}
        style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
      >
        <Navbar ref={navbarRef} />
        <main className="relative overflow-hidden">
          <SectionReveal delay={0.05}>
            <Hero isReady={!isLoading} />
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <Stats />
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <Services />
          </SectionReveal>
          <SectionReveal delay={0.12}>
            <Portfolio />
          </SectionReveal>
          <SectionReveal delay={0.14}>
            <Process />
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <Contact />
          </SectionReveal>
        </main>
        <Footer />
      </motion.div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-white z-50 overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                ref={loaderLogoRef}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{
                  opacity: [0, 1, 1],
                  scale: [0.92, 1.18, 0.38],
                  x: [0, 0, logoOffset.x],
                  y: [0, 0, logoOffset.y],
                }}
                onAnimationComplete={() => setIsLogoAnimationDone(true)}
                transition={{
                  duration: 1.45,
                  times: [0, 0.32, 1],
                  ease: [0.2, 1, 0.22, 1],
                }}
                className="text-center will-change-transform"
              >
                <h1 className="text-5xl lg:text-6xl font-bold text-black tracking-tight">
                  <span className="text-black">Zenix</span>
                  <span className="text-accent ml-2">Web</span>
                </h1>
              </motion.div>
            </div>

            <motion.div
              className="absolute inset-0 border-t-2 border-black/6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: [0, 1, 1], opacity: [0, 0.6, 0] }}
              transition={{ duration: 1.2, times: [0, 0.55, 1], ease: 'easeInOut' }}
              style={{ transformOrigin: 'left center' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
