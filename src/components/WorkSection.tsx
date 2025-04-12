"use client"

import { ProjectCard } from "./ProjectCard"
import { SectionTitle } from "./SectionTitle"
import { motion } from "framer-motion"

export function WorkSection() {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Stock Price Prediction of Google using ML and Statistics",
      description: "Bult with py, tensorflow, scikit-learn and matplotlib. yfinance data set. ",
      year: "2025",
      imageUrl: "/images/project1.png",
      link: "https://www.linkedin.com/posts/thestormbreaks_documentation-of-the-project-activity-7303469589957332992-oOm1?utm_source=share&utm_medium=member_desktop&rcm=ACoAADW6TokBTix0MB_H4gxTD7zhuVokK_JCnUs"
    },
    {
      id: 2,
      title: "Data Center Design and Management with Integrated BMS",
      description: "Integration of CPMS, EMS and Security with BMS for monitoring. Complete design process of a DC. ",
      year: "2024",
      imageUrl: "/images/project2.png",
      link: "resources/REPORT.pdf"
    },
    {
      id: 3,
      title: "Vulnerability Scanner",
      description: "Checking vulnerability of a device, with result logging and download option. Built with Django and next.js",
      year: "2023",
      imageUrl: "/images/project3.png",
      link: "https://github.com/TheStormBreaks/vulnerability-scanner"
    },
    {
      id: 4,
      title: "Lyaounov Stability Analysis of a Double Pendulum System",
      description: "Basic understanding and observation of Lyapunov Concepts using a chos system of Double Pendulum.",
      year: "2020",
      imageUrl: "/images/project4.png",
      link: "https://github.com/TheStormBreaks/lyapunov-stability-double-pendulum-"
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
