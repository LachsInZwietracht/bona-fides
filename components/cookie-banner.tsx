"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCookies } from '@/hooks/use-cookies'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  // Auf dem Telefon startet der Erklärtext eingeklappt, damit die Leiste flach bleibt
  const [showDetails, setShowDetails] = useState(false)
  const { hasConsented, acceptCookies, declineCookies, forceShow, clearForceShow } = useCookies()

  useEffect(() => {
    // Show banner immediately if force show is enabled
    if (forceShow) {
      setIsVisible(true)
      setIsAnimating(true)
      clearForceShow()
      return
    }

    // Show banner if user hasn't consented yet (normal flow)
    if (!hasConsented) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [hasConsented, forceShow, clearForceShow])

  const handleAccept = () => {
    acceptCookies()
    closeBanner()
  }

  const handleDecline = () => {
    declineCookies()
    closeBanner()
  }

  const closeBanner = () => {
    setIsAnimating(false)
    setTimeout(() => setIsVisible(false), 300)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop overlay with noir film grain */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 hidden sm:block ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeBanner}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' seed='2'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")`
        }}
      />

      {/* Cookie Banner - Detective Case File Style */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-4 sm:left-4 sm:right-4" data-testid="cookie-banner">
        <div
          className={`max-w-4xl mx-auto relative transform transition-all duration-500 ${
            isAnimating
              ? 'translate-y-0 scale-100 opacity-100'
              : 'translate-y-full scale-95 opacity-0'
          }`}
        >
          {/* Case File Background with vintage paper texture */}
          <div
            className="relative overflow-hidden border-t border-white/20 bg-black/95 backdrop-blur-sm shadow-[0_25px_50px_-12px_rgba(194,177,109,0.3)] sm:rounded-sm sm:border sm:bg-gradient-to-br sm:from-white/10 sm:via-white/5 sm:to-white/1"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='paper'%3E%3CfeTurbulence baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeDiffuseLighting in='noise' lighting-color='%23C2B16D' surfaceScale='1'%3E%3CfeDistantLight azimuth='45' elevation='60'/%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.02'/%3E%3C/svg%3E"), linear-gradient(135deg, rgba(194,177,109,0.03) 0%, rgba(254,243,198,0.01) 100%)`
            }}
          >
            {/* Aktendeckel-Deko – kostet mobil nur Höhe, daher erst ab sm */}
            <div className="hidden sm:block">
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#C2B16D] opacity-60" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#C2B16D] opacity-60" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#C2B16D] opacity-60" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#C2B16D] opacity-60" />

              {/* File tab */}
              <div className="absolute top-1 left-6 bg-[#C2B16D]/80 text-[#1A1612] px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-sm max-w-[200px]">
                <span className="truncate block">Cookie-Richtlinie</span>
              </div>

              {/* Paper clip decoration */}
              <div className="absolute -top-1 right-12 w-3 h-6 border-2 border-[#C2B16D]/40 rounded-full transform rotate-12" />
            </div>

            {/* Close button */}
            <button
              onClick={closeBanner}
              aria-label="Hinweis schließen"
              className="absolute top-2 right-2 hidden size-11 items-center justify-center rounded-full text-white/60 transition-colors duration-300 hover:bg-white/5 hover:text-[#C2B16D] sm:top-3 sm:right-3 sm:flex"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 sm:px-8 sm:pt-12 sm:pb-8">
              <div className="flex flex-col gap-3 sm:gap-6">
                {/* Icon and Header */}
                <div className="flex items-start gap-4">
                  <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#C2B16D]/40 bg-[#C2B16D]/20 sm:flex">
                    <Cookie className="w-6 h-6 text-[#C2B16D]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="mb-1 font-serif text-base tracking-wide text-white sm:mb-2 sm:text-lg">
                      Überwachungshinweis
                    </h3>
                    <p className="text-sm leading-relaxed text-white/80">
                      Diese Ermittlung nutzt Tracking-Cookies zur Analyse von Besuchermustern.
                      <span className={`sm:inline ${showDetails ? 'inline' : 'hidden'}`}>
                        {' '}Wir respektieren Ihre Privatsphäre und behandeln alle Daten mit
                        professioneller Diskretion.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-row gap-3">
                  <Button
                    onClick={handleDecline}
                    variant="secondary"
                    className="min-h-11 flex-1 border border-slate-600/40 bg-slate-800/80 font-mono text-xs uppercase tracking-wider text-white transition-all duration-300 hover:border-slate-500/60 hover:bg-slate-700/90"
                  >
                    Ablehnen
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="min-h-11 flex-1 bg-[#C2B16D] font-mono text-xs uppercase tracking-wider text-[#1A1612] shadow-[0_8px_25px_-8px_rgba(194,177,109,0.4)] transition-transform duration-300 hover:bg-[#D4C47A] sm:hover:scale-105"
                  >
                    Alle Akzeptieren
                  </Button>
                </div>
              </div>

              {/* Kleingedrucktes – mobil hinter „Mehr erfahren“ */}
              <button
                type="button"
                onClick={() => setShowDetails((open) => !open)}
                aria-expanded={showDetails}
                className="mt-1 font-mono text-xs text-[#C2B16D] underline underline-offset-4 transition-colors hover:text-[#FEF3C6] sm:hidden"
              >
                {showDetails ? 'Weniger' : 'Mehr erfahren'}
              </button>

              <div
                className={`mt-4 border-t border-white/10 pt-4 sm:block ${
                  showDetails ? 'block' : 'hidden'
                }`}
              >
                <p className="font-mono text-xs leading-relaxed text-white/50">
                  Durch Fortfahren erkennen Sie unsere{' '}
                  <Link
                    href="/datenschutz"
                    className="text-[#C2B16D] underline underline-offset-4 transition-colors hover:text-[#FEF3C6]"
                  >
                    Datenschutzerklärung
                  </Link>
                  {' '}an. Akten werden verschlüsselt und sicher gespeichert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}