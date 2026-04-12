// "use client"

// import { motion } from "framer-motion"
// import { Presentation, DownloadCloud, FileText, MonitorPlay, Users } from "lucide-react"

// export function PresentationsSection() {
//   const presentations = [
//     {
//       title: "Project Proposal",
//       status: "Submitted on 2025/09/11",
//       isSubmitted: true,
//       type: "Group",
//       link: "#"
//     },
//     {
//       title: "Progress Presentation I",
//       status: "Submitted on 2026/01/08",
//       isSubmitted: true,
//       type: "Group",
//       link: "#"
//     },
//     {
//       title: "Progress Presentation II",
//       status: "Submitted on 2026/03/09",
//       isSubmitted: true,
//       type: "Group",
//       link: "#"
//     },
//     {
//       title: "Final Presentation",
//       status: "Yet to be submitted, link will be updated soon.",
//       isSubmitted: false,
//       type: "Group",
//       link: "#"
//     }
//   ]

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   }

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 20 },
//     show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
//   }

//   return (
//     <section id="presentations" className="w-full py-24 bg-black relative border-t border-border/50">
//       <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
//           >
//             <MonitorPlay className="w-4 h-4" />
//             Project Documents
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             Presentations
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             Please find all presentations related to this project below.
//           </motion.p>
//         </div>

//         {/* Cards Grid */}
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {presentations.map((item, idx) => (
//             <motion.div 
//               key={idx} 
//               variants={itemVariants}
//               className="group relative"
//             >
//               <div className={`w-full h-full flex flex-col rounded-2xl bg-card border transition-all duration-300 ${item.isSubmitted ? 'border-border/50 hover:border-mtfl/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-border/20 opacity-80'}`}>
                
//                 {/* Card Top / Body */}
//                 <div className="p-6 flex-grow flex flex-col relative z-10">
//                   <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.isSubmitted ? 'bg-mtfl/10 text-mtfl group-hover:bg-mtfl group-hover:text-black transition-colors' : 'bg-muted text-muted-foreground'}`}>
//                     <Presentation className="w-6 h-6" />
//                   </div>
                  
//                   <h3 className="text-xl font-bold text-foreground mb-3 leading-tight tracking-tight">
//                     {item.title}
//                   </h3>
                  
//                   <p className={`text-sm leading-relaxed ${item.isSubmitted ? 'text-muted-foreground' : 'text-muted-foreground/60 italic'}`}>
//                     {item.status}
//                   </p>
//                 </div>

//                 {/* Card Footer */}
//                 <div className="mt-auto px-6 py-4 flex items-center justify-between border-t border-border/50 bg-background/30 rounded-b-2xl relative z-10">
//                   <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-widest">
//                     <Users className="w-3.5 h-3.5" />
//                     {item.type}
//                   </div>
                  
//                   {item.isSubmitted ? (
//                     <a 
//                       href={item.link}
//                       className="flex items-center gap-2 text-sm font-bold text-mtfl hover:text-cyan-300 transition-colors"
//                     >
//                       Download
//                       <DownloadCloud className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
//                     </a>
//                   ) : (
//                     <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/40 cursor-not-allowed">
//                       Pending
//                       <DownloadCloud className="w-4 h-4" />
//                     </div>
//                   )}
//                 </div>

//                 {/* Animated gradient border on hover (Only for submitted ones) */}
//                 {item.isSubmitted && (
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mtfl/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
//                 )}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }


"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Presentation, DownloadCloud, MonitorPlay, Users, Maximize2, ExternalLink, X } from "lucide-react"

// Define the structure so TypeScript knows what's inside our activeDeck state
interface SlideDeck {
  title: string;
  status: string;
  isSubmitted: boolean;
  type: string;
  downloadLink: string;
  embedUrl: string;
}

export function PresentationsSection() {
  const [activeDeck, setActiveDeck] = useState<SlideDeck | null>(null)

  // Prevent background scrolling when the popup modal is open
  useEffect(() => {
    if (activeDeck) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [activeDeck])

  const presentations: SlideDeck[] = [
    {
      title: "Project Proposal",
      status: "Submitted on 2025/09/11",
      isSubmitted: true,
      type: "Group",
      downloadLink: "https://drive.google.com/file/d/1LmXf3ZiQTR9VcJUUTeaMRmHVK9L1Yd8m/view?usp=sharing",
      embedUrl: "https://www.canva.com/design/DAGx_C3dsqU/TR5xJQlnAI-JpNMr5vOVQA/view?embed"
    },
    {
      title: "Progress Presentation I",
      status: "Submitted on 2026/01/08",
      isSubmitted: true,
      type: "Group",
      downloadLink: "https://drive.google.com/file/d/1EgyfJI9mKeK69LJ-R8gjhDgu4z1WidmV/view?usp=sharing",
      embedUrl: "https://www.canva.com/design/DAHDM6sVqaE/En7rK36J43IZVKvHJ_Rkfw/view?embed" 
    },
    {
      title: "Progress Presentation II",
      status: "Submitted on 2026/03/09",
      isSubmitted: true,
      type: "Group",
      downloadLink: "https://drive.google.com/file/d/1v_Ggtoqz_qh7Nrw6XagPvyGOk1T4tJ3_/view?usp=sharing",
      embedUrl: "https://www.canva.com/design/DAG8_VttRCE/KHxjCH5mZAHRmgxPLEIljg/view?embed"
    },
    {
      title: "Final Presentation",
      status: "Yet to be submitted, links will be updated soon.",
      isSubmitted: false,
      type: "Group",
      downloadLink: "#",
      embedUrl: "#"
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
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-6"
          >
            <MonitorPlay className="w-4 h-4" />
            Project Documents
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white"
          >
            Presentations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Explore our interactive slide decks or download the presentation archives for offline review.
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
              <div className={`w-full h-full flex flex-col rounded-2xl bg-white/[0.02] border transition-all duration-300 ${item.isSubmitted ? 'border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'border-white/5 opacity-80'}`}>
                
                {/* Card Top / Body */}
                <div className="p-6 flex-grow flex flex-col relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${item.isSubmitted ? 'bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors' : 'bg-white/5 text-white/40'}`}>
                    <Presentation className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  
                  <p className={`text-sm leading-relaxed mb-6 ${item.isSubmitted ? 'text-white/60' : 'text-white/40 italic'}`}>
                    {item.status}
                  </p>

                  {/* BUTTON 1: Interactive Canva Embed */}
                  {item.isSubmitted && (
                    <button
                      onClick={() => setActiveDeck(item)}
                      className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 font-bold hover:bg-cyan-400/20 transition-colors"
                    >
                      <MonitorPlay className="w-4 h-4" /> View Slides
                    </button>
                  )}
                </div>

                {/* Card Footer: BUTTON 2 (Download PDF) */}
                <div className="mt-auto px-6 py-4 flex items-center justify-between border-t border-white/10 bg-black/40 rounded-b-2xl relative z-10">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-white/50 uppercase tracking-widest">
                    <Users className="w-3.5 h-3.5" />
                    {item.type}
                  </div>
                  
                  {item.isSubmitted ? (
                    <a 
                      href={item.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Drive PDF
                      <DownloadCloud className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/30 cursor-not-allowed">
                      Pending
                      <DownloadCloud className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Animated gradient border on hover (Only for submitted ones) */}
                {item.isSubmitted && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── THE POPUP MODAL (Lightbox) ─── */}
      <AnimatePresence>
        {activeDeck && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveDeck(null)} // Clicking outside the modal closes it
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent clicking inside from closing it
              className="w-full max-w-5xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02] gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <Maximize2 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">{activeDeck.title}</h4>
                    <p className="text-xs text-cyan-400/80 font-medium tracking-wide uppercase">{activeDeck.status}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <a 
                    href={activeDeck.embedUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 text-white/50 hover:text-cyan-400 transition-colors tooltip"
                    title="Open in full screen"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button 
                    onClick={() => setActiveDeck(null)}
                    className="p-2 text-white/50 hover:text-red-400 transition-colors bg-white/5 hover:bg-red-400/10 rounded-lg ml-2"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Canva Iframe Embed Wrapper (Maintains 16:9 Aspect Ratio) */}
              <div className="relative w-full overflow-hidden pt-[56.25%] bg-black">
                <iframe
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full border-none"
                  src={activeDeck.embedUrl}
                  allowFullScreen
                  allow="fullscreen"
                  title={activeDeck.title}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}