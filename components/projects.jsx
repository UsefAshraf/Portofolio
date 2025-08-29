"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // ✅ State to toggle view
  const [showAll, setShowAll] = useState(false)

 const projects = [
  {
  title: "React Query CRUD App",
  description: "A CRUD application built with React and React Query, demonstrating data fetching, caching, and optimistic updates with a mock JSON server.",
  image: "/ReQuey.png",
  tags: ["React", "React Query", "Axios", "Bootstrap"],
  liveUrl: "https://react-query-crud-app.vercel.app/",
  githubUrl: "https://github.com/UsefAshraf/react-query-crud-app/tree/main",
},
  {
    title: "Geo Egypt",
    description: "An interactive map of Egypt built with React and Leaflet, displaying heritage sites and protected areas.",
    image: "/geo-egypt.png",
    tags: ["React", "Leaflet", "Open layers", "Tailwind CSS"],
    liveUrl: "https://geo-egypt.vercel.app/",
    githubUrl: "https://github.com/UsefAshraf/GeoEgypt",
  },
  {
    title: "prayer times",
    description:
      "A React app to display Islamic prayer times based on city selection using Aladhan API.",
    image: "/prayer-times-app.png",
    tags: ["React","Tailwind CSS","Prayer Times API"],
    liveUrl: "https://prayer-times-app-gules.vercel.app/",
    githubUrl: "https://github.com/UsefAshraf/prayer-times-app",
  },
  {
    title: "appleax",
    description: "simple angular project using routing.",
    image: "/appleax.png",
    tags: ["Angular", "Tailwind CSS"],
    liveUrl: "https://appleax-rho.vercel.app/",
    githubUrl: "https://github.com/UsefAshraf/appleax",
  },
  {
    title: "faq-card-app",
    description: "Frontend Mentor-inspired FAQ cards with mobile-friendly layout.",
    image: "/faq.png",
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://faq-card-app.vercel.app/",
    githubUrl: "https://github.com/UsefAshraf/faq-card-app",
  },
  {
    title: "Responsive-Weather-Forecast-App-with-Geolocation-Search",
    description:
      "A responsive weather forecast web application using the WeatherAPI, built with HTML, CSS (Bootstrap), and JavaScript.",
    image: "/weather-app.png",
    tags: ["Html", "CSS", "JS"],
    liveUrl: "https://usefashraf.github.io/Responsive-Weather-Forecast-App-with-Geolocation-Search/",
    githubUrl: "https://github.com/UsefAshraf/Responsive-Weather-Forecast-App-with-Geolocation-Search",
  },
  {
    title: "Daniels",
    description: "Simple Responsive Daniels with HTML, CSS, Bootstrap.",
    image: "/Daniels.png",
    tags: ["Html", "CSS","JS"],
    liveUrl: "https://usefashraf.github.io/Daniels/",
    githubUrl: "https://github.com/UsefAshraf/Daniels",
  },
  {
    title: "DevFolio",
    description: "Simple Responsive Daniels with HTML, CSS, Bootstrap.",
    image: "/Devfolio.png",
    tags: ["Html", "CSS","JS"],
    liveUrl: "https://usefashraf.github.io/DevFolio/",
    githubUrl: "https://github.com/UsefAshraf/DevFolio",
  },
];


  // ✅ Only show 4 if not expanded
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project showcases different skills and technologies I've worked with.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            {showAll ? "Show Less" : "View All Projects"}
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
