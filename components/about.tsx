"use client"

import { FadeIn } from "@/components/motion"
import { SectionHeading } from "@/components/section-heading"

const skills = [
  "Python", "C", "C++", "C#", "VHDL", "TypeScript", "PyTorch", "TensorFlow", "React", "Next.js", "Node.js", "FPGA", "MATLAB",
]

export function About() {
  return (
    <section id="about" className="chapter">
      <div className="fieldbook-shell">
        <FadeIn>
          <SectionHeading index="01" label="About" title={<>Building ML systems<br className="hidden sm:block" /> that can be trusted.</>} />
        </FadeIn>
        <div className="grid gap-10 lg:grid-cols-[minmax(16rem,.72fr)_minmax(22rem,1fr)] lg:gap-16">
          <FadeIn direction="right">
            <div className="tech-panel border-l-2 border-l-signal p-6">
              <p className="mono-label mb-4 text-signal-bright">Research premise</p>
              <blockquote className="text-xl font-medium leading-8 tracking-[-0.03em] text-paper">
                If we cannot explain why a model works, we cannot trust it when it matters most.
              </blockquote>
            </div>
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-5 text-[1rem] leading-8 text-paper-dim">
            <p>
              I graduated from the <span className="text-paper">University of Western Ontario</span> with a B.E.Sc. in <span className="text-paper">Software Engineering</span>. In September 2026, I begin an MMath in Computer Science at the <span className="text-paper">University of Waterloo</span>, supervised by Dr. Robin Cohen and Dr. Lukasz Golab.
            </p>
            <p>
              My work moves between physical constraints and mathematical ones: spiking neural networks on FPGAs, on-device 3D reconstruction, railway predictive maintenance, and interpretable learned decisions.
            </p>
          </FadeIn>
        </div>
        <FadeIn delay={0.17} className="mt-12 border-y border-rule px-0 py-6 md:flex md:gap-12">
          <p className="mono-label mb-4 shrink-0 text-signal-bright md:mb-0">Toolkit</p>
          <p className="font-mono text-xs uppercase leading-7 tracking-[0.1em] text-paper-dim">
            {skills.map((skill, index) => (
              <span key={skill}>
                <span className="transition-colors hover:text-paper">{skill}</span>{index < skills.length - 1 && <span className="mx-3 text-signal">/</span>}
              </span>
            ))}
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
