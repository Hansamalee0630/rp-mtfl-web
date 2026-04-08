"use client"

import { motion, Variants } from "framer-motion"
import { BookOpen, Database, ShieldAlert, Cpu, HeartPulse } from "lucide-react"

export function LiteratureSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  }

  return (
    <section id="literature" className="w-full relative px-4 py-32 bg-black border-t border-border/50 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-mtfl font-bold mb-4 uppercase tracking-widest text-sm">
            <BookOpen className="w-4 h-4" />
            Background Research
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Literature <span className="gradient-text">Survey</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Visuals & Metrics */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full lg:w-5/12 flex flex-col gap-6"
          >
            {/* Main Highlight Card */}
            <motion.div variants={itemVariants} className="relative rounded-3xl bg-black/40 border border-white/10 p-8 overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 border border-cyan-500/20">
                <HeartPulse className="w-7 h-7 text-cyan-400" />
              </div>
              
              <h3 className="text-4xl font-black text-white mb-2">537M+</h3>
              <p className="text-xl text-white/90 font-medium mb-4">Adults affected globally by Diabetes.</p>
              
              <p className="text-white/50 text-sm leading-relaxed">
                The exponential growth of diabetic cases worldwide mandates the rapid deployment of predictive AI. However, strict global data governance (HIPAA/GDPR) prevents the centralization of critical patient data from diverse hospitals.
              </p>
            </motion.div>

            {/* Secondary Visual: Problem Statement */}
            <motion.div variants={itemVariants} className="rounded-3xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 p-6 flex items-start gap-4">
              <div className="mt-1 flex-shrink-0">
                <ShieldAlert className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <h4 className="text-red-400 font-bold mb-1">The Non-IID Bottleneck</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Existing decentralized models (like classic FedAvg) fail catastrophically when presented with extreme data heterogeneity resulting from differing hospital demographics and clinical equipment.
                </p>
              </div>
            </motion.div>

          </motion.div>


          {/* Right Column: The Academic Literature Text */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={containerVariants}
            className="w-full lg:w-7/12"
          >
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-8">
                <span className="text-5xl float-left mr-3 mt-1 font-bold text-cyan-400 leading-none">R</span>
                ecent literature in healthcare informatics highlights a critical shift toward Federated Learning (FL) to develop robust predictive models for diabetes management without compromising patient privacy or violating strict data governance regulations. However, existing decentralized approaches often fall short in addressing complex clinical realities, such as non-IID data heterogeneity across hospitals, demographic biases, and the inability to interpret "black-box" algorithms. 
              </p>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-10">
                To bridge these gaps, current research is advancing along <span className="text-white font-medium">four interconnected frontiers</span>:
              </p>

              <div className="space-y-8">
                {/* Point 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">1</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Multimodal Detection</h4>
                    <p className="text-white/60 leading-relaxed">
                      The integration of multimodal federated learning—fusing structured Electronic Health Records (EHR) with unstructured clinical imagery (such as retinal scans)—is proving essential for the accurate, early detection of undiagnosed diabetes.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">2</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Multi-Task Personalization</h4>
                    <p className="text-white/60 leading-relaxed">
                      To handle the diverse progression of the disease, personalized multi-task architectures are being developed; these models adapt to local hospital data distributions while simultaneously predicting interrelated diabetes comorbidities.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">3</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Complication Risk Forecasting</h4>
                    <p className="text-white/60 leading-relaxed">
                      Predictive analytics are expanding beyond initial diagnosis to forecast long-term complication risks and 30-day hospital readmissions, which are vital for reducing severe health outcomes and economic burdens on medical facilities.
                    </p>
                  </div>
                </div>

                {/* Point 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">4</div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Fairness-Aware XAI</h4>
                    <p className="text-white/60 leading-relaxed">
                      The integration of fairness-aware Explainable AI (XAI) is emerging as a mandatory requirement across these systems, ensuring that decentralized, multimodal predictions remain transparent, demographically equitable, and clinically trustworthy for healthcare practitioners.
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
