'use client'

import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { content } from '@/data/content'

interface NavbarHandle {
  logoRef: React.RefObject<HTMLDivElement>
}

const Navbar = forwardRef<NavbarHandle>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const logoRef = useRef<HTMLDivElement>(null)

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
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white border-b border-border'
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-6 lg:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center">
          <motion.a
            href="#"
            className="text-xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-black">Zenix</span>
            <span className="text-accent ml-2">Web</span>
          </motion.a>
        </div>

        {/* Navigation desktop */}
        <div className="hidden md:flex gap-12">
          {content.navbar.navLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              className="text-secondary text-sm font-medium hover:text-black transition-colors underline-fancy"
              whileHover={{ color: '#0A0A0A' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-black text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-accent hover:shadow-lg transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
        >
          {content.navbar.cta}
        </a>

        {/* Menu mobile */}
        <button
          className="md:hidden text-black hover:text-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-b border-border pointer-events-none"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-6 space-y-6 pointer-events-auto">
              {content.navbar.navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-secondary hover:text-black transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="block bg-black text-white px-6 py-2.5 rounded-xl text-sm font-medium text-center hover:bg-accent hover:shadow-lg transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
              >
                {content.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
})

Navbar.displayName = 'Navbar'
export default Navbar
