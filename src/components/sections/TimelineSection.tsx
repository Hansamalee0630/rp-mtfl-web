// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Compass, Map as MapIcon, Trophy } from "lucide-react"

// export function TimelineSection() {
//   const [activeIdx, setActiveIdx] = useState(0)

//   const timelineEvents = [
//     { date: "15 Mar", year: "2025", title: "Brainstorming workshop", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Initial introduction to the research domain and ideation phase for potential project scopes." },
//     { date: "16 May", year: "2025", title: "Group registration", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Formalizing the 4-member undergraduate research group and supervisor assignments." },
//     { date: "27 Jun", year: "2025", title: "Topic Assessment Form (TAF)", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Official submission of the research problem and proposed solution for departmental approval." },
//     { date: "23 Jul", year: "2025", title: "Project charter", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Documentation establishing the project scope, objectives, and deliverables." },

//     { date: "30 Aug", year: "2025", title: "Proposal reports (draft)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Initial documentation covering literature review, problem definition, and high-level architectural design." },
//     { date: "11 Sep", year: "2025", title: "Proposal presentation", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get Our project approved.", marks: 6 },
//     { date: "19 Sep", year: "2025", title: "Proposal reports (final)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Finalized proposal documents strictly adhering to academic formatting standards." },

//     { date: "08 Jan", year: "2026", title: "Progress Presentation – I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.", marks: 6 },
//     { date: "11 Jan", year: "2026", title: "Check List I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Assessment checklist verifying core foundational implementations and repository health." },
//     { date: "09 Mar", year: "2026", title: "Progress Presentation – II", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.", marks: 18 },

//     { date: "26 Apr", year: "2026", title: "Final report Submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.", marks: 19 },
//     { date: "26 Apr", year: "2026", title: "Project website", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "The Website helps to promote our research project and reveals all details related to the project.", marks: 2 },
//     { date: "27–30 Apr", year: "2026", title: "Final presentation & VIVA", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Viva is held individually to assess each members contribution to the project.", marks: 20 },
//     { date: "30 Apr", year: "2026", title: "Final Check List", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Validation of final project artifacts, deployment status, and source code ownership." },
//     { date: "27–30 Apr", year: "2026", title: "Logbook submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.", marks: 3 },

//     { date: "04 May", year: "2026", title: "Research paper submission", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Describes what we contribute to existing knowledge, giving due recognition to all work that we referred in making new knowledge", marks: 10 },
//     { date: "30 May", year: "2026", title: "Paper evidence", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Submission of proof from credible academic conferences or journals indicating publication acceptance." },
//   ]

//   // S-Curve 16:9 ratio mapping coords for a 1000x500 virtual canvas
//   const mapPoints = [
//     { x: 100, y: 100 }, { x: 260, y: 100 }, { x: 420, y: 100 }, { x: 580, y: 100 }, { x: 740, y: 100 }, { x: 900, y: 100 },
//     { x: 900, y: 250 }, { x: 740, y: 250 }, { x: 580, y: 250 }, { x: 420, y: 250 }, { x: 260, y: 250 }, { x: 100, y: 250 },
//     { x: 100, y: 400 }, { x: 260, y: 400 }, { x: 420, y: 400 }, { x: 580, y: 400 }, { x: 750, y: 400 }
//   ]

//   const activeEvent = timelineEvents[activeIdx]

//   return (
//     <div id="timeline" className="w-full bg-black/40 py-24 border-t border-border/50">
//       <div className="container mx-auto px-4 max-w-[1400px]">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
//           >
//             <MapIcon className="w-4 h-4" />
//             Interactive Timeline Map
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             The Assessment Trail
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             Follow our path from initial ideation through to final publication. Explore the interactive map below.
//           </motion.p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          
//           {/* Treasure Map Board */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-[68%] 2xl:w-[72%] overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
//           >
//             <div className="relative min-w-[700px] lg:min-w-[800px] w-full aspect-[2/1] bg-background/50 rounded-3xl border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm">
              
//               {/* Map Decoration */}
//               <Compass className="absolute top-10 right-10 w-48 h-48 text-mtfl/5 pointer-events-none" />
//               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
              
//               {/* Dashed SVG Trail */}
//               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 500" preserveAspectRatio="none">
//                 <path 
//                   d="M 100 100 L 900 100 A 75 75 0 0 1 900 250 L 100 250 A 75 75 0 0 0 100 400 L 750 400"
//                   fill="none"
//                   stroke="#06b6d4"
//                   strokeWidth="3"
//                   strokeDasharray="8 8"
//                   strokeLinecap="round"
//                 />
//               </svg>

//               {/* Interactive Waypoints */}
//               {timelineEvents.map((event, i) => {
//                 const p = mapPoints[i];
//                 const isActive = activeIdx === i;
                
//                 return (
//                   <button
//                     key={i}
//                     onClick={() => setActiveIdx(i)}
//                     className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive ? 'z-20 scale-125' : 'z-10 hover:scale-110 hover:z-20'}`}
//                     style={{ left: `${(p.x / 1000) * 100}%`, top: `${(p.y / 500) * 100}%` }}
//                     aria-label={event.title}
//                   >
//                     {/* Waypoint Circle */}
//                     <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors ${isActive ? 'bg-mtfl/20 shadow-[0_0_20px_rgba(6,182,212,0.6)]' : 'bg-background shadow-lg hover:bg-card'}`}>
//                        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-mtfl animate-pulse' : 'bg-muted-foreground/30'}`} />
//                     </div>
                    
//                     {/* Date & Title Marker */}
//                     <div className="absolute top-10 whitespace-nowrap text-center pointer-events-none drop-shadow-md">
//                       <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-muted-foreground'}`}>
//                         {event.date}
//                       </span>
//                       {isActive && (
//                         <span className="block text-xs font-medium text-mtfl mt-0.5">
//                           Selected
//                         </span>
//                       )}
//                     </div>

//                     {/* Destination Trophy */}
//                     {i === 16 && !isActive && (
//                       <div className="absolute -top-7 text-mtfl opacity-80 animate-bounce pointer-events-none">
//                         <Trophy className="w-5 h-5" />
//                       </div>
//                     )}
//                   </button>
//                 )
//               })}
//             </div>
//           </motion.div>

//           {/* Discovery Detail Panel */}
//           <div className="w-full lg:w-[32%] 2xl:w-[28%] min-h-[400px] p-6 lg:p-10 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col justify-center">
//             <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeEvent.color}`} />
            
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex flex-col gap-6"
//               >
//                 {/* Metadata */}
//                 <div className="border-b border-border pb-6">
//                   <div className={`inline-block px-3 py-1 rounded-full bg-background border ${activeEvent.border} mb-6`}>
//                     <span className={`text-xs font-bold uppercase tracking-wider ${activeEvent.text}`}>
//                       Phase {Math.floor(activeIdx / 5) + 1}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-3xl font-extrabold tracking-tight mb-1 leading-none">
//                     {activeEvent.date}
//                   </h3>
//                   <h4 className="text-muted-foreground font-semibold uppercase tracking-widest">
//                     {activeEvent.year}
//                   </h4>
//                 </div>

//                 {/* Lore / Description */}
//                 <div>
//                   <h2 className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-foreground">
//                     {activeEvent.title}
//                   </h2>
//                   <div className="prose prose-invert max-w-none mb-6">
//                     <p className="text-muted-foreground leading-relaxed">
//                       {activeEvent.description}
//                     </p>
//                   </div>
                  
//                   {activeEvent.marks ? (
//                     <div className="px-5 py-4 rounded-xl bg-background border border-border shadow-inner">
//                       <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Total Marks</span>
//                       <span className={`text-4xl font-black ${activeEvent.text}`}>{activeEvent.marks}%</span>
//                     </div>
//                   ) : (
//                     <div className="px-5 py-4 rounded-xl bg-background/50 border border-border/50 border-dashed">
//                       <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Status</span>
//                       <span className="text-xl font-bold text-foreground">Checkpoint</span>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }





"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Compass, Map as MapIcon, Trophy, ChevronRight, ChevronLeft, MousePointerClick } from "lucide-react"

export function TimelineSection() {
  const [activeIdx, setActiveIdx] = useState(0)

  const timelineEvents = [
    { date: "15 Mar", year: "2025", title: "Brainstorming workshop", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Initial introduction to the research domain and ideation phase for potential project scopes." },
    { date: "16 May", year: "2025", title: "Group registration", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Formalizing the 4-member undergraduate research group and supervisor assignments." },
    { date: "27 Jun", year: "2025", title: "Topic Assessment Form (TAF)", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Official submission of the research problem and proposed solution for departmental approval." },
    { date: "23 Jul", year: "2025", title: "Project charter", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Documentation establishing the project scope, objectives, and deliverables." },

    { date: "30 Aug", year: "2025", title: "Proposal reports (draft)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Initial documentation covering literature review, problem definition, and high-level architectural design." },
    { date: "11 Sep", year: "2025", title: "Proposal presentation", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get our project approved.", marks: 6 },
    { date: "19 Sep", year: "2025", title: "Proposal reports (final)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Finalized proposal documents strictly adhering to academic formatting standards." },

    { date: "08 Jan", year: "2026", title: "Progress Presentation – I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.", marks: 6 },
    { date: "11 Jan", year: "2026", title: "Check List I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Assessment checklist verifying core foundational implementations and repository health." },
    { date: "09 Mar", year: "2026", title: "Progress Presentation – II", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.", marks: 18 },

    { date: "26 Apr", year: "2026", title: "Final report Submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.", marks: 19 },
    { date: "26 Apr", year: "2026", title: "Project website", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "The Website helps to promote our research project and reveals all details related to the project.", marks: 2 },
    { date: "27–30 Apr", year: "2026", title: "Final presentation & VIVA", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Viva is held individually to assess each members contribution to the project.", marks: 20 },
    { date: "30 Apr", year: "2026", title: "Final Check List", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Validation of final project artifacts, deployment status, and source code ownership." },
    { date: "27–30 Apr", year: "2026", title: "Logbook submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.", marks: 3 },

    { date: "04 May", year: "2026", title: "Research paper submission", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Describes the contribution to existing knowledge, with due recognition to all referenced work in the creation of new knowledge.", marks: 10 },
    { date: "30 May", year: "2026", title: "Paper evidence", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Submission of proof from credible academic conferences or journals indicating publication acceptance." },
  ]

  // S-Curve 16:9 ratio mapping coords for a 1000x500 virtual canvas
  const mapPoints = [
    { x: 100, y: 100 }, { x: 260, y: 100 }, { x: 420, y: 100 }, { x: 580, y: 100 }, { x: 740, y: 100 }, { x: 900, y: 100 },
    { x: 900, y: 250 }, { x: 740, y: 250 }, { x: 580, y: 250 }, { x: 420, y: 250 }, { x: 260, y: 250 }, { x: 100, y: 250 },
    { x: 100, y: 400 }, { x: 260, y: 400 }, { x: 420, y: 400 }, { x: 580, y: 400 }, { x: 750, y: 400 }
  ]

  const activeEvent = timelineEvents[activeIdx]

  return (
    <div id="timeline" className="w-full bg-black/40 py-24 border-t border-border/50">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
          >
            <MapIcon className="w-4 h-4" />
            Interactive Timeline Map
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            The Assessment Trail
          </motion.h2>
          
          {/* NEW: Explicit Instructions for the Examiner */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 inline-flex items-center justify-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white/80 text-sm max-w-2xl shadow-lg"
          >
            <MousePointerClick className="w-5 h-5 text-cyan-400 animate-bounce flex-shrink-0" />
            <p><strong>Examiner Guide:</strong> Click on any glowing waypoint on the map to reveal grading rubrics and details, or use the <strong>Next Step</strong> arrows in the panel.</p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          
          {/* Treasure Map Board */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-[68%] 2xl:w-[72%] overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
          >
            <div className="relative min-w-[700px] lg:min-w-[800px] w-full aspect-[2/1] bg-background/50 rounded-3xl border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm">
              
              {/* Map Decoration */}
              <Compass className="absolute top-10 right-10 w-48 h-48 text-mtfl/5 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
              
              {/* Dashed SVG Trail */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 500" preserveAspectRatio="none">
                <path 
                  d="M 100 100 L 900 100 A 75 75 0 0 1 900 250 L 100 250 A 75 75 0 0 0 100 400 L 750 400"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  strokeLinecap="round"
                />
              </svg>

              {/* Interactive Waypoints */}
              {timelineEvents.map((event, i) => {
                const p = mapPoints[i];
                const isActive = activeIdx === i;
                
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive ? 'z-20 scale-125' : 'z-10 hover:scale-110 hover:z-20'}`}
                    style={{ left: `${(p.x / 1000) * 100}%`, top: `${(p.y / 500) * 100}%` }}
                    aria-label={event.title}
                  >
                    {/* Waypoint Circle */}
                    <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors ${isActive ? 'bg-mtfl/20 shadow-[0_0_20px_rgba(6,182,212,0.6)]' : 'bg-background shadow-lg hover:bg-card'}`}>
                       <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-mtfl animate-pulse' : 'bg-muted-foreground/30'}`} />
                    </div>
                    
                    {/* Date & Title Marker */}
                    <div className="absolute top-10 whitespace-nowrap text-center pointer-events-none drop-shadow-md">
                      <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-muted-foreground'}`}>
                        {event.date}
                      </span>
                      {isActive && (
                        <span className="block text-xs font-medium text-mtfl mt-0.5">
                          Selected
                        </span>
                      )}
                    </div>

                    {/* Destination Trophy */}
                    {i === 16 && !isActive && (
                      <div className="absolute -top-7 text-mtfl opacity-80 animate-bounce pointer-events-none">
                        <Trophy className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>

          {/* Discovery Detail Panel */}
          <div className="w-full lg:w-[32%] 2xl:w-[28%] min-h-[400px] p-6 lg:p-8 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeEvent.color}`} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6 flex-1 justify-center"
              >
                {/* Metadata */}
                <div className="border-b border-border pb-6">
                  <div className={`inline-block px-3 py-1 rounded-full bg-background border ${activeEvent.border} mb-4`}>
                    <span className={`text-xs font-bold uppercase tracking-wider ${activeEvent.text}`}>
                      Milestone {activeIdx + 1} of {timelineEvents.length}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-extrabold tracking-tight mb-1 leading-none">
                    {activeEvent.date}
                  </h3>
                  <h4 className="text-muted-foreground font-semibold uppercase tracking-widest">
                    {activeEvent.year}
                  </h4>
                </div>

                {/* Lore / Description */}
                <div>
                  <h2 className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-foreground">
                    {activeEvent.title}
                  </h2>
                  <div className="prose prose-invert max-w-none mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {activeEvent.description}
                    </p>
                  </div>
                  
                  {activeEvent.marks ? (
                    <div className="px-5 py-4 rounded-xl bg-background border border-border shadow-inner">
                      <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Grading Rubric</span>
                      <span className={`text-4xl font-black ${activeEvent.text}`}>{activeEvent.marks}% <span className="text-sm font-medium text-white/50">Allocated</span></span>
                    </div>
                  ) : (
                    <div className="px-5 py-4 rounded-xl bg-background/50 border border-border/50 border-dashed">
                      <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Status</span>
                      <span className="text-xl font-bold text-foreground">Progress Checkpoint</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* NEW: Next & Previous Navigation Arrows */}
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between z-10 relative">
              <button
                onClick={() => setActiveIdx(Math.max(0, activeIdx - 1))}
                disabled={activeIdx === 0}
                className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors px-2 py-2"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              
              <button
                onClick={() => setActiveIdx(Math.min(timelineEvents.length - 1, activeIdx + 1))}
                disabled={activeIdx === timelineEvents.length - 1}
                className={`flex items-center gap-2 text-sm font-bold ${activeEvent.text} hover:brightness-150 disabled:opacity-30 disabled:pointer-events-none transition-all px-4 py-2 rounded-lg border ${activeEvent.border} bg-white/5`}
              >
                Next Step <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  )
}




// ---------------------- Original Accordion Version ----------------------
// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Calendar, ChevronDown, Trophy, CheckCircle2, Milestone } from "lucide-react"

// export function TimelineSection() {
//   // We track which drop-down is currently open. Default to the first one.
//   const [openIdx, setOpenIdx] = useState<number | null>(0)

//   // Our exact original data, perfectly preserved!
//   const timelineEvents = [
//     { date: "15 Mar", year: "2025", title: "Brainstorming workshop", border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", description: "Initial introduction to the research domain and ideation phase for potential project scopes." },
//     { date: "16 May", year: "2025", title: "Group registration", border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", description: "Formalizing the 4-member undergraduate research group and supervisor assignments." },
//     { date: "27 Jun", year: "2025", title: "Topic Assessment Form (TAF)", border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", description: "Official submission of the research problem and proposed solution for departmental approval." },
//     { date: "23 Jul", year: "2025", title: "Project charter", border: "border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", description: "Documentation establishing the project scope, objectives, and deliverables." },

//     { date: "30 Aug", year: "2025", title: "Proposal reports (draft)", border: "border-violet-500/50", bg: "bg-violet-500/10", text: "text-violet-400", description: "Initial documentation covering literature review, problem definition, and high-level architectural design." },
//     { date: "11 Sep", year: "2025", title: "Proposal presentation", border: "border-violet-500/50", bg: "bg-violet-500/10", text: "text-violet-400", description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get Our project approved.", marks: 6 },
//     { date: "19 Sep", year: "2025", title: "Proposal reports (final)", border: "border-violet-500/50", bg: "bg-violet-500/10", text: "text-violet-400", description: "Finalized proposal documents strictly adhering to academic formatting standards." },

//     { date: "08 Jan", year: "2026", title: "Progress Presentation – I", border: "border-orange-500/50", bg: "bg-orange-500/10", text: "text-orange-400", description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.", marks: 6 },
//     { date: "11 Jan", year: "2026", title: "Check List I", border: "border-orange-500/50", bg: "bg-orange-500/10", text: "text-orange-400", description: "Assessment checklist verifying core foundational implementations and repository health." },
//     { date: "09 Mar", year: "2026", title: "Progress Presentation – II", border: "border-orange-500/50", bg: "bg-orange-500/10", text: "text-orange-400", description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.", marks: 18 },

//     { date: "26 Apr", year: "2026", title: "Final report Submission", border: "border-yellow-500/50", bg: "bg-yellow-500/10", text: "text-yellow-400", description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.", marks: 19 },
//     { date: "26 Apr", year: "2026", title: "Project website", border: "border-yellow-500/50", bg: "bg-yellow-500/10", text: "text-yellow-400", description: "The Website helps to promote our research project and reveals all details related to the project.", marks: 2 },
//     { date: "27–30 Apr", year: "2026", title: "Final presentation & VIVA", border: "border-yellow-500/50", bg: "bg-yellow-500/10", text: "text-yellow-400", description: "Viva is held individually to assess each members contribution to the project.", marks: 20 },
//     { date: "30 Apr", year: "2026", title: "Final Check List", border: "border-yellow-500/50", bg: "bg-yellow-500/10", text: "text-yellow-400", description: "Validation of final project artifacts, deployment status, and source code ownership." },
//     { date: "27–30 Apr", year: "2026", title: "Logbook submission", border: "border-yellow-500/50", bg: "bg-yellow-500/10", text: "text-yellow-400", description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.", marks: 3 },

//     { date: "04 May", year: "2026", title: "Research paper submission", border: "border-emerald-500/50", bg: "bg-emerald-500/10", text: "text-emerald-400", description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge", marks: 10 },
//     { date: "30 May", year: "2026", title: "Paper evidence", border: "border-emerald-500/50", bg: "bg-emerald-500/10", text: "text-emerald-400", description: "Submission of proof from credible academic conferences or journals indicating publication acceptance." },
//   ]

//   return (
//     <section id="timeline" className="w-full relative px-4 py-32 bg-black border-t border-border/50">
//       <div className="container mx-auto max-w-4xl relative z-10">
        
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
//             <Milestone className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-white/70 font-medium uppercase tracking-wider">Project Timeline</span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
//             Milestones & Assessments
//           </h2>
//           <p className="text-lg text-white/50 max-w-2xl mx-auto">
//             A comprehensive breakdown of our project deliverables, assessment dates, and allocated grading distributions.
//           </p>
//         </motion.div>

//         {/* Accordion / Drop-down Menu */}
//         <div className="space-y-4">
//           {timelineEvents.map((event, i) => {
//             const isOpen = openIdx === i;

//             return (
//               <motion.div 
//                 key={i}
//                 initial={{ opacity: 0, y: 10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.05 }}
//                 className={`rounded-2xl overflow-hidden border transition-all duration-300 ${isOpen ? 'bg-white/[0.04] border-white/20 shadow-lg' : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.02]'}`}
//               >
//                 {/* Accordion Header (Clickable) */}
//                 <button 
//                   onClick={() => setOpenIdx(isOpen ? null : i)}
//                   className="w-full flex items-center justify-between p-6 focus:outline-none"
//                 >
//                   <div className="flex items-center gap-6 text-left">
//                     {/* Date Block */}
//                     <div className={`hidden md:flex flex-col items-center justify-center min-w-[80px] h-[80px] rounded-xl ${event.bg} border ${event.border}`}>
//                       <Calendar className={`w-5 h-5 mb-1 ${event.text}`} />
//                       <span className={`text-sm font-bold ${event.text}`}>{event.date}</span>
//                       <span className="text-xs text-white/50 font-mono">{event.year}</span>
//                     </div>

//                     {/* Title */}
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-3">
//                         {event.title}
//                         {/* Mobile Date Badge */}
//                         <span className={`md:hidden text-xs px-2 py-0.5 rounded-full border ${event.bg} ${event.text} ${event.border}`}>
//                           {event.date}
//                         </span>
//                       </h3>
//                       {event.marks ? (
//                         <div className="flex items-center gap-1.5 text-sm text-yellow-500/80 font-medium">
//                           <Trophy className="w-4 h-4" /> Marks Allocated: {event.marks}%
//                         </div>
//                       ) : (
//                         <div className="flex items-center gap-1.5 text-sm text-white/40 font-medium">
//                           <CheckCircle2 className="w-4 h-4" /> Progress Checkpoint
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Drop-down Chevron Indicator */}
//                   <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white/10 text-white' : 'bg-transparent text-white/40'}`}>
//                     <ChevronDown className="w-5 h-5" />
//                   </div>
//                 </button>

//                 {/* Accordion Body (The Drop-down part) */}
//                 <AnimatePresence>
//                   {isOpen && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.3, ease: "easeInOut" }}
//                     >
//                       <div className="px-6 pb-6 pt-2 md:pl-[128px]">
//                         <div className="p-5 rounded-xl bg-black/40 border border-white/5">
//                           <p className="text-white/70 leading-relaxed">
//                             {event.description}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//               </motion.div>
//             )
//           })}
//         </div>

//       </div>
//     </section>
//   )
// }



// ---------------------- Interactive Map Version ----------------------
// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ArrowRight, Compass, Map as MapIcon, Trophy } from "lucide-react"

// export function TimelineSection() {
//   const [activeIdx, setActiveIdx] = useState(0)

//   const timelineEvents = [
//     { date: "15 Mar", year: "2025", title: "Brainstorming workshop", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Initial introduction to the research domain and ideation phase for potential project scopes." },
//     { date: "16 May", year: "2025", title: "Group registration", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Formalizing the 4-member undergraduate research group and supervisor assignments." },
//     { date: "27 Jun", year: "2025", title: "Topic Assessment Form (TAF)", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Official submission of the research problem and proposed solution for departmental approval." },
//     { date: "23 Jul", year: "2025", title: "Project charter", color: "from-cyan-500/20 to-transparent", border: "border-cyan-500/30", text: "text-cyan-400", dot: "bg-cyan-400", description: "Documentation establishing the project scope, objectives, and deliverables." },

//     { date: "30 Aug", year: "2025", title: "Proposal reports (draft)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Initial documentation covering literature review, problem definition, and high-level architectural design." },
//     { date: "11 Sep", year: "2025", title: "Proposal presentation", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "A Project Proposal is presented to potential sponsors or clients to receive funding or get Our project approved.", marks: 6 },
//     { date: "19 Sep", year: "2025", title: "Proposal reports (final)", color: "from-violet-500/20 to-transparent", border: "border-violet-500/30", text: "text-violet-400", dot: "bg-violet-400", description: "Finalized proposal documents strictly adhering to academic formatting standards." },

//     { date: "08 Jan", year: "2026", title: "Progress Presentation – I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.", marks: 6 },
//     { date: "11 Jan", year: "2026", title: "Check List I", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Assessment checklist verifying core foundational implementations and repository health." },
//     { date: "09 Mar", year: "2026", title: "Progress Presentation – II", color: "from-orange-500/20 to-transparent", border: "border-orange-500/30", text: "text-orange-400", dot: "bg-orange-400", description: "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.", marks: 18 },

//     { date: "26 Apr", year: "2026", title: "Final report Submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.", marks: 19 },
//     { date: "26 Apr", year: "2026", title: "Project website", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "The Website helps to promote our research project and reveals all details related to the project.", marks: 2 },
//     { date: "27–30 Apr", year: "2026", title: "Final presentation & VIVA", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Viva is held individually to assess each members contribution to the project.", marks: 20 },
//     { date: "30 Apr", year: "2026", title: "Final Check List", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Validation of final project artifacts, deployment status, and source code ownership." },
//     { date: "27–30 Apr", year: "2026", title: "Logbook submission", color: "from-yellow-500/20 to-transparent", border: "border-yellow-500/30", text: "text-yellow-400", dot: "bg-yellow-400", description: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.", marks: 3 },

//     { date: "04 May", year: "2026", title: "Research paper submission", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge", marks: 10 },
//     { date: "30 May", year: "2026", title: "Paper evidence", color: "from-emerald-500/20 to-transparent", border: "border-emerald-500/30", text: "text-emerald-400", dot: "bg-emerald-400", description: "Submission of proof from credible academic conferences or journals indicating publication acceptance." },
//   ]

//   // S-Curve 16:9 ratio mapping coords for a 1000x500 virtual canvas
//   const mapPoints = [
//     { x: 100, y: 100 }, { x: 260, y: 100 }, { x: 420, y: 100 }, { x: 580, y: 100 }, { x: 740, y: 100 }, { x: 900, y: 100 },
//     { x: 900, y: 250 }, { x: 740, y: 250 }, { x: 580, y: 250 }, { x: 420, y: 250 }, { x: 260, y: 250 }, { x: 100, y: 250 },
//     { x: 100, y: 400 }, { x: 260, y: 400 }, { x: 420, y: 400 }, { x: 580, y: 400 }, { x: 750, y: 400 }
//   ]

//   const activeEvent = timelineEvents[activeIdx]
//   const nextIdx = activeIdx < timelineEvents.length - 1 ? activeIdx + 1 : null
//   const nextPoint = nextIdx !== null ? mapPoints[nextIdx] : null

//   return (
//     <div id="timeline" className="w-full bg-black/40 py-24 border-t border-border/50">
//       <div className="container mx-auto px-4 max-w-[1400px]">
        
//         {/* Header */}
//         <div className="text-center mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
//           >
//             <MapIcon className="w-4 h-4" />
//             Interactive Timeline Map
//           </motion.div>
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
//           >
//             The Assessment Trail
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-xl text-muted-foreground max-w-2xl mx-auto"
//           >
//             Follow our path from initial ideation through to final publication. Explore the interactive map below.
//           </motion.p>
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch">
          
//           {/* Treasure Map Board */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="w-full lg:w-[68%] 2xl:w-[72%] overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
//           >
//             <div className="relative min-w-[700px] lg:min-w-[800px] w-full aspect-[2/1] bg-background/50 rounded-3xl border border-border/50 shadow-2xl overflow-hidden backdrop-blur-sm">
              
//               {/* Map Decoration */}
//               <Compass className="absolute top-10 right-10 w-48 h-48 text-mtfl/5 pointer-events-none" />
//               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none" />
//               <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-200 shadow-lg">
//                 <ArrowRight className="w-4 h-4" />
//                 Click the next waypoint to view details
//               </div>
              
//               {/* Dashed SVG Trail */}
//               <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 1000 500" preserveAspectRatio="none">
//                 <path 
//                   d="M 100 100 L 900 100 A 75 75 0 0 1 900 250 L 100 250 A 75 75 0 0 0 100 400 L 750 400"
//                   fill="none"
//                   stroke="#06b6d4"
//                   strokeWidth="3"
//                   strokeDasharray="8 8"
//                   strokeLinecap="round"
//                 />
//               </svg>
//               {nextPoint && (
//                 <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
//                   <defs>
//                     <marker id="timeline-arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
//                       <path d="M0,0 L10,3 L0,6" fill="#22d3ee" />
//                     </marker>
//                   </defs>
//                   <path
//                     d={`M ${mapPoints[activeIdx].x} ${mapPoints[activeIdx].y} L ${nextPoint.x} ${nextPoint.y}`}
//                     fill="none"
//                     stroke="#22d3ee"
//                     strokeWidth="3"
//                     strokeDasharray="10 8"
//                     markerEnd="url(#timeline-arrow)"
//                   />
//                   <text
//                     x={nextPoint.x}
//                     y={Math.max(nextPoint.y - 24, 24)}
//                     textAnchor="middle"
//                     fontSize="18"
//                     fontWeight="700"
//                     fill="#22d3ee"
//                     stroke="#000000"
//                     strokeWidth="0.5"
//                   >
//                     Click next
//                   </text>
//                 </svg>
//               )}
//               {timelineEvents.map((event, i) => {
//                 const p = mapPoints[i]
//                 const isActive = activeIdx === i

//                 return (
//                   <button
//                     key={i}
//                     onClick={() => setActiveIdx(i)}
//                     className={`absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-300 focus:outline-none ${isActive ? 'z-20 scale-125' : 'z-10 hover:scale-110 hover:z-20'}`}
//                     style={{ left: `${(p.x / 1000) * 100}%`, top: `${(p.y / 500) * 100}%` }}
//                     aria-label={event.title}
//                   >
//                     {/* Waypoint Circle */}
//                     <div className={`w-8 h-8 rounded-full border border-border flex items-center justify-center transition-colors ${isActive ? 'bg-mtfl/20 shadow-[0_0_20px_rgba(6,182,212,0.6)]' : 'bg-background shadow-lg hover:bg-card'}`}>
//                        <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-mtfl animate-pulse' : 'bg-muted-foreground/30'}`} />
//                     </div>
                    
//                     {/* Date & Title Marker */}
//                     <div className="absolute top-10 whitespace-nowrap text-center pointer-events-none drop-shadow-md">
//                       <span className={`block text-[10px] sm:text-xs font-bold uppercase tracking-widest ${isActive ? 'text-white' : 'text-muted-foreground'}`}>
//                         {event.date}
//                       </span>
//                       {isActive && (
//                         <span className="block text-xs font-medium text-mtfl mt-0.5">
//                           Selected
//                         </span>
//                       )}
//                     </div>

//                     {/* Destination Trophy */}
//                     {i === 16 && !isActive && (
//                       <div className="absolute -top-7 text-mtfl opacity-80 animate-bounce pointer-events-none">
//                         <Trophy className="w-5 h-5" />
//                       </div>
//                     )}
//                   </button>
//                 )
//               })}
//             </div>
//           </motion.div>

//           {/* Discovery Detail Panel */}
//           <div className="w-full lg:w-[32%] 2xl:w-[28%] min-h-[400px] p-6 lg:p-10 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden flex flex-col justify-center">
//             <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${activeEvent.color}`} />
            
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeIdx}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex flex-col gap-6"
//               >
//                 {/* Metadata */}
//                 <div className="border-b border-border pb-6">
//                   <div className={`inline-block px-3 py-1 rounded-full bg-background border ${activeEvent.border} mb-6`}>
//                     <span className={`text-xs font-bold uppercase tracking-wider ${activeEvent.text}`}>
//                       Phase {Math.floor(activeIdx / 5) + 1}
//                     </span>
//                   </div>
                  
//                   <h3 className="text-3xl font-extrabold tracking-tight mb-1 leading-none">
//                     {activeEvent.date}
//                   </h3>
//                   <h4 className="text-muted-foreground font-semibold uppercase tracking-widest">
//                     {activeEvent.year}
//                   </h4>
//                 </div>

//                 {/* Lore / Description */}
//                 <div>
//                   <h2 className="text-xl lg:text-2xl font-bold mb-3 leading-tight text-foreground">
//                     {activeEvent.title}
//                   </h2>
//                   <div className="prose prose-invert max-w-none mb-6">
//                     <p className="text-muted-foreground leading-relaxed">
//                       {activeEvent.description}
//                     </p>
//                   </div>
                  
//                   {activeEvent.marks ? (
//                     <div className="px-5 py-4 rounded-xl bg-background border border-border shadow-inner">
//                       <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Total Marks</span>
//                       <span className={`text-4xl font-black ${activeEvent.text}`}>{activeEvent.marks}%</span>
//                     </div>
//                   ) : (
//                     <div className="px-5 py-4 rounded-xl bg-background/50 border border-border/50 border-dashed">
//                       <span className="block text-xs font-bold text-muted-foreground uppercase mb-1">Status</span>
//                       <span className="text-xl font-bold text-foreground">Checkpoint</span>
//                     </div>
//                   )}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }