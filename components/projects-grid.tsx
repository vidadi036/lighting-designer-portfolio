"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  "All",
  "Concert Lighting",
  "Festival Lighting",
  "TV Show Lighting",
  "Theatre Lighting",
  "Special Events",
]

const allProjects = [
  {
    id: "major-world-tour",
    title: "Major World Tour",
    category: "Concert Lighting",
    artist: "International Artist",
    image: "/images/project-concert-1.jpg",
    year: "2024",
    description: "Arena tour lighting design for 50+ shows across Europe and North America.",
  },
  {
    id: "summer-festival",
    title: "Summer Music Festival",
    category: "Festival Lighting",
    artist: "Multi-Artist Event",
    image: "/images/project-festival-1.jpg",
    year: "2024",
    description: "Main stage lighting design for 100,000+ attendee festival.",
  },
  {
    id: "primetime-show",
    title: "Primetime Entertainment",
    category: "TV Show Lighting",
    artist: "National Broadcast",
    image: "/images/project-tv-1.jpg",
    year: "2023",
    description: "Live broadcast lighting design for weekly entertainment show.",
  },
  {
    id: "theatrical-production",
    title: "Contemporary Theatre",
    category: "Theatre Lighting",
    artist: "National Theatre",
    image: "/images/project-theatre-1.jpg",
    year: "2023",
    description: "Dramatic lighting design for award-winning theatrical production.",
  },
  {
    id: "corporate-gala",
    title: "Annual Corporate Gala",
    category: "Special Events",
    artist: "Fortune 500 Company",
    image: "/images/project-event-1.jpg",
    year: "2023",
    description: "Elegant lighting design for 2,000 guest corporate celebration.",
  },
  {
    id: "stadium-tour",
    title: "Stadium World Tour",
    category: "Concert Lighting",
    artist: "Global Superstar",
    image: "/images/project-concert-1.jpg",
    year: "2023",
    description: "Stadium tour lighting featuring custom-designed LED structures.",
  },
  {
    id: "electronic-festival",
    title: "Electronic Music Festival",
    category: "Festival Lighting",
    artist: "EDM Festival",
    image: "/images/project-festival-1.jpg",
    year: "2022",
    description: "Immersive lighting experience for electronic dance music festival.",
  },
  {
    id: "awards-show",
    title: "Music Awards Show",
    category: "TV Show Lighting",
    artist: "Award Ceremony",
    image: "/images/project-tv-1.jpg",
    year: "2022",
    description: "Live awards show lighting design with dynamic performance segments.",
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-300 border",
              activeCategory === category
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-muted-foreground hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project, index) => (
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
                  "absolute inset-0 bg-background/50 transition-opacity duration-500",
                  hoveredIndex === index ? "opacity-80" : "opacity-0"
                )}
              />
              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  {project.category}
                </p>
                <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-1">
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
    </div>
  )
}
