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
  ShieldCheck
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
          <p className="text-white/80 text-lg md:text-xl leading-relaxed font-normal mb-12">
            An enterprise-grade, privacy-preserving horizontal pipeline. Filter views dynamically on the HUD console below to highlight active cryptographic protections, local adaptions, bias mitigation, or complication risk cascades.
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
                  className={`px-6 py-3.5 rounded-xl text-sm md:text-base font-extrabold border transition-all duration-500 flex items-center gap-2.5 cursor-pointer ${
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-sm font-black uppercase tracking-widest text-cyan-400 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Zone 1: Local Edge
              </div>

              <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight leading-snug mb-3">
                Decentralized Hospital Clients
              </h3>
              
              <p className="text-white/80 text-base leading-relaxed mb-6 font-normal">
                Securely calculates local parameters directly on-site, ensuring patient privacy borders are never violated.
              </p>

              {/* Interlocking Inner Grid */}
              <div className="flex flex-col gap-4 mt-auto">
                
                {/* EHR & Retinal Inputs */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Database className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Multimodal Inputs</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    Tabular Clinical EHR + Retinal Fundus microvascular imagery.
                  </p>
                </div>

                {/* Late Fusion Engine */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Cpu className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Late Fusion Engine</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    EfficientNet-B3 Backbone & Multi-Layer Perceptron (MLP) concatenation with calibrated 0.90 threshold.
                  </p>
                </div>

                {/* Local Personalization */}
                <div className="p-4 rounded-xl border border-cyan-500/10 bg-cyan-950/5 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Sliders className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Adaptive Fine-Tuning</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    Bottom model layers are frozen while task heads undergo personalization for Hypertension & Heart Failure (+30.14% rel. accuracy).
                  </p>
                </div>

                {/* Local Dual XAI */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-cyan-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Activity className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Local Dual XAI Audits</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    Validates local predictions via SHAP feature attributions and Grad-CAM retinal heatmaps.
                  </p>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-sm font-black uppercase tracking-widest text-emerald-400 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Zone 2: Privacy Shield
              </div>

              <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight leading-snug mb-3">
                DP Communication Bridge
              </h3>
              
              <p className="text-white/80 text-base leading-relaxed mb-6 font-normal">
                Gradients pass through a local differential privacy bridge to guarantee compliance and sanitize patient identifiers.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                
                {/* Shield Pulse Box */}
                <div className="flex flex-col items-center justify-center p-6 border border-emerald-500/20 bg-emerald-500/5 rounded-2xl relative overflow-hidden group-hover:border-emerald-400 transition-colors">
                  <div className="absolute inset-0 bg-emerald-500/5 animate-pulse" />
                  <Lock className="w-10 h-10 text-emerald-400 mb-2 relative z-10 animate-glow-pulse" />
                  <span className="text-white font-black text-base text-center relative z-10">Opacus DP-SGD Active</span>
                </div>

                {/* Privacy Configuration Grid */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-emerald-500/30 transition-all duration-300">
                  <span className="text-sm font-bold uppercase tracking-wider text-emerald-400 block mb-2">Noise Injector Parameters</span>
                  
                  <div className="flex flex-col gap-1.5 font-mono text-sm text-emerald-300">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>Clip Threshold (C)</span>
                      <span>1.0</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span>DP Engine</span>
                      <span>Opacus Core</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span>Target Budget</span>
                      <span>$\epsilon$-DP (Strict)</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-950/5">
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    Local updates are dynamically clipped and injected with calibrated Gaussian noise matching security budgets before upload.
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 text-sm font-black uppercase tracking-widest text-purple-400 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                Zone 3: Central Server
              </div>

              <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight leading-snug mb-3">
                Aggregation & Fairness
              </h3>
              
              <p className="text-white/80 text-base leading-relaxed mb-6 font-normal">
                Gradients undergo distribution audits before aggregation inside the fairness-optimized parameter engine.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                
                {/* 6-Metric Non-IID Box */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01] hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <Network className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Non-IID Pre-Filter</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal mb-2">
                    Evaluates update divergences across 6 strict metrics to detect covariate gaps.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1.5 text-xs text-purple-300 font-mono">
                    <span className="px-1.5 py-0.5 rounded bg-purple-950/30 border border-purple-500/10">Label Skew</span>
                    <span className="px-1.5 py-0.5 rounded bg-purple-950/30 border border-purple-500/10">Covariate Shift</span>
                  </div>
                </div>

                {/* Fairness FedAvg */}
                <div className="p-4 rounded-xl border border-purple-500/10 bg-purple-950/5 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2 text-purple-400">
                    <Scale className="w-4.5 h-4.5" />
                    <span className="text-sm font-bold uppercase tracking-wider">Demographic Fairness</span>
                  </div>
                  <p className="text-white/90 text-base leading-relaxed font-normal">
                    Weights parameter aggregation to minimize Demographic Parity recall gaps (shrinking Gender Recall Gap from 8.2% to 2.1%).
                  </p>
                </div>

                {/* Aggregation Badge */}
                <div className="flex gap-2.5 items-center text-sm text-emerald-400 font-bold bg-emerald-500/10 px-3 py-2 rounded-xl border border-emerald-500/20 w-fit mx-auto">
                  <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                  <span>Demographic Gaps Redressed</span>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-950/20 text-sm font-black uppercase tracking-widest text-rose-400 w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                Zone 4: Final Output
              </div>

              <h3 className="text-white font-extrabold text-xl md:text-2xl tracking-tight leading-snug mb-3">
                Sequential Risk Cascade
              </h3>
              
              <p className="text-white/80 text-base leading-relaxed mb-6 font-normal">
                Server weights parameterize a sequential fuzzy dependency bridge mapping risk complications chronologically.
              </p>

              <div className="flex flex-col gap-4 mt-auto">
                
                {/* Complication Flow Cascade */}
                <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
                  <span className="text-sm font-bold uppercase tracking-wider text-rose-400 block mb-3">Fuzzy Chain Model</span>
                  
                  <div className="flex flex-col gap-2 relative">
                    
                    {/* Stage 1 */}
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-rose-500/10">
                      <span className="text-xs text-white/40 uppercase font-mono">Stage 1</span>
                      <span className="text-sm font-bold text-white">Diabetes Status</span>
                      <span className="text-xs text-cyan-400 font-mono">Target Input</span>
                    </div>
                    
                    {/* Arrow down */}
                    <div className="flex justify-center -my-1">
                      <ChevronDown className="w-3.5 h-3.5 text-rose-400/40" />
                    </div>

                    {/* Stage 2 */}
                    <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-rose-500/10">
                      <span className="text-xs text-white/40 uppercase font-mono">Stage 2</span>
                      <span className="text-sm font-bold text-white">Nephropathy Stage</span>
                      <span className="text-xs text-rose-400 font-mono">Prediction</span>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center -my-1">
                      <ChevronDown className="w-3.5 h-3.5 text-rose-400/40" />
                    </div>

                    {/* Stage 3 */}
                    <div className="flex items-center justify-between p-2 rounded bg-rose-500/10 border border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]">
                      <span className="text-xs text-rose-300 uppercase font-mono">Stage 3</span>
                      <span className="text-sm font-bold text-rose-400">Cardiovascular Risk</span>
                      <span className="text-xs text-emerald-400 font-mono font-bold">AUC 0.9452</span>
                    </div>

                  </div>
                </div>

                <div className="p-4 rounded-xl border border-rose-500/10 bg-rose-950/5">
                  <p className="text-white/90 text-lg leading-relaxed font-normal">
                    Uses fuzzy logic mapping to manage clinical boundary uncertainty, projecting Stage 1 Nephropathy directly onto CVD risk likelihoods.
                  </p>
                </div>

                <div className="mt-6 flex gap-2 items-center justify-center font-mono text-base text-rose-400 bg-rose-500/5 px-4 py-2 rounded-lg border border-rose-500/10">
                  <span>Fuzzy Clinical Boundary Mapping Enabled</span>
                  <span>&bull;</span>
                  <span>Exploits Nephropathy stage to maximize CVD predictability</span>
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
          <div className="inline-flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-white/5 bg-white/[0.01] px-8 py-4 text-white/50 text-sm md:text-base">
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
