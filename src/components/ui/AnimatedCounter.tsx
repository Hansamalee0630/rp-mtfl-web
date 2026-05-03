"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  // Trigger animation when the component comes into view
  const isInView = useInView(ref, { once: true, margin: "-10px" });
  
  // Check if the value is a pure number (like "4" or "6")
  const isNumeric = !isNaN(Number(value));
  const numericValue = isNumeric ? Number(value) : 0;

  // Spring physics for smooth counting up from 0
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  // Transform the raw spring float into an integer
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (isInView && isNumeric) {
      // Small delay for better UX when scrolling down
      const timeout = setTimeout(() => {
        spring.set(numericValue);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [isInView, isNumeric, numericValue, spring]);

  // If the value is text (like "ε-DP" or "FL+RL"), use a slick fade-in instead of a counter
  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4, delay: 0.2 }}
        className="inline-block"
      >
        {value}
      </motion.span>
    );
  }

  // Framer Motion's motion.span automatically handles the display value subscription without re-renders!
  return <motion.span ref={ref}>{display}</motion.span>;
}
