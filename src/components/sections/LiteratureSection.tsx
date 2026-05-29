"use client"

import { motion, Variants } from "framer-motion"
import { BookOpen, Target, AlertTriangle, HelpCircle, Shield } from "lucide-react"

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
}
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
}

function SectionBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/[0.08] border border-cyan-400/20 mb-6">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-cyan-400/80">{label}</span>
    </div>
  )
}

const objectives = [
  {
    num: "01",
    title: "Multimodal Integration",
    desc: "Integrate retinal fundus imaging with structured EHR data without centralizing records — fusing features at the edge for a holistic patient profile."
  },
  {
    num: "02",
    title: "Personalized Multi-Task Learning",
    desc: "Multi-task federated architectures predict interrelated comorbidities (hypertension, heart failure) adapted to local non-IID hospital distributions."
  },
  {
    num: "03",
    title: "Sequential Risk Forecasting",
    desc: "Chain-model architecture forecasts sequential onset of long-term risks — Nephropathy → CVD — and 30-day hospital readmission events."
  },
  {
    num: "04",
    title: "Fairness-Aware XAI",
    desc: "SHAP, Grad-CAM, and fairness mechanisms ensure decentralized predictions remain transparent, equitable, and clinically trustworthy."
  }
]

const frontiers = [
  {
    num: "01",
    title: "Multimodal detection",
    desc: "Fusing EHR with retinal fundus imaging inside federated networks for early, accurate diabetes detection — without centralizing patient data."
  },
  {
    num: "02",
    title: "Multi-task personalization",
    desc: "Personalized MTFL architectures adapt to local hospital distributions while simultaneously predicting interrelated comorbidities."
  },
  {
    num: "03",
    title: "Complication risk forecasting",
    desc: "Expanding beyond initial diagnosis toward long-term complication forecasting and 30-day hospital readmission prediction."
  },
  {
    num: "04",
    title: "Fairness-aware XAI",
    desc: "SHAP and Grad-CAM explainability combined with demographic fairness constraints — a mandatory requirement for decentralized clinical AI."
  }
]

const stats = [
  { num: "537M+", label: "Diabetics globally" },
  { num: "HIPAA", label: "Privacy regulation" },
  { num: "Non-IID", label: "Core bottleneck" },
  { num: "0 E2E", label: "Frameworks exist" }
]

export function LiteratureSection() {
  return (
    <section
      id="literature"
      className="w-full relative px-4 md:px-8 py-24 bg-black border-t border-white/[0.07] overflow-hidden"
    >
      {/* Ambient cyan glows */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-cyan-500/[0.045] rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {/* Header */}
          <motion.div variants={item} className="text-center md:text-left">
            <SectionBadge label="Domain Background" />
          </motion.div>
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl lg:text-[58px] font-black tracking-tight text-white leading-[1.03] mb-4 text-center md:text-left"
          >
            Literature Survey<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
              &amp; Objectives
            </span>
          </motion.h2>
          <motion.p variants={item} className="text-[15px] text-white/50 max-w-lg mb-14 leading-relaxed text-center md:text-left">
            Mapping the research frontier — from critical gaps to targeted solutions in privacy-preserving clinical AI.
          </motion.p>

          {/* TOP ROW: Gap + Problem */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* Research Gap (Danger/Red) */}
            <div className="group relative rounded-[22px] bg-white/[0.02] border border-white/[0.07] p-8 overflow-hidden hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-[13px] bg-red-500/10 border border-red-500/25 flex items-center justify-center mb-5">
                  <Shield className="w-5 h-5 text-red-400" />
                </div>
                <span className="inline-flex text-[12px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-red-500/[0.08] border border-red-500/20 text-red-400 mb-4">
                  02 · Gap
                </span>
                <h3 className="text-[22px] font-black text-white tracking-tight mb-3">Research Gap</h3>
                <p className="text-[16px] text-white/60 leading-[1.7]">
                  Current federated models are primarily{" "}
                  <strong className="text-white/80 font-semibold">unimodal</strong>, struggle with{" "}
                  <strong className="text-white/80 font-semibold">non-IID heterogeneity</strong> across hospitals,
                  fail to predict sequential complications, and lack integrated fairness-aware explainability.
                  No end-to-end framework addresses all of these simultaneously.
                </p>
                <div className="mt-5 p-4 rounded-[13px] bg-red-500/[0.06] border border-red-500/[0.2] flex gap-3 items-start">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[14px] font-bold text-red-400 mb-1">The Non-IID bottleneck</p>
                    <p className="text-[16px] text-white/50 leading-relaxed">
                      Classic FedAvg collapses; our team identified a "Moderate Heterogeneity" score of 0.33 using a 6-metric framework, which strongly justifies shifting toward personalized and fairness-aware aggregation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Problem (Primary/Cyan) */}
            <div className="group relative rounded-[22px] bg-white/[0.02] border border-white/[0.07] p-8 overflow-hidden hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-[13px] bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center mb-5">
                  <HelpCircle className="w-5 h-5 text-cyan-400" />
                </div>
                <span className="inline-flex text-[12px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-cyan-400/[0.08] border border-cyan-400/20 text-cyan-400 mb-4">
                  03 · Problem
                </span>
                <h3 className="text-[22px] font-black text-white tracking-tight mb-3">Research Problem</h3>
                <p className="text-[16px] text-white/60 leading-[1.85] text-justify">
                  How can a{" "}
                  <strong className="text-white/80 font-semibold">decentralized, privacy-preserving ML framework</strong>{" "}
                  be developed that fuses multimodal data (EHR + retinal images) to predict undiagnosed diabetes
                  alongside interrelated comorbidities (Hypertension, Heart Failure, Nephropathy, and Cardiovascular Disease (CVD)), while ensuring{" "}
                  <strong className="text-white/80 font-semibold">demographic fairness</strong> and clinical
                  interpretability across heterogeneous hospital networks?
                </p>
                <div className="mt-6 px-5 py-4 rounded-[13px] bg-cyan-400/[0.04] border border-cyan-400/[0.12] relative">
                  <span className="absolute -top-4 left-4 text-[40px] text-cyan-400/25 leading-none font-serif select-none">&ldquo;</span>
                  <p className="text-[16px] text-white/50 leading-[1.75] italic mt-2">
                    A framework that is private by design, multimodal by architecture, fair by measure, and explainable by default.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOTTOM ROW: Survey + Objectives */}
          <div className="grid lg:grid-cols-12 gap-6">

            {/* LITERATURE SURVEY BLOCK */}
            <motion.div
              variants={item}
              className="lg:col-span-7 relative rounded-[22px] bg-white/[0.02] border border-white/[0.07] p-8 md:p-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-56 h-56 rounded-full bg-cyan-500/[0.05] blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black text-white tracking-tight">Literature Survey</h3>
                    <p className="text-[12px] text-white/50 font-bold uppercase tracking-widest mt-1">01 · Background</p>
                  </div>
                </div>

                <p className="text-[16px] text-white/60 leading-[1.85] mb-8 text-justify">
                  <span className="text-[52px] float-left mr-3 mt-1 leading-[0.8] font-black text-cyan-400 select-none">T</span>
                  he intersection of artificial intelligence, privacy-preserving distributed networks, and explainability
                  forms the critical frontier of modern healthcare research. Traditional centralized models are being rapidly
                  supplanted by{" "}
                  <strong className="text-white/80 font-semibold">Federated Learning (FL)</strong> frameworks to mitigate
                  data silos and comply with HIPAA/GDPR. Recent literature emphasizes adaptive personalization,{" "}
                  <strong className="text-white/80 font-semibold">multimodal fusion</strong>, and Explainable AI (XAI) to
                  achieve scalable and clinically trustworthy predictive analytics.
                </p>

                {/* Stat strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.07] rounded-[14px] overflow-hidden border border-white/[0.07] mb-8">
                  {stats.map((s, i) => (
                    <div
                      key={i}
                      className="bg-black py-4 px-4 text-center hover:bg-cyan-400/[0.04] transition-colors cursor-default"
                    >
                      <p className="text-xl font-black text-cyan-400 tracking-tight leading-none mb-1.5">{s.num}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/50 leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Frontier rows */}
                <div className="border-t border-white/[0.07] pt-6">
                  {frontiers.map((f, i) => (
                    <div
                      key={i}
                      className="group flex gap-4 py-4 border-b border-white/[0.05] last:border-b-0 items-start cursor-default"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/50 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-200">
                        {f.num}
                      </div>
                      <div>
                        <p className="text-[16px] font-bold text-white/80 group-hover:text-white mb-1 transition-colors duration-200">{f.title}</p>
                        <p className="text-[14px] text-white/50 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* OBJECTIVES BLOCK */}
            <motion.div
              variants={item}
              className="lg:col-span-5 relative rounded-[22px] bg-white/[0.02] border border-white/[0.07] p-8 md:p-10 overflow-hidden flex flex-col"
            >
              <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-cyan-500/[0.05] blur-3xl pointer-events-none" />
              <div className="relative z-10 flex-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-[22px] font-black text-white tracking-tight">Research Objectives</h3>
                    <p className="text-[12px] text-white/50 font-bold uppercase tracking-widest mt-1">04 · Targeted Solutions</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 flex-1">
                  {objectives.map((o, i) => (
                    <div
                      key={i}
                      className="group relative rounded-[16px] border border-white/[0.07] bg-white/[0.02] p-5 cursor-default overflow-hidden hover:bg-white/[0.04] hover:border-cyan-400/25 hover:-translate-y-[2px] transition-all duration-250"
                    >
                      {/* animated bottom bar on hover */}
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-400" />
                      <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-cyan-400/80 mb-2">
                        Objective {o.num}
                      </p>
                      <h4 className="text-[15px] font-bold text-white/90 mb-2">{o.title}</h4>
                      <p className="text-[14px] text-white/60 leading-[1.65]">{o.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}