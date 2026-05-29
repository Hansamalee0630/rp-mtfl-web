"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GraduationCap, Mail } from "lucide-react"

const Linkedin = (props: React.ComponentProps<"svg">) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const supervisors = [
  {
    name: "Prof. Harinda Fernando",
    role: "Primary Supervisor",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Faculty of Computing",
    image: "/sup.png",
    color: "#00d4ff",
    initials: "HF",
    links: { scholar: "https://scholar.google.com/citations?user=T71-cqEAAAAJ&hl=en", email: "mailto:harinda.f@sliit.lk" },
  },
  {
    name: "Ms. Kaushalya Rajapaksa",
    role: "Co-Supervisor",
    institution: "Sri Lanka Institute of Information Technology",
    department: "Faculty of Computing",
    image: "/cosup.png",
    color: "#00d4ff",
    initials: "KR",
    links: { linkedin: "https://www.linkedin.com/in/kaushalya-rajapakse?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtvalOkjVQhuCy31H8hdJWQ%3D%3D", email: "mailto:kaushalya.r@sliit.lk" },
  },
  {
    name: "Mr. Niranjan Meegammana",
    role: "External Supervisor",
    institution: "Industry Expert",
    department: "AI & Cyber Security",
    image: "/exsup.png",
    color: "#00ff88",
    initials: "NM",
    links: { linkedin: "https://www.linkedin.com/in/niranjan-w-meegammana-9733b326?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5eCV9MQGT3OiAZsZThvhiQ%3D%3D", email: "mailto:niranjan.meegammana@gmail.com" },
  },
]

const researchers = [
  {
    name: "Ekanayake E.M.C.H.",
    role: "Lead Researcher",
    domain: "Personalized MTFL Architecture",
    department: "Multitask Federated Learning",
    image: "/hans.png",
    color: "#c084fc",
    initials: "EE",
    links: { linkedin: "https://www.linkedin.com/in/hansamaleeekanayake?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4BVGv2GHTnqRF5MnVJjw5A%3D%3D", email: "mailto:hansamaleeekanayake3006@gmail.com" },
  },
  {
    name: "Upendra M.M.S.",
    role: "Lead Researcher",
    domain: "Fairness-Aware AI",
    department: "Explainable AI (XAI)",
    image: "/mili.png",
    color: "#00ff88",
    initials: "UM",
    links: { linkedin: "https://www.linkedin.com/in/mihili-upendra?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOq8kXxT3RGalxGby85Ft%2FQ%3D%3D", email: "mailto:mihilisanjula@gmail.com" },
  },
  {
    name: "Perera K.T.D.",
    role: "Lead Researcher",
    domain: "Multimodal Detection CNN/MLP",
    department: "Deep Learning & Imaging",
    image: "/tharu.png",
    color: "#60a5fa",
    initials: "PK",
    links: { linkedin: "https://www.linkedin.com/in/tharuushi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByQboRJtuRbOzk0YuzWhHfw%3D%3D", email: "mailto:tharuushi@gmail.com" },
  },
  {
    name: "A.D. Oshadhi Vibodha",
    role: "Lead Researcher",
    domain: "Privacy-Preserving Risk Target",
    department: "Differential Privacy",
    image: "/oshi.png",
    color: "#f43f5e",
    initials: "OV",
    links: { linkedin: "https://www.linkedin.com/in/oshadhi-vibodha-b74134260?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMoJLet8LS0ucJhgoobEZkg%3D%3D", email: "mailto:oshadhivibodha1@gmail.com" },
  },
]

function MemberCard({ member, delay, size = "md" }: { member: any; delay: number; size?: "sm" | "md" }) {
  const [copied, setCopied] = useState(false)
  const emailAddress = member.links?.email?.replace(/^mailto:/, "")

  const handleCopyEmail = async () => {
    if (!emailAddress || !navigator?.clipboard) return
    try {
      await navigator.clipboard.writeText(emailAddress)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 22 }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 400, damping: 20 } }}
      className="group h-full"
    >
      <div
        className="relative h-full rounded-2xl overflow-hidden flex flex-col transition-all duration-500"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: `1px solid rgba(255,255,255,0.08)`,
        }}
      >
        {/* Hover border glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: `0 0 40px ${member.color}15, inset 0 0 40px ${member.color}08` }}
        />
        <div
          className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ borderColor: `${member.color}35` }}
        />

        {/* Image area */}
        <div className={`relative overflow-hidden flex-shrink-0 ${size === "sm" ? "aspect-[4/3.5]" : "aspect-[4/4]"}`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-90"
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[rgba(8,8,20,0.9)] to-transparent" />

          {/* Role badge on image */}
          <div
            className="absolute bottom-4 left-4 inline-flex items-center rounded-lg px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase"
            style={{ background: `${member.color}20`, color: member.color, border: `1px solid ${member.color}35`, backdropFilter: "blur(8px)" }}
          >
            {member.role}
          </div>

          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{ background: `linear-gradient(90deg, transparent, ${member.color}80, transparent)` }}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5">
          <h3 className="text-white/90 font-extrabold text-base leading-snug mb-1 tracking-tight">{member.name}</h3>

          {member.domain && (
            <p className="text-xs text-white/40 mb-1">{member.domain}</p>
          )}
          <p className="text-xs text-white/25 mb-auto">{member.department}</p>

          {/* Links */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/6">
            <div className="flex flex-wrap items-center gap-3">
              {member.links?.scholar && (
                <a href={member.links.scholar} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-white/35 hover:text-cyan-400 transition-colors font-medium">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Scholar</span>
                </a>
              )}
              {member.links?.linkedin && (
                <a href={member.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-xs text-white/35 hover:text-cyan-400 transition-colors font-medium">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              {member.links?.email && (
                <a href={member.links.email} className="flex items-center gap-1 text-xs text-white/35 hover:text-cyan-400 transition-colors font-medium">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </a>
              )}
            </div>
            {emailAddress && (
              <div className="flex items-center justify-between gap-3 text-[12px] text-white/40">
                <span className="truncate">{emailAddress}</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-[12px] font-semibold text-white/60 hover:text-cyan-400 transition-colors"
                >
                  {copied ? "Copied!" : "Copy email"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function TeamSection() {
  return (
    <div id="team" className="w-full px-4 py-32 relative">
      <div className="container mx-auto max-w-[1400px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">The Team</p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white/90 mb-6">
            Meet the Minds Behind<br />
            <span className="gradient-text">The Federated Revolution</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Brilliant researchers and supervisors driving privacy-preserving healthcare AI at the forefront of federated learning.
          </p>
        </motion.div>

        {/* Supervisory Board */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="neon-divider flex-1" />
            <h3 className="text-white/40 text-sm font-bold tracking-widest uppercase whitespace-nowrap px-4">Supervisory Board</h3>
            <div className="neon-divider flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {supervisors.map((sup, idx) => (
              <MemberCard key={idx} member={sup} delay={idx * 0.1} size="md" />
            ))}
          </div>
        </div>

        {/* Lead Researchers */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <div className="neon-divider flex-1" />
            <h3 className="text-white/40 text-sm font-bold tracking-widest uppercase whitespace-nowrap px-4">Lead Researchers</h3>
            <div className="neon-divider flex-1" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchers.map((res, idx) => (
              <MemberCard key={idx} member={res} delay={idx * 0.08} size="sm" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}