"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, FileText } from "lucide-react"
import { NAV_LINKS, PROFILE } from "./data"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isOpen ? "bg-gray-950/90 backdrop-blur-md py-3 border-b border-gray-800" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="#home" className="text-lg font-bold text-white">
            Yousef<span className="text-purple-400">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a
              href={PROFILE.cv}
              download={PROFILE.cvFileName}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-700 text-sm text-white hover:bg-gray-800 transition-colors"
            >
              <FileText size={16} /> CV
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white py-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-4 border-t border-gray-800">
              <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href={PROFILE.cv} download={PROFILE.cvFileName} className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white">
                <FileText size={16} /> Download CV
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
