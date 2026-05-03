"use client"

import { motion, Variants } from "framer-motion"
import { Layers, Activity, GitBranch, Eye } from "lucide-react"

export function MethodologySection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
  }

  const methodologies = [
    {
      title: "30-Day Readmission & Fairness",
      researcher: "Upendra M.M.S.",
      icon: Activity,
      borderColor: "border-emerald-500/50",
      bgColor: "bg-emerald-500/5",
      accent: "text-emerald-400",
      points: [
        { name: "Hybrid Scaling", desc: "Global categorical encoding + local numeric scaling." },
        { name: "Non-IID Quantification", desc: "Using a 6-metric framework including Jensen-Shannon divergence and Covariate shift." },
        { name: "Fairness-Aware FedAvg", desc: "Implementation of fairness-aware FedAvg with real-time gender fairness monitoring to achieve a recall gap of <3%." },
        { name: "Explainability Audit", desc: "Validation of feature importance via 3-run SHAP stability assessment." }
      ]
    },
    {
      title: "Personalized Multi-Task FL",
      researcher: "Ekanayake E.M.C.H.",
      icon: Layers,
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/5",
      accent: "text-purple-400",
      points: [
        { name: "Shared-Bottom Architecture", desc: "Neural network architecture for simultaneous prediction of hypertension and heart failure." },
        { name: "Layer-Wise Personalization", desc: "Adaptive personalization through local fine-tuning to achieve a 30.14% relative accuracy improvement." },
        { name: "Local Differential Privacy", desc: "Privacy preserved via Local DP-SGD with Gaussian noise injection." },
        { name: "Communication Efficiency", desc: "66.6% reduction in communication payload using hard-parameter sharing." }
      ]
    },
    {
      title: "Sequential Complication Risk",
      researcher: "A.D. Oshadhi Vibodha",
      icon: GitBranch,
      borderColor: "border-rose-500/50",
      bgColor: "bg-rose-500/5",
      accent: "text-rose-400",
      points: [
        { name: "Chain Model Framework", desc: "Mapping disease progression: Diabetes Status → Nephropathy → CVD Risk." },
        { name: "Dependency Exploitation", desc: "Uses a Stage 1 nephropathy risk 'Bridge Feature' to raise CVD AUC to 0.9452." },
        { name: "Calibrated DP Noise", desc: "Injection of calibrated Differential Privacy noise via the Opacus library." },
        { name: "Fuzzy Logic Interpretation", desc: "Use of fuzzy logic risk interpretation to handle clinical uncertainty." }
      ]
    },
    {
      title: "Multimodal Detection Fusion",
      researcher: "Perera K.T.D.",
      icon: Eye,
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/5",
      accent: "text-blue-400",
      points: [
        { name: "Multimodal Late Fusion", desc: "Late Fusion of structured EHR and high-resolution retinal fundus images." },
        { name: "Hybrid Architecture", desc: "Utilizing EfficientNet-B3 for visual features and MLP for clinical patterns." },
        { name: "Hardware Optimization", desc: "Optimized on NVIDIA A100 with feature pre-computation for 70% latency reduction." },
        { name: "Dual XAI Integration", desc: "Using SHAP for EHR and Grad-CAM for retinal microvascular damage localization." }
      ]
    }
  ]

  return (
    <section id="methodology" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">

      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1400px] relative z-10">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-mtfl font-bold mb-4 uppercase tracking-widest text-sm">
            Component Breakdown
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Pillar <span className="gradient-text">Methodologies</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-white/50 leading-relaxed font-light">
            Comprehensive architectural breakdown of the specific models, frameworks, and privacy engines deployed by each primary researcher in the MTFL consortium.
          </motion.p>
        </motion.div>

        {/* 4 Column Layout */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch"
        >
          {methodologies.map((col, idx) => {
            const Icon = col.icon
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`relative flex flex-col bg-black/40 border border-white/10 rounded-3xl overflow-hidden group hover:border-white/30 transition-all duration-500`}
              >
                {/* Colored Top Edge Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${col.bgColor} group-hover:h-1.5 transition-all duration-300`} />
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none ${col.bgColor.replace('/5', '')}`} />

                {/* Header Area */}
                <div className="p-8 pb-5 border-b border-white/5 relative z-10 bg-white/[0.02]">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border ${col.borderColor} ${col.bgColor}`}>
                    <Icon className={`w-6 h-6 ${col.accent}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight min-h-[64px]">{col.title}</h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider text-white/60">
                    {col.researcher}
                  </div>
                </div>

                {/* Points List */}
                <div className="p-8 pt-6 flex-1 flex flex-col gap-6 relative z-10">
                  {col.points.map((pt, pIdx) => (
                    <div key={pIdx} className="relative pl-5">
                      <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full ${col.bgColor.replace('/5', '')} border border-black shadow-[0_0_8px_currentColor] ${col.accent}`} />
                      <h4 className="text-white font-semibold text-sm mb-1.5">{pt.name}</h4>
                      <p className="text-white/50 text-xs leading-relaxed font-light">{pt.desc}</p>
                    </div>
                  ))}
                </div>

              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
