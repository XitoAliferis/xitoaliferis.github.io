"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const degrees = [
  {
    school: "University of Miami",
    degree: "Bachelor of Science",
    program: "Computer Engineering / College of Engineering",
    years: "2021 - 2022",
    phase: "Foundation",
    detail: "3.95/4.0 GPA; Dean's, Provost's, and President's Honor Roll (2022).",
  },
  {
    school: "University of Western Ontario",
    degree: "Bachelor of Engineering Science with Distinction",
    program: "Software Engineering / Electrical and Computer Engineering",
    years: "2022 - 2026",
    phase: "B.E.Sc. complete",
    detail: "Graduated with Distinction; transferred from the University of Miami after first year; Dean's List (2022-2026); 90.11/100 average. Relevant Coursework: Introduction to A.I. (98%), Theoretical Foundations of Software Engineering (96%), Linear Algebra & Numerical Analysis (87%), Applied Math for Engineers II (84%), Algorithms & Data Structures (92%), Microprocessors (100%), Introduction to Electrical Engineering (92%).",
  },
  {
    school: "University of Waterloo",
    degree: "Master of Mathematics (MMath)",
    program: "Computer Science / David R. Cheriton School of Computer Science",
    years: "Starting Sept. 2026",
    phase: "Next: research",
    detail: "Supervised by Dr. Robin Cohen and Dr. Lukasz Golab.",
  },
]

export function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(2)
  return (
    <section id="education" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="05" label="Education" title="Academic trajectory">
            Engineering foundations leading into graduate research in computer science.
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mb-8 hidden items-center px-8 md:flex" aria-hidden="true">
            <div className="h-[2px] flex-1 bg-signal-dim" /><div className="h-3 w-3 bg-signal" />
            <div className="h-[2px] flex-1 bg-signal" /><div className="h-3 w-3 bg-signal" />
            <div className="h-[2px] flex-1 bg-signal" /><div className="h-4 w-4 border-2 border-signal bg-graphite" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {degrees.map((degree, index) => {
              const open = openIndex === index
              const incoming = index === degrees.length - 1
              return (
                <article key={degree.school} className={`relative border p-5 transition-colors ${incoming ? "border-signal/60 bg-signal/5" : "border-rule bg-graphite-soft"}`}>
                  <div className="mb-5 flex justify-between font-mono text-[0.64rem] uppercase tracking-[0.17em]">
                    <span className="text-signal-bright">0{index + 1} / {degree.phase}</span>
                    {incoming && <span className="text-signal-bright">Incoming</span>}
                  </div>
                  <p className="font-mono text-[0.67rem] uppercase tracking-[0.14em] text-paper-dim">{degree.years}</p>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.05em] text-paper">{degree.school}</h3>
                  <p className="mt-3 min-h-[3rem] text-sm leading-6 text-paper-dim">{degree.degree}<br />{degree.program}</p>
                  <button type="button" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open} className="mt-5 flex w-full justify-between border-t border-rule pt-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-paper-dim hover:text-paper">
                    <span>{open ? "Less detail" : "Inspect"}</span><span className="text-signal-bright">{open ? "-" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 overflow-hidden border-l border-signal pl-4 text-sm leading-7 text-paper-dim">
                        {degree.detail}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </article>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
