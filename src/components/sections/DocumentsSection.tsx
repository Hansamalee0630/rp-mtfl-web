"use client"

import { motion } from "framer-motion"
import { FileText, DownloadCloud, FileCheck, CheckSquare, BookOpen } from "lucide-react"
import { SpotlightCard } from "@/components/ui/SpotlightCard"

export function DocumentsSection() {
  const documents = [
    {
      title: "Project Charter",
      status: "Available",
      isSubmitted: true,
      count: "1 Document",
      icon: <BookOpen className="w-6 h-6" />,
      link: "https://drive.google.com/file/d/1KqjBzi1qsB16HKc03TOKwxM5JMr3i15i/view?usp=drive_link"
    },
    {
      title: "Proposal Document",
      status: "Available",
      isSubmitted: true,
      count: "4 Document",
      icon: <FileText className="w-6 h-6" />,
      link: "https://drive.google.com/drive/folders/1O0X-J7VoT8_8QQ3GyKg-s6Lyniof-qmg?usp=drive_link"
    },
    {
      title: "Check List Documents",
      status: "Checklist 1 & 2 Available",
      isSubmitted: true,
      count: "4 Documents",
      icon: <CheckSquare className="w-6 h-6" />,
      link: "https://drive.google.com/drive/folders/1omSg_MC-nP9w2GRefDI5fpQGOAkwnxJR?usp=drive_link"
    },
    {
      title: "Final Documents (Thesis)",
      status: "Pending Submission",
      isSubmitted: false,
      count: "4 Thesis + 1 Main",
      icon: <FileCheck className="w-6 h-6" />,
      link: "https://drive.google.com/drive/folders/1vvqQDMi_ruphjHi-bstJ5qJjap02O_Jf?usp=drive_link"
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
    <section id="documents" className="w-full py-24 bg-black relative border-t border-border/50">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-6"
          >
            <FileText className="w-4 h-4" />
            Project Artifacts
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Documents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Access all produced and pending project documentation below.
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
          {documents.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
            >
              <SpotlightCard 
                spotlightColor="rgba(139, 92, 246, 0.25)"
                className={`w-full h-full flex flex-col rounded-2xl bg-white/[0.02] transition-all duration-300 ${item.isSubmitted ? 'hover:border-violet-400/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]' : 'opacity-80'}`}
              >
                {/* Card Top / Body */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.isSubmitted ? 'bg-violet-400/10 text-violet-400 group-hover:bg-violet-400 group-hover:text-black transition-colors' : 'bg-white/5 text-white/40'}`}>
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${item.isSubmitted ? 'text-white/60' : 'text-white/40 italic'}`}>
                    {item.status}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-auto px-6 py-4 flex items-center justify-between border-t border-white/10 bg-black/40 rounded-b-2xl relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <FileText className="w-3.5 h-3.5" />
                    {item.count}
                  </div>

                  {item.isSubmitted ? (
                    <a
                      href={item.link}
                      className="flex items-center gap-2 text-sm font-bold text-violet-400 hover:text-violet-300 transition-colors"
                    >
                      View
                      <DownloadCloud className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/30 cursor-not-allowed">
                      Pending
                      <DownloadCloud className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Animated gradient border on hover */}
                {item.isSubmitted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
