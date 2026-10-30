"use client"

import { Brain, Code2, Database, Layout, Server, Wrench } from "lucide-react"
import SectionHeading from "./section-heading"
import { SKILLS } from "./data"

const GROUP_ICONS = {
  Languages: Code2,
  Frontend: Layout,
  Backend: Server,
  Databases: Database,
  "AI & ERP": Brain,
  "Testing & DevOps": Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILLS.map(({ group, items }) => {
            const Icon = GROUP_ICONS[group]
            return (
              <div key={group} className="rounded-xl border border-gray-800 bg-gray-950/60 p-6">
                <h3 className="flex items-center gap-2 font-semibold text-white mb-4">
                  <Icon className="text-purple-400" size={20} /> {group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-gray-800 text-sm text-gray-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
