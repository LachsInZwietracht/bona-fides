import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Search, Shield, Eye, Building, FileX, UserCheck, Camera, Award, Users, Clock, Star, MapPin, Mail, Lock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <nav className="relative z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-serif font-bold text-white">BONA FIDES</h2>
              <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">Detective Agency</span>
            </div>
            <div className="flex space-x-8">
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Home
              </button>
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Services
              </button>
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                About
              </button>
              <button className="text-gray-400 hover:text-white font-mono text-sm uppercase tracking-wide transition-colors">
                Team
              </button>
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-200 font-mono text-xs uppercase tracking-wide"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </nav>

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
      <div className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Header with classic noir styling */}
              <div className="space-y-4">
                <Badge className="bg-white text-black font-mono text-xs tracking-widest px-3 py-1">
                  EST. 1965 • LIZENZIERT & VERSICHERT
                </Badge>

                <div className="space-y-2">
                  <h1 className="text-7xl font-serif font-bold tracking-tight text-white drop-shadow-2xl">
                    BONA
                    <br />
                    <span className="text-gray-300">FIDES</span>
                  </h1>
                  <p className="text-xl font-mono tracking-widest text-gray-400 uppercase">Private Detektei</p>
                </div>
              </div>

              {/* Tagline with dramatic styling */}
              <div className="border-l-4 border-white pl-6">
                <p className="text-2xl font-serif italic text-gray-300 leading-relaxed">
                  „In den Schatten der Stadt
                  <br />
                  <span className="text-white font-bold">finden wir die Wahrheit.&rdquo;</span>
                </p>
              </div>

              {/* Services with classic icons */}
              <div className="grid grid-cols-3 gap-6 py-8">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Ermittlungen</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Überwachung</p>
                </div>
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-mono text-gray-400 uppercase tracking-wide">Diskretion</p>
                </div>
              </div>

              {/* Call to action */}
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-serif text-lg px-8 py-6 shadow-2xl hover:shadow-white/20 transition-all duration-300"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Vertrauliche Beratung
                </Button>
                <p className="text-sm font-mono text-gray-500 tracking-wide">
                  24/7 • Kostenlose Erstberatung • Absolute Verschwiegenheit
                </p>
              </div>
            </div>

            <div className="relative lg:flex lg:justify-center">
              <div className="relative max-w-sm mx-auto lg:max-w-md">
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
                        FALLAKTE #2024-001
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
                        <p className="text-black">Agent Johnson</p>
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
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-white/10 text-white font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm">
              SPEZIALISIERUNGEN
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              ERMITTLUNGSDIENSTE
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Professionelle Ermittlungsdienste mit über 50 Jahren kombinierter Erfahrung
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Search,
                title: "Private Ermittlungen",
                description: "Diskrete Ermittlungen einschließlich vermisster Personen, Untreue und Hintergrundprüfungen mit völliger Vertraulichkeit.",
                features: ["Vermisste Personen", "Untreue-Fälle", "Vermögenssuche", "Überwachung"],
                gradient: "from-gray-800/30 to-gray-700/15"
              },
              {
                icon: Building,
                title: "Unternehmenssicherheit", 
                description: "Umfassende Unternehmensermittlungen zum Schutz Ihrer Geschäftsinteressen und zur Gewährleistung der Arbeitsplatzintegrität.",
                features: ["Mitarbeiterprüfung", "Betrugserkennung", "Wirtschaftsspionage", "Due Diligence"],
                gradient: "from-slate-800/30 to-slate-700/15"
              },
              {
                icon: UserCheck,
                title: "Hintergrundprüfungen",
                description: "Umfassende Hintergrundüberprüfung für Beschäftigung, Mieterprüfung und persönliche Beziehungen.",
                features: ["Beschäftigungsscreening", "Mieterprüfung", "Persönliche Referenzen", "Strafregister"],
                gradient: "from-zinc-800/30 to-zinc-700/15"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                {/* Film noir shadow effect */}
                <div className="absolute inset-0 bg-black/20 rounded-sm translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
                
                {/* Card with subtle film noir styling */}
                <div className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-white/8 rounded-sm p-8 transition-all duration-700 ease-out hover:border-white/20 hover:translate-x-1 hover:-translate-y-1 shadow-lg group-hover:shadow-2xl`}>
                  
                  {/* Subtle venetian blind lighting effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-1000">
                    <div className="h-full w-full" style={{
                      background: `repeating-linear-gradient(
                        45deg,
                        transparent 0px,
                        transparent 8px,
                        rgba(255,255,255,0.02) 8px,
                        rgba(255,255,255,0.02) 10px
                      )`
                    }} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      {/* Subtle icon enhancement */}
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/5 rounded-full blur-lg scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        <div className="relative w-20 h-20 mx-auto mb-6 bg-white/8 rounded-full flex items-center justify-center group-hover:bg-white/12 transition-all duration-700 backdrop-blur-sm border border-white/10">
                          <service.icon className="h-10 w-10 text-white/90 group-hover:text-white transition-colors duration-500" />
                        </div>
                      </div>
                      
                      {/* Title with subtle shadow */}
                      <h3 className="text-2xl font-serif font-bold text-white/95 mb-3 group-hover:text-white transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 font-mono text-sm text-center mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {service.description}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-white/90 text-xs font-bold uppercase tracking-widest text-center border-b border-white/15 pb-2 group-hover:border-white/25 transition-colors duration-500">
                        Hauptdienste
                      </h4>
                      <ul className="text-xs font-mono text-gray-400 space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center group-hover:text-gray-300 transition-colors duration-500">
                            <div className="w-1.5 h-1.5 bg-white/60 rounded-full mr-3 group-hover:bg-white/80 transition-colors duration-500" />
                            <span className="tracking-wide">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Film noir corner accent */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                      <div className="w-8 h-8 border-t border-r border-white/30" />
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                      <div className="w-8 h-8 border-b border-l border-white/30" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              BRAUCHEN SIE EINE INDIVIDUELLE ERMITTLUNG?
            </h3>
            <p className="text-lg font-mono text-gray-300 mb-6 max-w-2xl mx-auto">
              Jeder Fall ist einzigartig. Kontaktieren Sie uns für eine vertrauliche Beratung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-200 font-mono text-sm uppercase tracking-wide"
              >
                Kostenlose Beratung
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black font-mono text-sm uppercase tracking-wide"
              >
                Alle Dienste ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="relative z-10 py-20 bg-gradient-to-b from-black/95 to-black">
        <div className="container mx-auto px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-white/10 text-white font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm">
              VERTRAUEN & EXZELLENZ
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              WARUM BONA FIDES
            </h2>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Jahrzehntelange Erfahrung, bewährte Ergebnisse und unerschütterliches Engagement für Integrität
            </p>
          </div>

          {/* Trust Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Clock, number: "50+", label: "Jahre Erfahrung", description: "Kombinierte Ermittlungserfahrung unseres Teams" },
              { icon: Users, number: "2,500+", label: "Gelöste Fälle", description: "Erfolgreich abgeschlossene Ermittlungen mit Ergebnissen" },
              { icon: Star, number: "98%", label: "Kundenzufriedenheit", description: "Kunden, die unsere Dienste weiterempfehlen würden" },
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

          {/* Credentials */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                PROFESSIONELLE QUALIFIKATIONEN
              </h3>
              <p className="text-lg font-mono text-gray-300 max-w-2xl mx-auto">
                Ihr Vertrauen ist unser Fundament. Wir halten die höchsten beruflichen Standards der Branche ein.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Award, title: "Lizenzierte Privatdetektive", description: "Alle Ermittler sind staatlich lizenziert und zertifiziert" },
                { icon: Shield, title: "Gebunden & Versichert", description: "Vollständige Berufshaftpflicht- und Kautionsdeckung" },
                { icon: Lock, title: "Vertraulichkeit Garantiert", description: "Anwalt-Mandant-Privileg und NDAs für alle Fälle" },
                { icon: Users, title: "Berufsverbände", description: "Mitglieder nationaler und staatlicher PI-Verbände" }
              ].map((cert, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white/5 rounded-sm border border-white/10">
                  <div className="bg-white/10 p-3 rounded-sm shrink-0">
                    <cert.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-mono text-white mb-2 uppercase tracking-wide">
                      {cert.title}
                    </h4>
                    <p className="font-mono text-gray-300 text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/10 text-white font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm">
                  VERTRAULICHE BERATUNG
                </Badge>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                  KONTAKT
                </h2>
                
                <p className="text-lg font-mono text-gray-300">
                  Bereit für Antworten? Kontaktieren Sie uns für eine kostenlose, vertrauliche Beratung.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-white mb-1 uppercase tracking-wide">
                        24/7 Hotline
                      </h3>
                      <p className="font-mono text-white mb-2 text-xl">
                        (555) 123-CASE
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Notfall-Ermittlungen verfügbar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-white mb-1 uppercase tracking-wide">
                        Sichere E-Mail
                      </h3>
                      <p className="font-mono text-white mb-2">
                        info@bonafides.agency
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Verschlüsselte Kommunikation verfügbar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-sm">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-mono text-lg text-white mb-1 uppercase tracking-wide">
                        Bürostandort
                      </h3>
                      <p className="font-mono text-white mb-2">
                        123 Detektiv Straße<br />
                        Ermittlungsstadt, ES 12345
                      </p>
                      <p className="font-mono text-sm text-gray-400">
                        Nur nach Vereinbarung
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-6">
                <h4 className="flex items-center font-mono text-white mb-4 uppercase tracking-wide">
                  <Lock className="mr-2 h-5 w-5" />
                  SICHERHEIT & VERTRAULICHKEIT
                </h4>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Alle Kommunikationen sind verschlüsselt und vertraulich</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Anwalt-Mandant-Privileg gilt für alle Beratungen</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Shield className="h-4 w-4 mt-1 text-white shrink-0" />
                    <p className="text-gray-300">Ihre Falldetails bleiben streng vertraulich</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
              <h3 className="font-mono text-white text-xl mb-6 uppercase tracking-wide">
                VERTRAULICHE FALLANFRAGE
              </h3>
              <div className="text-center py-12">
                <Lock className="h-16 w-16 mx-auto text-white/50 mb-4" />
                <h4 className="font-mono text-white mb-2 uppercase">Kontaktformular</h4>
                <p className="font-mono text-gray-400 text-sm mb-6">
                  Für maximale Sicherheit kontaktieren Sie uns bitte direkt per Telefon oder E-Mail.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200 font-mono text-sm uppercase tracking-wide"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Jetzt Anrufen
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}
