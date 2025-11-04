"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function Research() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const interests = [
    {
      title: "Optimization, Generalization & Dynamics",
      description:
        "Studying how training algorithms shape what neural networks learn, why some solutions generalize better and how training evolves over time.",
      topics: ["Training dynamics", "Generalization", "Loss landscapes", "Learning efficiency"],
      icon: "∇",
    },
    {
      title: "Theory of Deep Learning",
      description:
        "Building a clearer mathematical understanding of how deep models represent, learn, and generalize, connecting theory to real behavior.",
      topics: ["Learning theory", "Representation learning", "Model capacity", "Generalization bounds"],
      icon: "∫",
    },
    {
      title: "Interpretability, Structure & Efficiency",
      description:
        "Making models more transparent and efficient, understanding what features they learn and how to make them smaller, faster, and easier to trust.",
      topics: ["Model interpretability", "Feature analysis", "Compression", "Model simplification"],
      icon: "Σ",
    }
  ]

  return (
    <section id="research" className="py-32 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 text-9xl text-primary font-mono">θ</div>
        <div className="absolute bottom-1/4 right-1/4 text-9xl text-primary font-mono">λ</div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Research Areas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            What I'm <span className="text-primary">Exploring</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl text-pretty leading-relaxed">
            I study the mathematical and empirical foundations of modern ML—how gradient-based training
            shapes representations, why models generalize, and which structures emerge during learning.
            My aim is to make systems more interpretable, data-/compute-efficient, and reliable in practice.
          </p>
        </div>

        <div className="space-y-6">
          {interests.map((interest, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div
                className={`p-8 rounded-2xl border transition-all duration-300 ${hoveredIndex === idx
                  ? "bg-primary/5 border-primary shadow-lg shadow-primary/10"
                  : "bg-muted/30 border-border hover:border-primary/50"
                  }`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div
                    className={`text-5xl font-mono transition-all duration-300 ${hoveredIndex === idx ? "text-primary scale-110" : "text-primary/40"
                      }`}
                  >
                    {interest.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-balance">{interest.title}</h3>

                    </div>

                    <p className="text-muted-foreground mb-6 text-pretty leading-relaxed">{interest.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {interest.topics.map((topic, topicIdx) => (
                        <span
                          key={topicIdx}
                          className={`text-sm px-3 py-1.5 rounded-full font-mono transition-colors ${hoveredIndex === idx
                            ? "bg-primary/20 text-primary border border-primary/30"
                            : "bg-muted text-muted-foreground border border-transparent"
                            }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
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
