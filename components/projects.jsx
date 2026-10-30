"use client"

import { useState } from "react"
import { ArrowRight, Briefcase, ExternalLink, Github, Lock } from "lucide-react"
import SectionHeading from "./section-heading"
import { OPEN_SOURCE_PROJECTS, PROFESSIONAL_PROJECTS, PROFILE } from "./data"

const INITIAL_COUNT = 6

function Tags({ tags }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="px-2.5 py-1 rounded-md bg-gray-800 text-xs text-gray-300">
          {tag}
        </span>
      ))}
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? OPEN_SOURCE_PROJECTS : OPEN_SOURCE_PROJECTS.slice(0, INITIAL_COUNT)

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="Client and company projects I've delivered, plus open-source projects you can explore on GitHub."
        />

        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
          <Briefcase className="text-purple-400" size={20} /> Professional work
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {PROFESSIONAL_PROJECTS.map((project) => (
            <div key={project.title} className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-semibold text-white">{project.title}</h4>
                <Lock size={14} className="mt-1 flex-none text-gray-600" aria-label="Private code" />
              </div>
              <p className="mt-2 mb-5 flex-1 text-sm text-gray-400 leading-relaxed">{project.description}</p>
              <Tags tags={project.tags} />
            </div>
          ))}
        </div>

        <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
          <Github className="text-purple-400" size={20} /> Open source
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {displayedProjects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-6 transition-colors hover:border-purple-500/50"
            >
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              <p className="mt-2 mb-5 flex-1 text-gray-400 leading-relaxed">{project.description}</p>
              <Tags tags={project.tags} />
              <div className="mt-5 pt-4 border-t border-gray-800 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} /> {link.label}
                  </a>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} /> Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          {OPEN_SOURCE_PROJECTS.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-5 py-2.5 rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-colors"
            >
              {showAll ? "Show less" : `Show all ${OPEN_SOURCE_PROJECTS.length} projects`}
            </button>
          )}
          <a
            href={`${PROFILE.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            Browse all repositories on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
