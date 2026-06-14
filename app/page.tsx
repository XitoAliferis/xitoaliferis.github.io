import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Experience } from "@/components/experience"
import { Awards } from "@/components/awards"
import { Navigation } from "@/components/navigation"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Research />
      <Publications />
      <Experience />
      <Education />
      <Awards />
      <Projects />
      <Footer />
      <BackToTop />
    </main>
  )
}
