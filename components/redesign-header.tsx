"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceIcon } from "@/components/service-icon"
import { b2bServices } from "@/lib/services-data"
import {
  landingRedesigns,
  redesignReviewPath,
  type RedesignVariant,
} from "@/lib/landing-redesigns"

const primaryLinks = [
  { href: "/about", label: "Über uns" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Fachbeiträge" },
]

export function RedesignHeader({
  variant,
  contactHref,
}: {
  variant: RedesignVariant
  contactHref: string
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const design = landingRedesigns[variant]
  const homeHref = redesignReviewPath(variant)

  return (
    <header className={`redesign-header redesign-header--${variant}`}>
      {variant === "observatorium" && (
        <div className="redesign-header-signal">
          <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
            <span>BF // Ermittlungszentrale</span>
            <span className="flex items-center gap-2 text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" /> Einsatzbereit
            </span>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="redesign-header-inner flex items-center justify-between">
          <Link href={homeHref} className="redesign-wordmark" aria-label="BONA FIDES – Startseite">
            {variant === "akte" && <span className="redesign-file-mark">BF</span>}
            <span>
              <strong>BONA FIDES</strong>
              <small>{variant === "signatur" ? "Wirtschaftsdetektei" : design.shortName}</small>
            </span>
          </Link>

          <nav className="hidden items-center lg:flex" aria-label="Hauptnavigation">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/leistungen"
                className="redesign-nav-link inline-flex items-center gap-1.5"
                aria-expanded={isServicesOpen}
                onFocus={() => setIsServicesOpen(true)}
              >
                Leistungen
                <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </Link>
              {isServicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-5">
                  <div className="redesign-mega-menu">
                    <div className="mb-3 flex items-center justify-between border-b border-white/10 px-3 pb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                      <span>Ermittlungsfelder</span>
                      <span className="text-brass">B2B</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {b2bServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/leistungen/${service.slug}`}
                          className="group flex gap-3 p-3 transition-colors hover:bg-white/5"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <ServiceIcon
                            name={service.icon}
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass"
                          />
                          <span>
                            <span className="block text-sm font-medium text-white group-hover:text-brass-light">
                              {service.navLabel}
                            </span>
                            <span className="mt-1 block text-xs leading-snug text-gray-500">
                              {service.teaser}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className="redesign-nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="redesign-header-cta">
              <Link href={contactHref}>
                Erstgespräch
                {variant !== "akte" && <ArrowUpRight className="ml-2 h-4 w-4" />}
              </Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white lg:hidden"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="redesign-mobile-menu lg:hidden" aria-label="Mobile Navigation">
            <Link href="/leistungen" onClick={() => setIsMenuOpen(false)}>
              Alle Leistungen
            </Link>
            <div className="grid border-y border-white/10 py-3 sm:grid-cols-2">
              {b2bServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <ServiceIcon name={service.icon} className="h-4 w-4 text-brass" />
                  {service.navLabel}
                </Link>
              ))}
            </div>
            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 min-h-[50px] bg-brass text-black hover:bg-brass-light">
              <Link href={contactHref} onClick={() => setIsMenuOpen(false)}>
                Fall vertraulich schildern
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
