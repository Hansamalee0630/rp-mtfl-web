

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
import { PresentationsSection } from "@/components/sections/PresentationsSection"
import { PublicationsSection } from "@/components/sections/PublicationsSection"
import { ContactSection } from "@/components/sections/ContactSection"

const STATS = [
  { value: "4", label: "Research Pillars" },
  { value: "6", label: "Non-IID Metrics" },
  { value: "ε-DP", label: "Privacy Budget" },
  { value: "FL+RL", label: "Core Paradigm" },
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
      <section ref={heroRef} className="w-full relative flex flex-col justify-start px-4 overflow-hidden pt-4 lg:pt-8 pb-16 min-h-[85vh]">

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
              <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl xl:text-8xl font-extrabold tracking-tighter leading-none mb-6">
                <span className="block text-white/90 pt-2 lg:pt-4">Privacy-First</span>
                <span className="block gradient-text pb-2 lg:pb-4 pr-2">Diabetes Intelligence</span>
              </motion.h1>

              {/* Subhead */}
              <motion.p variants={itemVariants} className="text-base md:text-lg text-white/50 max-w-2xl leading-relaxed font-light mb-8">
                A unified <span className="text-cyan-400 font-semibold">Multi-Task Federated Learning</span> platform predicting complications,
                personalizing therapy, and detecting undiagnosed diabetes — all without raw patient data ever leaving the edge.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="#framework">
                  <Button size="lg" className="relative group bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(0,212,255,0.6)] transition-all duration-300 w-full sm:w-auto">
                    Explore Framework
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="#pillars">
                  <Button size="lg" variant="outline" className="border-white/10 text-white/80 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300 px-8 hover:shadow-[0_0_20px_rgba(0,212,255,0.1)] w-full sm:w-auto">
                    View Pillars
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: 2x2 Stats Grid */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex-shrink-0">
              <motion.div 
                variants={itemVariants} 
                className="grid grid-cols-2 gap-4 md:gap-6"
              >
                {STATS.map((s, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center justify-center p-6 md:p-8 rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:border-cyan-500/30"
                  >
                    <div className="text-4xl md:text-5xl font-black text-cyan-400 tabular-nums">{s.value}</div>
                    <div className="text-[10px] md:text-xs text-white/40 mt-3 font-bold uppercase tracking-widest text-center">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── MTFL Architecture ──────────────────────────── */}
      <section className="w-full max-w-6xl mx-auto py-32 px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-4">System Architecture</p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white/90 mb-6">
            The MTFL Backbone
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Secure, decentralized edge training across heterogeneous medical silos — aggregating insights without sharing raw data.
          </p>
        </motion.div>

        {/* Architecture diagram card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/8 bg-white/[0.02] overflow-hidden shadow-[0_0_100px_rgba(0,212,255,0.05)]"
        >
          {/* Top glow bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

          <div className="p-8 md:p-16">
            {/* Connecting SVG lines */}
            <div className="relative w-full aspect-[16/7] flex items-center">
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* Horizontal paths */}
                <line x1="22%" y1="50%" x2="40%" y2="50%" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="8 6" className="animate-dash" opacity="0.5" />
                <line x1="78%" y1="50%" x2="60%" y2="50%" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="8 6" className="animate-dash" opacity="0.5" />
                {/* Top / bottom */}
                <line x1="50%" y1="12%" x2="50%" y2="36%" stroke="#00ff88" strokeWidth="1.5" strokeDasharray="8 6" className="animate-dash-reverse" opacity="0.4" />
                <line x1="50%" y1="88%" x2="50%" y2="64%" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="8 6" className="animate-dash-reverse" opacity="0.4" />
                {/* Glow dot centres */}
                <circle cx="22%" cy="50%" r="4" fill="#00d4ff" opacity="0.7" />
                <circle cx="78%" cy="50%" r="4" fill="#00d4ff" opacity="0.7" />
                <circle cx="50%" cy="12%" r="4" fill="#00ff88" opacity="0.6" />
                <circle cx="50%" cy="88%" r="4" fill="#8b5cf6" opacity="0.6" />
              </svg>

              {/* Nodes grid */}
              <div className="relative z-10 w-full grid grid-cols-3 gap-4 md:gap-8 items-center">

                {/* Left node */}
                <motion.div
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="group w-full glass-card rounded-2xl p-5 md:p-6 border border-white/8 hover:border-cyan-500/40 transition-all duration-500 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-500/20 transition-colors">
                      <Smartphone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="font-bold text-sm text-white/90 text-center">Edge Node A</p>
                    <p className="text-xs text-white/40 text-center mt-1">EHR & Wearables</p>
                    <div className="mt-3 flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-1 w-4 rounded-full bg-cyan-500/30" style={{ animationDelay: `${i * 200}ms` }} />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-white/30 font-mono">LOCAL TRAINING</div>
                </motion.div>

                {/* Centre — Global Aggregation */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="relative w-full glass-card rounded-2xl p-6 md:p-8 border border-cyan-500/25 shadow-[0_0_60px_rgba(0,212,255,0.1)] hover:shadow-[0_0_100px_rgba(0,212,255,0.2)] transition-all duration-700">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent" />
                    <div className="relative flex items-center justify-center mb-5 mx-auto w-16 h-16">
                      <Network className="w-10 h-10 text-cyan-300/20 absolute animate-spin-slow" />
                      <div className="w-14 h-14 rounded-full bg-cyan-500/10 border-2 border-cyan-500/30 flex items-center justify-center">
                        <Server className="w-7 h-7 text-cyan-400" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-cyan-400 text-center text-base md:text-lg leading-tight mb-3">Global Aggregation</h3>
                    <div className="flex items-center justify-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span className="text-xs text-emerald-400 font-semibold">ε-Differential Privacy</span>
                    </div>
                  </div>
                  <div className="text-xs text-cyan-400/60 font-mono">FedAvg + MTFL</div>
                </motion.div>

                {/* Right node */}
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="group w-full glass-card rounded-2xl p-5 md:p-6 border border-white/8 hover:border-violet-500/40 transition-all duration-500 cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 mx-auto group-hover:bg-violet-500/20 transition-colors">
                      <Database className="w-6 h-6 text-violet-400" />
                    </div>
                    <p className="font-bold text-sm text-white/90 text-center">Institution B</p>
                    <p className="text-xs text-white/40 text-center mt-1">Retinal Imaging Data</p>
                    <div className="mt-3 flex gap-1 justify-center">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-1 w-4 rounded-full bg-violet-500/30" style={{ animationDelay: `${i * 200}ms` }} />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-white/30 font-mono">LOCAL TRAINING</div>
                </motion.div>
              </div>
            </div>

            {/* Bottom labels row */}
            <div className="neon-divider mt-10 mb-8" />
            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Gradient Upload Only", color: "text-cyan-400" },
                { label: "Federated Averaging", color: "text-white/60" },
                { label: "Model Broadcast", color: "text-violet-400" },
              ].map((item, i) => (
                <div key={i}>
                  <div className={`text-xs font-bold tracking-widest uppercase ${item.color}`}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom glow bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        </motion.div>

        {/* Floating inline animations CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes dash { to { stroke-dashoffset: -28; } }
          .animate-dash { animation: dash 3s linear infinite; }
          .animate-dash-reverse { animation: dash 3s linear infinite reverse; }
          .animate-spin-slow { animation: spin 12s linear infinite; }
        `}} />
      </section>

      {/* ── Content Sections ──────────────────────────── */}
      <ResearchFrameworkSection />
      <PillarsSection />
      <TeamSection />
      <TechStackSection />
      <TimelineSection />
      <PresentationsSection />
      <PublicationsSection />
      <ContactSection />
    </div>
  )
}