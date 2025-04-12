"use client"

import Link from "next/link"
import { SectionTitle } from "./SectionTitle"

export function WritingSection() {
  // Sample writing data
  const articles = [
    {
      id: 1,
      title: "If you can smart animate, you can animate",
      link: "#"
    },
    {
      id: 2,
      title: "Behind the scenes of designing a design system component",
      link: "#"
    },
    {
      id: 3,
      title: "Learnings as a UX Design Intern @ MakeMyTrip",
      link: "#"
    },
    {
      id: 4,
      title: "A guide on building your portfolio using notion",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <SectionTitle title="Writing" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map(article => (
          <div key={article.id} className="mb-8">
            <h3 className="text-xl md:text-2xl font-normal mb-3">{article.title}</h3>
            <Link href={article.link} className="text-xs text-white inline-flex items-center border-b border-white/50 hover:border-white pb-0.5 transition-colors">
              Check Article
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
