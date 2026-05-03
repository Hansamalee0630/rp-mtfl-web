"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2 } from "lucide-react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable scrolling while the splash screen is active
    document.body.style.overflow = "hidden";

    // Keep splash screen up for 2.2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

          {/* Central content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-8 relative z-10"
          >
            {/* Glowing Logo */}
            <div className="relative flex items-center justify-center">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyan-500/20 w-32 h-32 -m-8"
                style={{ 
                  borderTopColor: "rgba(0, 212, 255, 0.8)", 
                  borderBottomColor: "rgba(139, 92, 246, 0.8)" 
                }}
              />
              {/* Inner spinning ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-emerald-500/10 w-24 h-24 -m-4"
                style={{ 
                  borderRightColor: "rgba(0, 255, 136, 0.6)",
                  borderLeftColor: "rgba(0, 212, 255, 0.4)" 
                }}
              />
              
              <Share2 className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_20px_rgba(0,212,255,0.8)] relative z-10" />
            </div>

            {/* Text & Loader */}
            <div className="flex flex-col items-center gap-3">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-[0.2em] text-white uppercase ml-2">
                MTFL
              </h1>
              
              {/* Loading Bar */}
              <div className="w-48 h-px bg-white/10 relative overflow-hidden mt-1">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_rgba(0,212,255,1)]"
                />
              </div>

              <p className="text-[10px] tracking-[0.3em] text-cyan-400/60 uppercase font-mono mt-2">
                Initializing Global Model...
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
