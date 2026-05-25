"use client"

import { Award, Trophy, Star, Sparkles } from "lucide-react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function Awards() {
  const awards = [
    {
      title: "INFORMS RAS Problem Solving Competition – 1st Place Winner",
      organization: "INFORMS Railway Applications Section",
      year: "2025",
      description:
        "First place in the 2025 INFORMS Railway Applications Section Problem Solving Competition for developing a predictive maintenance framework using machine learning on railway detector data.",
      icon: Trophy,
      featured: true,
    },
    {
      title: "NSERC Undergraduate Student Research Award (USRA)",
      organization: "NSERC & University of Western Ontario",
      year: "2026",
      description:
        "Competitive national research award supporting undergraduate work in neuromorphic computing and 3D head reconstruction under Dr. Roy Eagleson.",
      icon: Award,
    },
    {
      title: "NSERC Undergraduate Student Research Award (USRA)",
      organization: "NSERC & University of Western Ontario",
      year: "2025",
      description:
        "Competitive national research award supporting undergraduate work in machine learning and predictive maintenance under Dr. Yili Tang at the MoTech Group.",
      icon: Award,
    },
    {
      title: "UWO In-Course Scholarships Year IV",
      organization: "University of Western Ontario",
      year: "2025",
      description:
        "Awarded to top students across the university entering fourth year with competitive academic averages, recognizing high academic achievement in third year.",
      icon: Sparkles,
    },
    {
      title: "Dean's List",
      organization: "University of Western Ontario",
      year: "2023, 2024, 2025, 2026",
      description:
        "Recognized for sustained academic excellence ranking among the top students in the Faculty of Engineering across all four years.",
      icon: Star,
    },
    {
      title: "The President's Honor Roll",
      organization: "University of Miami",
      year: "2022",
      description:
        "Awarded to undergraduate students who have attained the highest possible scholastic achievement for the semester.",
      icon: Star,
    },
  ]

  return (
    <section id="awards" className="py-32 px-6 relative section-alt">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Recognition</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Awards & <span className="text-gradient">Honors</span>
            </h2>
          </div>
        </FadeIn>

        <StaggerChildren staggerDelay={0.08} className="grid md:grid-cols-2 gap-5">
          {awards.map((award, idx) => {
            const Icon = award.icon
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${
                  award.featured
                    ? "md:col-span-2 bg-wine-800/8 border-wine-700/30 hover:border-wine-600/50 glow-wine"
                    : "bg-muted/20 border-border hover:border-wine-700/30"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl shrink-0 group-hover:scale-110 transition-all ${
                      award.featured
                        ? "bg-wine-800/15 text-wine-500"
                        : "bg-wine-800/10 text-wine-600/70 group-hover:text-wine-500"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className={`font-bold text-balance leading-tight ${award.featured ? "text-lg" : "text-base"}`}>
                          {award.title}
                        </h3>
                        <p className="text-sm text-wine-500/70 font-medium">{award.organization}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {award.featured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-wine-800/10 text-wine-500 text-xs font-medium border border-wine-700/20">
                            Featured
                          </span>
                        )}
                        <span className="text-xs font-mono text-muted-foreground">{award.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </StaggerChildren>
      </div>
    </section>
  )
}
