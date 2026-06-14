"use client"

import { useState } from "react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

type ProjectType = "Research" | "Hackathon" | "Self-Directed" | "Academic"
type LinkName = "github" | "demo" | "live" | "devpost" | "documentation" | "manuscript"
interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  year: number
  type: ProjectType
  context?: string
  recognition?: string
  links: Partial<Record<LinkName, string>>
}

const projects: Project[] = [
  {
    title: "LoRA Fine-Tuning for Algorithmic Reasoning",
    description: "Self-directed collaborative manuscript testing whether LoRA fine-tuning can help a 1.5B LLM approach a 72B model on multi-step algorithmic puzzles, using solver-generated data and structural metrics.",
    tags: ["Python", "PyTorch", "LoRA", "LLMs", "Evaluation"], image: "/lora_project.png", year: 2025, type: "Research",
    links: { demo: "https://youtu.be/mTReVHCEI8I", manuscript: "/LORA_manuscript.pdf", github: "https://github.com/XitoAliferis/CS_3346-Group_Project" },
  },
  {
    title: "Roominate",
    description: "A gamified productivity platform built in Godot that transforms task completion into world-building. Integrates AI assistants to break down complex tasks and motivate users.",
    tags: ["Godot", "AI", "Gamification", "ASI:One", "Claude"], image: "/roominate.png", year: 2025, type: "Hackathon", context: "Cal Hacks 12.0", recognition: "MLH - Best .Tech Domain Name",
    links: { github: "https://github.com/XitoAliferis/calhacks12", demo: "https://www.youtube.com/watch?v=0LMzgVUCBIg", devpost: "https://devpost.com/software/roominate-vp1aqu" },
  },
  {
    title: "LinkU",
    description: "A social networking platform where personalized AI agents act as digital twins, initiating conversations and surfacing meaningful connections.",
    tags: ["React", "Node.js", "Supabase", "AI Agents", "VoyageAI"], image: "/linku.png", year: 2025, type: "Hackathon", context: "UC Berkeley AI Hackathon 2025",
    links: { github: "https://github.com/braindead-dev/LinkU/tree/main", demo: "https://www.youtube.com/watch?v=Au_mroIYtKA", live: "https://linku-frontend.vercel.app/", devpost: "https://devpost.com/software/linku/" },
  },
  {
    title: "WeVoteLive",
    description: "A real-time polling platform with a custom multithreaded C++ WebSocket server enabling live, synchronized audience participation.",
    tags: ["C++", "ixWebSocket", "SvelteKit", "TypeScript"], image: "/wevotelive.png", year: 2025, type: "Self-Directed",
    links: { github: "https://github.com/ckurland-uwo/wevotelive", live: "https://wevotelive.azurestudios.ca/", documentation: "https://drive.google.com/file/d/179d_QhnWB-lMiRglxjdEe4TMGukLz5bj/view?usp=sharing" },
  },
  {
    title: "TradeWise", description: "A stock analysis and prediction system combining sentiment analysis with deep learning models to forecast market trends.", tags: ["Python", "TensorFlow", "Keras", "TextBlob", "Finance AI"], image: "/tradewise.png", year: 2024, type: "Self-Directed", links: { github: "https://github.com/XitoAliferis/TradeWise" },
  },
  {
    title: "ToDo", description: "A full-stack reminders and productivity web app supporting offline mode and cross-device synchronization via Firebase and PostgreSQL.", tags: ["React", "Node.js", "Firebase", "PostgreSQL", "TailwindCSS"], image: "/todo.png", year: 2024, type: "Self-Directed", links: { github: "https://github.com/XitoAliferis/ToDo", live: "https://to-do-ashen-xi.vercel.app/" },
  },
  {
    title: "Inhaler Solution", description: "An assistive add-on device for inhalers designed for visually impaired users, integrating LED and audio feedback with a built-in puff counter.", tags: ["C++", "Embedded Systems", "Assistive Tech"], image: "/inhaler.jpg", year: 2023, type: "Academic", links: { github: "https://github.com/XitoAliferis/InahlerSolution", demo: "https://drive.google.com/file/d/1QZGND_idemANXYgP3tZE0WLQwf9iRZbP/view?usp=sharing", documentation: "https://drive.google.com/file/d/1_QP0OgfT0sJAOsP4bLkQQ1aB4gBOLZbR/view?usp=sharing" },
  },
  {
    title: "Test Subject 26", description: "A 3D roguelite game built in Unity, featuring procedural generation, turn-based combat, and a narrative-driven exploration of identity.", tags: ["C#", "Unity", "Game Design", "Procedural Generation"], image: "/testsubject26.png", year: 2022, type: "Academic", links: { github: "https://github.com/XitoAliferis/TestSubject26", demo: "https://www.youtube.com/watch?v=PmzGXjRh3Kw" },
  },
]

const filters: Array<"All" | ProjectType> = ["All", "Research", "Self-Directed", "Hackathon", "Academic"]
const labels: Record<LinkName, string> = { github: "Source", demo: "Demo", live: "Live", devpost: "Devpost", documentation: "Docs", manuscript: "Manuscript" }

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const [showAll, setShowAll] = useState(false)
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const filtered = filter === "All" ? projects : projects.filter((project) => project.type === filter)
  const visible = showAll ? filtered : filtered.slice(0, 4)
  return (
    <section id="projects" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="07" label="Projects" title="Selected builds">
            Research experiments, shipped prototypes, and hardware/software work.
          </SectionHeading>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div className="mb-8 flex flex-wrap gap-x-7 gap-y-4 border-y border-rule py-4" aria-label="Filter projects">
            {filters.map((choice) => (
              <button key={choice} type="button" onClick={() => { setFilter(choice); setShowAll(false); setExpandedProject(null) }} className={`font-mono text-[0.68rem] uppercase tracking-[0.17em] transition-colors ${filter === choice ? "text-signal-bright" : "text-paper-dim hover:text-paper"}`}>
                {filter === choice && <span className="mr-2 text-signal">/</span>}{choice}
              </button>
            ))}
          </div>
        </FadeIn>
        <StaggerChildren className="grid lg:grid-cols-2 lg:gap-x-8" staggerDelay={0.06}>
          {visible.map((project, index) => {
            const expanded = expandedProject === project.title
            const spansRow = visible.length % 2 === 1 && index === visible.length - 1
            return (
            <motion.article
              key={project.title}
              variants={staggerItem}
              className={`grid grid-cols-[5.75rem_minmax(0,1fr)] gap-4 border-t border-rule bg-graphite py-6 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-6 sm:pr-5 ${spansRow ? "lg:col-span-2 lg:max-w-[62rem]" : ""}`}
            >
              <figure className="h-[4.8rem] w-[5.75rem] overflow-hidden border border-rule bg-graphite-soft sm:h-[6.7rem] sm:w-[8.5rem]">
                <img src={project.image} alt={`${project.title} project capture`} className="h-full w-full object-contain" />
              </figure>
              <div className="min-w-0">
                <div className="mb-2 flex justify-between gap-3 font-mono text-[0.6rem] uppercase tracking-[0.15em]">
                  <span className="text-signal-bright">{project.type}</span><span className="text-paper-dim">{project.year}</span>
                </div>
                <h3 className="text-lg font-semibold leading-tight tracking-[-0.045em] text-paper">{project.title}</h3>
                {project.context && <p className="mt-2 font-mono text-[0.59rem] uppercase tracking-[0.12em] text-paper-dim">{project.context}</p>}
                {project.recognition && <p className="mt-2 font-mono text-[0.6rem] uppercase leading-5 tracking-[0.13em] text-signal-bright">{project.recognition}</p>}
                <p className={`mt-3 text-sm leading-6 text-paper-dim ${expanded ? "" : "line-clamp-2"}`}>{project.description}</p>
                <p className="mt-3 hidden font-mono text-[0.58rem] uppercase leading-5 tracking-[0.11em] text-paper-dim sm:block">{project.tags.join(" / ")}</p>
                <button type="button" onClick={() => setExpandedProject(expanded ? null : project.title)} aria-expanded={expanded} className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.15em] text-signal-bright hover:text-paper">
                  {expanded ? "Less -" : "Details +"}
                </button>
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
                  {(Object.entries(project.links) as Array<[LinkName, string]>).map(([name, href]) => (
                    <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-paper-dim transition-colors hover:text-signal-bright">{labels[name]} <span className="text-signal">-&gt;</span></a>
                  ))}
                </div>
              </div>
            </motion.article>
          )})}
        </StaggerChildren>
        {!showAll && filtered.length > 4 && (
          <div className="mt-10 border-t border-rule pt-6">
            <button type="button" onClick={() => setShowAll(true)} className="editorial-link">Show all projects <span aria-hidden="true">+</span></button>
          </div>
        )}
      </div>
    </section>
  )
}
