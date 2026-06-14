"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 620)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 hidden border border-rule-strong bg-graphite px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-paper-dim hover:border-signal hover:text-paper sm:block"
          aria-label="Return to top"
        >
          Top <span className="ml-2 text-signal">&uarr;</span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
