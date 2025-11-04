"use client"

import { useState } from "react"

export function About() {
  const [activeTab, setActiveTab] = useState<"bio" | "philosophy">("bio")

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Left side - Decorative quote */}
          <div className="md:col-span-2 space-y-6">
            <div className="text-8xl text-primary/20 font-serif leading-none">"</div>
            <blockquote className="text-2xl font-light text-muted-foreground italic leading-relaxed text-balance">
              Understanding why neural networks work is as important as making them work better.
            </blockquote>
            <div className="h-1 w-20 bg-primary" />
          </div>

          {/* Right side - Content */}
          <div className="md:col-span-3">
            <div className="flex gap-4 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab("bio")}
                className={`pb-3 px-1 font-medium transition-colors relative ${activeTab === "bio" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Background
                {activeTab === "bio" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
              <button
                onClick={() => setActiveTab("philosophy")}
                className={`pb-3 px-1 font-medium transition-colors relative ${activeTab === "philosophy" ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Research Philosophy
                {activeTab === "philosophy" && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />}
              </button>
            </div>

            {activeTab === "bio" && (
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-pretty text-muted-foreground">
                  I am an undergraduate student at <span className="text-primary font-medium">University of Western Ontario</span>,
                  pursuing a degree in <span className="text-primary font-medium">Software Engineering</span>. My research
                  focuses on understanding why machine learning systems work the way they do, bridging theoretical
                  foundations with empirical observations.
                </p>
                <p className="text-pretty text-muted-foreground">
                  Currently, I am working with <span className="text-foreground font-medium">Dr. Yili Tang</span> at
                  the <span className="text-foreground font-medium">MoTech Group</span>, where I
                  investigate predictive maintenance for railway wheelsets using machine learning models on detector and mileage data.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-3xl font-bold text-primary mb-1">3.95</div>
                    <div className="text-sm text-muted-foreground">GPA</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-3xl font-bold text-primary mb-1">1</div>
                    <div className="text-sm text-muted-foreground">Preprint</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border border-border">
                    <div className="text-3xl font-bold text-primary mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Awards</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "philosophy" && (
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-pretty">
                  I believe that developing{" "}
                  <span className="text-primary font-medium">rigorous mathematical frameworks</span> is essential for
                  building more reliable and interpretable AI systems. My approach combines theoretical analysis with
                  empirical validation.
                </p>

                <p className="text-pretty text-muted-foreground">
                  I am particularly interested in the intersection of optimization theory, statistical learning, and
                  deep learning. My work explores questions around generalization bounds, loss landscape geometry, and
                  the implicit biases that emerge during training.
                </p>

                <div className="space-y-3 pt-4">
                  {["Theory-driven experimentation", "Reproducible research", "Open collaboration"].map(
                    (principle, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{principle}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
