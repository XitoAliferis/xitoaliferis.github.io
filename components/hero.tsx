"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

const roles = [
  "Incoming MMath @ Waterloo",
  "Explainable AI Researcher",
  "Neuromorphic + FPGA Builder",
  "Software Engineer",
]

function TypedRole() {
  const reduceMotion = useReducedMotion()
  const [role, setRole] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) return
    const text = roles[role]
    const delay = deleting ? 34 : characters === text.length ? 1700 : 62
    const timeout = window.setTimeout(() => {
      if (!deleting && characters < text.length) {
        setCharacters((value) => value + 1)
      } else if (!deleting) {
        setDeleting(true)
      } else if (characters > 0) {
        setCharacters((value) => value - 1)
      } else {
        setDeleting(false)
        setRole((value) => (value + 1) % roles.length)
      }
    }, delay)
    return () => window.clearTimeout(timeout)
  }, [characters, deleting, reduceMotion, role])

  const visible = reduceMotion ? roles[0] : roles[role].slice(0, characters)

  return (
    <span className="font-mono text-[clamp(0.95rem,1.5vw,1.08rem)] tracking-[0.02em] text-signal-bright">
      {visible}
      <span className="ml-1 inline-block h-[1.15em] w-[2px] translate-y-[0.18em] animate-pulse bg-signal-bright" aria-hidden="true" />
    </span>
  )
}

export function Hero() {
  const reduceMotion = useReducedMotion()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const lineX = useSpring(glowX, { stiffness: 120, damping: 24, mass: 0.7 })
  const lineY = useSpring(glowY, { stiffness: 120, damping: 24, mass: 0.7 })
  const washX = useSpring(glowX, { stiffness: 90, damping: 26, mass: 1 })
  const washY = useSpring(glowY, { stiffness: 90, damping: 26, mass: 1 })

  useEffect(() => {
    if (reduceMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext("2d")
    if (!context) return

    let animationFrame = 0
    let pointer = { x: -9999, y: -9999, active: false }

    const nodes = Array.from({ length: 58 }, (_, index) => ({
      x: 0,
      y: 0,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      pulse: Math.random() * Math.PI * 2,
      cluster: index % 3,
    }))

    const resize = () => {
      const section = canvas.parentElement
      if (!section) return
      const bounds = section.getBoundingClientRect()
      canvas.width = bounds.width
      canvas.height = bounds.height

      nodes.forEach((node, index) => {
        if (node.x === 0 && node.y === 0) {
          const clusterX = node.cluster === 0 ? 0.64 : node.cluster === 1 ? 0.74 : 0.84
          const clusterY = node.cluster === 0 ? 0.28 : node.cluster === 1 ? 0.5 : 0.72
          node.x = canvas.width * clusterX + (Math.random() - 0.5) * 150
          node.y = canvas.height * clusterY + (Math.random() - 0.5) * 130
        } else {
          node.x = Math.min(canvas.width - 20, Math.max(20, node.x))
          node.y = Math.min(canvas.height - 20, Math.max(20, node.y))
        }
      })
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
        active: true,
      }
    }

    const handlePointerLeave = () => {
      pointer = { x: -9999, y: -9999, active: false }
    }

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += 0.045

        if (node.x < canvas.width * 0.46 || node.x > canvas.width - 12) node.vx *= -1
        if (node.y < 12 || node.y > canvas.height - 12) node.vy *= -1
      })

      context.beginPath()
      context.strokeStyle = "rgba(255, 77, 77, 0.06)"
      context.lineWidth = 1
      context.arc(canvas.width * 0.78, canvas.height * 0.5, Math.min(canvas.width, canvas.height) * 0.18, 0, Math.PI * 2)
      context.stroke()

      context.beginPath()
      context.strokeStyle = "rgba(255, 77, 77, 0.035)"
      context.lineWidth = 1
      context.arc(canvas.width * 0.78, canvas.height * 0.5, Math.min(canvas.width, canvas.height) * 0.27, 0, Math.PI * 2)
      context.stroke()

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 158) {
            const pointerDistance = pointer.active
              ? Math.min(
                  Math.hypot(a.x - pointer.x, a.y - pointer.y),
                  Math.hypot(b.x - pointer.x, b.y - pointer.y),
                )
              : 9999
            const activeBoost = pointerDistance < 152 ? 2.1 : 1
            const alpha = (0.045 + (1 - distance / 158) * 0.11) * activeBoost

            context.beginPath()
            context.strokeStyle = `rgba(255, 77, 77, ${Math.min(alpha, 0.28)})`
            context.lineWidth = pointerDistance < 152 ? 1.25 : 0.7
            context.moveTo(a.x, a.y)
            context.lineTo(b.x, b.y)
            context.stroke()
          }
        }
      }

      nodes.forEach((node) => {
        const distanceToPointer = pointer.active ? Math.hypot(node.x - pointer.x, node.y - pointer.y) : 9999
        const isActive = distanceToPointer < 152
        const radius = isActive ? 2 + Math.sin(node.pulse) * 0.95 : 1.35 + Math.sin(node.pulse) * 0.42

        context.beginPath()
        context.arc(node.x, node.y, radius, 0, Math.PI * 2)
        context.fillStyle = isActive ? "rgba(255, 77, 77, 0.85)" : "rgba(255, 77, 77, 0.32)"
        context.fill()

        if (isActive) {
          context.beginPath()
          context.arc(node.x, node.y, radius + 8.5, 0, Math.PI * 2)
          context.strokeStyle = `rgba(255, 77, 77, ${0.11 + Math.sin(node.pulse) * 0.03})`
          context.lineWidth = 1.4
          context.stroke()
        }
      })

      animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()

    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerleave", handlePointerLeave)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [reduceMotion])

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (reduceMotion) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left - bounds.width / 2) / bounds.width
    const y = (event.clientY - bounds.top - bounds.height / 2) / bounds.height
    glowX.set(x * 28)
    glowY.set(y * 18)
  }

  const handlePointerLeave = () => {
    glowX.set(0)
    glowY.set(0)
  }

  return (
    <section
      className="hero-frame relative flex min-h-[100svh] flex-col overflow-hidden pt-[4.5rem]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {!reduceMotion && <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 hidden opacity-80 lg:block" aria-hidden="true" />}
      <motion.div
        className="pointer-events-none absolute right-[-14rem] top-[17%] h-[33rem] w-[46rem] bg-[radial-gradient(circle,rgba(224,49,49,.12),transparent_68%)]"
        style={reduceMotion ? undefined : { x: washX, y: washY }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute right-[5%] top-[16%] hidden h-[32rem] w-[32rem] rounded-full border border-rule/70 bg-[radial-gradient(circle_at_center,rgba(255,77,77,0.07),rgba(255,77,77,0.02)_32%,transparent_70%)] lg:block"
        style={reduceMotion ? undefined : { x: lineX, y: lineY }}
        aria-hidden="true"
      >
        <div className="absolute inset-[3.25rem] rounded-full border border-rule/45" />
        <div className="absolute inset-[7rem] rounded-full border border-signal/15" />
        <div className="absolute left-[14%] top-[22%] h-px w-[18%] bg-signal/30" />
        <div className="absolute right-[16%] top-[54%] h-px w-[20%] bg-signal/25" />
        <div className="absolute bottom-[20%] left-[24%] h-px w-[16%] bg-signal/20" />
      </motion.div>
      <div className="hero-body fieldbook-shell flex flex-1 items-center pb-12 pt-16">
        <div className="hero-copy max-w-[43rem]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42 }} className="hero-label mono-label mb-8 flex items-center gap-4 text-signal-bright">
            <span className="h-px w-9 bg-signal" /> Research / engineering portfolio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.52, delay: 0.05 }} className="hero-title text-[clamp(3.65rem,7.2vw,6.2rem)] font-bold leading-[0.92] tracking-[-0.095em] text-paper">
            Xristopher<br /><span className="text-signal-bright">Aliferis</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, delay: 0.16 }} className="hero-role mt-9 h-7">
            <TypedRole />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, delay: 0.24 }} className="hero-summary mt-7 max-w-[34rem] text-base leading-8 text-paper-dim sm:text-lg">
            I develop machine-learning systems that are interpretable, theoretically grounded, and efficient enough for real hardware.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.46, delay: 0.31 }} className="hero-actions mt-10 flex flex-wrap gap-x-9 gap-y-6">
            <a className="editorial-link" href="mailto:xaliferi@uwo.ca">Contact me <span aria-hidden="true">-&gt;</span></a>
            <a className="editorial-link" href="/Xristopher_Aliferis_Resume.pdf" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">-&gt;</span></a>
          </motion.div>
        </div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, delay: 0.45 }} className="hero-evidence fieldbook-shell grid border-y border-rule sm:grid-cols-3">
        {[
          ["Now", "Incoming MMath", "Waterloo / Sept 2026"],
          ["Focus", "Explainable AI", "Theory + hardware"],
          ["Output", "Rail PdM pipeline", "Preprint / 2025"],
        ].map(([label, detail, note], index) => (
          <div key={label} className={`hero-evidence-item py-5 sm:px-6 ${index > 0 ? "border-t border-rule sm:border-l sm:border-t-0" : ""}`}>
            <p className="mono-label text-signal-bright">{label}</p>
            <p className="mt-2 text-sm font-medium text-paper">{detail}</p>
            <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.15em] text-paper-dim">{note}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
