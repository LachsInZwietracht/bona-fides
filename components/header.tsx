"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-case-file/95 backdrop-blur-sm border-b border-investigation-brown/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-special-elite text-investigation-brown">
              BONA FIDES
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
            >
              Team
            </Link>
            <Button 
              asChild
              className="bg-detective-blue hover:bg-detective-blue/90 text-white"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-investigation-brown/20">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/team"
                className="text-charcoal hover:text-detective-blue transition-colors font-crimson"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Button 
                asChild
                className="bg-detective-blue hover:bg-detective-blue/90 text-white w-fit"
              >
                <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}