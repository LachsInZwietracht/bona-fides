import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-case-file">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Agency Info */}
          <div className="space-y-4">
            <div className="text-2xl font-special-elite text-retro-accent">
              BONA FIDES
            </div>
            <p className="text-sm font-crimson text-case-file/80">
              Professional investigation services with integrity, discretion, and results since 1965.
            </p>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-detective-blue" />
              <span className="text-xs font-crimson">Licensed & Insured</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg text-retro-accent">Services</h3>
            <ul className="space-y-2 text-sm font-crimson">
              <li>
                <Link href="/services" className="hover:text-detective-blue transition-colors">
                  Private Investigations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-detective-blue transition-colors">
                  Corporate Security
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-detective-blue transition-colors">
                  Insurance Claims
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-detective-blue transition-colors">
                  Background Checks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg text-retro-accent">Contact</h3>
            <ul className="space-y-2 text-sm font-crimson">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-detective-blue" />
                <span>(555) 123-CASE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-detective-blue" />
                <span>info@bonafides.agency</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-detective-blue" />
                <span>123 Detective St, Investigation City</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-playfair text-lg text-retro-accent">Legal</h3>
            <ul className="space-y-2 text-sm font-crimson">
              <li>
                <Link href="/impressum" className="hover:text-detective-blue transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-detective-blue transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-detective-blue transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-case-file/20 mt-8 pt-8 text-center">
          <p className="text-sm font-crimson text-case-file/60">
            © 2024 Bona Fides Detective Agency. All rights reserved. Licensed Private Investigation Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}