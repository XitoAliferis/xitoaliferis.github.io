"use client"

import { useState } from "react"
import { Github, ExternalLink, PlayCircle, Globe, Trophy, FileText } from "lucide-react"
import { FadeIn, StaggerChildren, staggerItem } from "@/components/motion"
import { motion } from "framer-motion"

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)

  const projects = [
    {
      id: 1,
      title: "LoRA Fine-Tuning for Algorithmic Reasoning",
      description:
        "Self-directed collaborative manuscript testing whether LoRA fine-tuning can help a 1.5B LLM approach a 72B model on multi-step algorithmic puzzles, using solver-generated data and structural metrics.",
      tags: ["Python", "PyTorch", "HuggingFace", "LoRA", "LLMs", "Evaluation"],
      image: "lora_project.png",
      year: 2025,
      originalPhotoSize: false,
      type: "Research",
      links: {
        demo: "https://youtu.be/mTReVHCEI8I",
        manuscript: "LORA_manuscript.pdf",
        github: "https://github.com/XitoAliferis/CS_3346-Group_Project",
      },
    },
    {
      id: 2,
      title: "Roominate",
      description:
        "A gamified productivity platform built in Godot that transforms task completion into world-building. Integrates AI assistants to break down complex tasks and motivate users.",
      tags: ["Godot", "AI", "Gamification", "ASI:One", "Claude"],
      image: "roominate.png",
      year: 2025,
      originalPhotoSize: false,
      type: "Hackathon",
      hackathon: "Cal Hacks 12.0",
      winner: true,
      award: "MLH – Best .Tech Domain Name",
      links: {
        github: "https://github.com/XitoAliferis/calhacks12",
        demo: "https://www.youtube.com/watch?v=0LMzgVUCBIg",
        devpost: "https://devpost.com/software/roominate-vp1aqu",
      },
    },
    {
      id: 3,
      title: "LinkU",
      description:
        "A social networking platform where personalized AI agents act as digital twins, initiating conversations and surfacing meaningful connections.",
      tags: ["React", "Node.js", "Supabase", "AI Agents", "VoyageAI"],
      image: "linku.png",
      year: 2025,
      type: "Hackathon",
      hackathon: "UC Berkeley AI Hackathon 2025",
      winner: false,
      links: {
        github: "https://github.com/braindead-dev/LinkU/tree/main",
        demo: "https://www.youtube.com/watch?v=Au_mroIYtKA",
        live: "https://linku-frontend.vercel.app/",
        devpost: "https://devpost.com/software/linku/",
      },
    },
    {
      id: 4,
      title: "WeVoteLive",
      description:
        "A real-time polling platform with a custom multithreaded C++ WebSocket server enabling live, synchronized audience participation.",
      tags: ["C++", "ixWebSocket", "SvelteKit", "TypeScript"],
      image: "wevotelive.png",
      year: 2025,
      type: "Self-Directed",
      links: {
        github: "https://github.com/ckurland-uwo/wevotelive",
        live: "https://wevotelive.azurestudios.ca/",
        documentation:
          "https://drive.google.com/file/d/179d_QhnWB-lMiRglxjdEe4TMGukLz5bj/view?usp=sharing",
      },
    },
    {
      id: 5,
      title: "TradeWise",
      description:
        "A stock analysis and prediction system combining sentiment analysis with deep learning models to forecast market trends.",
      tags: ["Python", "TensorFlow", "Keras", "TextBlob", "Finance AI"],
      image: "tradewise.png",
      year: 2024,
      type: "Self-Directed",
      links: { github: "https://github.com/XitoAliferis/TradeWise" },
    },
    {
      id: 6,
      title: "ToDo",
      description:
        "A full-stack reminders and productivity web app supporting offline mode and cross-device synchronization via Firebase and PostgreSQL.",
      tags: ["React", "Node.js", "Firebase", "PostgreSQL", "TailwindCSS"],
      image: "todo.png",
      year: 2024,
      type: "Self-Directed",
      links: {
        github: "https://github.com/XitoAliferis/ToDo",
        live: "https://to-do-ashen-xi.vercel.app/",
      },
    },
    {
      id: 7,
      title: "Inhaler Solution",
      description:
        "An assistive add-on device for inhalers designed for visually impaired users, integrating LED and audio feedback with a built-in puff counter.",
      tags: ["C++", "Embedded Systems", "Assistive Tech"],
      image: "inhaler.jpg",
      year: 2023,
      type: "Academic",
      links: {
        github: "https://github.com/XitoAliferis/InahlerSolution",
        demo: "https://drive.google.com/file/d/1QZGND_idemANXYgP3tZE0WLQwf9iRZbP/view?usp=sharing",
        documentation:
          "https://drive.google.com/file/d/1_QP0OgfT0sJAOsP4bLkQQ1aB4gBOLZbR/view?usp=sharing",
      },
    },
    {
      id: 8,
      title: "Test Subject 26",
      description:
        "A 3D roguelite game built in Unity, featuring procedural generation, turn-based combat, and a narrative-driven exploration of identity.",
      tags: ["C#", "Unity", "Game Design", "Procedural Generation"],
      image: "testsubject26.png",
      year: 2022,
      type: "Academic",
      links: {
        github: "https://github.com/XitoAliferis/TestSubject26",
        demo: "https://www.youtube.com/watch?v=PmzGXjRh3Kw",
      },
    },
  ]

  const filters = ["All", "Self-Directed", "Hackathon", "Academic", "Research"]
  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((p) => p.type === selectedFilter)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-wine-700/30 bg-wine-800/10">
              <span className="text-sm text-wine-500 font-mono">Explorations</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Personal <span className="text-gradient">Projects</span>
            </h2>
          </div>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn delay={0.1}>
          <div className="mb-12 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setSelectedFilter(filter)
                  setShowAll(false)
                }}
                className={`px-4 py-2 rounded-full font-medium text-sm transition-all ${
                  selectedFilter === filter
                    ? "bg-wine-800/15 text-wine-500 border border-wine-700/30"
                    : "border border-border bg-muted/20 text-muted-foreground hover:border-wine-700/20 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project cards */}
        <StaggerChildren staggerDelay={0.08} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={staggerItem}
              className="group flex flex-col rounded-xl overflow-hidden border border-border bg-muted/20 hover:border-wine-700/30 transition-all duration-300 card-tilt"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-muted/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full transition-all duration-500 ${
                    project.originalPhotoSize === false
                      ? "object-contain"
                      : "object-cover group-hover:scale-105"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  {project.type === "Hackathon" && (project as any).winner ? (
                    <span className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-wine-700/30 text-wine-400 border border-wine-600/40 font-medium backdrop-blur-sm">
                      <Trophy className="w-3.5 h-3.5" /> Winner
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-background/60 text-foreground border border-border/50 font-medium backdrop-blur-sm">
                      {project.type}
                    </span>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-balance">{project.title}</h3>
                    {(project as any).hackathon && (
                      <div className="flex flex-col mt-0.5">
                        <span className="text-xs text-muted-foreground font-mono">
                          {(project as any).hackathon}
                        </span>
                        {(project as any).winner && (project as any).award && (
                          <span className="text-xs text-wine-500 font-mono mt-0.5">
                            Prize: {(project as any).award}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2 flex-shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-wine-800/8 text-wine-500/70 border border-wine-700/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-2 pt-4 border-t border-border/50">
                  {(project.links as any).github && (
                    <a
                      href={(project.links as any).github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-wine-500 hover:bg-wine-800/10 transition-all text-xs font-medium"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </a>
                  )}
                  {(project.links as any).demo && (
                    <a
                      href={(project.links as any).demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-emerald-400 hover:bg-emerald-400/10 transition-all text-xs font-medium"
                    >
                      <PlayCircle className="w-3.5 h-3.5" />
                      Demo
                    </a>
                  )}
                  {(project.links as any).live && (
                    <a
                      href={(project.links as any).live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-sky-400 hover:bg-sky-400/10 transition-all text-xs font-medium"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      Live
                    </a>
                  )}
                  {(project.links as any).devpost && (
                    <a
                      href={(project.links as any).devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-wine-500 hover:bg-wine-800/10 transition-all text-xs font-medium"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Devpost
                    </a>
                  )}
                  {(project.links as any).documentation && (
                    <a
                      href={(project.links as any).documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-purple-400 hover:bg-purple-400/10 transition-all text-xs font-medium"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Docs
                    </a>
                  )}
                  {(project.links as any).manuscript && (
                    <a
                      href={(project.links as any).manuscript}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-muted/50 text-muted-foreground hover:text-purple-400 hover:bg-purple-400/10 transition-all text-xs font-medium"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Manuscript
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerChildren>

        {!showAll && filteredProjects.length > 3 && (
          <FadeIn>
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 rounded-full border border-wine-700/30 bg-wine-800/10 text-wine-500 hover:bg-wine-800/15 hover:border-wine-600/50 transition-all font-medium text-sm"
              >
                View All Projects
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
