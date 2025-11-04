"use client"

import { FileText, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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
        paper: '#',
        arxiv: '#',
        code: '#',
      },
    },
  ]


  return (
    <section id="publications" className="py-32 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Publications</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Research <span className="text-primary">Output</span>
          </h2>
        </div>

        <div className="space-y-8">
          {papers.map((paper, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-2xl bg-background border-2 border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-3 text-balance leading-tight">{paper.title}</h3>

                    <p className="text-muted-foreground mb-2">{paper.authors}</p>

                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-medium text-foreground">{paper.venue}</span>
                      <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium border border-primary/30">
                        {paper.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Abstract */}
                <div className="mb-6 pl-16">
                  <p
                    className={`text-muted-foreground leading-relaxed text-pretty ${!expandedAbstract ? "line-clamp-2" : ""
                      }`}
                  >
                    {paper.abstract}
                  </p>
                  <button
                    onClick={() => setExpandedAbstract(!expandedAbstract)}
                    className="text-sm text-primary hover:underline mt-2"
                  >
                    {expandedAbstract ? "Show less" : "Read more"}
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pl-16">
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90"
                    hidden={!paper.links.paper || paper.links.paper === '#'}
                  >
                    <FileText className="w-4 h-4" />
                    Paper
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 bg-transparent"
                    hidden={!paper.links.arxiv || paper.links.arxiv === '#'}
                  >
                    <ExternalLink className="w-4 h-4" />
                    arXiv
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-2 bg-transparent"
                    hidden={!paper.links.code || paper.links.code === '#'}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Coming soon card */}
          <div className="p-8 rounded-2xl border-2 border-dashed border-border bg-muted/30 text-center">
            <div className="text-4xl mb-3">📝</div>
            <p className="text-muted-foreground">More publications coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  )
}
