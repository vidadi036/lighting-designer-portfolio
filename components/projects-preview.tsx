"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: "major-world-tour",
    title: "Major World Tour",
    category: "Concert Lighting",
    artist: "International Artist",
    image: "/images/project-concert-1.jpg",
    year: "2024",
  },
  {
    id: "summer-festival",
    title: "Summer Music Festival",
    category: "Festival Lighting",
    artist: "Multi-Artist Event",
    image: "/images/project-festival-1.jpg",
    year: "2024",
  },
  {
    id: "primetime-show",
    title: "Primetime Entertainment",
    category: "TV Show Lighting",
    artist: "National Broadcast",
    image: "/images/project-tv-1.jpg",
    year: "2023",
  },
  {
    id: "theatrical-production",
    title: "Contemporary Theatre",
    category: "Theatre Lighting",
    artist: "National Theatre",
    image: "/images/project-theatre-1.jpg",
    year: "2023",
  },
]

export function ProjectsPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <article className="relative aspect-[4/3] overflow-hidden bg-card">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.category} by Vidadi Huseynov`}
                  fill
                  className={cn(
                    "object-cover transition-all duration-700",
                    hoveredIndex === index ? "scale-105" : "scale-100"
                  )}
                  loading="lazy"
                />
                {/* Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-background/40 transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-70" : "opacity-0"
                  )}
                />
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {project.category}
                  </p>
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.artist} — {project.year}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All Link */}
        <Link
          href="/projects"
          className="md:hidden flex items-center justify-center gap-2 mt-12 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          View All Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}
