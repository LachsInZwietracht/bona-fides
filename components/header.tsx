"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header({ dark = false }: { dark?: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-sm border-b ${
      dark 
        ? 'bg-black/90 border-white/10' 
        : 'bg-case-file/95 border-investigation-brown/20'
    }`}>
      <div className={`container mx-auto ${dark ? 'px-8' : 'px-4'}`}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`text-2xl ${
              dark 
                ? 'font-serif font-bold text-white' 
                : 'font-special-elite text-investigation-brown'
            }`}>
              BONA FIDES
            </div>
            {dark && (
              <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">Detective Agency</span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${dark ? 'space-x-8' : 'space-x-8'}`}>
            <Link
              href="/"
              className={dark 
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              Home
            </Link>
            <Link
              href="/services"
              className={dark 
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              Services
            </Link>
            <Link
              href="/about"
              className={dark 
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              About
            </Link>
            <Link
              href="/team"
              className={dark 
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              Team
            </Link>
            <Link
              href="/geloeste-faelle"
              className={dark
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors"
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              Gelöste Fälle
            </Link>
            <Link
              href="/blog"
              className={dark
                ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors"
                : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
              }
            >
              Blog
            </Link>
            <Button
              asChild
              className={dark
                ? "bg-white text-black hover:bg-gray-200 font-mono text-xs uppercase tracking-wide"
                : "bg-detective-blue hover:bg-detective-blue/90 text-white"
              }
              size={dark ? "sm" : undefined}
            >
              <Link href="/contact">Contact Us</Link>
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
              <X className={`h-6 w-6 ${dark ? 'text-white' : ''}`} />
            ) : (
              <Menu className={`h-6 w-6 ${dark ? 'text-white' : ''}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden py-4 border-t ${
            dark ? 'border-white/10' : 'border-investigation-brown/20'
          }`}>
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={dark 
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={dark 
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className={dark 
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/team"
                className={dark 
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors" 
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                href="/geloeste-faelle"
                className={dark
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors"
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Gelöste Fälle
              </Link>
              <Link
                href="/blog"
                className={dark
                  ? "text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors"
                  : "text-charcoal hover:text-detective-blue transition-colors font-crimson"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Button
                asChild
                className={dark
                  ? "bg-white text-black hover:bg-gray-200 font-mono text-xs uppercase tracking-wide w-fit"
                  : "bg-detective-blue hover:bg-detective-blue/90 text-white w-fit"
                }
              >
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
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