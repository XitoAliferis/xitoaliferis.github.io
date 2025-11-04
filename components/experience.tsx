"use client"

import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {    
      role: "Undergraduate Research Student",
      organization: "MoTech Group, University of Western Ontario",
      period: "May 2025 – Present",
      description:
        "Working under Dr. Yili Tang on machine learning methods for predictive maintenance in rail operations as part of the INFORMS RAS Problem Solving Competition.",
      highlights: [
        "Designed and implemented a modular preprocessing pipeline for railway detector data (WPD, WILD, THD, mileage, and operational records).",
        "Benchmarked linear, ensemble, and deep sequence models for wheel failure prediction and log-loss optimization.",
        "Improved signal quality (+16.7 dB SNR) and model performance (> 50 % reduction in XGBoost log loss).",
      ],
      color: "primary",
    },
    {
      role: "Software Developer Intern",
      organization: "1VALET",
      period: "May 2024 – Aug 2024",
      description:
        "Contributed to the development of smart-building technology through voice-assistant integration and backend enhancements.",
      highlights: [
        "Developed an Alexa Skill enabling two-way communication with 1VALET’s API, increasing user engagement.",
        "Implemented a real-time notification system using C# / .NET to improve user response time and reliability.",
        "Collaborated across product and engineering teams to deploy and test cloud-based communication features.",
      ],
      color: "secondary",
    },
    {
      role: "Software Engineering Intern",
      organization: "Med-Eng",
      period: "May 2023 – Aug 2023",
      description:
        "Developed desktop and mobile tools to improve video and audio data workflows for specialized protective-equipment systems.",
      highlights: [
        "Built a C# Windows application integrating Scrcpy and ADB for stable device setup and video streaming.",
        "Created an Android companion app in Kotlin for live audio transfer and synchronized playback.",
        "Enhanced recording reliability and user experience for internal testing environments.",
      ],
      color: "muted",
    },
    {
      role: "Software Developer Intern",
      organization: "BDO Lixar",
      period: "June 2022 – Sept 2022",
      description:
        "Worked on data science and natural language processing tasks to improve prediction accuracy and explore text analytics techniques.",
      highlights: [
        "Achieved 98.3% prediction accuracy using machine learning models trained on the Iris dataset.",
        "Applied NLP methods with NLTK for tokenization and stemming, and implemented TF-IDF and WordCloud visualizations.",
      ],
      color: "accent",
    },
  ]

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:block hidden" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block" />

                <div className="group p-8 rounded-2xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase className="w-5 h-5" />
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-balance">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 pl-16 text-pretty leading-relaxed">{exp.description}</p>

                  <ul className="space-y-3 pl-16">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-pretty">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
