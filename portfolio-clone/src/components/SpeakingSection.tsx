"use client"

import Link from "next/link"
import { SectionTitle } from "./SectionTitle"

export function SpeakingSection() {
  // Sample speaking data
  const talks = [
    {
      id: 1,
      title: "Motion Design System",
      subtitle: "Oct. 2023 | Lightning Talk @ designMyx by Myntra",
      link: "#"
    },
    {
      id: 2,
      title: "Decoding Razorpay Design System",
      subtitle: "Mar. 2024 | Online Session @ AOH Community",
      link: "#"
    },
    {
      id: 3,
      title: "Design Systems for Enterprise",
      subtitle: "Apr. 2024 | Panel Discussion @ Geeky Ants",
      link: "#"
    },
    {
      id: 4,
      title: "Decoding Blade: The DS that powers Razorpay",
      subtitle: "May 2024 | Online Session @ TGIF by 10k Designers",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <SectionTitle title="Speaking" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {talks.map(talk => (
          <div key={talk.id} className="mb-8">
            <div className="flex gap-4 items-baseline mb-1">
              <div className="text-white/50 text-sm font-mono">0{talk.id}</div>
              <h3 className="text-lg font-bold">{talk.title}</h3>
            </div>
            <div className="text-white/70 text-sm ml-10 mb-2">{talk.subtitle}</div>
            <div className="ml-10">
              <Link href={talk.link} className="text-xs text-white inline-flex items-center border-b border-white/50 hover:border-white pb-0.5 transition-colors">
                Check Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
