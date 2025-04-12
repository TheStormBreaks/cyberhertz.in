"use client"

import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "./SectionTitle"

export function WorkSection() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Blade Design System",
      description: "Building, maintaining and enhancing the design system that powers the products of Razorpay",
      year: "2024",
      imageUrl: "/images/project1.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "How to Reach Info for Host App",
      description: "Flow designed to enable hosts to add nearby locations and direction details to their property easily and accurately",
      year: "2021",
      imageUrl: "/images/project2.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Polygon's Motion Design System v1.0",
      description: "Built a standardized system for implementing consistent motion across the wide range of products",
      year: "2021",
      imageUrl: "/images/project3.jpg",
      link: "#"
    },
    {
      id: 4,
      title: "Masterclass for Scribld Creative",
      description: "App design for Scribld Creative - a conceptual edtech startup providing education in creative arts niche",
      year: "2020",
      imageUrl: "/images/project4.jpg",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="mb-8">
        <span className="text-white/50">Selected Works *</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            year={project.year}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>

      <div className="mt-16 mb-8">
        <SectionTitle title="Experimentation" />
      </div>
    </div>
  )
}
