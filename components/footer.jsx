"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "./data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 py-10 border-t border-gray-800">
      <div className="container mx-auto max-w-5xl px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {PROFILE.fullName} · {PROFILE.title}
        </p>

        <div className="flex items-center gap-5 text-gray-400">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email" className="hover:text-white transition-colors">
            <Mail size={20} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="ml-2 p-2.5 bg-gray-800 rounded-full hover:text-white hover:bg-gray-700 transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
