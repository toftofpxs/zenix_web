'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = React.useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      setIsHovering(true)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
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
        stiffness: 500,
        damping: 28,
      }}
    />
  )
}
