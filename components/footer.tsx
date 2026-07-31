"use client";

import Link from "next/link";
import { Mail, MapPin, ShieldCheck } from "lucide-react";
import { useCookies } from "@/hooks/use-cookies";
import { b2bServices, services } from "@/lib/services-data";
import { mailtoLink, siteConfig } from "@/lib/site-config";

const companyLinks = [
  { href: "/about", label: "Über uns" },
  { href: "/team", label: "Unser Team" },
  { href: "/blog", label: "Fachbeiträge" },
  { href: "/#contact", label: "Kontakt" },
];

const legalLinks = [
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/impressum", label: "Impressum" },
  { href: "/agb", label: "AGB" },
];

export function Footer({ contactHref = "/#contact" }: { contactHref?: string }) {
  const { reopenBanner } = useCookies();
  const privateService = services.find((service) => service.audience === "b2c");

  return (
    <footer className="relative z-10 border-t border-white/10 bg-gray-900/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marke */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-white">BONA FIDES</h2>
            <p className="text-sm leading-relaxed text-gray-400">
              {siteConfig.positioning}. Ermittlungen, die einer rechtlichen Prüfung standhalten –
              bundesweit und diskret.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="h-4 w-4 text-brass" aria-hidden="true" />
              <span className="font-mono uppercase tracking-wider">DSGVO-konform · NDA möglich</span>
            </div>
          </div>

          {/* Leistungen – interne Verlinkung für SEO */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Leistungen
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {b2bServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="transition-colors hover:text-brass"
                  >
                    {service.navLabel}
                  </Link>
                </li>
              ))}
              {privateService && (
                <li>
                  <Link
                    href={`/leistungen/${privateService.slug}`}
                    className="transition-colors hover:text-brass"
                  >
                    {privateService.navLabel}
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Unternehmen
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href === "/#contact" ? contactHref : link.href}
                    className="transition-colors hover:text-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-white">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 transition-colors hover:text-brass"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {siteConfig.street}
                  <br />
                  {siteConfig.postalCode} {siteConfig.city}
                </address>
              </li>
            </ul>
            <Link
              href={contactHref}
              className="inline-flex items-center rounded-sm border border-brass/40 px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-brass transition-colors hover:bg-brass/10"
            >
              Erstgespräch anfragen
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="font-mono text-xs text-gray-500">
            © {new Date().getFullYear()} BONA FIDES Detektei. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs text-gray-400">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-brass">
                {link.label}
              </Link>
            ))}
            <button onClick={reopenBanner} className="cursor-pointer transition-colors hover:text-brass">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
