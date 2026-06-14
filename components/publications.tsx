"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const paper = {
  title: "Data Processing and Model Benchmarking for Predictive Maintenance in Railways: A Modular Pipeline Approach",
  authors: "Xristopher Aliferis, Farzan Heidari, Tangjian Wei, Yili Tang",
  venue: "Preprint / 2025",
  abstract: "Predictive maintenance (PdM) is increasingly critical for railway operations, where timely interventions can reduce costs, improve safety, and prevent unplanned failures. A major challenge lies in the heterogeneity and poor quality of condition monitoring data, which often suffer from sparsity, noise, misalignment, and missing values. This paper presents a modular preprocessing pipeline tailored to railway sensor streams, integrating multi-scale denoising, trend extraction, and temporally consistent data fusion across wheel profile (WPD), wheel impact load (WILD), truck hunting (THD), mileage, and operational records. We benchmark models ranging from linear baselines to ensemble and deep sequence architectures under forward-in-time validation, showing that preprocessing quality strongly affects predictive performance. The framework demonstrates reliable transformation of noisy, heterogeneous detector data into actionable insights for railway asset management.",
}

export function Publications() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section id="publications" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="03" label="Publication" title="Research output" />
        </FadeIn>
        <FadeIn delay={0.08}>
          <article className="tech-panel grid overflow-hidden lg:grid-cols-[11rem_minmax(0,1fr)]">
            <div className="border-b border-rule bg-graphite-raised p-6 lg:border-b-0 lg:border-r">
              <p className="mono-label text-signal-bright">PUB_001</p>
              <p className="mt-7 font-mono text-[0.67rem] uppercase leading-7 tracking-[0.15em] text-paper-dim">Preprint<br />2025<br />Rail PdM</p>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="max-w-4xl text-[clamp(1.35rem,2.7vw,1.85rem)] font-semibold leading-[1.25] tracking-[-0.05em] text-paper">{paper.title}</h3>
              <p className="mt-4 text-sm leading-6 text-paper-dim">{paper.authors}</p>
              <p className="mt-2 font-mono text-[0.67rem] uppercase tracking-[0.16em] text-signal-bright">{paper.venue}</p>
              <button type="button" onClick={() => setExpanded((open) => !open)} aria-expanded={expanded} className="mt-7 flex w-full items-center justify-between border-t border-rule pt-5 text-left font-mono text-[0.7rem] uppercase tracking-[0.18em] text-paper-dim hover:text-paper">
                <span>{expanded ? "Hide abstract" : "Read abstract"}</span><span className="text-signal-bright">{expanded ? "-" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-5 overflow-hidden text-sm leading-7 text-paper-dim sm:text-base">
                    {paper.abstract}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </article>
        </FadeIn>
      </div>
    </section>
  )
}
