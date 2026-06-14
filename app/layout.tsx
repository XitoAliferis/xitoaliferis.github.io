import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import "./globals.css"

const sans = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-interface",
})
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-code",
})

export const metadata: Metadata = {
  title: "Xristopher Aliferis | Machine Learning Research",
  description:
    "Xristopher Aliferis - incoming MMath student at the University of Waterloo, working across explainable AI, optimization theory, and neuromorphic computing.",
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} dark scroll-smooth`}>
      <body>{children}</body>
    </html>
  )
}
