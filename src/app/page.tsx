

"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Database, Server, Smartphone, ShieldCheck, Activity, Network, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ResearchFrameworkSection } from "@/components/sections/ResearchFrameworkSection"
import { PillarsSection } from "@/components/sections/PillarsSection"
import { TeamSection } from "@/components/sections/TeamSection"
import { TimelineSection } from "@/components/sections/TimelineSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { MethodologySection } from "@/components/sections/MethodologySection"
import { SystemArchitecture } from "@/components/sections/SystemArchitecture"
import { DocumentsSection } from "@/components/sections/DocumentsSection"
import { PresentationsSection } from "@/components/sections/PresentationsSection"
import { TermTooltip } from "@/components/ui/TermTooltip"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { ScrambleText } from "@/components/ui/ScrambleText"
import { PublicationsSection } from "@/components/sections/PublicationsSection"
import { MagneticButton } from "@/components/ui/MagneticButton"
import { ContactSection } from "@/components/sections/ContactSection"
import { LiteratureSection } from "@/components/sections/LiteratureSection"
import { ParticlesBackground } from "@/components/ui/ParticlesBackground"

// const STATS = [
//   { value: "4", label: "Research Pillars" },
//   { value: "6", label: "Non-IID Metrics" },
//   { value: "ε-DP", label: "Privacy Budget" },
//   { value: "FL+RL", label: "Core Paradigm" },
// ]

const STATS = [
  { value: "MTFL", label: "Core Architecture" },       // Hansa's Component 1
  { value: "EHR+Vision", label: "Multimodal Fusion" }, // Tharushika's Component 2
  { value: "ε-DP", label: "Local Privacy" },           // Oshadhi's Component 3
  { value: "XAI", label: "Clinical Transparency" },    // Mihili & Tharushika's Explainability
]

const FloatingOrb = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`} />
)

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 22 } }
  }

  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      {/* ── Hero ────────────────────────────────────────── */}
      <section id="home" ref={heroRef} className="w-full relative flex flex-col justify-start px-4 overflow-hidden pt-4 lg:pt-8 pb-16 min-h-[85vh]">
        <ParticlesBackground />

        {/* Ambient orbs */}
        <FloatingOrb className="w-[700px] h-[700px] bg-cyan-400 top-[-200px] left-[-200px]" />
        <FloatingOrb className="w-[500px] h-[500px] bg-violet-600 bottom-[-100px] right-[-100px]" />
        <FloatingOrb className="w-[300px] h-[300px] bg-emerald-400 top-[40%] left-[60%]" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />

        {/* Horizontal neon lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
          >
            {/* Left Column: Title Data */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-2">
              
              {/* Tag */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-bold tracking-widest text-cyan-400 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Healthcare AI Research · 2025–2026
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none mb-6 relative z-20">
                <span className="block text-white/90 pt-2 lg:pt-4">
                  <ScrambleText text="Privacy-First" delay={2200} duration={1200} />
                </span>
                <span className="block gradient-text pb-2 lg:pb-4 pr-2">
                  <ScrambleText text="Diabetes Intelligence" delay={2600} duration={1800} />
                </span>
              </motion.h1>

              {/* Subhead */}
              <motion.p variants={itemVariants} className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light mb-8 relative z-20">
                A unified <TermTooltip term="Multi-Task Federated Learning" explanation="An AI approach where multiple related tasks are learned simultaneously across decentralized devices without ever sharing raw data." /> platform predicting complications,
                personalizing therapy, and detecting undiagnosed diabetes — all without raw patient data ever leaving the edge.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative z-20">
                <MagneticButton>
                  <Link href="#framework" className="inline-block">
                    <Button size="lg" className="relative group bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300 w-full sm:w-auto">
                      Explore Framework
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="#pillars" className="inline-block">
                    <Button size="lg" variant="outline" className="border-white/10 text-white/80 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 px-8 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] w-full sm:w-auto">
                      View Pillars
                    </Button>
                  </Link>
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right Column: 2x2 Stats Grid */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex-shrink-0">
              <motion.div 
                variants={itemVariants} 
                className="grid grid-cols-2 gap-4 md:gap-6"
              >
                {STATS.map((s, i) => (
                  <SpotlightCard
                    key={i} 
                    spotlightColor="rgba(0, 212, 255, 0.2)"
                    className="rounded-[2rem] bg-black/40 backdrop-blur-md shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/50"
                  >
                    <div className="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 w-full h-full text-center">
                      <div className={`font-black text-cyan-400 tabular-nums leading-tight ${s.value.length > 8 ? 'text-2xl md:text-3xl lg:text-4xl tracking-tight' : s.value.length > 5 ? 'text-3xl md:text-4xl' : 'text-4xl md:text-5xl'}`}>
                        {s.value}
                      </div>
                      <div className="text-[10px] md:text-xs text-white/40 mt-2 font-bold uppercase tracking-widest text-center">
                        {s.label}
                      </div>
                    </div>
                  </SpotlightCard>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── Literature Survey ────────────────────────────── */}
      <LiteratureSection />

      {/* ── Research Objectives & Methodologies ──────────── */}
      <ResearchFrameworkSection />
      <PillarsSection />
      <MethodologySection />
      {/* ── MTFL Architecture ──────────────────────────── */}
      <SystemArchitecture />

      {/* ── Content Sections ──────────────────────────── */}
      <TechStackSection />
      <TimelineSection />
      <DocumentsSection />
      <PresentationsSection />
      <PublicationsSection />
      <TeamSection />
      <ContactSection />
    </div>
  )
}