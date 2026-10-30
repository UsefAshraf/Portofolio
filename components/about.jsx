"use client";

import { GraduationCap } from "lucide-react";
import SectionHeading from "./section-heading";
import { EDUCATION } from "./data";

const HIGHLIGHTS = [
  { value: "~10K", label: "Users on a government platform I built" },
  { value: "5", label: "Engineering roles & internships" },
  { value: "2", label: "AI products shipped (RAG, CV screening)" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <SectionHeading eyebrow="About" title="Engineer who ships end to end" />

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-5 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a Full Stack Software Engineer building production web apps and AI products with
              React, Next.js, Node.js, and .NET. I've shipped a government platform for about
              10,000 users, an e-commerce SaaS serving MENA and the Americas, and integrations for
              EgyptAir's aviation systems.
            </p>
            <p>
              I build LLM features end to end, from RAG pipelines with pgvector and hybrid search to
              model evaluation across Claude, Gemini, and Groq.
            </p>
            <p className="text-gray-400">Arabic (Native) · English (Proficient)</p>
          </div>

          <div className="lg:col-span-2 grid gap-4">
            {HIGHLIGHTS.map((item) => (
              <div key={item.label} className="rounded-xl border border-gray-800 bg-gray-950/60 p-5">
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-white mb-6">
            <GraduationCap className="text-purple-400" size={22} /> Education
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {EDUCATION.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-800 bg-gray-950/60 p-6">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-gray-300">{item.place}</p>
                <p className="mt-2 text-sm text-gray-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
