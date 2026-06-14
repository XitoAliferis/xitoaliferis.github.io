"use client"

import { motion, useInView, useSpring, useMotionValue, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: React.ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  duration?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const directionMap = {
    up: { y: 18, x: 0 },
    down: { y: -18, x: 0 },
    left: { y: 0, x: 18 },
    right: { y: 0, x: -18 },
    none: { y: 0, x: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: staggerDelay } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.25, 0.4, 0.25, 1] as const } },
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: {
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(prefix + "0" + suffix)

  useEffect(() => {
    if (!isInView) return
    const start = 0
    const startTime = Date.now()
    const durationMs = duration * 1000

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + (target - start) * eased
      setDisplay(prefix + current.toFixed(decimals) + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target, suffix, prefix, decimals, duration])

  return <span ref={ref}>{display}</span>
}
