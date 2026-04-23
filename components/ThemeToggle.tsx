'use client'

import { motion } from 'framer-motion'
import type { Theme } from '@/hooks/useTheme'

type ThemeToggleProps = {
  theme: Theme
  onToggle: () => void
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      aria-label="Basculer le theme"
      onClick={onToggle}
      className="relative h-7 w-14 rounded-full border border-line bg-card px-1"
    >
      <motion.span
        className="absolute inset-y-1 left-1 w-5 rounded-full bg-ink"
        animate={{ x: theme === 'dark' ? 26 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      />
    </button>
  )
}
