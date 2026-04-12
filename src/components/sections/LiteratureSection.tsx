// ------------ Original version 1------------------

// "use client"

// import { motion, Variants } from "framer-motion"
// import { BookOpen, Database, ShieldAlert, Cpu, HeartPulse } from "lucide-react"

// export function LiteratureSection() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
//   }

//   return (
//     <section id="literature" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">
      
//       {/* Background glow */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-7xl relative z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="mb-16 md:mb-24 text-center md:text-left"
//         >
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-mtfl font-bold mb-4 uppercase tracking-widest text-sm">
//             <BookOpen className="w-4 h-4" />
//             Background Research
//           </motion.div>
//           <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
//             Literature <span className="gradient-text">Survey</span>
//           </motion.h2>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
//           {/* Left Column: Visuals & Metrics */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={containerVariants}
//             className="w-full lg:w-5/12 flex flex-col gap-6"
//           >
//             {/* Main Highlight Card */}
//             <motion.div variants={itemVariants} className="relative rounded-3xl bg-black/40 border border-white/10 p-8 overflow-hidden group hover:border-cyan-500/30 transition-colors">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
//               <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
//                 <HeartPulse className="w-7 h-7 text-cyan-400" />
//               </div>
              
//               <h3 className="text-4xl font-black text-white mb-2">537M+</h3>
//               <p className="text-xl text-white/90 font-medium mb-4">Adults affected globally by Diabetes.</p>
              
//               <p className="text-white/50 text-sm leading-relaxed">
//                 The exponential growth of diabetic cases worldwide mandates the rapid deployment of predictive AI. However, strict global data governance (HIPAA/GDPR) prevents the centralization of critical patient data from diverse hospitals.
//               </p>
//             </motion.div>

//             {/* Secondary Visual: Problem Statement */}
//             <motion.div variants={itemVariants} className="rounded-3xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 p-6 flex items-start gap-4">
//               <div className="mt-1 flex-shrink-0">
//                 <ShieldAlert className="w-6 h-6 text-red-400" />
//               </div>
//               <div>
//                 <h4 className="text-red-400 font-bold mb-1">The Non-IID Bottleneck</h4>
//                 <p className="text-white/60 text-sm leading-relaxed">
//                   Existing decentralized models (like classic FedAvg) fail catastrophically when presented with extreme data heterogeneity resulting from differing hospital demographics and clinical equipment.
//                 </p>
//               </div>
//             </motion.div>

//           </motion.div>


//           {/* Right Column: The Academic Literature Text */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={containerVariants}
//             className="w-full lg:w-7/12"
//           >
//             <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              
//               <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-8">
//                 <span className="text-5xl float-left mr-3 mt-1 font-bold text-cyan-400 leading-none">R</span>
//                 ecent literature in healthcare informatics highlights a critical shift toward Federated Learning (FL) to develop robust predictive models for diabetes management without compromising patient privacy or violating strict data governance regulations. However, existing decentralized approaches often fall short in addressing complex clinical realities, such as non-IID data heterogeneity across hospitals, demographic biases, and the inability to interpret "black-box" algorithms. 
//               </p>
              
//               <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10">
//                 To bridge these gaps, current research is advancing along <span className="text-white font-medium">four interconnected frontiers</span>:
//               </p>

//               <div className="space-y-8">
//                 {/* Point 1 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">1</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Multimodal Detection</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       The integration of multimodal federated learning—fusing structured Electronic Health Records (EHR) with unstructured clinical imagery (such as retinal scans)—is proving essential for the accurate, early detection of undiagnosed diabetes.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 2 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">2</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Multi-Task Personalization</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       To handle the diverse progression of the disease, personalized multi-task architectures are being developed; these models adapt to local hospital data distributions while simultaneously predicting interrelated diabetes comorbidities.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 3 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">3</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Complication Risk Forecasting</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       Predictive analytics are expanding beyond initial diagnosis to forecast long-term complication risks and 30-day hospital readmissions, which are vital for reducing severe health outcomes and economic burdens on medical facilities.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Point 4 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">4</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Fairness-Aware XAI</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       The integration of fairness-aware Explainable AI (XAI) is emerging as a mandatory requirement across these systems, ensuring that decentralized, multimodal predictions remain transparent, demographically equitable, and clinically trustworthy for healthcare practitioners.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }






// ------------ version 2------------------

// "use client"

// import { motion, Variants } from "framer-motion"
// import { BookOpen, Target, AlertCircle, Lightbulb } from "lucide-react"

// export function LiteratureSection() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
//   }

//   const domainItems = [
//     {
//       title: "Literature Survey",
//       icon: BookOpen,
//       color: "text-blue-400",
//       bg: "bg-blue-500/10",
//       border: "border-blue-500/30",
//       content: "The intersection of artificial intelligence, privacy-preserving distributed networks, and explainability forms the critical frontier of modern computational research. In healthcare, traditional centralized machine learning models are being rapidly supplanted by Federated Learning (FL) frameworks to mitigate data silos and comply with strict privacy regulations (HIPAA, GDPR). Recent literature emphasizes the necessity of adaptive personalization, multimodal fusion (EHR and imaging), and Explainable AI (XAI) to achieve scalable and clinically trustworthy predictive analytics."
//     },
//     {
//       title: "Research Gap",
//       icon: AlertCircle,
//       color: "text-rose-400",
//       bg: "bg-rose-500/10",
//       border: "border-rose-500/30",
//       content: "While centralized models violate patient privacy, current decentralized federated models present their own critical gaps: they are primarily unimodal, struggle with non-IID data heterogeneity across different hospitals, fail to predict sequential disease complications, and lack integrated fairness-aware explainability. There is no existing end-to-end framework that jointly addresses multimodal fusion, multi-task comorbidity personalization, and demographic fairness in a fully decentralized environment."
//     },
//     {
//       title: "Research Problem",
//       icon: Lightbulb,
//       color: "text-amber-400",
//       bg: "bg-amber-500/10",
//       border: "border-amber-500/30",
//       content: "How can a decentralized, privacy-preserving machine learning framework be developed that seamlessly fuses multimodal data (EHR and retinal images) to accurately predict undiagnosed diabetes, its associated comorbidities, and subsequent sequential complications, while ensuring demographic fairness and clinical interpretability across heterogeneous hospital networks?"
//     },
//     {
//       title: "Research Objectives",
//       icon: Target,
//       color: "text-emerald-400",
//       bg: "bg-emerald-500/10",
//       border: "border-emerald-500/30",
//       content: (
//         <ul className="list-disc pl-5 space-y-2 text-white/60">
//           <li><strong>Multimodal Fusion:</strong> Integrate retinal fundus imaging with structured EHR data without centralizing patient records.</li>
//           <li><strong>Personalized MTFL:</strong> Implement multi-task federated learning to predict related comorbidities (e.g., hypertension, heart failure) adapted to local hospital distributions.</li>
//           <li><strong>Sequential Risk Forecasting:</strong> Design a chain-model architecture to predict the sequential onset of complications like nephropathy and CVD.</li>
//           <li><strong>Fairness & XAI:</strong> Integrate fairness-aware mechanisms and Explainable AI (SHAP, Grad-CAM) to ensure equitable, transparent, and trustworthy clinical decisions.</li>
//         </ul>
//       )
//     }
//   ]

//   return (
//     <section id="domain" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">
      
//       {/* Background glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-5xl relative z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="mb-16 text-center"
//         >
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
//             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-sm text-white/70 font-medium uppercase tracking-wider">Project Domain</span>
//           </motion.div>
//           <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
//             Domain Background & Objectives
//           </motion.h2>
//           <motion.p variants={itemVariants} className="text-lg text-white/50 max-w-2xl mx-auto">
//             Comprehensive overview of the project scope, identified limitations in current healthcare IT, and our targeted solutions.
//           </motion.p>
//         </motion.div>

//         {/* 4 Required Sections Grid */}
//         <motion.div 
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="grid gap-8"
//         >
//           {domainItems.map((item, index) => (
//             <motion.div 
//               key={index}
//               variants={itemVariants}
//               className={`p-8 rounded-3xl bg-white/[0.02] border ${item.border} backdrop-blur-sm relative overflow-hidden group hover:bg-white/[0.04] transition-colors`}
//             >
//               {/* Subtle background gradient based on card color */}
//               <div className={`absolute top-0 right-0 w-64 h-64 ${item.bg} blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />
              
//               <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
//                 <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center`}>
//                   <item.icon className={`w-7 h-7 ${item.color}`} />
//                 </div>
                
//                 <div>
//                   <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
//                   <div className="text-white/60 leading-relaxed text-lg">
//                     {item.content}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </section>
//   )
// }


// "use client"

// import { motion, Variants } from "framer-motion"
// import { BookOpen, AlertCircle, Lightbulb, Target, Database, ShieldAlert, Cpu, HeartPulse } from "lucide-react"

// export function LiteratureSection() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15 }
//     }
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
//   }

//   return (
//     <section id="domain" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">
      
//       {/* Background glow */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-6xl relative z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="mb-16 text-center"
//         >
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
//             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
//             <span className="text-sm text-white/70 font-medium uppercase tracking-wider">Project Domain</span>
//           </motion.div>
//           <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
//             Background & Objectives
//           </motion.h2>
//         </motion.div>

//         {/* TOP HALF: The Rubric Required Sections */}
//         <motion.div 
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="grid md:grid-cols-3 gap-6 mb-16"
//         >
//           {/* Literature Survey */}
//           <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-blue-500/20 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full" />
//             <BookOpen className="w-8 h-8 text-blue-400 mb-6" />
//             <h3 className="text-xl font-bold text-white mb-4">Literature Survey</h3>
//             <p className="text-white/60 leading-relaxed text-sm">
//               The intersection of AI, privacy-preserving networks, and explainability is critical. Traditional centralized machine learning models are being supplanted by Federated Learning (FL) to mitigate data silos and comply with strict privacy regulations like HIPAA and GDPR.
//             </p>
//           </motion.div>

//           {/* Research Gap */}
//           <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-rose-500/20 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 blur-[50px] rounded-full" />
//             <AlertCircle className="w-8 h-8 text-rose-400 mb-6" />
//             <h3 className="text-xl font-bold text-white mb-4">Research Gap</h3>
//             <p className="text-white/60 leading-relaxed text-sm">
//               Current federated models present critical gaps: they are primarily unimodal, struggle with non-IID data heterogeneity across hospitals, fail to predict sequential complications, and lack integrated demographic fairness and integrated explainability.
//             </p>
//           </motion.div>

//           {/* Research Problem */}
//           <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-white/[0.02] border border-amber-500/20 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[50px] rounded-full" />
//             <Lightbulb className="w-8 h-8 text-amber-400 mb-6" />
//             <h3 className="text-xl font-bold text-white mb-4">Research Problem</h3>
//             <p className="text-white/60 leading-relaxed text-sm">
//               How can a decentralized, privacy-preserving machine learning framework be developed that seamlessly fuses multimodal data to accurately predict undiagnosed diabetes and its sequential complications, while ensuring demographic fairness?
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* BOTTOM HALF: Your Original 4 Pillars as "Research Objectives" */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//         >
//           <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
//             <Target className="w-6 h-6 text-cyan-400" />
//             <h3 className="text-2xl font-bold text-white">Research Objectives & Framework</h3>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Point 1 */}
//             <motion.div variants={itemVariants} className="flex gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5">
//               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
//                 <Database className="w-4 h-4" />
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-lg mb-2">Multimodal Integration</h4>
//                 <p className="text-white/60 leading-relaxed text-sm">
//                   Integrate retinal fundus imaging with structured EHR data without centralizing patient records, fusing features at the edge to capture a holistic patient profile.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Point 2 */}
//             <motion.div variants={itemVariants} className="flex gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5">
//               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
//                 <Cpu className="w-4 h-4" />
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-lg mb-2">Personalized Multi-Task Learning</h4>
//                 <p className="text-white/60 leading-relaxed text-sm">
//                   Implement multi-task federated architectures to predict interrelated comorbidities (e.g., hypertension, heart failure) adapted to local non-IID hospital distributions.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Point 3 */}
//             <motion.div variants={itemVariants} className="flex gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5">
//               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
//                 <HeartPulse className="w-4 h-4" />
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-lg mb-2">Complication Risk Forecasting</h4>
//                 <p className="text-white/60 leading-relaxed text-sm">
//                   Design a chain-model architecture to forecast the sequential onset of long-term complication risks (Nephropathy → CVD) and 30-day hospital readmissions.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Point 4 */}
//             <motion.div variants={itemVariants} className="flex gap-4 p-6 rounded-2xl bg-white/[0.01] border border-white/5">
//               <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
//                 <ShieldAlert className="w-4 h-4" />
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-lg mb-2">Fairness-Aware XAI</h4>
//                 <p className="text-white/60 leading-relaxed text-sm">
//                   Integrate Explainable AI (SHAP, Grad-CAM) and fairness-aware mechanisms to ensure decentralized predictions remain transparent, equitable, and clinically trustworthy.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   )
// }





// ------------ version 3------------------
// "use client"

// import { motion, Variants } from "framer-motion"
// import { BookOpen, ShieldAlert, HeartPulse, Lightbulb, Target } from "lucide-react"

// export function LiteratureSection() {
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   }

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
//   }

//   return (
//     <section id="literature" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">
      
//       {/* Background glow */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-7xl relative z-10">
        
//         {/* Section Header */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="mb-16 md:mb-24 text-center md:text-left"
//         >
//           <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">
//             <BookOpen className="w-4 h-4" />
//             Domain Background
//           </motion.div>
//           <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
//             Literature <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Survey & Objectives</span>
//           </motion.h2>
//         </motion.div>

//         <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
//           {/* LEFT COLUMN: Visuals & Problem Definition */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={containerVariants}
//             className="w-full lg:w-5/12 flex flex-col gap-6"
//           >
//             {/* Research Gap Card (Using your Red Alert style) */}
//             <motion.div variants={itemVariants} className="rounded-3xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 p-8 flex flex-col gap-4 relative overflow-hidden group hover:border-red-500/40 transition-colors">
//               <div className="flex items-center gap-3">
//                 <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
//                   <ShieldAlert className="w-6 h-6 text-red-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">Research Gap</h3>
//               </div>
//               <p className="text-white/70 text-sm leading-relaxed">
//                 While centralized models violate patient privacy, current federated models present their own critical gaps: they are primarily unimodal, struggle with non-IID data heterogeneity across different hospitals, fail to predict sequential disease complications, and lack integrated demographic fairness.
//               </p>
//             </motion.div>

//             {/* Research Problem Card (Using your Dark Cyan style) */}
//             <motion.div variants={itemVariants} className="relative rounded-3xl bg-black/40 border border-white/10 p-8 overflow-hidden group hover:border-cyan-500/30 transition-colors">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
//                   <Lightbulb className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-white">Research Problem</h3>
//               </div>
              
//               <p className="text-white/80 text-sm leading-relaxed font-medium">
//                 How can a decentralized, privacy-preserving machine learning framework be developed that seamlessly fuses multimodal data (EHR and retinal images) to accurately predict undiagnosed diabetes and sequential complications, while ensuring demographic fairness and clinical interpretability?
//               </p>
//             </motion.div>

//           </motion.div>


//           {/* RIGHT COLUMN: The Academic Literature & Objectives */}
//           <motion.div 
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             variants={containerVariants}
//             className="w-full lg:w-7/12"
//           >
//             <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              
//               {/* Literature Survey Section */}
//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
//                 Literature Survey
//               </h3>
//               <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-12">
//                 <span className="text-5xl float-left mr-3 mt-1 font-bold text-cyan-400 leading-none">T</span>
//                 he intersection of artificial intelligence, privacy-preserving distributed networks, and explainability forms the critical frontier of modern healthcare research. Traditional centralized models are being rapidly supplanted by Federated Learning (FL) frameworks to mitigate data silos and comply with strict privacy regulations (HIPAA, GDPR). Recent literature emphasizes the absolute necessity of adaptive personalization, multimodal fusion, and Explainable AI (XAI) to achieve scalable and clinically trustworthy predictive analytics.
//               </p>
              
//               {/* Research Objectives Section */}
//               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 mt-12">
//                 <Target className="w-6 h-6 text-cyan-400" />
//                 Research Objectives
//               </h3>
//               <p className="text-lg text-white/80 leading-relaxed font-light mb-8">
//                 To address the identified gaps, our framework targets <span className="text-white font-medium">four primary objectives</span>:
//               </p>

//               <div className="space-y-8">
//                 {/* Objective 1 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">1</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Multimodal Integration</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       Integrate retinal fundus imaging with structured EHR data without centralizing patient records, fusing features at the edge to capture a holistic patient profile.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Objective 2 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">2</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Personalized Multi-Task Learning</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       Implement multi-task federated architectures to predict interrelated comorbidities (e.g., hypertension, heart failure) adapted to local non-IID hospital distributions.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Objective 3 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">3</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Sequential Risk Forecasting</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       Design a chain-model architecture to forecast the sequential onset of long-term complication risks (Nephropathy → CVD) and 30-day hospital readmissions.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Objective 4 */}
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">4</div>
//                   <div>
//                     <h4 className="text-white font-bold text-lg mb-2">Fairness-Aware XAI</h4>
//                     <p className="text-white/60 leading-relaxed">
//                       Integrate Explainable AI (SHAP, Grad-CAM) and fairness-aware mechanisms to ensure decentralized predictions remain transparent, equitable, and clinically trustworthy.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//             </motion.div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   )
// }




// ------------------------Claude's applied styles to version 5------------------------

// "use client"

// import { motion, Variants } from "framer-motion"
// import { BookOpen, Target, AlertTriangle, HelpCircle, Shield } from "lucide-react"

// const container: Variants = {
//   hidden: { opacity: 0 },
//   show: { opacity: 1, transition: { staggerChildren: 0.12 } }
// }
// const item: Variants = {
//   hidden: { opacity: 0, y: 28 },
//   show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 18 } }
// }

// function SectionBadge({ label }: { label: string }) {
//   return (
//     <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
//       <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
//       <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60">{label}</span>
//     </div>
//   )
// }

// const objectives = [
//   {
//     num: "01",
//     title: "Multimodal Integration",
//     desc: "Integrate retinal fundus imaging with structured EHR data without centralizing records — fusing features at the edge for a holistic patient profile."
//   },
//   {
//     num: "02",
//     title: "Personalized Multi-Task Learning",
//     desc: "Multi-task federated architectures predict interrelated comorbidities (hypertension, heart failure) adapted to local non-IID hospital distributions."
//   },
//   {
//     num: "03",
//     title: "Sequential Risk Forecasting",
//     desc: "Chain-model architecture forecasts sequential onset of long-term risks — Nephropathy → CVD — and 30-day hospital readmission events."
//   },
//   {
//     num: "04",
//     title: "Fairness-Aware XAI",
//     desc: "SHAP, Grad-CAM, and fairness mechanisms ensure decentralized predictions remain transparent, equitable, and clinically trustworthy."
//   }
// ]

// const frontiers = [
//   {
//     num: "01",
//     title: "Multimodal detection",
//     desc: "Fusing EHR with retinal fundus imaging inside federated networks for early, accurate diabetes detection — without centralizing patient data."
//   },
//   {
//     num: "02",
//     title: "Multi-task personalization",
//     desc: "Personalized MTFL architectures adapt to local hospital distributions while simultaneously predicting interrelated comorbidities."
//   },
//   {
//     num: "03",
//     title: "Complication risk forecasting",
//     desc: "Expanding beyond initial diagnosis toward long-term complication forecasting and 30-day hospital readmission prediction."
//   },
//   {
//     num: "04",
//     title: "Fairness-aware XAI",
//     desc: "SHAP and Grad-CAM explainability combined with demographic fairness constraints — a mandatory requirement for decentralized clinical AI."
//   }
// ]

// const stats = [
//   { num: "537M+", label: "Diabetics globally" },
//   { num: "HIPAA", label: "Privacy regulation" },
//   { num: "Non-IID", label: "Core bottleneck" },
//   { num: "0 E2E", label: "Frameworks exist" }
// ]

// export function LiteratureSection() {
//   return (
//     <section
//       id="literature"
//       className="w-full relative px-4 md:px-8 py-32 bg-black border-t border-border/50 overflow-hidden"
//     >
//       {/* Official ambient glows — cyan only, matching your existing sections */}
//       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

//       <div className="container mx-auto max-w-5xl relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={container}
//         >
//           {/* Header */}
//           <motion.div variants={item} className="inline-flex items-center gap-2 text-cyan-400 font-bold mb-4 uppercase tracking-widest text-sm">
//             <BookOpen className="w-4 h-4" />
//             Domain Background
//           </motion.div>
//           <motion.h2
//             variants={item}
//             className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4"
//           >
//             Literature Survey{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//               &amp; Objectives
//             </span>
//           </motion.h2>
//           <motion.p variants={item} className="text-white/50 max-w-lg mb-14 leading-relaxed text-lg font-light">
//             Mapping the research frontier — from critical gaps to targeted solutions in privacy-preserving clinical AI.
//           </motion.p>

//           {/* TOP ROW: Gap + Problem */}
//           <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

//             {/* Research Gap */}
//             <div className="group relative rounded-3xl bg-white/[0.02] border border-white/10 p-8 overflow-hidden hover:border-red-500/30 hover:bg-white/[0.04] transition-all duration-300">
//               <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-2xl pointer-events-none" />
//               <div className="relative z-10">
//                 <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5">
//                   <Shield className="w-6 h-6 text-red-400" />
//                 </div>
//                 <span className="inline-flex text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 mb-4">
//                   02 · Gap
//                 </span>
//                 <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Research Gap</h3>
//                 <p className="text-sm text-white/60 leading-relaxed">
//                   Current federated models are primarily{" "}
//                   <strong className="text-white/80 font-semibold">unimodal</strong>, struggle with{" "}
//                   <strong className="text-white/80 font-semibold">non-IID heterogeneity</strong> across hospitals,
//                   fail to predict sequential complications, and lack integrated fairness-aware explainability.
//                   No end-to-end framework addresses all of these simultaneously.
//                 </p>
//                 {/* Alert strip — matches your existing red alert pattern */}
//                 <div className="mt-5 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 flex gap-3 items-start">
//                   <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-bold text-red-400 mb-1">The Non-IID Bottleneck</p>
//                     <p className="text-xs text-white/50 leading-relaxed">
//                       Classic FedAvg collapses catastrophically when hospital data distributions diverge
//                       due to differing patient demographics and clinical equipment.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Research Problem — matches your "dark cyan hover" card style */}
//             <div className="group relative rounded-3xl bg-black/40 border border-white/10 p-8 overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
//               <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               <div className="relative z-10">
//                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
//                   <HelpCircle className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <span className="inline-flex text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mb-4">
//                   03 · Problem
//                 </span>
//                 <h3 className="text-2xl font-bold text-white tracking-tight mb-3">Research Problem</h3>
//                 <p className="text-sm text-white/70 leading-relaxed font-medium">
//                   How can a{" "}
//                   <strong className="text-white font-semibold">decentralized, privacy-preserving ML framework</strong>{" "}
//                   be developed that fuses multimodal data (EHR + retinal images) to predict undiagnosed diabetes
//                   and sequential complications, while ensuring{" "}
//                   <strong className="text-white font-semibold">demographic fairness</strong> and clinical
//                   interpretability across heterogeneous hospital networks?
//                 </p>
//                 <div className="mt-6 px-5 py-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/10 relative">
//                   <span className="absolute -top-4 left-4 text-[44px] text-cyan-400/20 leading-none font-serif select-none">&ldquo;</span>
//                   <p className="text-xs text-white/50 leading-[1.75] italic mt-2">
//                     A framework that is private by design, multimodal by architecture, fair by measure, and explainable by default.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* LITERATURE SURVEY BLOCK */}
//           <motion.div
//             variants={item}
//             className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-10 overflow-hidden mb-6"
//           >
//             <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
//                   <BookOpen className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-white tracking-tight">Literature Survey</h3>
//                   <p className="text-xs font-bold uppercase tracking-widest text-white/30 mt-1">01 · Background Research</p>
//                 </div>
//               </div>

//               <p className="text-lg text-white/60 leading-relaxed font-light mb-8">
//                 <span className="text-5xl float-left mr-3 mt-1 font-bold text-cyan-400 leading-none select-none">T</span>
//                 he intersection of artificial intelligence, privacy-preserving distributed networks, and explainability
//                 forms the critical frontier of modern healthcare research. Traditional centralized models are being rapidly
//                 supplanted by{" "}
//                 <strong className="text-white/80 font-semibold">Federated Learning (FL)</strong> frameworks to mitigate
//                 data silos and comply with HIPAA/GDPR. Recent literature emphasizes adaptive personalization,{" "}
//                 <strong className="text-white/80 font-semibold">multimodal fusion</strong>, and Explainable AI (XAI) to
//                 achieve scalable and clinically trustworthy predictive analytics.
//               </p>

//               {/* Stat strip */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 mb-8">
//                 {stats.map((s, i) => (
//                   <div
//                     key={i}
//                     className="bg-black py-4 px-4 text-center hover:bg-cyan-500/5 transition-colors cursor-default"
//                   >
//                     <p className="text-xl font-black text-cyan-400 tracking-tight leading-none mb-1.5">{s.num}</p>
//                     <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/30 leading-tight">{s.label}</p>
//                   </div>
//                 ))}
//               </div>

//               {/* Frontier rows — cyan numbered circles, your exact existing pattern */}
//               <div className="border-t border-white/[0.07] pt-6 space-y-0">
//                 {frontiers.map((f, i) => (
//                   <div
//                     key={i}
//                     className="group flex gap-4 py-5 border-b border-white/[0.05] last:border-b-0 items-start cursor-default"
//                   >
//                     <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-[11px] font-bold text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black group-hover:border-cyan-400 transition-all duration-200">
//                       {f.num}
//                     </div>
//                     <div>
//                       <p className="text-base font-bold text-white/70 group-hover:text-white mb-1.5 transition-colors duration-200">{f.title}</p>
//                       <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* OBJECTIVES BLOCK */}
//           <motion.div
//             variants={item}
//             className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-10 overflow-hidden"
//           >
//             <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
//                   <Target className="w-6 h-6 text-cyan-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-white tracking-tight">Research Objectives</h3>
//                   <p className="text-xs font-bold uppercase tracking-widest text-white/30 mt-1">04 · Targeted Solutions</p>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                 {objectives.map((o, i) => (
//                   <div
//                     key={i}
//                     className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.01] p-6 cursor-default overflow-hidden hover:bg-white/[0.04] hover:border-cyan-500/30 hover:-translate-y-[2px] transition-all duration-250"
//                   >
//                     {/* Bottom sweep bar — cyan-to-blue, your gradient */}
//                     <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-400" />
//                     <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-cyan-400/70 mb-2.5">
//                       Objective {o.num}
//                     </p>
//                     <h4 className="text-base font-bold text-white/80 mb-2">{o.title}</h4>
//                     <p className="text-sm text-white/50 leading-relaxed">{o.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//         </motion.div>
//       </div>
//     </section>
//   )
// }



// -------------------------Version 5 : Gemini's applied styles to version 2------------------------
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
                      Classic FedAvg collapses catastrophically when hospital data distributions diverge due to differing
                      patient demographics and clinical equipment.
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
                  and sequential complications, while ensuring{" "}
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