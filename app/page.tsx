import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Experience } from "@/components/experience"
import { Awards } from "@/components/awards"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Experience />
      <Awards />
      <Projects />
    </main>
  )
}
