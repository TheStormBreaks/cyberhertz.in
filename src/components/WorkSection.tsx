"use client"

import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "./SectionTitle"
import { motion } from "framer-motion"

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
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle title="Selected Projects" />
        <div className="inline-block relative">
          <span className="text-white/70 text-lg font-light italic">Github Links</span>
          <span className="absolute -top-1 -right-4 text-xl text-[#859952]">*</span>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent mt-2"></div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {projects.map((project, index) => (
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

      <motion.div
        className="mt-24 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-white/20 to-transparent mt-2"></div>
      </motion.div>
    </div>
  )
}
