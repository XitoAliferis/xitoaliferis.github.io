"use client"

import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

const roles = [
  "Incoming MMath @ Waterloo",
  "ML & Explainable AI Researcher",
  "FPGA & Neuromorphic Computing",
  "Software Engineer",
]

function TypedText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 60)
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  return (
    <span className="font-mono text-wine-500">
      {roles[roleIndex].slice(0, charIndex)}
      <span className="animate-pulse">|</span>
    </span>
  )
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const nodes: { x: number; y: number; vx: number; vy: number; active: boolean; pulsePhase: number }[] = []
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        active: false, pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left, y = e.clientY - rect.top
      nodes.forEach((n) => {
        const d = Math.sqrt((n.x - x) ** 2 + (n.y - y) ** 2)
        n.active = d < 150
        if (n.active) n.pulsePhase = 0
      })
    }
    window.addEventListener("mousemove", handleMouseMove)

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach((node, i) => {
        node.x += node.vx; node.y += node.vy; node.pulsePhase += 0.05
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        nodes.forEach((other, j) => {
          if (i === j) return
          const d = Math.sqrt((node.x - other.x) ** 2 + (node.y - other.y) ** 2)
          if (d < 150) {
            const o = (node.active || other.active ? 0.35 : 0.08) * (1 - d / 150)
            ctx.beginPath()
            ctx.strokeStyle = `rgba(185, 28, 28, ${o})`
            ctx.lineWidth = node.active || other.active ? 1.5 : 0.5
            ctx.moveTo(node.x, node.y); ctx.lineTo(other.x, other.y); ctx.stroke()
          }
        })
        const r = Math.max(1, 2 + Math.sin(node.pulsePhase) * (node.active ? 3 : 0.5))
        ctx.beginPath(); ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
        ctx.fillStyle = node.active
          ? `rgba(220, 38, 38, ${0.8 + Math.sin(node.pulsePhase) * 0.2})`
          : "rgba(185, 28, 28, 0.4)"
        ctx.fill()
        if (node.active) {
          ctx.beginPath(); ctx.arc(node.x, node.y, r + 8, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(220, 38, 38, ${0.15 - Math.sin(node.pulsePhase) * 0.05})`
          ctx.lineWidth = 2; ctx.stroke()
        }
      })
      requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener("resize", handleResize)
    return () => { window.removeEventListener("resize", handleResize); window.removeEventListener("mousemove", handleMouseMove) }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-100 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-wine-800/8 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-wine-700/5 rounded-full blur-[100px] -z-10" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-wine-700/30 bg-wine-800/10">
                <div className="w-2 h-2 rounded-full bg-wine-600 animate-pulse" />
                <span className="text-sm text-wine-500 font-mono">Open to Research Opportunities</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-6xl md:text-7xl font-bold">
              Xristopher<br /><span className="text-gradient">Aliferis</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-xl h-8">
              <TypedText />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg text-muted-foreground text-pretty leading-relaxed">
              I build things that push the boundary between software and hardware &mdash; from neuromorphic chips to ML theory. Incoming MMath student at the{" "}
              <span className="text-foreground font-medium">University of Waterloo</span>.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-wrap gap-3">
              <a href="mailto:xaliferi@uwo.ca">
                <Button size="lg" className="gap-2 bg-wine-700 hover:bg-wine-600 text-white font-semibold cursor-pointer transition-all hover:shadow-lg hover:shadow-wine-800/30">
                  <Mail className="w-4 h-4" />Get in Touch
                </Button>
              </a>
              <a href="/Xristopher_Aliferis_Resume_2025.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 bg-transparent border-border hover:border-wine-600/50 hover:text-wine-500 cursor-pointer transition-all">
                  <FileText className="w-4 h-4" />Download CV
                </Button>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex items-center gap-4 pt-2">
              {[
                { href: "https://github.com/xitoaliferis", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/xristopher-aliferis", icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-wine-500 hover:border-wine-600/50 hover:bg-wine-800/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Gradient Orb */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-12 rounded-full animate-orb-float">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-wine-700/25 via-wine-800/12 to-wine-900/8 backdrop-blur-sm border border-wine-700/15" />
                <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-wine-600/15 via-transparent to-wine-700/10 animate-pulse-glow" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-wine-500/8 via-transparent to-transparent" />
              </div>
              <div className="absolute inset-0 rounded-full border border-wine-700/12 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-wine-800/8" style={{ animation: "spin-slow 15s linear infinite reverse" }} />
              <div className="absolute top-4 left-8 text-2xl text-wine-500/35 animate-float font-mono">&#x2207;</div>
              <div className="absolute top-16 right-6 text-xl text-wine-600/25 animate-float font-mono" style={{ animationDelay: "1s" }}>&theta;</div>
              <div className="absolute bottom-16 left-12 text-xl text-wine-600/25 animate-float font-mono" style={{ animationDelay: "2s" }}>&sigma;</div>
              <div className="absolute bottom-8 right-16 text-2xl text-wine-500/35 animate-float font-mono" style={{ animationDelay: "1.5s" }}>&lambda;</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-wine-500 transition-colors">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.a>
    </section>
  )
}
