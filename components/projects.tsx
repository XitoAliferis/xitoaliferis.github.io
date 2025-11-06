"use client"

import { useState } from "react"
import { Github, ExternalLink, Code2, Trophy } from "lucide-react"

export function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All")
  const [showAll, setShowAll] = useState(false)


const projects = [
    {
      id: 1,
      title: "Roominate",
      description:
        "A gamified productivity platform built in Godot that transforms task completion into world-building. Integrates AI assistants to break down complex tasks and motivate users through spatial memory and gamification.",
      tags: ["Godot", "AI", "Gamification", "ASI:One", "Claude"],
      image: "/project-roominate.png",
      year: 2025,
      type: "Hackathon",
      hackathon: "Cal Hacks 12.0",
      winner: true,
      award: "MLH - Best .Tech Domain Name",
      links: { github: "", code: "", devpost: "" },
    },
    {
      id: 2,
      title: "LinkU",
      description:
        "A social networking platform where personalized AI agents act as digital twins, initiating conversations and surfacing meaningful connections between compatible users.",
      tags: ["React", "Node.js", "Supabase", "AI Agents", "VoyageAI"],
      image: "/project-linku.png",
      year: 2025,
      type: "Hackathon",
      hackathon: "UC Berkeley AI Hackathon 2025",
      winner: false,
      links: { github: "", code: "", devpost: "" },
    },
  {
    id: 3,
    title: "WeVoteLive",
    description:
      "A real-time polling platform with a custom multithreaded C++ WebSocket server enabling live, synchronized audience participation through a seamless front-end built in SvelteKit.",
    tags: ["C++", "ixWebSocket", "SvelteKit", "TypeScript"],
    image: "/project-wevotelive.png",
    year: 2025,
    type: "Independent",
    links: {
      github: "",
      code: "",
      devpost: "",
    },
  },
  {
    id: 4,
    title: "TradeWise",
    description:
      "A stock analysis and prediction system combining sentiment analysis with deep learning models to forecast market trends, achieving over 70% prediction accuracy.",
    tags: ["Python", "TensorFlow", "Keras", "TextBlob", "Finance AI"],
    image: "/project-tradewise.png",
    year: 2024,
    type: "Independent",
    links: {
      github: "",
      code: "",
      devpost: "",
    },
  },
  {
    id: 5,
    title: "ToDo",
    description:
      "A full-stack reminders and productivity web app supporting offline mode and cross-device synchronization via Firebase and PostgreSQL.",
    tags: ["React", "Node.js", "Firebase", "PostgreSQL", "TailwindCSS"],
    image: "/project-todo.png",
    year: 2024,
    type: "Independent",
    links: {
      github: "",
      code: "",
      devpost: "",
    },
  },
  {
    id: 6,
    title: "Inhaler Solution",
    description:
      "An assistive add-on device for inhalers designed for visually impaired users, integrating LED and audio feedback with a built-in puff counter and reset function.",
    tags: ["C++", "Embedded Systems", "Assistive Tech"],
    image: "/project-inhaler.png",
    year: 2023,
    type: "Academic",
    links: {
      github: "",
      code: "",
      devpost: "",
    },
  },
  {
    id: 7,
    title: "Test Subject 26",
    description:
      "A 3D roguelite game built in Unity, featuring procedural generation, turn-based combat, and a narrative-driven exploration of identity and autonomy.",
    tags: ["C#", "Unity", "Game Design", "Procedural Generation"],
    image: "/project-testsubject26.png",
    year: 2021,
    type: "Academic",
    links: {
      github: "",
      code: "",
      devpost: "",
    },
  },
]

  const filters = ["All", "Hackathon", "Independent", "Academic"]
  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((p) => p.type === selectedFilter)
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-primary/30 bg-primary/5">
            <span className="text-sm text-primary font-mono">Explorations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Personal <span className="text-primary">Projects</span>
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter)
                setShowAll(false)
              }}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedFilter === filter
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "border border-border bg-muted/30 text-foreground hover:border-primary/50 hover:bg-muted/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-xl overflow-hidden border border-border bg-muted/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Image + Badge */}
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge */}
                <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                  {project.type === "Hackathon" && project.winner ? (
                    <span className="flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400 font-medium">
                      <Trophy className="w-3.5 h-3.5" /> Winner
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30 font-medium">
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

                    {/* Hackathon Info */}
                    {project.hackathon && (
                      <div className="flex flex-col mt-0.5">
                        <span className="text-xs text-muted-foreground font-mono">
                          {project.hackathon}
                        </span>
                        {project.winner && project.award && (
                          <span className="text-xs text-yellow-400 font-mono mt-0.5">
                            {project.award}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono ml-2 flex-shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium"
                  >
                    <Code2 className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.links.devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Devpost
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && filteredProjects.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-lg border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}