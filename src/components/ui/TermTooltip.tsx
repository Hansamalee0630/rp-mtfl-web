"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function TermTooltip({ 
  term, 
  explanation 
}: { 
  term: string, 
  explanation: string 
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // For mobile tap compatibility
      onClick={() => setIsHovered(!isHovered)}
    >
      <span className="border-b border-dashed border-cyan-400/60 text-cyan-400 cursor-help transition-colors hover:bg-cyan-500/20 hover:border-cyan-400 font-semibold">
        {term}
      </span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-[100] bottom-[120%] left-1/2 -translate-x-1/2 w-64 p-3.5 rounded-xl bg-black/90 backdrop-blur-2xl border border-cyan-500/40 shadow-[0_0_30px_rgba(0,212,255,0.25)] text-sm text-white/90 font-normal leading-relaxed text-center pointer-events-none"
          >
            {explanation}
            {/* Little triangle pointing down */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-cyan-500/40" />
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-[5px] border-transparent border-t-black" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  )
}
