import { Award, Trophy, Star, Sparkles } from "lucide-react"

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
      year: "2025",
      description:
        "Competitive national research award supporting undergraduate work in machine learning and predictive maintenance under Dr. Yili Tang at the MoTech Group.",
      icon: Sparkles,
    },
    {
      title: "Dean's List",
      organization: "University of Western Ontario",
      year: "2023, 2024, 2025",
      description:
        "Recognized for sustained academic excellence ranking among the top students in the Faculty of Engineering.",
      icon: Star,
    },
  ]

  return (
    <section id="awards" className="py-32 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Recognition</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Awards & <span className="text-primary">Honors</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, idx) => {
            const Icon = award.icon
            return (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 ${award.featured
                    ? "md:col-span-2 bg-primary/5 border-primary/50 hover:border-primary"
                    : "bg-background border-border hover:border-primary/50"
                  }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className={`p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform ${award.featured ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                      }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header with title, badge, and year */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex flex-col">
                        <h3
                          className={`font-bold text-balance leading-tight ${award.featured ? "text-xl" : "text-lg"
                            }`}
                        >
                          {award.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">{award.organization}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {award.featured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/30">
                            Featured
                          </span>
                        )}
                        <span className="text-sm font-mono text-muted-foreground">{award.year}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-pretty leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
