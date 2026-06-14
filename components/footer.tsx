"use client"

import { FadeIn } from "@/components/motion"

export function Footer() {
  return (
    <footer className="border-t border-rule py-14">
      <FadeIn>
        <div className="fieldbook-shell grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mono-label mb-4 text-signal-bright">Contact</p>
            <a href="mailto:xaliferi@uwo.ca" className="break-all text-[clamp(1.45rem,3.3vw,2.35rem)] font-semibold tracking-[-0.055em] text-paper transition-colors hover:text-signal-bright">
              xaliferi@uwo.ca
            </a>
            <p className="mt-6 text-sm text-paper-dim">Xristopher Aliferis &copy; {new Date().getFullYear()}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-5" aria-label="External profiles">
            <a href="https://github.com/xitoaliferis" target="_blank" rel="noopener noreferrer" className="editorial-link">GitHub</a>
            <a href="https://linkedin.com/in/xristopher-aliferis" target="_blank" rel="noopener noreferrer" className="editorial-link">LinkedIn</a>
            <a href="/Xristopher_Aliferis_Resume.pdf" target="_blank" rel="noopener noreferrer" className="editorial-link">CV</a>
          </nav>
        </div>
      </FadeIn>
    </footer>
  )
}
