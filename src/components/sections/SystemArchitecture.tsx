"use client"

import { motion } from "framer-motion"
import { 
  Database, 
  Eye, 
  Cpu, 
  Lock, 
  Network, 
  Sliders, 
  Activity, 
  ChevronRight, 
  ChevronDown, 
  Scale, 
  GitBranch, 
  Zap,
  ShieldCheck,
  Play,
  RotateCcw,
  Layers,
  LockKeyhole,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Server
} from "lucide-react"
import { useState } from "react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"
import { TermTooltip } from "@/components/ui/TermTooltip"

type ViewPerspective = "all" | "privacy" | "fairness" | "risk"

// HUD filter configuration
const PERSPECTIVES = [
  { id: "all", label: "Full Data Pipeline", icon: Zap, color: "text-cyan-400 border-cyan-500/30" },
  { id: "privacy", label: "Privacy & Encryption Auditing", icon: Lock, color: "text-emerald-400 border-emerald-500/30" },
  { id: "fairness", label: "Fairness & Bias Aggregation", icon: Scale, color: "text-purple-400 border-purple-500/30" },
  { id: "risk", label: "Fuzzy Complication Risk Cascade", icon: GitBranch, color: "text-rose-400 border-rose-500/30" }
] as const

export function SystemArchitecture() {
  const [activeView, setActiveView] = useState<ViewPerspective>("all")

  // Zone 4 Cascade Simulation state
  const [cascadeStep, setCascadeStep] = useState<number>(0) // 0 = idle, 1 = Diabetes, 2 = Nephropathy, 3 = CVD risk, 4 = Complete
  const [isSimulating, setIsSimulating] = useState<boolean>(false)
  const [simulatedRisk, setSimulatedRisk] = useState<number>(0)

  // Simulation runner
  const startSimulation = () => {
    if (isSimulating) return
    setIsSimulating(true)
    setCascadeStep(1)
    setSimulatedRisk(0)

    let currentStep = 1
    const timer = setInterval(() => {
      if (currentStep === 1) {
        setSimulatedRisk(15)
        setCascadeStep(2)
        currentStep = 2
      } else if (currentStep === 2) {
        setSimulatedRisk(58)
        setCascadeStep(3)
        currentStep = 3
      } else if (currentStep === 3) {
        // Count up to 94.5%
        let val = 58
        const countUp = setInterval(() => {
          val += 2.5
          if (val >= 94.5) {
            setSimulatedRisk(94.5)
            setCascadeStep(4)
            setIsSimulating(false)
            clearInterval(countUp)
          } else {
            setSimulatedRisk(parseFloat(val.toFixed(1)))
          }
        }, 30)
        clearInterval(timer)
      }
    }, 1000)
  }

  const resetSimulation = () => {
    setCascadeStep(0)
    setSimulatedRisk(0)
    setIsSimulating(false)
  }

  // Determine active highlights per card/path
  const isCardActive = (zone: 1 | 2 | 3 | 4) => {
    if (activeView === "all") return true
    if (activeView === "privacy" && (zone === 1 || zone === 2)) return true
    if (activeView === "fairness" && (zone === 2 || zone === 3)) return true
    if (activeView === "risk" && (zone === 3 || zone === 4)) return true
    return false
  }

  const isPathActive = (connector: 1 | 2 | 3) => {
    if (activeView === "all") return true
    if (activeView === "privacy" && connector === 1) return true
    if (activeView === "fairness" && connector === 2) return true
    if (activeView === "risk" && connector === 3) return true
    return false
  }

  return (
    <section id="architecture" className="w-full relative px-4 py-32 bg-black overflow-hidden border-t border-border/50">
      
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      
      {/* Background ambient neon orbs */}
      <div className={`absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[130px] pointer-events-none transition-all duration-700 ${
        activeView === "privacy" ? "bg-emerald-500/10" :
        activeView === "fairness" ? "bg-purple-500/10" :
        activeView === "risk" ? "bg-rose-500/10" : "bg-cyan-500/10"
      }`} />
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <p className="section-label mb-4 text-sm md:text-base tracking-[0.25em] font-extrabold text-cyan-400 uppercase">
            System Architecture Blueprint
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-6">
            Overall <span className="gradient-text">Research Framework</span>
          </h2>
          <p className="text-white/50 text-[15px] md:text-[16px] max-w-2xl mx-auto leading-relaxed mb-12">
            An interactive, visual representation of our privacy-preserving horizontal pipeline. Use the HUD deck below to focus on cryptographic guards, fairness aggregation, or fuzzy complication cascades.
          </p>

          {/* Interactive HUD Command Console */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md shadow-2xl">
            {PERSPECTIVES.map((perspective) => {
              const Icon = perspective.icon
              const isSelected = activeView === perspective.id
              return (
                <button
                  key={perspective.id}
                  onClick={() => setActiveView(perspective.id)}
                  className={`px-4 py-2 rounded-lg text-xs md:text-sm font-semibold border transition-all duration-500 flex items-center gap-2 cursor-pointer ${
                    isSelected 
                      ? `${perspective.color} bg-white/5 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-105` 
                      : "border-transparent bg-transparent text-white/50 hover:text-white/90 hover:bg-white/[0.02]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {perspective.label}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* ── HORIZONTAL FLOWCHART PIPELINE ────────────────── */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between w-full relative gap-2">
          
          {/* ================================================================= */}
          {/* COLUMN 1: ZONE 1 - EDGE CLIENTS                                   */}
          {/* ================================================================= */}
          <div 
            className={`flex-1 transition-all duration-500 ${
              isCardActive(1) ? "opacity-100 scale-100" : "opacity-30 scale-[0.98] blur-[1px]"
            }`}
          >
            <SpotlightCard
              spotlightColor="rgba(0, 212, 255, 0.15)"
              className={`relative h-full flex flex-col bg-black/40 border rounded-[2rem] p-6 transition-all duration-500 shadow-xl overflow-hidden group ${
                isCardActive(1) ? "border-cyan-500/40 shadow-[0_0_30px_rgba(0,212,255,0.05)]" : "border-white/5"
              }`}
            >
              {/* Neon accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80" />
              
              {/* Zone Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-[10px] font-bold uppercase tracking-widest text-cyan-400/90 w-fit mx-auto mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Zone 1: Local Edge
              </div>

              <h3 className="text-white/90 font-extrabold text-lg md:text-xl tracking-tight leading-snug mb-0.5 text-center">
                Decentralized Clients
              </h3>
              <p className="text-white/45 text-[10px] font-mono mb-4 uppercase tracking-wider text-center">Local Multi-Modal Processing</p>

              {/* Interlocking Visual Elements */}
              <div className="flex flex-col gap-6 mt-auto">
                
                {/* 1. Multimodal Inputs Schematic */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3 text-cyan-400 border-b border-white/5 pb-2">
                    <div className="flex items-center gap-1.5 justify-center">
                      <Database className="w-4 h-4" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">Multimodal Inputs</span>
                    </div>
                  </div>
                  
                  {/* Schematic Flow */}
                  <div className="flex items-center justify-between gap-2">
                    {/* EHR block */}
                    <div className="flex-1 p-2 rounded bg-black/60 border border-white/10 flex flex-col gap-1">
                      <span className="text-[10px] text-white/50 uppercase font-mono font-bold">EHR Features</span>
                      <div className="flex flex-wrap gap-1">
                        <span className="text-[9px] px-1 bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 rounded">BP</span>
                        <span className="text-[9px] px-1 bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 rounded">HbA1c</span>
                        <span className="text-[9px] px-1 bg-cyan-950/40 text-cyan-300 border border-cyan-500/20 rounded">Age</span>
                      </div>
                    </div>

                    {/* Plus connector */}
                    <span className="text-cyan-400 font-extrabold text-sm font-mono">+</span>

                    {/* Retina Block */}
                    <div className="p-2 rounded bg-black/60 border border-white/10 flex flex-col items-center gap-1">
                      <span className="text-[10px] text-white/50 uppercase font-mono font-bold">Retina Image</span>
                      <div className="relative w-9 h-9 border border-cyan-500/30 rounded-full bg-cyan-950/20 flex items-center justify-center overflow-hidden">
                        <svg className="w-6 h-6 stroke-cyan-400/80 stroke-[0.75] fill-none" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" strokeDasharray="2 2" className="animate-[spin_20s_linear_infinite]" />
                          <path d="M12 12 Q 15 8 18 10 M12 12 Q 8 15 6 12 M12 12 Q 10 6 12 4" />
                        </svg>
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-cyan-400/50 animate-[bounce_1.5s_infinite]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Late Fusion Engine Block */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-cyan-400">
                    <Cpu className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Late Fusion MLP</span>
                  </div>
                  
                  {/* Visual Slider indicator */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between text-xs font-mono text-white/80">
                      <span>Fusion Threshold</span>
                      <span className="text-cyan-400 font-bold">0.90 Target</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ width: "90%" }} />
                      <div className="absolute top-0 bottom-0 w-0.5 bg-white left-[90%]" />
                    </div>
                  </div>
                </div>

                {/* 3. Neural Layer Stack */}
                <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-950/5 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-cyan-400">
                    <Layers className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Personalized Layer Stack</span>
                  </div>

                  {/* Layers drawing */}
                  <div className="flex flex-col gap-1 text-[10px] font-mono">
                    <div className="py-1 px-2.5 rounded bg-cyan-400/10 border border-cyan-400 text-cyan-400 flex items-center justify-between font-bold animate-[pulse_3s_infinite]">
                      <span>Task Heads (HF & HT)</span>
                      <span className="uppercase text-[8px] bg-cyan-500 text-black px-1 rounded font-black">Fine-Tuned</span>
                    </div>
                    <div className="py-1 px-2.5 rounded bg-cyan-400/5 border border-cyan-400/40 text-cyan-300 flex items-center justify-between">
                      <span>Top Adaptation Layers</span>
                      <span className="uppercase text-[8px] border border-cyan-400/50 px-1 rounded">Fine-Tuned</span>
                    </div>
                    <div className="py-1 px-2.5 rounded bg-white/5 border border-white/10 text-white/40 flex items-center justify-between">
                      <span>Bottom Shared Base</span>
                      <span className="flex items-center gap-1 text-[8px] uppercase">
                        <Lock className="w-2.5 h-2.5" /> Frozen
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-[10px] text-cyan-300/80 font-mono text-center">
                    Accuracy Boost: +30.1% rel.
                  </div>
                </div>

                {/* 4. Dual XAI Audits Visual */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-cyan-400">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Local Dual XAI Audits</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {/* SHAP attributions */}
                    <div className="p-2 rounded bg-black/40 border border-white/5 flex flex-col gap-1.5">
                      <span className="text-[9px] text-white/50 uppercase font-mono font-bold">SHAP Weights</span>
                      <div className="flex flex-col gap-1 font-mono text-[8px]">
                        <div className="flex justify-between">
                          <span className="text-white/60">BP</span>
                          <span className="text-cyan-400">0.42</span>
                        </div>
                        <div className="h-1 bg-cyan-400/40 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400" style={{ width: "85%" }} />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">HbA1c</span>
                          <span className="text-cyan-400">0.35</span>
                        </div>
                        <div className="h-1 bg-cyan-400/40 rounded-full overflow-hidden">
                          <div className="h-full bg-cyan-400" style={{ width: "70%" }} />
                        </div>
                      </div>
                    </div>

                    {/* Grad-CAM Activations Grid */}
                    <div className="p-2 rounded bg-black/40 border border-white/5 flex flex-col items-center justify-between">
                      <span className="text-[9px] text-white/50 uppercase font-mono font-bold w-full text-left">Grad-CAM Heat</span>
                      <div className="grid grid-cols-3 gap-0.5 mt-1 bg-black p-0.5 rounded border border-white/5">
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-rose-500/60 rounded-[1px] animate-pulse" />
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-rose-500 rounded-[1px] animate-pulse" />
                        <div className="w-2.5 h-2.5 bg-rose-500/60 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                        <div className="w-2.5 h-2.5 bg-cyan-950/40 rounded-[1px]" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </div>

          {/* ================================================================= */}
          {/* CONNECTOR 1: EDGE TO PRIVACY                                      */}
          {/* ================================================================= */}
          <FlowConnector 
            colorClass="text-cyan-400" 
            isActive={isPathActive(1)} 
            label="Gradients Upload"
          />

          {/* ================================================================= */}
          {/* COLUMN 2: ZONE 2 - PRIVACY SHIELD                                 */}
          {/* ================================================================= */}
          <div 
            className={`flex-1 transition-all duration-500 ${
              isCardActive(2) ? "opacity-100 scale-100" : "opacity-30 scale-[0.98] blur-[1px]"
            }`}
          >
            <SpotlightCard
              spotlightColor="rgba(16, 185, 129, 0.15)"
              className={`relative h-full flex flex-col bg-black/40 border rounded-[2rem] p-6 transition-all duration-500 shadow-xl overflow-hidden group ${
                isCardActive(2) ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.05)]" : "border-white/5"
              }`}
            >
              {/* Neon accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
              
              {/* Zone Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-[10px] font-bold uppercase tracking-widest text-emerald-400/90 w-fit mx-auto mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Zone 2: Privacy Shield
              </div>

              <h3 className="text-white/90 font-extrabold text-lg md:text-xl tracking-tight leading-snug mb-0.5 text-center">
                DP Communication Bridge
              </h3>
              <p className="text-white/45 text-[10px] font-mono mb-4 uppercase tracking-wider text-center">Sanitize local parameters</p>

              <div className="flex flex-col gap-6 mt-auto">
                
                {/* 1. Animated Wave SVG */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3 text-emerald-400 border-b border-white/5 pb-2 mb-3">
                    <div className="flex items-center gap-1.5 justify-center">
                      <LockKeyhole className="w-4 h-4" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">DP Signal Sanitizer</span>
                    </div>
                  </div>
                  
                  {/* SVG Signal flow */}
                  <div className="relative flex flex-col gap-1 items-center justify-center">
                    <svg className="w-full h-16 bg-black/60 rounded border border-white/5 p-1" viewBox="0 0 200 60">
                      {/* Smooth left wave */}
                      <path d="M 5 30 Q 25 10 45 30 T 85 30" fill="none" stroke="#10b981" strokeWidth="1.5" className="opacity-40" />
                      {/* Filter Gate */}
                      <line x1="95" y1="5" x2="95" y2="55" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" className="animate-pulse" />
                      {/* Lock symbol */}
                      <g transform="translate(85, 20)">
                        <rect x="2.5" y="2.5" width="15" height="15" rx="3" fill="#022c22" stroke="#10b981" strokeWidth="1.5" />
                        <path d="M 6 5 L 6 2.5 C 6 0, 14 0, 14 2.5 L 14 5" fill="none" stroke="#10b981" strokeWidth="1.5" />
                      </g>
                      {/* Noisy output wave */}
                      <path d="M 105 30 L 110 25 L 115 35 L 120 20 L 125 40 L 130 25 L 135 35 L 140 15 L 145 45 L 150 30 L 155 35 L 160 20 L 165 40 L 170 25 L 175 35 L 180 30 L 195 30" fill="none" stroke="#34d399" strokeWidth="1.5" className="drop-shadow-[0_0_4px_rgba(52,211,153,0.4)]" />
                    </svg>
                    <div className="flex justify-between w-full text-[9px] font-mono text-emerald-400 px-1 mt-1">
                      <span>Raw Updates</span>
                      <span>Opacus DP-SGD Guard</span>
                      <span>Noisy Updates</span>
                    </div>
                  </div>
                </div>

                {/* 2. Parameters Instrument Panel */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-emerald-400">
                    <Sliders className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Noise Injector Parameters</span>
                  </div>
                  
                  <div className="flex flex-col gap-3 font-mono text-[10px]">
                    {/* Noise Multiplier (Sigma) */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-emerald-300">
                        <span>Noise Multiplier ($\sigma$)</span>
                        <span>0.8</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "80%" }} />
                      </div>
                    </div>
                    
                    {/* Clip Threshold */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-emerald-300">
                        <span>Clip Threshold ($C$)</span>
                        <span>1.0</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "100%" }} />
                      </div>
                    </div>

                    {/* Privacy Budget Epsilon */}
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-emerald-300">
                        <span>Privacy Budget ($\epsilon$)</span>
                        <span>4.2 (Strict)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "42%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Security Status Box */}
                <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-950/5 flex flex-col items-center justify-center gap-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold animate-[pulse_2s_infinite]">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-[0_0_8px_#10b981]" />
                    STATUS: ENCRYPTED & SECURE
                  </div>
                  <p className="text-[10px] font-mono text-white/50 text-center">
                    Mathematical Differential Privacy Bounds Guarantee Zero Patient Exposure.
                  </p>
                </div>

              </div>
            </SpotlightCard>
          </div>

          {/* ================================================================= */}
          {/* CONNECTOR 2: PRIVACY TO SERVER                                    */}
          {/* ================================================================= */}
          <FlowConnector 
            colorClass="text-emerald-400" 
            isActive={isPathActive(2)} 
            label="Sanitized Gradients"
          />

          {/* ================================================================= */}
          {/* COLUMN 3: ZONE 3 - CENTRAL SERVER                                 */}
          {/* ================================================================= */}
          <div 
            className={`flex-1 transition-all duration-500 ${
              isCardActive(3) ? "opacity-100 scale-100" : "opacity-30 scale-[0.98] blur-[1px]"
            }`}
          >
            <SpotlightCard
              spotlightColor="rgba(139, 92, 246, 0.15)"
              className={`relative h-full flex flex-col bg-black/40 border rounded-[2rem] p-6 transition-all duration-500 shadow-xl overflow-hidden group ${
                isCardActive(3) ? "border-purple-500/40 shadow-[0_0_30px_rgba(139,92,246,0.05)]" : "border-white/5"
              }`}
            >
              {/* Neon accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-80" />
              
              {/* Zone Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-950/20 text-[10px] font-bold uppercase tracking-widest text-purple-400/90 w-fit mx-auto mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Zone 3: Central Server
              </div>

              <h3 className="text-white/90 font-extrabold text-lg md:text-xl tracking-tight leading-snug mb-0.5 text-center">
                Aggregation & Fairness
              </h3>
              <p className="text-white/45 text-[10px] font-mono mb-4 uppercase tracking-wider text-center">Demographic Gap Correction</p>

              <div className="flex flex-col gap-6 mt-auto">
                
                {/* 1. Pre-Aggregation Non-IID Map */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center text-purple-400 border-b border-white/5 pb-2 mb-3">
                    <div className="flex items-center gap-1.5 justify-center">
                      <Network className="w-4 h-4" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">Pre-Aggregation Audits</span>
                    </div>
                  </div>

                  {/* Satellite Diagram */}
                  <div className="flex items-center justify-center p-2 rounded bg-black/50 border border-white/5 relative h-20 overflow-hidden">
                    {/* Satellite Nodes */}
                    <div className="absolute top-2 left-3 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    <div className="absolute top-8 left-2 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    <div className="absolute bottom-2 left-4 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    
                    <div className="absolute top-2 right-3 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    <div className="absolute top-8 right-2 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    <div className="absolute bottom-2 right-4 w-2.5 h-2.5 rounded-full bg-cyan-400/60 shadow-[0_0_4px_cyan]" />
                    
                    {/* Connecting wires */}
                    <svg className="absolute inset-0 w-full h-full stroke-purple-400/30 stroke-[0.75] stroke-dasharray-[2_2] fill-none" viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M 10 10 L 50 25 M 5 25 L 50 25 M 12 40 L 50 25 M 90 10 L 50 25 M 95 25 L 50 25 M 88 40 L 50 25" />
                    </svg>

                    {/* Central Aggregation Server */}
                    <div className="relative w-8 h-8 rounded-full bg-purple-950/60 border border-purple-500 flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)] animate-pulse">
                      <Server className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-purple-300 mt-2 px-1">
                    <span>Label Skew: Calibrated</span>
                    <span>Covariate Shift: Managed</span>
                  </div>
                </div>

                {/* 2. Fairness Impact Chart */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-3 text-purple-400">
                    <Scale className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">Demographic Parity Gap</span>
                  </div>
                  
                  {/* Visual Bar chart comparing disparity gap */}
                  <div className="flex flex-col gap-3 font-mono text-[10px]">
                    <span className="text-[9px] text-white/50 uppercase">Recall Disparity Gap (Lower = Fairer)</span>
                    
                    {/* Standard FedAvg */}
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-white/70">Std FedAvg</span>
                      <div className="flex-1 h-3 bg-white/5 rounded overflow-hidden relative">
                        <div className="h-full bg-rose-500/60" style={{ width: "82%" }} />
                        <span className="absolute inset-y-0 right-2 flex items-center text-[8px] text-white font-extrabold">8.2%</span>
                      </div>
                    </div>

                    {/* Fairness-Aware FedAvg */}
                    <div className="flex items-center gap-2">
                      <span className="w-20 text-purple-400 font-bold">Fair FedAvg</span>
                      <div className="flex-1 h-3 bg-white/5 rounded overflow-hidden relative">
                        <div className="h-full bg-purple-500 shadow-[0_0_8px_#a855f7]" style={{ width: "21%" }} />
                        <span className="absolute inset-y-0 right-2 flex items-center text-[8px] text-purple-200 font-extrabold">2.1%</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Improvement Tag */}
                  <div className="mt-3 flex items-center justify-center gap-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono py-1 rounded">
                    <span className="text-emerald-500 font-bold">↓ 74.4% Bias Gap Reduction</span>
                  </div>
                </div>

                {/* 3. Verification Badge */}
                <div className="flex gap-2.5 items-center text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-2.5 rounded-xl border border-emerald-500/20 justify-center">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span className="uppercase tracking-wider font-mono">Demographic Gaps Redressed</span>
                </div>

              </div>
            </SpotlightCard>
          </div>

          {/* ================================================================= */}
          {/* CONNECTOR 3: SERVER TO OUTPUT                                     */}
          {/* ================================================================= */}
          <FlowConnector 
            colorClass="text-rose-400" 
            isActive={isPathActive(3)} 
            label="Global Weights"
          />

          {/* ================================================================= */}
          {/* COLUMN 4: ZONE 4 - SEQUENTIAL RISK                                */}
          {/* ================================================================= */}
          <div 
            className={`flex-1 transition-all duration-500 ${
              isCardActive(4) ? "opacity-100 scale-100" : "opacity-30 scale-[0.98] blur-[1px]"
            }`}
          >
            <SpotlightCard
              spotlightColor="rgba(244, 63, 94, 0.15)"
              className={`relative h-full flex flex-col bg-black/40 border rounded-[2rem] p-6 transition-all duration-500 shadow-xl overflow-hidden group ${
                isCardActive(4) ? "border-rose-500/40 shadow-[0_0_30px_rgba(244,63,94,0.05)]" : "border-white/5"
              }`}
            >
              {/* Neon accent top bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-80" />
              
              {/* Zone Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-950/20 text-[10px] font-bold uppercase tracking-widest text-rose-400/90 w-fit mx-auto mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                Zone 4: Final Output
              </div>

              <h3 className="text-white/90 font-extrabold text-lg md:text-xl tracking-tight leading-snug mb-0.5 text-center">
                Sequential Risk Cascade
              </h3>
              <p className="text-white/45 text-[10px] font-mono mb-4 uppercase tracking-wider text-center">Fuzzy Complication Mapping</p>

              <div className="flex flex-col gap-6 mt-auto">
                
                {/* 1. Complication Flow Cascade & Simulation */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-rose-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center text-rose-400 border-b border-white/5 pb-2 mb-3">
                    <div className="flex items-center gap-1.5 justify-center">
                      <GitBranch className="w-4 h-4" />
                      <span className="text-xs font-extrabold uppercase tracking-wider">Interactive Complications Chain</span>
                    </div>
                  </div>

                  {/* Chain Steps */}
                  <div className="flex flex-col gap-2 relative">
                    
                    {/* Stage 1 */}
                    <div className={`flex items-center justify-between p-2 rounded border font-mono text-[10px] transition-all duration-500 ${
                      cascadeStep >= 1 ? "bg-cyan-950/40 border-cyan-500/50 text-cyan-300" : "bg-black/40 border-white/5 text-white/30"
                    }`}>
                      <span className="uppercase text-[8px] font-bold">Stage 1</span>
                      <span className="font-extrabold text-[11px]">Diabetes Status</span>
                      <span>{cascadeStep >= 1 ? "HbA1c > 6.5%" : "Pending"}</span>
                    </div>
                    
                    {/* Arrow down */}
                    <div className="flex justify-center -my-1">
                      <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-500 ${cascadeStep >= 2 ? "text-cyan-400" : "text-white/10"}`} />
                    </div>

                    {/* Stage 2 */}
                    <div className={`flex items-center justify-between p-2 rounded border font-mono text-[10px] transition-all duration-500 ${
                      cascadeStep >= 2 ? "bg-orange-950/40 border-orange-500/50 text-orange-300" : "bg-black/40 border-white/5 text-white/30"
                    }`}>
                      <span className="uppercase text-[8px] font-bold">Stage 2</span>
                      <span className="font-extrabold text-[11px]">Nephropathy (Stage 1)</span>
                      <span>{cascadeStep >= 2 ? "88% Conf." : "Pending"}</span>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center -my-1">
                      <ChevronDown className={`w-3.5 h-3.5 transition-colors duration-500 ${cascadeStep >= 3 ? "text-orange-400" : "text-white/10"}`} />
                    </div>

                    {/* Stage 3 */}
                    <div className={`flex items-center justify-between p-2 rounded border font-mono text-[10px] transition-all duration-500 ${
                      cascadeStep >= 3 ? "bg-rose-950/60 border-rose-500/70 text-rose-300 shadow-[0_0_10px_rgba(244,63,94,0.2)]" : "bg-black/40 border-white/5 text-white/30"
                    }`}>
                      <span className="uppercase text-[8px] font-bold">Stage 3</span>
                      <span className="font-extrabold text-[11px]">CVD Complication Risk</span>
                      <span>{cascadeStep >= 3 ? "94.5% Risk" : "Pending"}</span>
                    </div>

                  </div>

                  {/* Simulator Control Trigger */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={startSimulation}
                      disabled={isSimulating}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-black uppercase cursor-pointer transition-all border ${
                        isSimulating 
                          ? "bg-rose-950/20 border-rose-500/20 text-rose-400/40" 
                          : "bg-rose-500 border-rose-400 text-black hover:bg-rose-400 shadow-[0_0_12px_rgba(244,63,94,0.3)] active:scale-95"
                      }`}
                    >
                      <Play className="w-3.5 h-3.5 fill-black stroke-none" />
                      {isSimulating ? "Cascading..." : cascadeStep > 0 ? "Re-Run Cascade" : "Run Cascade"}
                    </button>
                    {cascadeStep > 0 && (
                      <button
                        onClick={resetSimulation}
                        className="p-2 rounded-lg border border-white/10 bg-black/40 hover:bg-white/5 text-white/60 hover:text-white cursor-pointer"
                        title="Reset Simulation"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* 2. CVD Complication Risk Dial Gauge */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-rose-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center gap-1.5 mb-4 text-rose-400">
                    <Activity className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-wider">CVD Risk probability meter</span>
                  </div>

                  {/* Radial Dial Indicator */}
                  <div className="relative flex flex-col items-center justify-center">
                    <svg className="w-32 h-32 transform -rotate-90 overflow-visible" viewBox="0 0 80 80">
                      {/* Gray base circle */}
                      <circle cx="40" cy="40" r="32" fill="none" stroke="#ffffff10" strokeWidth="6" />
                      {/* Colored progression arc */}
                      <circle 
                        cx="40" 
                        cy="40" 
                        r="32" 
                        fill="none" 
                        stroke="url(#roseGradient)" 
                        strokeWidth="6" 
                        strokeLinecap="round"
                        strokeDasharray="201" 
                        strokeDashoffset={201 - (201 * simulatedRisk) / 100}
                        className="transition-all duration-300"
                      />
                      {/* Gradient definition */}
                      <defs>
                        <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ec4899" />
                          <stop offset="100%" stopColor="#f43f5e" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Numeric overlay in center */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-black text-white font-mono tracking-tighter drop-shadow-[0_0_10px_rgba(244,63,94,0.4)]">
                        {simulatedRisk}%
                      </span>
                      <span className="text-[9px] uppercase tracking-wider text-rose-400 font-bold font-mono">CVD Risk</span>
                    </div>
                  </div>
                </div>

                {/* 3. Fuzzy Logic Diagram */}
                <div className="p-4 rounded-xl border border-rose-500/10 bg-rose-950/5">
                  <span className="text-[9px] font-mono text-rose-400 block mb-2 uppercase font-extrabold text-center">Fuzzy Logic Boundary Map</span>
                  
                  <div className="flex items-center justify-between gap-2">
                    <svg className="w-24 h-8 stroke-rose-400 stroke-1 fill-none opacity-80" viewBox="0 0 100 30">
                      {/* Left Curve */}
                      <path d="M 5 25 L 30 5 L 60 25" stroke="#ec4899" strokeWidth="1.5" />
                      {/* Right Curve */}
                      <path d="M 40 25 L 70 5 L 95 25" stroke="#38bdf8" strokeWidth="1.5" />
                      {/* Intersecting region fill pattern */}
                      <path d="M 40 25 L 50 13 L 60 25 Z" fill="rgba(244,63,94,0.15)" stroke="none" />
                    </svg>
                    <span className="text-[9px] font-mono text-white/50 leading-tight">
                      Maps Kidney damage indices directly into heart failure risks under clinical noise boundaries.
                    </span>
                  </div>
                </div>

              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* Blueprint Footer / Map Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-xl border border-white/5 bg-white/[0.01] px-6 py-3 text-white/50 text-xs md:text-sm">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Cyan: Local Multimodal Processing
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Green: Opacus DP-SGD Guard
            </span>
            <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Purple: Server Fairness Aggregator
            </span>
            <span className="flex items-center gap-1.5 text-rose-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              Rose: Fuzzy Sequential Risk Complications
            </span>
          </div>
        </motion.div>

      </div>

      {/* Floating inline animation styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes dash {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash {
          animation: dash 1.5s linear infinite;
        }
        .animate-dash-reverse {
          animation: dash 1.5s linear infinite;
        }
      `}} />
    </section>
  )
}

// Inner Helper Component: Responsive Connector with animated SVG flows
interface FlowConnectorProps {
  colorClass: string
  isActive: boolean
  label: string
}

function FlowConnector({ colorClass, isActive, label }: FlowConnectorProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-16 h-16 lg:h-auto my-2 lg:my-0 flex-shrink-0 relative">
      
      {/* Connector Label tooltip on hover */}
      {isActive && (
        <span className={`hidden lg:block absolute -top-8 px-2 py-1 rounded bg-black/80 border border-white/10 text-xs font-mono font-bold whitespace-nowrap z-20 ${colorClass}`}>
          {label}
        </span>
      )}

      {/* Desktop Horizontal Connecting Arrow */}
      <svg className="hidden lg:block w-full h-8 overflow-visible" viewBox="0 0 64 32" preserveAspectRatio="none">
        <defs>
          <marker 
            id={`arrow-h-${colorClass}`} 
            viewBox="0 0 10 10" 
            refX="6" 
            refY="5" 
            markerWidth="5" 
            markerHeight="5" 
            orient="auto"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="currentColor" className={colorClass} />
          </marker>
        </defs>
        <path 
          d="M 0 16 L 56 16" 
          stroke="currentColor" 
          strokeWidth={isActive ? "2.5" : "1.5"} 
          strokeDasharray={isActive ? "6 4" : "none"}
          className={`${colorClass} ${isActive ? "animate-dash" : "opacity-15"} transition-all duration-500`}
          markerEnd={`url(#arrow-h-${colorClass})`}
        />
      </svg>

      {/* Mobile Vertical Connecting Arrow */}
      <svg className="block lg:hidden w-8 h-full overflow-visible" viewBox="0 0 32 64" preserveAspectRatio="none">
        <defs>
          <marker 
            id={`arrow-v-${colorClass}`} 
            viewBox="0 0 10 10" 
            refX="5" 
            refY="6" 
            markerWidth="5" 
            markerHeight="5" 
            orient="auto"
          >
            <path d="M 1.5 0 L 5 8 L 8.5 0 z" fill="currentColor" className={colorClass} />
          </marker>
        </defs>
        <path 
          d="M 16 0 L 16 54" 
          stroke="currentColor" 
          strokeWidth={isActive ? "2.5" : "1.5"} 
          strokeDasharray={isActive ? "6 4" : "none"}
          className={`${colorClass} ${isActive ? "animate-dash-reverse" : "opacity-15"} transition-all duration-500`}
          markerEnd={`url(#arrow-v-${colorClass})`}
        />
      </svg>
    </div>
  )
}
