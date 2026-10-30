"use client";

import { MapPin } from "lucide-react";
import SectionHeading from "./section-heading";
import { EXPERIENCE } from "./data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="E-commerce, aviation, AI, and space-tech: production systems with real users."
        />

        <ol className="relative border-l border-gray-800 ml-2 space-y-12">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.role}`} className="pl-8 relative">
              <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-purple-500 bg-gray-950" />

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                <h3 className="text-xl font-semibold text-white">
                  {job.role} <span className="text-purple-400">· {job.company}</span>
                </h3>
                <span className="text-sm font-medium text-gray-400 whitespace-nowrap">{job.period}</span>
              </div>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin size={14} /> {job.location}
              </p>

              <ul className="mt-4 space-y-2 text-gray-300 leading-relaxed">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-none rounded-full bg-gray-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
