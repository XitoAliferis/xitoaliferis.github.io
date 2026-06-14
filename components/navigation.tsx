"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Paper", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#awards" },
  { label: "Projects", href: "#projects" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 32, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      for (let i = navItems.length - 1; i >= 0; i -= 1) {
        const section = document.querySelector(navItems[i].href)
        if (section && section.getBoundingClientRect().top <= 170) {
          setActiveSection(navItems[i].href)
          return
        }
      }
      setActiveSection("")
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-signal" style={{ scaleX }} aria-hidden="true" />
      <header className={`fixed inset-x-0 top-[2px] z-50 transition-colors ${isScrolled || isOpen ? "border-b border-rule bg-graphite/95 backdrop-blur-xl" : "bg-transparent"}`}>
        <div className="fieldbook-shell flex h-[4.5rem] items-center justify-between">
          <a href="#" className="flex items-center gap-4" aria-label="Xristopher Aliferis, home">
            <span className="text-xl font-bold tracking-[-0.09em] text-paper">XA<span className="text-signal">.</span></span>
            <span className="mono-label hidden sm:block">ML / systems / research</span>
          </a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Sections">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className={`font-mono text-[0.66rem] uppercase tracking-[0.14em] transition-colors ${activeSection === item.href ? "text-signal-bright" : "text-paper-dim hover:text-paper"}`}>
                <span className="mr-1.5 text-signal">{String(index + 1).padStart(2, "0")}</span>{item.label}
              </a>
            ))}
          </nav>
          <button type="button" onClick={() => setIsOpen((open) => !open)} className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-paper lg:hidden" aria-expanded={isOpen} aria-controls="mobile-navigation">
            <span>{isOpen ? "Close" : "Index"}</span>
            <span className="relative block h-3 w-6" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-6 bg-signal transition-transform ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-6 bg-signal transition-transform ${isOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.nav id="mobile-navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="border-t border-rule bg-graphite lg:hidden" aria-label="Mobile sections">
              <div className="fieldbook-shell grid py-3 sm:grid-cols-2">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="border-b border-rule py-4 font-mono text-xs uppercase tracking-[0.18em] text-paper-dim hover:text-paper">
                    <span className="mr-5 text-signal">{String(index + 1).padStart(2, "0")}</span>{item.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
