"use client"

import { FileText, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FadeIn } from "@/components/motion"

export function Publications() {
  const [expandedAbstract, setExpandedAbstract] = useState(false)

  const papers = [
    {
      title:
        "Data Processing and Model Benchmarking for Predictive Maintenance in Railways: A Modular Pipeline Approach",
      authors: "Xristopher Aliferis, Farzan Heidari, Tangjian Wei, Yili Tang",
      venue: "Preprint (2025)",
      status: "Preprint",
      abstract:
        "Predictive maintenance (PdM) is increasingly critical for railway operations, where timely interventions can reduce costs, improve safety, and prevent unplanned failures. A major challenge lies in the heterogeneity and poor quality of condition monitoring data, which often suffer from sparsity, noise, misalignment, and missing values. This paper presents a modular preprocessing pipeline tailored to railway sensor streams, integrating multi-scale denoising, trend extraction, and temporally consistent data fusion across wheel profile (WPD), wheel impact load (WILD), truck hunting (THD), mileage, and operational records. We benchmark models ranging from linear baselines to ensemble and deep sequence architectures under forward-in-time validation, showing that preprocessing quality strongly affects predictive performance. The framework demonstrates reliable transformation of noisy, heterogeneous detector data into actionable insights for railway asset management.",
      links: {
        paper: "#",
        arxiv: "#",
        code: "#",
      },
    },
  ]

  return (
    <section id="publications" className="py-32 px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Publications</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Research <span className="text-gradient">Output</span>
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {papers.map((paper, idx) => (
            <FadeIn key={idx} delay={0.1}>
              <div className="group relative p-8 rounded-2xl bg-muted/20 border border-border hover:border-wine-700/30 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-wine-800/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-wine-800/10 text-wine-500 shrink-0 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-3 text-balance leading-tight">{paper.title}</h3>
                      <p className="text-muted-foreground mb-2 text-sm">{paper.authors}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-medium text-foreground text-sm">{paper.venue}</span>
                        <span className="px-3 py-1 rounded-full bg-wine-800/10 text-wine-500 text-xs font-medium border border-wine-700/20">
                          {paper.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6 pl-16">
                    <p
                      className={`text-muted-foreground leading-relaxed text-pretty text-sm ${
                        !expandedAbstract ? "line-clamp-2" : ""
                      }`}
                    >
                      {paper.abstract}
                    </p>
                    <button
                      onClick={() => setExpandedAbstract(!expandedAbstract)}
                      className="text-sm text-wine-500 hover:underline mt-2"
                    >
                      {expandedAbstract ? "Show less" : "Read more"}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3 pl-16">
                    <Button
                      size="sm"
                      className="gap-2 bg-wine-700 hover:bg-wine-600 text-white font-medium"
                      hidden={!paper.links.paper || paper.links.paper === "#"}
                    >
                      <FileText className="w-4 h-4" />
                      Paper
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 bg-transparent border-border hover:border-wine-600/50 hover:text-wine-500"
                      hidden={!paper.links.arxiv || paper.links.arxiv === "#"}
                    >
                      <ExternalLink className="w-4 h-4" />
                      arXiv
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="gap-2 bg-transparent border-border hover:border-wine-600/50 hover:text-wine-500"
                      hidden={!paper.links.code || paper.links.code === "#"}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
