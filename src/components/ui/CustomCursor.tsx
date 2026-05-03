"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Motion values for smooth movement
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring physics for the trailing ring
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable custom cursor on devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true)
    }

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if we are hovering over an interactive element
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.getAttribute("role") === "button"
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    if (window.matchMedia("(pointer: fine)").matches) {
      window.addEventListener("mousemove", moveCursor)
      window.addEventListener("mouseover", handleMouseOver)
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isDesktop) return null

  return (
    <>
      {/* Inner Dot - follows instantly */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Outer Glow Ring - follows with spring physics */}
      <motion.div
        className="fixed top-0 left-0 border rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 50 : 36,
          height: isHovering ? 50 : 36,
          backgroundColor: isHovering ? "rgba(0, 212, 255, 0.15)" : "rgba(0, 212, 255, 0)",
          borderColor: isHovering ? "rgba(0, 212, 255, 0.8)" : "rgba(0, 212, 255, 0.4)",
          boxShadow: isHovering 
            ? "0 0 20px rgba(0,212,255,0.6), inset 0 0 10px rgba(0,212,255,0.2)" 
            : "0 0 15px rgba(0,212,255,0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  )
}
