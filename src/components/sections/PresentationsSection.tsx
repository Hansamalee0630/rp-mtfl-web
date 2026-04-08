"use client"

import { motion } from "framer-motion"
import { Presentation, DownloadCloud, FileText, MonitorPlay, Users } from "lucide-react"

export function PresentationsSection() {
  const presentations = [
    {
      title: "Project Proposal",
      status: "Submitted on 2025/09/11",
      isSubmitted: true,
      type: "Group",
      link: "#"
    },
    {
      title: "Progress Presentation I",
      status: "Submitted on 2026/01/08",
      isSubmitted: true,
      type: "Group",
      link: "#"
    },
    {
      title: "Progress Presentation II",
      status: "Submitted on 2026/03/09",
      isSubmitted: true,
      type: "Group",
      link: "#"
    },
    {
      title: "Final Presentation",
      status: "Yet to be submitted, link will be updated soon.",
      isSubmitted: false,
      type: "Group",
      link: "#"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  }

  return (
    <section id="presentations" className="w-full py-24 bg-black relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
          >
            <MonitorPlay className="w-4 h-4" />
            Project Documents
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Presentations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Please find all presentations related to this project below.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {presentations.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group relative"
            >
              <div className={`w-full h-full flex flex-col rounded-2xl bg-card border transition-all duration-300 ${item.isSubmitted ? 'border-border/50 hover:border-mtfl/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-border/20 opacity-80'}`}>
                
                {/* Card Top / Body */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.isSubmitted ? 'bg-mtfl/10 text-mtfl group-hover:bg-mtfl group-hover:text-black transition-colors' : 'bg-muted text-muted-foreground'}`}>
                    <Presentation className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed ${item.isSubmitted ? 'text-muted-foreground' : 'text-muted-foreground/60 italic'}`}>
                    {item.status}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-auto px-6 py-4 flex items-center justify-between border-t border-border/50 bg-background/30 rounded-b-2xl relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                    <Users className="w-3.5 h-3.5" />
                    {item.type}
                  </div>
                  
                  {item.isSubmitted ? (
                    <a 
                      href={item.link}
                      className="flex items-center gap-2 text-sm font-bold text-mtfl hover:text-cyan-300 transition-colors"
                    >
                      Download
                      <DownloadCloud className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/40 cursor-not-allowed">
                      Pending
                      <DownloadCloud className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Animated gradient border on hover (Only for submitted ones) */}
                {item.isSubmitted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mtfl/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
