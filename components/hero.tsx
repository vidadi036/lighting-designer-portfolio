"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-concert.jpg"
          alt="Concert lighting design by Vidadi Huseynov featuring dramatic stage lights"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-4">
            <span className="block text-balance">Vidadi Huseynov</span>
          </h1>
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mt-6">
            Lighting Designer
          </p>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToProjects}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-all duration-500 cursor-pointer ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll to projects"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}
