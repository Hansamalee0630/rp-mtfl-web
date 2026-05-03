"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  // Apply spring physics for a smoother, highly premium feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400 shadow-[0_0_15px_rgba(0,212,255,0.8)]"
      style={{ scaleX }}
    />
  )
}
