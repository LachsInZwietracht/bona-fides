"use client";

import Link from "next/link";
import { Mail, Building, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-white">
              BONA FIDES
            </h3>
            <p className="font-mono text-sm text-gray-400 leading-relaxed">
              Deutschlands beste und größte Detektei für digitale Ermittlungen. Lizenziert, versichert und auf Ergebnisse ausgerichtet.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-white" />
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wide">
                Zertifiziert & Versichert
              </span>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-white font-bold uppercase tracking-wide text-sm">
              Unternehmen
            </h4>
            <ul className="space-y-2 font-mono text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-white transition-colors"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
                >
                  Unser Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-white transition-colors"
                  onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-mono text-white font-bold uppercase tracking-wide text-sm">
              Kontakt
            </h4>
            <ul className="space-y-3 font-mono text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-1 shrink-0" />
                <span>ermittlungen@bonafides.agency</span>
              </li>
              <li className="flex items-start space-x-2">
                <Building className="h-4 w-4 mt-1 shrink-0" />
                <span>Deutschlandweit tätig</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-mono text-xs text-gray-500">
              © 2024 BONA FIDES Private Detektei. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 font-mono text-xs text-gray-400">
              <Link
                href="/datenschutz"
                className="hover:text-white transition-colors"
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
              >
                Datenschutz
              </Link>
              <Link
                href="/impressum"
                className="hover:text-white transition-colors"
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
              >
                Impressum
              </Link>
              <Link
                href="/agb"
                className="hover:text-white transition-colors"
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#FEF3C6'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgb(156, 163, 175)'}
              >
                AGB
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}