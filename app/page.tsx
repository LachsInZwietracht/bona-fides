"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Phone, Search, Shield, Eye, Building, UserCheck, Award, Users, Star, Mail, Lock, ArrowRight } from "lucide-react"
import { Footer } from "@/components/footer"
import { BlogCard } from "@/components/blog-card"
import { ContactForm } from "@/components/contact-form"
import { useIsMobile } from "@/hooks/use-mobile"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import type { Article } from "@/lib/blog"

export default function HomePage() {
  const [latestArticles, setLatestArticles] = useState<Article[]>([])
  const isMobile = useIsMobile()

  // Individual intersection observers for each service card
  const service1Observer = useIntersectionObserver({ threshold: 0.2, rootMargin: '-10% 0px' })
  const service2Observer = useIntersectionObserver({ threshold: 0.2, rootMargin: '-10% 0px' })
  const service3Observer = useIntersectionObserver({ threshold: 0.2, rootMargin: '-10% 0px' })

  // Individual intersection observers for article cards (up to 6 articles to be safe)
  const article1Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })
  const article2Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })
  const article3Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })
  const article4Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })
  const article5Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })
  const article6Observer = useIntersectionObserver({ threshold: 0.3, rootMargin: '-20% 0px' })

  // Fetch latest articles for the Aktuelles section
  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        const response = await fetch('/api/latest-articles')
        if (response.ok) {
          const articles = await response.json()
          setLatestArticles(articles)
        }
      } catch (error) {
        console.error('Error fetching latest articles:', error)
      }
    }

    fetchLatestArticles()
  }, [])

  return (
    <div>
      <Header dark />
      <div className="min-h-screen bg-black text-white relative">

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent 0px,
              transparent 15px,
              rgba(255,255,255,0.08) 15px,
              rgba(255,255,255,0.08) 18px,
              transparent 18px,
              transparent 35px
            )`,
          }}
        />
      </div>

      {/* Lighting effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />

      {/* Hero section */}
      <div className="relative z-10 min-h-screen flex items-center pt-16 sm:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              {/* Header with classic noir styling */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white drop-shadow-2xl leading-tight">
                    BONA
                    <br />
                    <span className="text-gray-300">FIDES</span>
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-lg lg:text-xl font-mono tracking-widest text-gray-400 uppercase">Private Detektei</h2>
                </div>
              </div>

              {/* Tagline with dramatic styling */}
              <div className="border-l-4 border-white pl-6 sm:pl-8">
                <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-serif italic text-gray-300 leading-relaxed">
                  „Jede Wahrheit
                  <br />
                  <span className="text-white font-bold">verdient es, gefunden zu werden.&rdquo;</span>
                </p>
              </div>

              {/* Services with digital focus icons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 py-4 sm:py-8">
                <div className="flex items-center space-x-3 sm:flex-col sm:text-center sm:space-x-0 sm:space-y-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 sm:mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wide">Cyber-Forensik</p>
                </div>
                <div className="flex items-center space-x-3 sm:flex-col sm:text-center sm:space-x-0 sm:space-y-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 sm:mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wide">Digitale Ermittlungen</p>
                </div>
                <div className="flex items-center space-x-3 sm:flex-col sm:text-center sm:space-x-0 sm:space-y-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 sm:mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-gray-400 uppercase tracking-wide">Online Sicherheit</p>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-8 sm:space-y-12">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="font-serif text-base sm:text-lg px-8 py-5 sm:px-10 sm:py-7 md:px-8 md:py-6 shadow-2xl transition-all duration-300 border min-h-[48px] w-full sm:w-auto hover:bg-amber-700 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.25)] hover:scale-105"
                    style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Vertrauliche Beratung
                  </Button>
                </Link>
                <p className="hidden sm:block text-sm font-mono text-gray-500 tracking-wide mt-8 sm:mt-12">
                  Kostenlose Erstberatung • Absolute Verschwiegenheit
                </p>
              </div>
            </div>

            <div className="relative hidden lg:flex lg:justify-center">
              <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-md">
                {/* Multiple paper layers for depth */}
                <div className="absolute inset-0 bg-gray-200 transform rotate-1 shadow-lg rounded-sm opacity-60" />
                <div className="absolute inset-0 bg-gray-300 transform -rotate-1 shadow-lg rounded-sm opacity-40" />

                {/* Main case file document with wobble animation */}
                <div className="bg-white text-black p-6 md:p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform duration-300 relative rounded-sm animate-pulse hover:animate-none">
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-yellow-100 to-gray-200 rounded-sm" />

                  {/* Subtle paper grain */}
                  <div
                    className="absolute inset-0 opacity-10 rounded-sm"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Case file content */}
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4 md:mb-6">
                      <h3 className="text-lg md:text-2xl font-mono font-bold text-black tracking-tight">
                        FALLAKTE #247
                      </h3>
                      <Badge className="bg-red-500 text-white font-mono text-xs px-2 py-1 rounded-sm">AKTIV</Badge>
                    </div>

                    {/* Case details with responsive layout */}
                    <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm">
                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Klient:</span>
                        <p className="text-red-600 font-bold">[VERTRAULICH]</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Art:</span>
                        <p className="text-black">Unternehmensermittlung</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Status:</span>
                        <p className="text-red-600 font-bold">Beweise gesichert</p>
                      </div>

                      <div className="border-b border-gray-300 pb-2">
                        <span className="font-bold text-gray-700">Ermittler:</span>
                        <p className="text-black">Agent Müller</p>
                      </div>

                      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-100 border-l-4 border-gray-600 rounded-sm">
                        <p className="text-xs italic text-gray-700 leading-relaxed">
                          &ldquo;Ein weiterer Fall mit Präzision und Diskretion gelöst. Die Wahrheit kommt immer ans Licht.&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* GEHEIM stamp */}
                    <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-12 h-12 md:w-16 md:h-16 border-2 border-red-600 rounded-full flex items-center justify-center transform rotate-12 bg-white">
                      <span className="text-red-600 font-bold text-xs">GEHEIM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/90 to-black/95">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              ERMITTLUNGSDIENSTE
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Deutschlands beste und größte Detektei – Spezialisiert auf internationale Online-Ermittlungen
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: "Digitale Ermittlungen",
                description: "Online-Recherchen, Social-Media-Analyse und digitale Spurensuche mit modernster Technologie.",
                features: ["Online-Personensuche", "Social Media Forensik", "Digitale Spuren", "Internationale Recherche"],
                gradient: "from-gray-800/30 to-gray-700/15"
              },
              {
                icon: Building,
                title: "Cybercrime & Betrug",
                description: "Aufdeckung von Online-Betrug, Geldwäsche und digitalen Betrugsnetzwerken im internationalen Raum.",
                features: ["Geldwäsche-Aufklärung", "Online-Betrug", "Account-Diebstahl", "Internationale Fälle"],
                gradient: "from-slate-800/30 to-slate-700/15"
              },
              {
                icon: UserCheck,
                title: "Hintergrundprüfungen",
                description: "Online-Hintergrundchecks und digitale Due-Diligence für Unternehmen und Privatpersonen.",
                features: ["Online-Screening", "Digitale Forensik", "Dark Web Recherche", "Identitätsprüfung"],
                gradient: "from-zinc-800/30 to-zinc-700/15"
              }
            ].map((service, index) => {
              // Get the appropriate observer for this service
              const observers = [service1Observer, service2Observer, service3Observer]
              const observer = observers[index]

              // Determine if the mobile scroll animation should be active
              const shouldAnimateOnMobile = isMobile && observer.isVisible

              return (
                <div
                  key={index}
                  ref={observer.elementRef}
                  className={`group relative ${
                    isMobile ? (shouldAnimateOnMobile ? 'group-active' : '') : ''
                  }`}
                >

                {/* Card with vintage paper styling */}
                <div className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/8 rounded-sm p-8 transition-all duration-500 ease-out shadow-lg overflow-hidden ${
                  isMobile
                    ? shouldAnimateOnMobile
                      ? 'border-[#C2B16D]/40 shadow-xl'
                      : ''
                    : 'hover:border-[#C2B16D]/40 hover:shadow-xl'
                }`}>
                  
                  {/* Vintage paper texture overlay */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-800 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'opacity-40'
                        : ''
                      : 'group-hover:opacity-40'
                  }`}>
                    <div className="h-full w-full bg-amber-50/5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='2'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }} />
                  </div>
                  
                  {/* Typewriter reveal effect */}
                  <div className={`absolute inset-0 bg-black transition-transform duration-800 ease-out opacity-10 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'translate-y-0'
                        : 'translate-y-full'
                      : 'translate-y-full group-hover:translate-y-0'
                  }`} />
                  
                  {/* Old-style corner decorations */}
                  <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#FEF3C6]/40 opacity-0 transition-all duration-600 delay-200 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'opacity-100'
                        : ''
                      : 'group-hover:opacity-100'
                  }`} />
                  <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#FEF3C6]/40 opacity-0 transition-all duration-600 delay-300 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'opacity-100'
                        : ''
                      : 'group-hover:opacity-100'
                  }`} />
                  <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#FEF3C6]/40 opacity-0 transition-all duration-600 delay-400 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'opacity-100'
                        : ''
                      : 'group-hover:opacity-100'
                  }`} />
                  <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#FEF3C6]/40 opacity-0 transition-all duration-600 delay-500 ${
                    isMobile
                      ? shouldAnimateOnMobile
                        ? 'opacity-100'
                        : ''
                      : 'group-hover:opacity-100'
                  }`} />

                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      {/* Vintage medallion style icon */}
                      <div className="relative">
                        <div className={`w-20 h-20 mx-auto mb-6 bg-white/8 rounded-full flex items-center justify-center transition-all duration-700 backdrop-blur-sm border border-white/10 ${
                          isMobile
                            ? shouldAnimateOnMobile
                              ? 'bg-[#C2B16D]/20 border-[#C2B16D]/40'
                              : ''
                            : 'hover:bg-[#C2B16D]/20 hover:border-[#C2B16D]/40'
                        }`}>
                          <service.icon className={`h-10 w-10 text-white/90 transition-colors duration-700 ${
                            isMobile
                              ? shouldAnimateOnMobile
                                ? 'text-[#FEF3C6]'
                                : ''
                              : 'group-hover:text-[#FEF3C6]'
                          }`} />
                        </div>
                        {/* Vintage circle decoration */}
                        <div className={`absolute inset-0 rounded-full border border-dashed border-white/20 opacity-0 transition-opacity duration-800 delay-200 animate-pulse ${
                          isMobile
                            ? shouldAnimateOnMobile
                              ? 'opacity-100'
                              : ''
                            : 'group-hover:opacity-100'
                        }`} />
                      </div>

                      {/* Title with typewriter effect */}
                      <h3 className={`text-2xl font-serif font-bold text-white/95 mb-3 transition-colors duration-700 ${
                        isMobile
                          ? shouldAnimateOnMobile
                            ? 'text-[#FEF3C6] tracking-wider'
                            : ''
                          : 'group-hover:text-[#FEF3C6] group-hover:tracking-wider'
                      }`}>
                        {service.title}
                      </h3>
                    </div>

                    {/* Description with fade-in */}
                    <p className={`text-gray-300 font-mono text-sm text-center mb-6 leading-relaxed transition-all duration-700 opacity-90 ${
                      isMobile
                        ? shouldAnimateOnMobile
                          ? 'text-[#FEF3C6]/80 opacity-100'
                          : ''
                        : 'group-hover:text-[#FEF3C6]/80 group-hover:opacity-100'
                    }`}>
                      {service.description}
                    </p>

                    {/* Features list with staggered reveal */}
                    <div className="space-y-3">
                      <h4 className={`font-mono text-white/90 text-xs font-bold uppercase tracking-widest text-center border-b border-white/15 pb-2 transition-colors duration-700 ${
                        isMobile
                          ? shouldAnimateOnMobile
                            ? 'text-[#FEF3C6] border-[#C2B16D]/40'
                            : ''
                          : 'group-hover:text-[#FEF3C6] group-hover:border-[#C2B16D]/40'
                      }`}>
                        Hauptdienste
                      </h4>
                      <ul className="text-xs font-mono text-gray-400 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-center transition-all duration-700 ${
                            isMobile
                              ? shouldAnimateOnMobile
                                ? 'text-[#FEF3C6]/80'
                                : ''
                              : 'group-hover:text-[#FEF3C6]/80'
                          }`} style={{transitionDelay: `${featureIndex * 100}ms`}}>
                            <div className={`w-1.5 h-1.5 bg-white/60 rounded-full mr-3 transition-colors duration-700 ${
                              isMobile
                                ? shouldAnimateOnMobile
                                  ? 'bg-[#C2B16D]'
                                  : ''
                                : 'group-hover:bg-[#C2B16D]'
                            }`} style={{transitionDelay: `${featureIndex * 100}ms`}} />
                            <span className="tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Vintage file tab */}
                    <div className={`absolute -top-2 left-8 w-16 h-6 border border-white/20 rounded-t opacity-0 transition-all duration-500 delay-400 ${
                      isMobile
                        ? shouldAnimateOnMobile
                          ? 'opacity-100'
                          : ''
                        : 'group-hover:opacity-100'
                    }`} style={{backgroundColor: 'rgba(194, 177, 109, 0.2)'}}>
                      <div className="text-[10px] font-mono text-center pt-1" style={{color: '#FEF3C6'}}>FILE</div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/95 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              WARUM BONA FIDES
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Deutschlands beste und größte Detektei mit digitalem Schwerpunkt und weltweitem Netzwerk
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Users, number: "35", label: "Bundesweite Ermittler", description: "Ermittlernetzwerk in ganz Deutschland" },
              { icon: Award, number: "100%", label: "Diskrete Beweise", description: "Gerichtsfeste Dokumentation garantiert" },
              { icon: Star, number: "#1", label: "Digital", description: "Führend in digitaler Ermittlung" },
              { icon: Shield, number: "100%", label: "Vertraulich", description: "Alle Fälle werden mit völliger Diskretion behandelt" }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/10 w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                  <metric.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                  {metric.number}
                </div>
                <h3 className="text-xl font-mono text-white mb-2 uppercase tracking-wide">
                  {metric.label}
                </h3>
                <p className="text-sm font-mono text-gray-400">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Case Studies Section - Evidence Board Style */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              GELÖSTE FÄLLE
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Ausgewählte Erfolgsgeschichten aus unserem Archiv – Jeder Fall ein Triumph der Wahrheit
            </p>
          </div>

          {/* Evidence Board Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                caseNumber: "DE-047",
                title: "Dubai-Betrugsring gesprengt",
                service: "Internationale Ermittlungen",
                description: "Geldwäsche-Netzwerk in Dubai aufgedeckt, das EU- und UK-Kunden betrog. Fall wurde an Behörden übergeben.",
                location: "Dubai / EU / UK",
                duration: "Mehrere Monate",
                classification: "STRENG GEHEIM"
              },
              {
                caseNumber: "SM-123",
                title: "Gestohlener Social-Media-Account",
                service: "Digitale Forensik",
                description: "Account eines Millionen-Euro-Unternehmens zurückverfolgt. Täter in Thailand identifiziert.",
                location: "Europa / Thailand",
                duration: "Intensive Recherche",
                classification: "VERTRAULICH"
              },
              {
                caseNumber: "PH-089",
                title: "Personensuche via Fotomaterial",
                service: "Digitale Ermittlungen",
                description: "Vermisste Personen durch Online-Recherche und Fotomaterial-Analyse erfolgreich lokalisiert.",
                location: "International",
                duration: "Variiert",
                classification: "VERTRAULICH"
              }
            ].map((caseFile, index) => (
              <div key={index} className="group relative">
                {/* Case File Folder */}
                <div className="bg-white/5 hover:bg-[#FEF3C6]/10 backdrop-blur-sm border border-white/10 hover:border-[#C2B16D]/40 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.2)] rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl">

                  {/* File Tab */}
                  <div className="bg-white/10 group-hover:bg-[#C2B16D]/20 px-4 py-2 border-b border-white/20 group-hover:border-[#C2B16D]/30 transition-colors duration-500">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-white group-hover:text-[#FEF3C6] font-bold tracking-widest transition-colors duration-500">
                        AKTE {caseFile.caseNumber}
                      </span>
                      <div className="text-xs font-mono text-gray-300 group-hover:text-[#FEF3C6]/70 transition-colors duration-500">
                        {caseFile.classification}
                      </div>
                    </div>
                  </div>

                  {/* Case Content */}
                  <div className="p-6 space-y-4">
                    {/* Case Title with Typewriter Effect */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#FEF3C6] group-hover:tracking-wider transition-all duration-500">
                        {caseFile.title}
                      </h3>
                      <div className="inline-block bg-white/10 group-hover:bg-[#C2B16D]/10 text-white group-hover:text-[#FEF3C6] px-2 py-1 rounded text-xs font-mono transition-colors duration-500">
                        {caseFile.service}
                      </div>
                    </div>

                    {/* Case Description */}
                    <p className="text-gray-300 group-hover:text-[#FEF3C6]/80 font-mono text-sm leading-relaxed transition-colors duration-500 mb-6">
                      {caseFile.description}
                    </p>

                    {/* Case Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/20 group-hover:border-[#C2B16D]/20 transition-colors duration-500">
                      <div>
                        <div className="text-xs font-mono text-gray-400 group-hover:text-[#FEF3C6]/70 transition-colors duration-500"> Ort:</div>
                        <div className="text-xs font-mono text-white group-hover:text-gray-300 transition-colors duration-500">{caseFile.location}</div>
                      </div>
                      <div>
                        <div className="text-xs font-mono text-gray-400 group-hover:text-[#FEF3C6]/70 transition-colors duration-500"> Dauer:</div>
                        <div className="text-xs font-mono text-white group-hover:text-gray-300 transition-colors duration-500">{caseFile.duration}</div>
                      </div>
                    </div>
                  </div>


                  {/* Vintage Paper Clips */}
                  <div className="absolute top-2 left-2 w-8 h-4 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-400" />
                  <div className="absolute top-6 left-4 w-6 h-3 border-2 border-gray-400/30 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-500" />

                  {/* Evidence String Effect */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-600" />
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-800 delay-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Archive Footer */}
          <div className="text-center mt-16 p-6 backdrop-blur-sm border rounded-sm max-w-4xl mx-auto" style={{backgroundColor: 'rgba(254, 243, 198, 0.05)', borderColor: 'rgba(194, 177, 109, 0.2)'}}>
            <h3 className="text-2xl font-serif font-bold mb-3" style={{color: '#FEF3C6'}}>
              IHR FALL KÖNNTE DER NÄCHSTE SEIN
            </h3>
            <p className="font-mono text-gray-300 mb-4">
              Jeder Fall ist einzigartig. Jede Wahrheit verdient es, gefunden zu werden.
            </p>
          </div>
        </div>
      </div>

      {/* Aktuelles Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              AKTUELLES
            </h2>
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Neueste Erkenntnisse und Expertise aus unserem Fallarchiv
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {(isMobile ? latestArticles.slice(0, 3) : latestArticles).map((article, index) => {
              // Get the appropriate observer for this article
              const observers = [
                article1Observer, article2Observer, article3Observer,
                article4Observer, article5Observer, article6Observer
              ]
              const observer = observers[index]

              // Determine if the mobile scroll animation should be active
              const shouldAnimateOnMobile = isMobile && observer && observer.isVisible

              return (
                <div key={article.metadata.slug} ref={observer?.elementRef}>
                  <BlogCard
                    article={article}
                    isMobile={isMobile}
                    shouldAnimateOnMobile={shouldAnimateOnMobile || false}
                  />
                </div>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                className="font-serif text-lg px-10 py-6 transition-all duration-300 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.3)] hover:scale-105 border-2"
                style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}
              >
                Zum Fallarchiv
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              KUNDENSTIMMEN
            </h2>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Vertrauen Sie nicht nur uns – hören Sie von denen, denen wir geholfen haben
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                initials: "M.K.",
                location: "Hamburg",
                caseType: "Untreue-Ermittlung",
                rating: 5,
                text: "Diskret, professionell und schnell. Die Wahrheit war schmerzhaft, aber notwendig. BONA FIDES hat mir geholfen, Klarheit zu finden."
              },
              {
                initials: "T.S.",
                location: "Frankfurt",
                caseType: "Unternehmensbetrug",
                rating: 5,
                text: "Unglaubliche Detektivarbeit. Sie fanden Beweise, die wir für unmöglich hielten. Haben unserem Unternehmen Millionen gespart."
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 hover:bg-[#FEF3C6]/08 backdrop-blur-sm border border-white/10 hover:border-[#C2B16D]/40 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.25)] rounded-sm p-6 transition-all duration-700 hover:scale-105 shadow-2xl">

                  {/* Vintage Paper Texture */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800">
                    <div className="h-full w-full bg-amber-50/5" style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='witnessTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='3'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23witnessTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }} />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500 group-hover:fill-[#C2B16D] group-hover:text-[#C2B16D] transition-colors duration-500" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-300 group-hover:text-[#FEF3C6]/80 font-mono text-sm leading-relaxed mb-6 italic transition-colors duration-500">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Client Info */}
                  <div className="space-y-2 border-t border-white/20 group-hover:border-[#C2B16D]/30 pt-4 transition-colors duration-500">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-white group-hover:text-[#FEF3C6] font-bold text-sm transition-colors duration-500">
                        {testimonial.initials}
                      </span>
                      <span className="font-mono text-gray-400 text-xs">
                        {testimonial.location}
                      </span>
                    </div>
                    <div className="font-mono text-gray-400 text-xs">
                      {testimonial.caseType}
                    </div>
                  </div>

                  {/* Vintage Stamp */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-70 transition-all duration-700 delay-200">
                    <div className="w-12 h-12 border-2 border-dashed border-[#C2B16D]/50 rounded-full flex items-center justify-center transform -rotate-12">
                      <span className="text-[10px] font-mono font-bold tracking-tight text-[#FEF3C6]">VERIFIZIERT</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
              HÄUFIG GESTELLTE FRAGEN
            </h2>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Alles, was Sie über unsere Dienstleistungen wissen müssen
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question: "Wie gewährleisten Sie absolute Vertraulichkeit?",
                answer: "Alle unsere Ermittler unterliegen strengen Verschwiegenheitspflichten und rechtlichen Bindungen. Wir verwenden verschlüsselte Kommunikation, sichere Dokumentenspeicherung und anonymisierte Berichterstattung. Ihre Privatsphäre ist unsere oberste Priorität."
              },
              {
                question: "Wie lange dauert eine durchschnittliche Ermittlung?",
                answer: "Die Dauer variiert je nach Komplexität des Falls. Einfache Hintergrundprüfungen können 1-2 Wochen dauern, während komplexe Unternehmensermittlungen 3-6 Monate benötigen können. Wir geben Ihnen nach der Erstberatung eine realistische Zeitschätzung."
              },
              {
                question: "Wie sind Ihre Preise strukturiert?",
                answer: "Wir bieten transparente Preisgestaltung basierend auf der Art und dem Umfang der Ermittlung. Sie erhalten ein detailliertes Angebot vor Beginn der Arbeit. Wir arbeiten mit Pauschalpreisen oder Stundensätzen, je nach Ihren Bedürfnissen. Kostenlose Erstberatung inklusive."
              },
              {
                question: "Welche Informationen benötigen Sie, um zu beginnen?",
                answer: "Für den Start benötigen wir grundlegende Informationen über Ihren Fall: Namen, Daten, Orte und spezifische Anliegen. Je mehr Details Sie uns geben können, desto effizienter können wir arbeiten. Alle Informationen werden streng vertraulich behandelt."
              },
              {
                question: "In welchen Regionen sind Sie tätig?",
                answer: "Als beste und größte Detektei Deutschlands mit Fokus auf digitale Ermittlungen arbeiten wir international. Unser großes Netzwerk ermöglicht weltweite Online-Recherchen. Für lokale, hands-on Ermittlungen empfehlen wir spezialisierte Partner."
              },
              {
                question: "Wie erhalte ich meine Ermittlungsergebnisse?",
                answer: "Sie erhalten einen umfassenden, schriftlichen Bericht mit allen Erkenntnissen, Beweisen und Dokumentationen. Je nach Präferenz können wir auch persönliche Briefings durchführen. Alle Materialien werden sicher übermittelt und sind gerichtsfest aufbereitet."
              },
              {
                question: "Was passiert, wenn Sie keine Ergebnisse finden?",
                answer: "Wir sind ehrlich: Nicht jeder Fall führt zum gewünschten Ergebnis. Wenn keine Beweise gefunden werden, informieren wir Sie sofort und besprechen weitere Optionen. Viele Pauschalpreise beinhalten eine 'Kein Ergebnis, reduzierte Gebühr'-Garantie."
              }
            ].map((faq, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#C2B16D]/30 rounded-sm transition-all duration-500 hover:bg-white/8">
                <details className="group/details">
                  <summary className="cursor-pointer p-6 font-mono text-white group-hover:text-[#FEF3C6] font-bold flex justify-between items-center transition-colors duration-500 list-none">
                    <span className="text-sm md:text-base">{faq.question}</span>
                    <span className="ml-4 text-2xl transition-transform duration-300 group-open/details:rotate-45">+</span>
                  </summary>
                  <div className="px-6 pb-6 font-mono text-sm text-gray-300 group-hover:text-[#FEF3C6]/80 leading-relaxed border-t border-white/10 pt-4 transition-colors duration-500">
                    {faq.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section id="kontakt-section">
        <ContactForm />
      </section>

      {/* Final CTA Section */}
      <div className="relative z-10 py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-12 md:p-16 relative overflow-hidden">

            {/* Dramatic lighting effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-white/10 via-white/5 to-transparent blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Die Wahrheit wartet nicht.
                <br />
                <span className="text-gray-300">Handeln Sie jetzt.</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg lg:text-2xl font-mono text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Jeder Tag ohne Antworten ist ein verlorener Tag. Unsere Ermittler stehen bereit, Ihren Fall mit Diskretion und Professionalität zu lösen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="font-serif text-base sm:text-lg md:text-xl px-10 py-6 sm:px-12 sm:py-8 md:px-10 md:py-7 shadow-2xl transition-all duration-300 border-2 min-h-[56px] w-full sm:w-auto hover:bg-amber-200 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.5)] hover:scale-105"
                    style={{backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D'}}
                  >
                    <Mail className="mr-3 h-6 w-6" />
                    Jetzt Kontaktieren
                  </Button>
                </Link>
              </div>

              <div className="pt-6 border-t border-white/20 mt-8">
                <p className="font-mono text-sm text-gray-400 tracking-widest">
                  KOSTENLOSE ERSTBERATUNG
                </p>
              </div>

              {/* Vintage seal decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-dashed rounded-full flex items-center justify-center opacity-20" style={{borderColor: '#C2B16D'}}>
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold" style={{color: '#FEF3C6'}}>BONA FIDES</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
      </div>
    </div>
  )
}
