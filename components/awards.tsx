"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const featured = {
  title: "INFORMS RAS Problem Solving Competition - 1st Place Winner",
  organization: "INFORMS Railway Applications Section",
  year: "2025",
  description: "First place in the 2025 INFORMS Railway Applications Section Problem Solving Competition for developing a predictive maintenance framework using machine learning on railway detector data.",
}

const researchFunding = [
  {
    title: "NSERC Undergraduate Student Research Award (USRA)",
    year: "2026",
    description: "Competitive national research award supporting undergraduate work in neuromorphic computing and 3D head reconstruction under Dr. Roy Eagleson.",
  },
  {
    title: "NSERC Undergraduate Student Research Award (USRA)",
    year: "2025",
    description: "Competitive national research award supporting undergraduate work in machine learning and predictive maintenance under Dr. Yili Tang at the MoTech Group.",
  },
]

const additional = [
  {
    title: "UWO In-Course Scholarships Year IV",
    organization: "University of Western Ontario",
    year: "2025",
    description: "Awarded to top students across the university entering fourth year with competitive academic averages, recognizing high academic achievement in third year.",
  },
  {
    title: "Dean's List",
    organization: "University of Western Ontario",
    year: "2023, 2024, 2025, 2026",
    description: "Recognized for sustained academic excellence ranking among the top students in the Faculty of Engineering across all four years.",
  },
  {
    title: "The President's Honor Roll",
    organization: "University of Miami",
    year: "2022",
    description: "Awarded to undergraduate students who have attained the highest possible scholastic achievement for the semester.",
  },
]

export function Awards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section id="awards" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="06" label="Honors" title="Recognition and support" />
        </FadeIn>
        <FadeIn delay={0.08} className="grid gap-5 lg:grid-cols-[1.05fr_.95fr]">
          <article className="relative overflow-hidden border border-signal/60 bg-signal/5 p-6 sm:p-8">
            <p className="mono-label text-signal-bright">Featured result / 1st place</p>
            <h3 className="mt-6 text-[clamp(1.45rem,2.5vw,2rem)] font-semibold leading-tight tracking-[-0.055em] text-paper">{featured.title}</h3>
            <p className="mt-3 font-mono text-[0.67rem] uppercase tracking-[0.17em] text-signal-bright">{featured.organization} / {featured.year}</p>
            <p className="mt-6 text-sm leading-7 text-paper-dim sm:text-base">{featured.description}</p>
            <div className="absolute bottom-0 right-0 h-px w-36 bg-signal" />
          </article>
          <div className="border border-rule bg-graphite-soft p-6 sm:p-8">
            <p className="mono-label text-signal-bright">Research funding / NSERC USRA</p>
            <div className="mt-5 space-y-5">
              {researchFunding.map((award) => (
                <article key={award.year} className="border-t border-rule pt-5">
                  <div className="flex justify-between gap-4">
                    <h3 className="text-sm font-semibold text-paper">{award.title}</h3>
                    <span className="font-mono text-[0.68rem] text-signal-bright">{award.year}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-paper-dim">{award.description}</p>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.13} className="mt-5 border-b border-rule">
          <p className="mono-label border-t border-rule py-5 text-signal-bright">Additional academic recognition</p>
          {additional.map((award, index) => {
            const open = openIndex === index
            return (
              <article key={award.title} className="border-t border-rule">
                <button type="button" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open} className="grid w-full gap-2 py-5 text-left sm:grid-cols-[minmax(14rem,1fr)_minmax(12rem,.65fr)_9rem_2rem] sm:items-center sm:gap-6">
                  <span className="font-medium text-paper">{award.title}</span>
                  <span className="text-sm text-paper-dim">{award.organization}</span>
                  <span className="font-mono text-[0.67rem] uppercase tracking-[0.15em] text-signal-bright">{award.year}</span>
                  <span className="font-mono text-signal-bright sm:text-right">{open ? "-" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mb-5 max-w-3xl overflow-hidden border-l border-signal pl-4 text-sm leading-7 text-paper-dim">
                      {award.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </FadeIn>
      </div>
    </section>
  )
}
