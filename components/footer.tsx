import Link from "next/link"
import { Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-2xl text-foreground">
              Vidadi Huseynov
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Professional lighting designer specializing in concert, stage, and
              live show lighting design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              <Link
                href="/projects"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/clients"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Clients
              </Link>
              <Link
                href="/experience"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/about"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>
            <a
              href="tel:+994703000800"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors block mb-2"
            >
              +994 70 300 08 00
            </a>
            <a
              href="mailto:vidadi@backlight.az"
              className="text-sm text-foreground hover:text-muted-foreground transition-colors block mb-4"
            >
              vidadi@backlight.az
            </a>
            <div className="flex items-center gap-4">
              <a
                href="tel:+994703000800"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Call phone"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:vidadi@backlight.az"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/vidadi__huseynoff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/vidadi-huseynov-b4340b92"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © Vidadi Huseynov — Lighting Designer
          </p>
        </div>
      </div>
    </footer>
  )
}
