

"use client"

import { motion, useInView } from "framer-motion"
import { BarChart, PieChart, ScatterChart, LineChart, Network, ActivitySquare } from "lucide-react"
import { useRef } from "react"

const metrics = [
  {
    title: "Label Distribution Skew",
    short: "P(y) varies",
    description: "Variations in class distributions across edge clients. Occurs when different clinics serve unique patient demographics.",
    icon: PieChart,
    color: "#00d4ff",
    bg: "rgba(0,212,255,0.06)",
    border: "rgba(0,212,255,0.2)",
    glow: "rgba(0,212,255,0.15)",
    num: "01",
  },
  {
    title: "Feature Distribution Skew",
    short: "P(x|y) varies",
    description: "Differences in input features given the same label. Caused by heterogeneous sensing devices or distinct lab protocols.",
    icon: BarChart,
    color: "#00ff88",
    bg: "rgba(0,255,136,0.06)",
    border: "rgba(0,255,136,0.2)",
    glow: "rgba(0,255,136,0.15)",
    num: "02",
  },
  {
    title: "Quantity Skew",
    short: "Volume imbalance",
    description: "Imbalanced volume of local datasets. Regional hospitals may possess massive EHR repositories while wearables hold sparse data.",
    icon: ActivitySquare,
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.2)",
    glow: "rgba(96,165,250,0.15)",
    num: "03",
  },
  {
    title: "Label-Feature Correlation Skew",
    short: "P(y|x) varies",
    description: "The same input feature translates to a different clinical label across silos. Identical genetic markers interpreted differently.",
    icon: ScatterChart,
    color: "#c084fc",
    bg: "rgba(192,132,252,0.06)",
    border: "rgba(192,132,252,0.2)",
    glow: "rgba(192,132,252,0.15)",
    num: "04",
  },
  {
    title: "Temporal / Dynamic Skew",
    short: "Time-varying P",
    description: "Data distributions change over time at varying rates per client. Essential for capturing dynamic personalized diabetes progression.",
    icon: LineChart,
    color: "#fb923c",
    bg: "rgba(251,146,60,0.06)",
    border: "rgba(251,146,60,0.2)",
    glow: "rgba(251,146,60,0.15)",
    num: "05",
  },
  {
    title: "Multimodal Representation Skew",
    short: "Modality gaps",
    description: "Inconsistencies when fusing varying modalities — Retinal scans vs. tabular EHR. MTFL handles these gaps seamlessly.",
    icon: Network,
    color: "#f472b6",
    bg: "rgba(244,114,182,0.06)",
    border: "rgba(244,114,182,0.2)",
    glow: "rgba(244,114,182,0.15)",
    num: "06",
  },
]

function MetricCard({ metric, idx }: { metric: typeof metrics[0]; idx: number }) {
  const Icon = metric.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: idx * 0.08, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      className="group relative h-full"
    >
      {/* Card */}
      <div
        className="relative h-full rounded-2xl p-6 overflow-hidden transition-all duration-500"
        style={{
          background: metric.bg,
          border: `1px solid ${metric.border}`,
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `inset 0 0 40px ${metric.glow}, 0 0 40px ${metric.glow}` }}
        />

        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${metric.color}15`, border: `1px solid ${metric.color}30` }}
          >
            <Icon className="w-5 h-5" style={{ color: metric.color }} />
          </div>
          <span
            className="font-mono text-3xl font-black opacity-15 group-hover:opacity-30 transition-opacity"
            style={{ color: metric.color }}
          >
            {metric.num}
          </span>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase mb-3"
          style={{ background: `${metric.color}12`, color: metric.color, border: `1px solid ${metric.color}25` }}
        >
          {metric.short}
        </div>

        {/* Title */}
        <h3 className="text-white/90 font-bold text-base leading-snug mb-3">{metric.title}</h3>

        {/* Desc */}
        <p className="text-white/45 text-sm leading-relaxed">{metric.description}</p>

        {/* Bottom accent line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `linear-gradient(90deg, transparent, ${metric.color}, transparent)` }}
        />
      </div>
    </motion.div>
  )
}

export function ResearchFrameworkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <div id="framework" className="w-full px-4 py-32 relative">
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-cyan-500/40" />

      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Integrated Framework</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white/90 mb-6">
            Statistical Non-IID<br />
            <span className="gradient-text">Quantification Grid</span>
          </h2>
          <p className="text-white/50 text-lg max-w-3xl mx-auto leading-relaxed">
            Handling heavily heterogeneous, decentralized clinical data through six precisely-measured axes of statistical divergence.
          </p>

          {/* Decorative counter */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/8 bg-white/3 px-6 py-2.5">
            <ActivitySquare className="w-4 h-4 text-cyan-400" />
            <span className="text-white/60 text-sm font-medium">6 dimensions of data heterogeneity mapped</span>
          </div>
        </motion.div>

        {/* Metric cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((metric, idx) => (
            <MetricCard key={idx} metric={metric} idx={idx} />
          ))}
        </div>

        {/* Algorithmic Harmony block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          {/* Glow background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-violet-500/5 to-emerald-500/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

          <div className="relative border border-white/8 rounded-3xl p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-start">
            {/* Left badge */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Network className="w-7 h-7 text-cyan-400" />
              </div>
              <div className="w-px flex-1 min-h-[40px] bg-gradient-to-b from-cyan-500/40 to-transparent hidden md:block" />
            </div>

            {/* Content */}
            <div>
              <p className="section-label mb-3">Algorithmic Harmony</p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white/90 mb-4 tracking-tight">
                Unified by Design
              </h3>
              <p className="text-white/50 leading-relaxed text-base md:text-lg">
                Our methodology isolates global parameters safely via{" "}
                <span className="text-cyan-400 font-semibold">Differential Privacy mechanisms</span>, whilst allowing
                local edge nodes to train specialized feature-extraction layers. Leveraging{" "}
                <span className="text-emerald-400 font-semibold">Federated Reinforcement Learning</span>, we prescribe
                tailored insulin dosages responsive to individual metabolic reactions. By unifying{" "}
                <span className="text-violet-400 font-semibold">Multi-Task parameters</span>, we offset the accuracy
                degradation historically caused by the 6-Metric non-IID conditions.
              </p>

              {/* Tech pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["FedAvg", "ε-DP Noise", "Federated RL", "XAI / SHAP", "CNN + MLP Fusion", "MTFL Backbone"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-bold border border-white/10 bg-white/4 text-white/60 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}