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
        { name: "Hybrid Privacy-Preserving Scaling", desc: "Employs global categorical encoding combined with local numeric scaling per hospital to prevent statistical data leakage." },
        { name: "Non-IID Quantification", desc: "Utilizes a 6-metric framework (including Jensen-Shannon divergence and Covariate shift) to measure data heterogeneity across federated nodes." },
        { name: "Fairness-Aware FedAvg", desc: "Integrates real-time gender fairness monitoring directly into the federated training loop to achieve a recall gap of less than 3%." },
        { name: "Explainability Audit", desc: "Validates feature importance using a 3-run SHAP stability assessment and a comprehensive 6-metric fairness audit." }
      ]
    },
    {
      title: "Personalized Multi-Task FL",
      researcher: "Hansamalee Ekanayake",
      icon: Layers,
      borderColor: "border-purple-500/50",
      bgColor: "bg-purple-500/5",
      accent: "text-purple-400",
      points: [
        { name: "Multi-Task Architecture", desc: "Utilizes a shared-bottom neural network with a shared feature extractor and task-specific heads for simultaneously predicting related comorbidities like hypertension and heart failure." },
        { name: "Client-Specific Personalization", desc: "Adapts the global model to local non-IID data distributions using MAML-inspired local fine-tuning, L2 regularization, and adaptive parameter sharing." },
        { name: "Privacy & Aggregation", desc: "Protects patient data by injecting Gaussian noise via Differential Privacy (DP) and employing secure aggregation protocols." },
        { name: "Federated Averaging (FedAvg)", desc: "Aggregates weighted client updates centrally while monitoring post-aggregation demographic parity to ensure equitable predictions." }
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
        { name: "Chain Model Architecture", desc: "Implements a sequential prediction framework mapping disease progression: Diabetes Status → Nephropathy Risk → Cardiovascular Disease (CVD) Risk." },
        { name: "Differential Privacy (DP)", desc: "Injects calibrated DP noise directly at the data preprocessing level to protect sensitive attributes and ensure an anonymized dataset." },
        { name: "Dependency Modeling", desc: "Exploits the conditional dependencies between complications, using the nephropathy risk output alongside patient data to calculate the subsequent CVD risk." },
        { name: "Bias Mitigation", desc: "Enforces equal opportunity and demographic parity constraints to ensure consistent prediction accuracy across gender, age, and ethnicity." }
      ]
    },
    {
      title: "Multimodal Detection Fusion",
      researcher: "Perera K.T.D. / Tharushika",
      icon: Eye,
      borderColor: "border-blue-500/50",
      bgColor: "bg-blue-500/5",
      accent: "text-blue-400",
      points: [
        { name: "Multimodal Data Integration", desc: "Fuses high-resolution retinal fundus images with structured Electronic Health Records (EHR) to provide a holistic patient representation." },
        { name: "Hybrid Neural Networks", desc: "Extracts visual features using Convolutional Neural Networks (ResNet-18) while a Multilayer Perceptron (MLP) processes structured clinical patterns." },
        { name: "Late Fusion & FedAvg", desc: "Combines model outputs via attention or concatenation mechanisms, utilizing Federated Averaging across hospitals without sharing raw patient data." },
        { name: "Dual Explainable AI (XAI)", desc: "Generates SHAP values to quantify the impact of tabular EHR features, and Grad-CAM heatmaps to visually isolate microvascular damage in retinal scans." }
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
