"use client"

import { motion } from "framer-motion"
import { Send, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-24 bg-black relative border-t border-border/50">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-mtfl font-bold mb-3 uppercase tracking-widest text-sm"
          >
            Contact Us
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white/90"
          >
            Get in Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="John Doe"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-mtfl/50 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-mtfl/50 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message or Query</label>
                <textarea 
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-mtfl/50 focus:border-transparent transition-all resize-y"
                />
              </div>

              <button 
                type="submit"
                className="w-full rounded-xl bg-mtfl hover:bg-cyan-400 text-black font-bold py-3.5 px-4 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center gap-2"
              >
                Submit <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex flex-col justify-center lg:pl-10"
          >
            <h3 className="text-xl font-bold text-white/90 mb-8 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-mtfl" />
              Contact Details
            </h3>
            
            <div className="space-y-8 text-white/70 text-lg leading-relaxed">
              <p>
                For further queries please reach us at{" "}
                <a href="mailto:research@mtfl-project.org" className="text-mtfl hover:text-cyan-300 transition-colors font-semibold">
                  research@mtfl-project.org
                </a>
              </p>
              
              <p>
                Hope this project helped you in some manner. Thank you!
              </p>

              <div className="pt-6 border-t border-white/10">
                <p className="font-semibold text-white/90">- Team MTFL</p>
                <p className="text-sm text-white/40 mt-1">Federated Multi-Task Learning Research Group</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
