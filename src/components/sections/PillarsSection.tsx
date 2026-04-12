// "use client"

// import { motion } from "framer-motion"
// import { ShieldAlert, Syringe, BrainCircuit, Users } from "lucide-react"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// export function PillarsSection() {
//   const pillars = [
//     {
//       id: "privacy-risk",
//       title: "Privacy-Preserving Complication Risk Prediction",
//       lead: "A.D. Oshadhi Vibodha",
//       description: "Predicting retinopathy and kidney failure using differential privacy to ensure raw hospital data never leaves the premises.",
//       icon: <ShieldAlert className="h-8 w-8 text-rose-400" />,
//       color: "border-rose-400/50"
//     },
//     {
//       id: "insulin-optimization",
//       title: "Personalized Insulin Dosing & Lifestyle Optimization",
//       lead: "Upendra M.M.S.",
//       description: "Utilizing Federated Reinforcement Learning and XAI to dynamically recommend optimal insulin doses and lifestyle changes.",
//       icon: <Syringe className="h-8 w-8 text-emerald-400" />,
//       color: "border-emerald-400/50"
//     },
//     {
//       id: "multimodal-detection",
//       title: "Multimodal Undiagnosed Diabetes Detection",
//       lead: "Perera K.T.D.",
//       description: "Fusing EHR data and retinal images via robust CNN and MLP architectures to identify hidden diabetes risk.",
//       icon: <BrainCircuit className="h-8 w-8 text-blue-400" />,
//       color: "border-blue-400/50"
//     },
//     {
//       id: "personalized-mtfl",
//       title: "Personalized Multi-Task Federated Learning",
//       lead: "Ekanayake E.M.C.H.",
//       description: "Addressing statistical uniqueness by focusing on local layer adaptations for extremely heterogeneous institutional data.",
//       icon: <Users className="h-8 w-8 text-purple-400" />,
//       color: "border-purple-400/50"
//     }
//   ]

//   return (
//     <div id="pillars" className="container mx-auto px-4 py-24 max-w-6xl">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         className="text-center mb-16"
//       >
//         <h1 className="text-4xl font-extrabold tracking-tight mb-4">The 4 Research Pillars</h1>
//         <p className="text-xl text-muted-foreground flex justify-center mx-auto max-w-3xl">
//           Each team member leads a specific architectural domain, contributing to the holistic 
//           Federated Multi-Task Learning platform.
//         </p>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {pillars.map((pillar, idx) => (
//           <motion.div
//             key={pillar.id}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: idx * 0.1 }}
//           >
//             <Card className={`h-full border-t-4 transition-all hover:-translate-y-1 shadow-lg ${pillar.color} bg-background/50 backdrop-blur-sm`}>
//               <CardHeader>
//                 <div className="mb-4">{pillar.icon}</div>
//                 <CardTitle className="text-xl">{pillar.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="font-semibold text-sm text-mtfl mb-2">Lead Researcher: {pillar.lead}</p>
//                 <CardDescription className="text-base text-muted-foreground">
//                   {pillar.description}
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { ShieldAlert, Syringe, BrainCircuit, Users } from "lucide-react"

const pillars = [
  {
    id: "privacy-risk",
    num: "01",
    title: "Privacy-Preserving Complication Risk Prediction",
    lead: "A.D. Oshadhi Vibodha",
    description: "Predicting nephropathy and kidney failure using differential privacy to ensure raw hospital data never leaves the premises.",
    icon: ShieldAlert,
    color: "#f43f5e",
    gradient: "from-rose-500/20 to-transparent",
    border: "rgba(244,63,94,0.25)",
    glow: "rgba(244,63,94,0.12)",
    domain: "Differential Privacy",
  },
  {
    id: "insulin-optimization",
    num: "02",
    title: "Personalized Insulin Dosing & Lifestyle Optimization",
    lead: "Upendra M.M.S.",
    description: "Utilizing Federated Reinforcement Learning and XAI to dynamically recommend optimal insulin doses and lifestyle changes.",
    icon: Syringe,
    color: "#00ff88",
    gradient: "from-emerald-500/20 to-transparent",
    border: "rgba(0,255,136,0.25)",
    glow: "rgba(0,255,136,0.12)",
    domain: "Federated RL + XAI",
  },
  {
    id: "multimodal-detection",
    num: "03",
    title: "Multimodal Undiagnosed Diabetes Detection",
    lead: "Perera K.T.D.",
    description: "Fusing EHR data and retinal images via robust CNN and MLP architectures to identify hidden diabetes risk.",
    icon: BrainCircuit,
    color: "#60a5fa",
    gradient: "from-blue-500/20 to-transparent",
    border: "rgba(96,165,250,0.25)",
    glow: "rgba(96,165,250,0.12)",
    domain: "Deep Learning & Imaging",
  },
  {
    id: "personalized-mtfl",
    num: "04",
    title: "Personalized Multi-Task Federated Learning",
    lead: "Ekanayake E.M.C.H.",
    description: "Addressing statistical uniqueness by focusing on local layer adaptations for extremely heterogeneous institutional data.",
    icon: Users,
    color: "#c084fc",
    gradient: "from-purple-500/20 to-transparent",
    border: "rgba(192,132,252,0.25)",
    glow: "rgba(192,132,252,0.12)",
    domain: "MTFL Architecture",
  },
]

export function PillarsSection() {
  return (
    <div id="pillars" className="w-full px-4 py-32 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Research Pillars</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white/90 mb-6">
            Four Domains,<br />
            <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Each team member leads a specific architectural domain, contributing to the holistic Federated Multi-Task Learning platform.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 260, damping: 22 }}
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
                className="group relative"
              >
                {/* Card */}
                <div
                  className="relative h-full rounded-2xl overflow-hidden transition-all duration-500"
                  style={{ border: `1px solid ${pillar.border}`, background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Top gradient wash */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                    style={{ boxShadow: `0 0 60px ${pillar.glow}` }}
                  />

                  <div className="relative p-8">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-8">
                      {/* Icon */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${pillar.color}15`, border: `1px solid ${pillar.color}30` }}
                      >
                        <Icon className="w-7 h-7" style={{ color: pillar.color }} />
                      </div>

                      {/* Big number */}
                      <span
                        className="font-mono text-6xl font-black leading-none opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none"
                        style={{ color: pillar.color }}
                      >
                        {pillar.num}
                      </span>
                    </div>

                    {/* Domain badge */}
                    <div
                      className="inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase mb-4"
                      style={{ background: `${pillar.color}12`, color: pillar.color, border: `1px solid ${pillar.color}25` }}
                    >
                      {pillar.domain}
                    </div>

                    {/* Title */}
                    <h3 className="text-white/90 font-extrabold text-xl leading-snug mb-4 tracking-tight">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    {/* Lead researcher */}
                    <div className="flex items-center gap-3 pt-6 border-t border-white/8">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{ background: `${pillar.color}20`, color: pillar.color }}
                      >
                        {pillar.lead.split(" ")[0][0]}
                      </div>
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Lead Researcher</p>
                        <p className="text-sm text-white/70 font-semibold">{pillar.lead}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${pillar.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Integration callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-6 py-3 text-white/40 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            All four pillars share a unified global model backbone — trained together, deployed individually
          </div>
        </motion.div>
      </div>
    </div>
  )
}