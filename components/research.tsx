"use client"

import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

const interests = [
  {
    code: "XAI",
    title: "Explainable and Interpretable AI",
    description: "Making neural-network decisions transparent and trustworthy through feature attribution, concept-based explanations, and mechanistic views of learned representations.",
    topics: "Feature attribution / Concept explanations / Trust in AI",
  },
  {
    code: "OPT",
    title: "Optimization and Generalization",
    description: "Studying loss landscape geometry, training dynamics, and implicit regularization to understand why deep networks generalize.",
    topics: "Loss landscapes / Implicit bias / Training dynamics",
  },
  {
    code: "HW",
    title: "Neuromorphic and Hardware-Aware ML",
    description: "Bridging models and physical constraints through spiking neural networks on FPGAs and efficient inference for edge devices.",
    topics: "Spiking networks / FPGA acceleration / Edge inference",
  },
]

export function Research() {
  return (
    <section id="research" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="02" label="Research directions" title={<>Interpretable models.<br className="hidden sm:block" /> Efficient execution.</>}>
            Three connected areas guide my work: why a model decides, why it generalizes, and how it executes under hardware constraints.
          </SectionHeading>
        </FadeIn>
        <StaggerChildren className="grid gap-px bg-rule md:grid-cols-3" staggerDelay={0.08}>
          {interests.map((interest, index) => (
            <motion.article key={interest.code} variants={staggerItem} className="bg-graphite px-6 py-7 transition-colors hover:bg-graphite-soft">
              <div className="mb-7 flex items-center justify-between font-mono text-[0.66rem] uppercase tracking-[0.18em]">
                <span className="text-signal-bright">{String(index + 1).padStart(2, "0")} / {interest.code}</span>
                <span className="h-px w-10 bg-signal" />
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.045em] text-paper">{interest.title}</h3>
              <p className="mt-4 text-sm leading-7 text-paper-dim">{interest.description}</p>
              <p className="mt-6 font-mono text-[0.62rem] uppercase leading-6 tracking-[0.13em] text-signal-bright">{interest.topics}</p>
            </motion.article>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
