"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function Education() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const degrees = [
    {
      school: "University of Waterloo",
      degree: "Master of Mathematics (MMath)",
      program: "Computer Science",
      faculty: "David R. Cheriton School of Computer Science",
      field: "",
      yearsAttended: "Starting Sept 2026",
      gpa: "",
      status: "upcoming",
      highlights: ["Supervised by Dr. Robin Cohen and Dr. Lukasz Golab"],
    },
    {
      school: "University of Western Ontario",
      degree: "Bachelor of Engineering Science with Distinction",
      program: "Software Engineering",
      faculty: "Faculty of Engineering",
      field: "Electrical and Computer Engineering",
      yearsAttended: "2022–2026",
      gpa: "90.11/100",
      status: "graduated",
      highlights: [
        "Graduated with Distinction",
        "Transferred from the University of Miami after first year",
        "Dean’s List (2022–2026)",
        "Relevant Coursework: Introduction to A.I. (98%), Theoretical Foundations of Software Engineering (96%), Linear Algebra & Numerical Analysis (87%), Applied Math for Engineers II (84%), Algorithms & Data Structures (92%), Microprocessors (100%), Introduction to Electrical Engineering (92%)",
      ],
    },
    {
      school: "University of Miami",
      degree: "Bachelor of Science",
      program: "Computer Engineering",
      faculty: "College of Engineering",
      field: "Electrical and Computer Engineering",
      yearsAttended: "2021–2022",
      gpa: "3.95/4.0",
      status: "transferred",
      highlights: ["Dean’s, Provost’s, and President’s Honor Roll (2022)"],
    },
  ]

  const statusBadge = (status: string) => {
    const map: Record<string, { bg: string; text: string; border: string; label: string }> = {
      upcoming: { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", label: "Upcoming" },
      graduated: { bg: "bg-green-500/10", text: "text-green-400", border: "border-green-500/20", label: "Graduated" },
      transferred: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", label: "Transferred" },
    }
    const s = map[status]
    return s ? <span className={`px-3 py-1 rounded-full ${s.bg} ${s.text} text-xs font-medium border ${s.border}`}>{s.label}</span> : null
  }

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-wine-800/4 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Education</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Academic <span className="text-gradient">Background</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              Rigorous training in mathematics and computer science, building the foundation for theoretical and
              empirical ML research.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.12} className="space-y-5">
          {degrees.map((edu, idx) => (
            <motion.div key={idx} variants={staggerItem} onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)} className="group cursor-pointer">
              <div className={`relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
                expandedIdx === idx ? "bg-wine-800/8 border-wine-700/30 glow-wine" : "bg-muted/20 border-border hover:border-wine-700/20"
              }`}>
                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${expandedIdx === idx ? "bg-wine-600" : "bg-wine-800/20"}`} />

                <div className="flex items-start gap-6 pl-4">
                  <div className={`flex-shrink-0 transition-all duration-300 ${expandedIdx === idx ? "text-wine-500 scale-110" : "text-wine-600/50"}`}>
                    <GraduationCap className="w-7 h-7" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-balance">{edu.degree}, {edu.program}</h3>
                        <p className="text-wine-500/80 font-medium">{edu.faculty}</p>
                        {edu.field && <p className="text-muted-foreground text-sm">{edu.field}</p>}
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        {statusBadge(edu.status)}
                        <span className="text-sm font-mono text-muted-foreground">{edu.yearsAttended}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3">{edu.school}</p>
                    {edu.gpa && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-wine-800/8 border border-wine-700/15">
                        <span className="text-sm font-mono text-wine-500">GPA: {edu.gpa}</span>
                      </div>
                    )}
                    {expandedIdx === idx && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-wine-700/15 space-y-3">
                        <div className="font-medium text-foreground text-sm uppercase tracking-wider">Key Highlights</div>
                        <ul className="space-y-2">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-wine-600 mt-2 flex-shrink-0" />
                              <span className="text-pretty">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  <div className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${expandedIdx === idx ? "rotate-180" : ""}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
