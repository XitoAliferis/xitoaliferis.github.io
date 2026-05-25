"use client"

import { Briefcase, Calendar } from "lucide-react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function Experience() {
  const experiences = [
    {
      role: "NSERC Undergraduate Research Student",
      organization: "University of Western Ontario — Dr. Roy Eagleson",
      period: "May 2026 – Aug 2026",
      description:
        "Conducting two parallel research projects at the intersection of hardware-accelerated computing and machine learning.",
      highlights: [
        "Low-Compute 3D Head Reconstruction: Developing an FPGA/VHDL-based pipeline for capturing video/images of a human head and generating accurate 3D mesh (OBJ) reconstructions entirely on-device, targeting resource-constrained hardware including low-end mobile phones.",
        "Neuromorphic Edge Detection on FPGA: Implementing spiking neural networks (leaky integrate-and-fire neurons) in C with a path to VHDL/FPGA, training the network to learn convolutional edge-detection kernels through Hebbian learning — bridging neuroscience-inspired computing with hardware-level implementation.",
      ],
      tech: ["C", "VHDL", "FPGA", "Python", "OpenCV"],
    },
    {
      role: "Undergraduate Research Student",
      organization: "MoTech Group, University of Western Ontario — Dr. Yili Tang",
      period: "May 2025 – Aug 2025",
      description:
        "Worked on machine learning methods for predictive maintenance in rail operations as part of the INFORMS RAS Problem Solving Competition.",
      highlights: [
        "Designed and implemented a modular preprocessing pipeline for railway detector data (WPD, WILD, THD, mileage, and operational records).",
        "Benchmarked linear, ensemble, and deep sequence models for wheel failure prediction and log-loss optimization.",
        "Improved signal quality (+16.7 dB SNR) and model performance (> 50% reduction in XGBoost log loss).",
      ],
      tech: ["Python", "PyTorch", "XGBoost", "Pandas", "NumPy"],
    },
    {
      role: "Software Developer Intern",
      organization: "1VALET",
      period: "May 2024 – Aug 2024",
      description:
        "Contributed to the development of smart-building technology through voice-assistant integration and backend enhancements.",
      highlights: [
        "Developed an Alexa Skill enabling two-way communication with 1VALET's API, increasing user engagement.",
        "Implemented a real-time notification system using C# / .NET to improve user response time and reliability.",
        "Collaborated across product and engineering teams to deploy and test cloud-based communication features.",
      ],
      tech: ["C#", ".NET", "Alexa SDK", "REST APIs"],
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
      tech: ["C#", "Kotlin", "Android", "ADB"],
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
      tech: ["Python", "NLTK", "Scikit-learn", "TF-IDF"],
    },
  ]

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Experience</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-wine-600/50 via-wine-700/20 to-transparent md:block hidden" />

          <StaggerChildren staggerDelay={0.1} className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div key={idx} variants={staggerItem} className="relative pl-0 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-8 w-[11px] h-[11px] rounded-full bg-wine-600 border-[3px] border-background hidden md:block" />
                <div className="absolute left-[31px] top-8 w-px h-full bg-transparent hidden md:block" />

                <div className="group p-8 rounded-2xl bg-muted/20 border border-border hover:border-wine-700/30 hover:bg-muted/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-wine-800/10 text-wine-500 shrink-0 group-hover:scale-110 group-hover:bg-wine-800/15 transition-all">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 text-balance">{exp.role}</h3>
                        <p className="text-wine-500/80 font-medium text-sm">{exp.organization}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-5 pl-16 text-pretty leading-relaxed text-sm">{exp.description}</p>

                  <ul className="space-y-3 pl-16">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-wine-600 mt-1.5 shrink-0" />
                        <span className="text-pretty leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mt-5 pl-16">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-full bg-wine-800/8 text-wine-500/80 border border-wine-700/12 font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  )
}
