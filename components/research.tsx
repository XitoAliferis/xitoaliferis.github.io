"use client"

import { useState } from "react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function Research() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const interests = [
    {
      title: "Explainable & Interpretable AI",
      description:
        "Developing methods to make neural network decisions transparent and trustworthy — from feature attribution and concept-based explanations to mechanistic interpretability of learned representations.",
      topics: ["Explainability", "Feature attribution", "Concept-based explanations", "Trust in AI"],
      icon: "∇",
    },
    {
      title: "Optimization & Generalization Theory",
      description:
        "Investigating the mathematical principles behind why deep networks generalize — how loss landscape geometry, training dynamics, and implicit regularization shape what models learn.",
      topics: ["Loss landscapes", "Generalization bounds", "Implicit bias", "Training dynamics"],
      icon: "∫",
    },
    {
      title: "Neuromorphic & Hardware-Aware ML",
      description:
        "Bridging machine learning with hardware constraints — from spiking neural networks on FPGAs to efficient model architectures that run on resource-limited edge devices.",
      topics: ["Spiking neural networks", "FPGA acceleration", "Edge inference", "Model compression"],
      icon: "Σ",
    },
  ]

  return (
    <section id="research" className="py-32 px-6 relative section-alt">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-[12rem] text-wine-600 font-mono select-none">θ</div>
        <div className="absolute bottom-1/4 right-1/4 text-[12rem] text-wine-600 font-mono select-none">λ</div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Research Areas</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              What I&apos;m <span className="text-gradient">Exploring</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
              My research centers on making machine learning systems more transparent, theoretically grounded,
              and deployable on constrained hardware — connecting explainability, optimization theory, and
              neuromorphic computing.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.12} className="space-y-5">
          {interests.map((interest, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`relative p-8 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  hoveredIndex === idx
                    ? "bg-wine-800/8 border-wine-700/30 glow-wine"
                    : "bg-muted/20 border-border hover:border-wine-700/20"
                }`}
              >
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    hoveredIndex === idx ? "bg-wine-600" : "bg-wine-800/20"
                  }`}
                />

                <div className="flex items-start gap-6 pl-4">
                  <div
                    className={`text-5xl font-mono transition-all duration-300 select-none ${
                      hoveredIndex === idx ? "text-wine-500 scale-110" : "text-wine-600/30"
                    }`}
                  >
                    {interest.icon}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-balance">{interest.title}</h3>
                    <p className="text-muted-foreground mb-5 text-pretty leading-relaxed">{interest.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {interest.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className={`text-sm px-3 py-1.5 rounded-full font-mono transition-all ${
                            hoveredIndex === idx
                              ? "bg-wine-800/10 text-wine-500 border border-wine-700/20"
                              : "bg-muted/50 text-muted-foreground border border-transparent"
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
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
