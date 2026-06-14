import type { ReactNode } from "react"

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string
  label: string
  title: ReactNode
  children?: ReactNode
}) {
  return (
    <header className="chapter-head">
      <div className="chapter-index">{index}</div>
      <div>
        <p className="mono-label mb-4 text-signal-bright">{label}</p>
        <h2 className="chapter-title">{title}</h2>
        {children && <div className="chapter-copy">{children}</div>}
      </div>
    </header>
  )
}
