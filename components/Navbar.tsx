'use client'

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { content } from '@/data/content'
import type { Theme } from '@/hooks/useTheme'

interface NavbarHandle {
  logoRef: React.RefObject<HTMLAnchorElement>
}

type NavbarProps = {
  theme: Theme
  onToggleTheme: () => void
}

const Navbar = forwardRef<NavbarHandle, NavbarProps>(({ theme, onToggleTheme }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const logoRef = useRef<HTMLAnchorElement>(null)

  useImperativeHandle(ref, () => ({
    logoRef,
  }), [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        isScrolled ? 'border-line bg-paper/92 backdrop-blur' : 'border-transparent bg-paper'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-6 lg:px-12">
        <a href="#" ref={logoRef} className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-sm font-semibold">
            z.
          </span>
          <span className="text-lg font-semibold tracking-tight">Zenix Studio</span>
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {content.navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            className="rounded-full border border-line bg-ink px-5 py-2.5 text-sm text-paper transition duration-300 hover:-translate-y-0.5 hover:bg-card hover:text-ink"
          >
            {content.navbar.cta}
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Ouvrir le menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-t border-line bg-paper md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="space-y-5 px-6 py-6">
              <div className="mb-2 flex items-center justify-between">
                <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                <a
                  href="#contact"
                  className="rounded-full border border-line bg-ink px-4 py-2 text-xs text-paper"
                >
                  {content.navbar.cta}
                </a>
              </div>
              {content.navbar.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm uppercase tracking-[0.18em] text-muted"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
})

Navbar.displayName = 'Navbar'
export default Navbar
