"use client"

import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Neural network nodes
    const nodes: {
      x: number
      y: number
      vx: number
      vy: number
      active: boolean
      pulsePhase: number
    }[] = []
    const nodeCount = 50

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        active: false,
        pulsePhase: Math.random() * Math.PI * 2,
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      nodes.forEach((node) => {
        const dx = node.x - x
        const dy = node.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        node.active = distance < 150
        if (node.active) {
          node.pulsePhase = 0
        }
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        node.x += node.vx
        node.y += node.vy
        node.pulsePhase += 0.05

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i === j) return
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const opacity = node.active || otherNode.active ? 0.4 : 0.15
            ctx.beginPath()
            ctx.strokeStyle = `rgba(245, 158, 11, ${opacity * (1 - distance / 150)})`
            ctx.lineWidth = node.active || otherNode.active ? 1.5 : 0.5
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            ctx.stroke()
          }
        })

        // Draw node with pulse effect
        const pulseRadius = Math.max(1, 2 + Math.sin(node.pulsePhase) * (node.active ? 3 : 0.5))
        ctx.beginPath()
        ctx.arc(node.x, node.y, pulseRadius, 0, Math.PI * 2)
        ctx.fillStyle = node.active
          ? `rgba(251, 191, 36, ${0.8 + Math.sin(node.pulsePhase) * 0.2})`
          : "rgba(251, 191, 36, 0.6)"
        ctx.fill()

        // Glow effect for active nodes
        if (node.active) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, pulseRadius + 8, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(251, 191, 36, ${0.2 - Math.sin(node.pulsePhase) * 0.1})`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20" ref={containerRef}>
      {/* Animated neural network background - responds to mouse */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-100 cursor-none -z-10" />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-mono">Available for Research Opportunities</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-balance">
              Xristopher
              <br />
              <span className="text-primary">Aliferis</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty">
              Undergraduate researcher exploring the{" "}
              <span className="text-foreground font-semibold">mathematical foundations</span> of machine learning and
              deep learning systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="mailto:xaliferi@uwo.ca">
                <Button
                  size="lg"
                  className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Button>
              </a>
              <a
                href="/Xristopher_Aliferis_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  Download CV
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/xitoaliferis" // ← replace with your actual GitHub username
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all cursor-pointer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/xristopher-aliferis" // ← replace with your actual LinkedIn slug
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Rotating mathematical symbols */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
              <div
                className="absolute inset-8 rounded-full border-2 border-primary/30"
                style={{ animationDuration: "8s" }}
              />
              <div
                className="absolute inset-16 rounded-full border-2 border-primary/40"
                style={{ animationDuration: "6s" }}
              />

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-mono text-primary">∇</div>
                  <div className="text-sm text-muted-foreground font-mono">
                    ∂L/∂θ
                    <br />
                    f(x) → y
                    <br />Σ w·x + b
                  </div>
                </div>
              </div>

              {/* Floating mathematical symbols */}
              <div className="absolute top-0 left-0 text-2xl text-primary/60 animate-float">θ</div>
              <div
                className="absolute top-12 right-4 text-2xl text-primary/60 animate-float"
                style={{ animationDelay: "1s" }}
              >
                λ
              </div>
              <div
                className="absolute bottom-12 left-8 text-2xl text-primary/60 animate-float"
                style={{ animationDelay: "2s" }}
              >
                α
              </div>
              <div
                className="absolute bottom-4 right-12 text-2xl text-primary/60 animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                σ
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-sm font-mono">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  )
}
