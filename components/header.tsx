"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceIcon } from "@/components/service-icon";
import { b2bServices, services } from "@/lib/services-data";

const privateService = services.find((service) => service.audience === "b2c");

const primaryLinks = [
  { href: "/about", label: "Über uns" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Fachbeiträge" },
];

export function Header({ dark = false }: { dark?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const linkClass = dark
    ? "text-gray-400 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
    : "text-charcoal hover:text-detective-blue transition-colors font-crimson";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b ${
        dark ? "bg-black/90 border-white/10" : "bg-case-file/95 border-investigation-brown/20"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3" aria-label="BONA FIDES – Startseite">
            <span
              className={
                dark
                  ? "text-xl font-serif font-bold tracking-tight text-white"
                  : "text-xl font-special-elite text-investigation-brown"
              }
            >
              BONA FIDES
            </span>
            {dark && (
              <span className="hidden sm:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                <span className="h-4 w-px bg-white/15" aria-hidden="true" />
                Wirtschaftsdetektei
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Hauptnavigation">
            {/* Leistungen mit Mega-Menü */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/leistungen"
                className={`${linkClass} inline-flex items-center gap-1`}
                aria-expanded={isServicesOpen}
                onFocus={() => setIsServicesOpen(true)}
              >
                Leistungen
                <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </Link>

              {isServicesOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                  <div className="w-[640px] rounded-sm border border-white/10 bg-black/95 p-4 shadow-2xl backdrop-blur-md">
                    <div className="grid grid-cols-2 gap-1">
                      {b2bServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/leistungen/${service.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="group flex gap-3 rounded-sm p-3 transition-colors hover:bg-white/5"
                        >
                          <ServiceIcon
                            name={service.icon}
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass"
                          />
                          <span>
                            <span className="block text-sm font-medium text-white group-hover:text-brass-light">
                              {service.navLabel}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-gray-500">
                              {service.teaser}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    {privateService && (
                      <Link
                        href={`/leistungen/${privateService.slug}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="mt-2 block border-t border-white/10 px-3 pt-3 font-mono text-[11px] uppercase tracking-wider text-gray-500 hover:text-brass"
                      >
                        Auch für Privatpersonen →
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </Link>
            ))}

            <Button
              asChild
              className={
                dark
                  ? "ml-2 bg-brass text-black hover:bg-brass-light font-semibold text-sm px-5 h-10"
                  : "ml-2 bg-detective-blue hover:bg-detective-blue/90 text-white"
              }
            >
              <Link href="/#contact">Erstgespräch</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${dark ? "text-white" : ""}`} />
            ) : (
              <Menu className={`h-6 w-6 ${dark ? "text-white" : ""}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className={`lg:hidden py-5 border-t ${
              dark ? "border-white/10" : "border-investigation-brown/20"
            }`}
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              <Link
                href="/leistungen"
                className={`${linkClass} py-2`}
                onClick={() => setIsMenuOpen(false)}
              >
                Alle Leistungen
              </Link>

              <div className="my-2 grid grid-cols-1 gap-1 border-y border-white/10 py-3">
                {b2bServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/leistungen/${service.slug}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-sm text-gray-300 hover:text-brass"
                  >
                    <ServiceIcon name={service.icon} className="h-4 w-4 text-brass" />
                    {service.navLabel}
                  </Link>
                ))}
              </div>

              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${linkClass} py-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                asChild
                className={
                  dark
                    ? "mt-3 bg-brass text-black hover:bg-brass-light font-semibold min-h-[48px]"
                    : "mt-3 bg-detective-blue hover:bg-detective-blue/90 text-white min-h-[48px]"
                }
              >
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Fall vertraulich schildern
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
