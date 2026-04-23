'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = React.useState(false)

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    const handlePointerOver = (event: Event) => {
      const target = event.target as HTMLElement | null
      if (target?.closest('a, button, input, textarea, select, [role="button"]')) {
        handleMouseEnter()
      }
    }

    const handlePointerOut = () => {
      handleMouseLeave()
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handlePointerOver)
    document.addEventListener('mouseout', handlePointerOut)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handlePointerOver)
      document.removeEventListener('mouseout', handlePointerOut)
    }
  }, [])

  return (
    <motion.div
      ref={cursorRef}
      className={`cursor-dot ${isHovering ? 'active' : ''}`}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 420,
        damping: 30,
      }}
    />
  )
}
