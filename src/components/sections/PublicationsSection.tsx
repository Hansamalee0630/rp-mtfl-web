"use client"

import { motion } from "framer-motion"
import { BookOpen, ExternalLink, Quote, FileText, ChevronRight } from "lucide-react"

const publications = [
  {
    title: "Adaptive Personalized Multi-Task Federated Learning for Non-IID Diabetic Comorbidity Prediction",
    abstract: "Federated learning (FL) has emerged as the requisite standard for privacy-preserving healthcare AI, supplanting traditional centralized models. However, standard FL approaches often fail to consider the non-IID nature of clinical data and the need to predict multiple comorbidities simultaneously. This work presents a Personalized Multi-Task Federated Learning (MTFL) framework for diabetes management. In this system, a shared-bottom neural architecture is utilized with three different task heads: Hypertension Detection, Heart Failure Prediction, and Comorbidity Risk Clustering. Unlike clustering-based personalization, our approach utilizes Federated Representation Learning (FedRep) via selective layer freezing. To tackle non-IID heterogeneity, we adopt a strategy of: (1) Global Aggregation (2) Local Adaptation, where clients freeze the shared feature extractor and fine-tune only task-specific heads and (3) Integrated Privacy Simulation via gradient clipping and noise injection. On the Diabetes 130-US Hospitals dataset, this framework results in a final personalized accuracy of 65.6%, a Heart Failure AUROC of 0.794, and a Comorbidity Cluster Macro-F1 score of 0.454. Personalization analysis demonstrates a massive immediate 30.14% relative accuracy improvement within the cold-start phase, validating the architecture’s adaptability. Furthermore, we address communication efficiency by leveraging hard-parameter sharing, reducing model transmission overhead by 66.6% compared to deploying independent single-task baselines. Finally, we report a minimized demographic parity gap of 1.20 percentage points, highlighting the effectiveness of the proposed framework in ensuring equitable AI deployment.",
    keywords: ["Diabetes", "Fairness", "Federated Learning", "Multi-Task Learning", "Personalization"],
    link: "https://ieeexplore.ieee.org/", // Placeholder for actual IEEE link
    color: "from-cyan-500/20 to-transparent",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
    bgAccent: "bg-cyan-500/10",
  },
  {
    title: "Multimodal Federated Learning for Undiagnosed Diabetes Detection with Explainable AI",
    abstract: "The rising prevalence of diabetes requires robust and automated screening mechanisms to prevent complications like Diabetic Retinopathy (DR). However, current Artificial Intelligence (AI) solutions often rely on centralized data aggregation, which raises privacy concerns under regulations such as GDPR and HIPAA. Furthermore, most systems are unimodal, utilizing either Electronic Health Records (EHR) or retinal imaging in isolation, thereby limiting diagnostic comprehensiveness. This paper proposes a novel Multimodal Federated Learning (FL) framework that integrates structured clinical data with retinal fundus images to detect undiagnosed diabetes while preserving data privacy. We employ a Late Fusion architecture utilizing a Multilayer Perceptron (MLP) for tabular features and an EfficientNet-B2 backbone for imaging. To address the \"black box\" nature of deep learning, we integrate Explainable AI (XAI) modules, specifically SHAP for EHR features and Grad-CAM for retinal images, ensuring clinical interpretability. Experimental results demonstrate that this federated multimodal approach achieves superior performance compared to unimodal baselines while maintaining strict data localization.",
    keywords: ["Diabetic Retinopathy", "Electronic Health Records", "Explainable AI", "Federated Learning", "Multimodal Fusion"],
    link: "https://ieeexplore.ieee.org/", // Placeholder for actual IEEE link
    color: "from-violet-500/20 to-transparent",
    accent: "text-violet-400",
    border: "border-violet-500/30",
    bgAccent: "bg-violet-500/10",
  }
]

export function PublicationsSection() {
  return (
    <div id="publications" className="w-full px-4 py-32 relative bg-black/40 border-t border-border/50">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Research Output
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white/90 mb-4">
            Publications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Our findings have been formally synthesized and submitted to leading academic journals. Below are the abstracts of our flagship IEEE research papers.
          </p>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {publications.map((paper, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
              className="group relative flex flex-col h-full"
            >
              <div className={`relative flex flex-col h-full rounded-3xl bg-card border ${paper.border} shadow-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:${paper.border.replace('30', '60')}`}>
                
                {/* Visual Top Gradient */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${paper.color}`} />
                <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none ${paper.bgAccent}`} />

                <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                  
                  {/* Paper Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 border ${paper.border} ${paper.bgAccent}`}>
                      <FileText className={`w-6 h-6 ${paper.accent}`} />
                    </div>
                    <a 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                    >
                      <span className={paper.accent}>IEEE Xplore</span>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
                    </a>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-8">
                    {paper.title}
                  </h3>

                  {/* Abstract Section */}
                  <div className="flex-grow mb-10">
                    <div className="flex items-center gap-2 mb-3 text-muted-foreground font-semibold uppercase tracking-widest text-xs">
                      <Quote className="w-3 h-3" />
                      Abstract
                    </div>
                    <p className="text-muted-foreground/80 leading-relaxed text-sm text-justify">
                      {paper.abstract}
                    </p>
                  </div>

                  {/* Footer - Keywords */}
                  <div className="mt-auto pt-6 border-t border-border/50">
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((kw, i) => (
                        <span 
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-white/70"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}