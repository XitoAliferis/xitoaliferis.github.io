"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { FadeIn } from "@/components/motion"

export function Footer() {
  return (
    <footer className="relative py-16 px-6 border-t border-border/50">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <FadeIn>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-2xl font-bold text-gradient">xa</span>
              <p className="text-sm text-muted-foreground">
                Xristopher Aliferis &copy; {new Date().getFullYear()}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/xitoaliferis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-wine-500 hover:border-wine-600/50 hover:bg-wine-800/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/xristopher-aliferis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-wine-500 hover:border-wine-600/50 hover:bg-wine-800/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:xaliferi@uwo.ca"
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-wine-500 hover:border-wine-600/50 hover:bg-wine-800/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-muted-foreground/60">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
