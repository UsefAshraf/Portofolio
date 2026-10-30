"use client";

import Link from "next/link";
import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PROFILE } from "./data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="container mx-auto max-w-5xl px-4 md:px-6 z-10 pt-24">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-4 py-1.5 text-sm text-gray-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Software Engineer at CISS · Open to opportunities
        </span>

        <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
          {PROFILE.name}
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {PROFILE.title}
        </p>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 leading-relaxed">
          I build production web apps and AI products with React, Next.js, Node.js, and .NET,
          from an e-commerce SaaS serving customers across the MENA region and the Americas
          to RAG assistants powered by LLMs.
        </p>

        <p className="mt-4 flex items-center gap-2 text-gray-500">
          <MapPin size={16} /> {PROFILE.location}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="#experience"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-500/20 transition-all hover:shadow-purple-500/40"
          >
            View Experience
          </Link>
          <a
            href={PROFILE.cv}
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-white font-medium transition-colors hover:bg-gray-800"
          >
            <FileText size={18} /> Download CV
          </a>
        </div>

        <div className="mt-10 flex gap-5 text-gray-400">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={22} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={22} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-white transition-colors">
            <Mail size={22} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 hover:text-white transition-colors"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
