import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Search, Shield, Eye } from "lucide-react"

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

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  )
}
