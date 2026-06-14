"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const experiences = [
  {
    role: "NSERC Undergraduate Research Student",
    organization: "University of Western Ontario - Dr. Roy Eagleson",
    period: "May 2026 - Aug 2026",
    description: "Conducting two parallel research projects at the intersection of hardware-accelerated computing and machine learning.",
    highlights: [
      "Low-Compute 3D Head Reconstruction: Developing an FPGA/VHDL-based pipeline for capturing video/images of a human head and generating accurate 3D mesh (OBJ) reconstructions entirely on-device, targeting resource-constrained hardware including low-end mobile phones.",
      "Neuromorphic Edge Detection on FPGA: Implementing spiking neural networks (leaky integrate-and-fire neurons) in C with a path to VHDL/FPGA, training the network to learn convolutional edge-detection kernels through Hebbian learning - bridging neuroscience-inspired computing with hardware-level implementation.",
    ],
    tech: ["C", "VHDL", "FPGA", "Python", "OpenCV"],
  },
  {
    role: "Undergraduate Research Student",
    organization: "MoTech Group, University of Western Ontario - Dr. Yili Tang",
    period: "May 2025 - Aug 2025",
    description: "Worked on machine learning methods for predictive maintenance in rail operations as part of the INFORMS RAS Problem Solving Competition.",
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
    period: "May 2024 - Aug 2024",
    description: "Contributed to the development of smart-building technology through voice-assistant integration and backend enhancements.",
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
    period: "May 2023 - Aug 2023",
    description: "Developed desktop and mobile tools to improve video and audio data workflows for specialized protective-equipment systems.",
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
    period: "June 2022 - Sept 2022",
    description: "Worked on data science and natural language processing tasks to improve prediction accuracy and explore text analytics techniques.",
    highlights: [
      "Achieved 98.3% prediction accuracy using machine learning models trained on the Iris dataset.",
      "Applied NLP methods with NLTK for tokenization and stemming, and implemented TF-IDF and WordCloud visualizations.",
    ],
    tech: ["Python", "NLTK", "Scikit-learn", "TF-IDF"],
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section id="experience" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="04" label="Experience" title="Work log">
            Select a role to inspect the full scope and technical stack. Recent research appears first.
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.08} className="relative border-b border-rule md:ml-6">
          <div className="absolute bottom-0 left-[0.4rem] top-0 hidden w-px bg-rule md:block" aria-hidden="true" />
          {experiences.map((experience, index) => {
            const open = openIndex === index
            return (
              <article key={experience.role + experience.period} className="relative border-t border-rule md:pl-12">
                <span className={`absolute left-0 top-[2.15rem] hidden h-3 w-3 border md:block ${open ? "border-signal bg-signal" : "border-rule-strong bg-graphite"}`} aria-hidden="true" />
                <button type="button" onClick={() => setOpenIndex(open ? null : index)} aria-expanded={open} className="grid w-full gap-3 py-6 text-left md:grid-cols-[9.7rem_minmax(15rem,.8fr)_minmax(14rem,1fr)_2rem] md:items-start md:gap-8">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-signal-bright">{experience.period}</span>
                  <span>
                    <span className="block text-lg font-semibold tracking-[-0.04em] text-paper">{experience.role}</span>
                    <span className="mt-2 block text-sm leading-6 text-paper-dim">{experience.organization}</span>
                  </span>
                  <span className="text-sm leading-6 text-paper-dim">{experience.description}</span>
                  <span className="font-mono text-lg text-signal-bright md:text-right" aria-hidden="true">{open ? "-" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                      <div className="mb-7 grid gap-5 border-l-2 border-signal bg-graphite-soft px-5 py-5 md:ml-[11.7rem]">
                        <ul className="space-y-3 text-sm leading-7 text-paper-dim">
                          {experience.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3"><span className="mt-3 h-px w-3 shrink-0 bg-signal" /><span>{highlight}</span></li>
                          ))}
                        </ul>
                        <p className="font-mono text-[0.65rem] uppercase leading-6 tracking-[0.14em] text-signal-bright">{experience.tech.join(" / ")}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </FadeIn>
      </div>
    </section>
  )
}
