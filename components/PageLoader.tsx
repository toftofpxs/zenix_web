'use client'

import { AnimatePresence, motion } from 'framer-motion'

type PageLoaderProps = {
  isLoading: boolean
  progress: number
}

export default function PageLoader({ isLoading, progress }: PageLoaderProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-paper"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-center gap-8">
            <motion.div
              className="h-28 w-28 rounded-full border border-line"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.span
              className="absolute top-[39px] text-4xl font-semibold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24, duration: 0.5 }}
            >
              z.
            </motion.span>
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted">Chargement</p>
          </div>
          <div className="loader-track">
            <motion.div
              className="loader-bar"
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
