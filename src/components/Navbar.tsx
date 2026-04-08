"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Activity, ShieldCheck, Database, Menu, X, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [status, setStatus] = React.useState<"aggregating" | "privacy">("aggregating")

  React.useEffect(() => {
    const interval = setInterval(() => {
      setStatus((prev) => (prev === "aggregating" ? "privacy" : "aggregating"))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Research", href: "#framework" },
    { name: "Pillars", href: "#pillars" },
    { name: "Team", href: "#team" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Timeline", href: "#timeline" },
    { name: "Presentations", href: "#presentations" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <div className="flex items-center gap-2">
          <Share2 className="h-6 w-6 text-mtfl" />
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg tracking-tight hover:text-mtfl transition-colors">
              MTFL <span className="text-muted-foreground font-medium hidden sm:inline-block">| Personalized Diabetes</span>
            </span>
          </Link>
        </div>

        {/* Global Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs xl:text-sm font-medium transition-colors hover:text-mtfl ${
                pathname === item.href ? "text-mtfl" : "text-foreground/80"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Federated Status Widget */}
          <div className="hidden xl:flex items-center gap-2">
            <Badge variant="outline" className="h-8 border-mtfl/30 bg-mtfl/10 text-mtfl animate-pulse">
              {status === "aggregating" ? (
                <>
                  <Activity className="h-3.5 w-3.5 mr-1.5" />
                  Status: Aggregating...
                </>
              ) : (
                <>
                  <ShieldCheck className="h-3.5 w-3.5 mr-1.5 text-ethical" />
                  <span className="text-ethical">Privacy: DP-Enabled (ε ≤ 1.0)</span>
                </>
              )}
            </Badge>
          </div>

          <button
            className="lg:hidden p-2 text-foreground/80 hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t bg-background px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block text-sm font-medium ${
                pathname === item.href ? "text-mtfl" : "text-foreground/80"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
