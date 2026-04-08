"use client"

import { motion } from "framer-motion"
import { Cpu, Database, Layout, Network, Activity, Container, Brain, Terminal, ServerCog, LineChart, FileCode2, FlaskConical } from "lucide-react"

export function TechStackSection() {
  // We use SimpleIcons for brand logos and Lucide for custom architectures
  const techStack = [
    // Languages & Deep Learning
    { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", isImage: true },
    { name: "PyTorch", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C", isImage: true },
    { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000", isImage: true },
    
    // Data Science & Analytics
    { name: "Pandas", icon: "https://cdn.simpleicons.org/pandas/150458", isImage: true },
    { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", isImage: true },
    { name: "Scikit-Learn", icon: "https://cdn.simpleicons.org/scikitlearn/F7931E", isImage: true },
    { name: "Jupyter", icon: "https://cdn.simpleicons.org/jupyter/F37626", isImage: true },
    
    // Federated Learning 
    { name: "Flower (flwr)", icon: <Network className="w-10 h-10 text-violet-400" />, isImage: false },
    { name: "FL Engine", icon: <ServerCog className="w-10 h-10 text-mtfl" />, isImage: false },
    
    // Frontend & Visualization
    { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit/FF4B4B", isImage: true },
    { name: "Plotly", icon: "https://cdn.simpleicons.org/plotly/3F4F75", isImage: true },
    { name: "Matplotlib", icon: <LineChart className="w-10 h-10 text-yellow-500" />, isImage: false },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  }

  return (
    <section id="tech-stack" className="w-full py-24 bg-black relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mtfl/10 border border-mtfl/20 text-mtfl text-sm font-medium mb-6"
          >
            <Cpu className="w-4 h-4" />
            Core Technologies
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Powering our federated multi-task learning ecosystem with state-of-the-art frameworks, robust data pipelines, and interactive interfaces.
          </motion.p>
        </div>

        {/* Circular Grid Display (Modeled after user specifications) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 gap-y-12 place-items-center"
        >
          {techStack.map((tech, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="group flex flex-col items-center gap-4"
            >
              {/* Circular Icon Container */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-zinc-100/90 border-2 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] relative overflow-hidden">
                
                {/* Subtle internal glow inside the white circle */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-50" />
                
                <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14">
                  {tech.isImage ? (
                    <img 
                      src={tech.icon as string} 
                      alt={tech.name} 
                      className="w-full h-full object-contain filter drop-shadow-sm"
                    />
                  ) : (
                    tech.icon
                  )}
                </div>
              </div>
              
              {/* Label */}
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors tracking-wide text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
