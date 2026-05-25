"use client"

import { FadeIn, AnimatedCounter } from "@/components/motion"

const skills = [
  "Python", "C", "C++", "C#", "VHDL", "TypeScript", "PyTorch",
  "TensorFlow", "React", "Next.js", "Node.js", "FPGA", "MATLAB",
]

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden section-alt">
      <div className="absolute top-20 right-0 w-96 h-96 bg-wine-800/5 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <FadeIn direction="left" className="md:col-span-2 space-y-6">
            <div className="text-8xl text-wine-600/20 font-serif leading-none select-none">&ldquo;</div>
            <blockquote className="text-2xl font-light text-muted-foreground italic leading-relaxed text-balance">
              If we can&apos;t explain why a model works, we can&apos;t trust it when it matters most.
            </blockquote>
            <div className="h-1 w-20 bg-gradient-to-r from-wine-600 to-wine-800 rounded-full" />
          </FadeIn>

          <div className="md:col-span-3 space-y-8">
            <FadeIn>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground text-pretty">
                  I recently graduated from the{" "}
                  <span className="text-wine-500 font-medium">University of Western Ontario</span> with a
                  B.E.Sc. in <span className="text-wine-500 font-medium">Software Engineering</span>. This fall,
                  I&apos;m joining the{" "}
                  <span className="text-foreground font-medium">University of Waterloo</span> for my MMath in
                  Computer Science, supervised by Dr. Robin Cohen and Dr. Lukasz Golab.
                </p>
                <p className="text-muted-foreground text-pretty">
                  My work spans from low-level hardware &mdash; designing spiking neural networks on FPGAs and
                  building on-device 3D reconstruction pipelines &mdash; to high-level ML theory, studying why
                  models generalize and how to make their decisions interpretable.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 88.45, decimals: 2, suffix: "%", label: "Average" },
                  { value: 1, decimals: 0, suffix: "", label: "Preprint" },
                  { value: 5, decimals: 0, suffix: "", label: "Awards" },
                ].map((stat) => (
                  <div key={stat.label} className="p-5 rounded-xl bg-muted/30 border border-border hover:border-wine-700/30 transition-colors group">
                    <div className="text-3xl font-bold text-wine-500 mb-1">
                      <AnimatedCounter target={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div>
                <h3 className="text-sm font-mono text-muted-foreground mb-3 uppercase tracking-wider">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 text-sm rounded-full bg-wine-800/8 text-wine-500/80 border border-wine-700/12 hover:border-wine-600/30 hover:bg-wine-800/15 transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
