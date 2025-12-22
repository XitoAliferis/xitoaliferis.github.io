"use client"

import { useState } from "react"
import { GraduationCap } from "lucide-react"

export function Education() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  const degrees = [
    {
      school: "University of Western Ontario",
      degree: "Bachelor of Engineering Science",
      program: "Software Engineering",
      faculty: "Faculty of Engineering",
      field: "Electrical and Computer Engineering",
      yearsAttended: '2022-2026',
      gpa: "88.45/100",
      status: "graduated",
      highlights: [
        "Transferred from the University of Miami after first year",
        "Dean's List (2023-2025)",
        "Relevant Coursework: Introduction to A.I. (98%), Theoretical Foundations of Software Engineering (96%), Linear Algebra & Numerical Analysis (87%), Applied Math for Engineers II (84%), Algorithms & Data Structures (92%), Microprocessors (100%), Introduction to Electrical Engineering (92%)",
      ],
    },
    {
      school: "University of Miami",
      degree: "Bachelor of Science",
      program: "Computer Engineering",
      faculty: "College of Engineering",
      field: "Electrical and Computer Engineering",
      yearsAttended: '2021-2022',
      gpa: "3.95/4.0",
      status: "transferred",
      highlights: [
        "Dean's, Provost's, and President's Honor Roll (2022)",
      ],
    },
  ]

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Education</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Academic <span className="text-primary">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            Rigorous training in mathematics and computer science, providing the foundation for theoretical and
            empirical ML research.
          </p>
        </div>

        <div className="space-y-6">
          {degrees.map((edu, idx) => (
            <div
              key={idx}
              onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
              className="group cursor-pointer"
            >
              <div
                className={`p-8 rounded-2xl border transition-all duration-300 ${
                  expandedIdx === idx
                    ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                    : "bg-muted/30 border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 transition-all duration-300 ${
                      expandedIdx === idx ? "text-primary scale-110" : "text-primary/60"
                    }`}
                  >
                    <GraduationCap className="w-8 h-8" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-balance">{edu.degree}, {edu.program}</h3>
                    <p className="text-primary font-medium">{edu.faculty}</p>
                    <p className="text-primary font-medium">{edu.field}</p>
                        </div>
                            <div className="text-right self-start">
                                <div className="inline-block px-3 py-1 mb-2 rounded-full bg-green-500/10 border border-green-500/30">
                                <div className="text-m font-semibold text-green-600">{edu.yearsAttended}</div>
                                </div>
                            </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{edu.school}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30">
                        <span className="text-sm font-mono text-primary">GPA: {edu.gpa}</span>
                      </div>
                    </div>

                    {expandedIdx === idx && (
                      <div className="mt-6 pt-6 border-t border-primary/20 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="font-medium text-foreground">Key Achievements & Coursework:</div>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-3 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex-shrink-0 text-primary/50 transition-transform duration-300 ${
                      expandedIdx === idx ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
