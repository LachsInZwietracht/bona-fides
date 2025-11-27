'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const solvedCases = [
  {
    caseNumber: "1978-284",
    title: "Operation Midnight Rose",
    service: "Private Ermittlungen",
    description: "Vermisste Erbin nach 20 Jahren aufgespürt. Millionenschweres Erbe wiedervereinigt mit rechtmäßiger Besitzerin durch akribische Recherche und internationale Kontakte.",
    location: "Hamburg",
    duration: "6 Monate",
    classification: "VERTRAULICH",
    outcome: "Erfolgreiche Wiedervereinigung",
    evidence: "Dokumentenanalyse, Zeugenbefragungen",
    year: "1978"
  },
  {
    caseNumber: "1993-067",
    title: "Der Schatten im Vorstand",
    service: "Unternehmenssicherheit",
    description: "Wirtschaftsspionage in DAX-Konzern aufgedeckt. 50 Mio. € Schaden verhindert durch verdeckte Ermittlungen und Beweissicherung in multinationalem Unternehmen.",
    location: "Frankfurt",
    duration: "3 Monate",
    classification: "STRENG GEHEIM",
    outcome: "Spionagenetz zerschlagen",
    evidence: "Überwachung, Digitalforensik",
    year: "1993"
  },
  {
    caseNumber: "2008-451",
    title: "Die falsche Identität",
    service: "Hintergrundprüfungen",
    description: "Hochstapler mit gefälschten Zeugnissen entlarvt. Millionenbetrug verhindert durch umfassende Identitätsprüfung und Dokumentenverifikation.",
    location: "München",
    duration: "2 Wochen",
    classification: "VERTRAULICH",
    outcome: "Betrug verhindert",
    evidence: "Dokumentenprüfung, Referenzvalidierung",
    year: "2008"
  },
  {
    caseNumber: "1985-139",
    title: "Verschwundene Millionen",
    service: "Private Ermittlungen",
    description: "Versteckte Offshore-Konten aufgespürt. 15 Mio. € für Geschädigte sichergestellt durch internationale Finanzermittlungen und Vermögenssuche.",
    location: "Berlin",
    duration: "8 Monate",
    classification: "GEHEIM",
    outcome: "Vermögen sichergestellt",
    evidence: "Finanzanalyse, Internationale Recherche",
    year: "1985"
  },
  {
    caseNumber: "2015-372",
    title: "Der unsichtbare Feind",
    service: "Unternehmenssicherheit",
    description: "Insider-Betrugsnetz in Pharmaunternehmen zerschlagen. Produktfälschungen gestoppt und Compliance-Verstöße aufgedeckt.",
    location: "Köln",
    duration: "4 Monate",
    classification: "STRENG GEHEIM",
    outcome: "Netzwerk aufgedeckt",
    evidence: "Verdeckte Ermittlung, Laboranalysen",
    year: "2015"
  },
  {
    caseNumber: "2021-598",
    title: "Digitale Spuren",
    service: "Hintergrundprüfungen",
    description: "Cyberkrimineller Hintergrund von Führungskraft aufgedeckt. Datenschutz gewährleistet und Unternehmenssicherheit gesichert.",
    location: "Stuttgart",
    duration: "3 Wochen",
    classification: "VERTRAULICH",
    outcome: "Sicherheitslücke geschlossen",
    evidence: "IT-Forensik, Dark Web Monitoring",
    year: "2021"
  },
  {
    caseNumber: "1967-091",
    title: "Der verschwundene Zeuge",
    service: "Private Ermittlungen",
    description: "Schlüsselzeuge in Mordfall nach 5 Jahren ausfindig gemacht. Justizirrtum verhindert und wahrer Täter überführt.",
    location: "Düsseldorf",
    duration: "1 Jahr",
    classification: "GEHEIM",
    outcome: "Justizirrtum verhindert",
    evidence: "Personensuche, Zeugenvernehmung",
    year: "1967"
  },
  {
    caseNumber: "2019-756",
    title: "Das Familiengeheimnis",
    service: "Private Ermittlungen",
    description: "Versteckte Adoption und biologische Eltern gefunden. 40-jährige Identitätssuche erfolgreich abgeschlossen.",
    location: "Hannover",
    duration: "5 Monate",
    classification: "VERTRAULICH",
    outcome: "Familie wiedervereinigt",
    evidence: "Genealogische Recherche, DNA-Analyse",
    year: "2019"
  },
  {
    caseNumber: "1981-427",
    title: "Operation Goldfinger",
    service: "Unternehmenssicherheit",
    description: "Edelmetalldiebstahl-Ring in Juweliergeschäften aufgedeckt. Internationale Hehlerorganisation zerschlagen.",
    location: "Essen",
    duration: "7 Monate",
    classification: "STRENG GEHEIM",
    outcome: "Ring zerschlagen",
    evidence: "Überwachung, Verdeckte Käufe",
    year: "1981"
  }
];

export default function GeloesteFaellePage() {
  const [visibleCases, setVisibleCases] = useState<Set<number>>(new Set());
  const [scrollY, setScrollY] = useState(0);
  const caseRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleCases(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    caseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header dark />

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

      {/* Detective Spotlight Effect - follows scroll */}
      <div 
        className="absolute pointer-events-none z-20"
        style={{
          top: Math.max(200, scrollY * 0.5) + 'px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
          borderRadius: '50%',
          transition: 'all 0.1s linear',
          filter: 'blur(1px)'
        }}
      />

      {/* Lighting effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-8 py-16">
          {/* Back Navigation - Separate and Clear */}
          <div className="mb-12">
            <Link href="/" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors font-mono text-sm uppercase tracking-wide">
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Startseite</span>
            </Link>
          </div>

          {/* Page Header - Centered */}
          <div className="text-center space-y-6 mb-20">
            <Badge 
              className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" 
              style={{
                backgroundColor: 'rgba(194, 177, 109, 0.2)', 
                color: '#FEF3C6', 
                borderColor: 'rgba(194, 177, 109, 0.3)'
              }}
            >
              FALLARCHIV • KLASSIFIZIERT
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              GELÖSTE FÄLLE
            </h1>
            
            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Ausgewählte Erfolgsgeschichten aus unserem Archiv – Jeder Fall ein Triumph der Wahrheit
            </p>
          </div>

          {/* Evidence Board Grid - Detective Case Files */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solvedCases.map((caseFile, index) => {
              const isVisible = visibleCases.has(index);
              const slideDirection = index % 2 === 0 ? 'left' : 'right';
              
              return (
                <div 
                  key={index} 
                  ref={(el) => { caseRefs.current[index] = el; }}
                  data-index={index}
                  className={`group relative transition-all duration-1000 ease-out ${
                    isVisible 
                      ? 'translate-x-0 opacity-100' 
                      : slideDirection === 'left' 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 shadow-2xl hover:shadow-yellow-500/20 relative">
                    
                    {/* File Edge Effect */}
                    <div className={`absolute ${slideDirection === 'left' ? 'left-0' : 'right-0'} top-0 w-1 h-full bg-gradient-to-b from-yellow-400/50 via-yellow-300/30 to-transparent`} />
                    
                    {/* File Tab */}
                    <div className="bg-white/10 px-4 py-2 border-b border-white/20 relative">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-white font-bold tracking-widest">
                          📁 AKTE {caseFile.caseNumber}
                        </span>
                        <div className="text-xs font-mono text-gray-300 flex items-center gap-1">
                          🔍 {caseFile.classification}
                        </div>
                      </div>
                      
                      {/* File Status Indicator */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    </div>

                    {/* Case Content */}
                    <div className="p-6 space-y-4">
                      {/* Case Title */}
                      <div className="space-y-2">
                        <h3 className="text-xl font-serif font-bold text-white group-hover:tracking-wider transition-all duration-500">
                          {caseFile.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          <div className="inline-block bg-white/10 text-white px-2 py-1 rounded text-xs font-mono border border-white/20">
                            🏢 {caseFile.service}
                          </div>
                          <div className="inline-block bg-white/10 text-white px-2 py-1 rounded text-xs font-mono border border-white/20">
                            📅 {caseFile.year}
                          </div>
                        </div>
                      </div>

                      {/* Case Description */}
                      <p className="text-gray-300 font-mono text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                        {caseFile.description}
                      </p>

                      {/* Case Details */}
                      <div className="space-y-3 pt-4 border-t border-white/20">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                              📍 Ort:
                            </div>
                            <div className="text-xs font-mono text-white">{caseFile.location}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                              ⏱️ Dauer:
                            </div>
                            <div className="text-xs font-mono text-white">{caseFile.duration}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                              ✅ Ergebnis:
                            </div>
                            <div className="text-xs font-mono text-white">{caseFile.outcome}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-xs font-mono text-gray-400 flex items-center gap-1">
                              🔎 Beweise:
                            </div>
                            <div className="text-xs font-mono text-white">{caseFile.evidence}</div>
                          </div>
                        </div>
                      </div>

                      {/* Case Status Stamp */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-70 transition-all duration-500 transform rotate-12 group-hover:rotate-6">
                        <div className="bg-green-600 text-white px-2 py-1 rounded border-2 border-green-500 text-xs font-bold shadow-lg">
                          ✓ GELÖST
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Archive Footer */}
          <div 
            className="text-center mt-20 p-8 backdrop-blur-sm border rounded-sm max-w-4xl mx-auto" 
            style={{
              backgroundColor: 'rgba(254, 243, 198, 0.05)', 
              borderColor: 'rgba(194, 177, 109, 0.2)'
            }}
          >
            <h3 className="text-3xl font-serif font-bold mb-4" style={{color: '#FEF3C6'}}>
              IHR FALL KÖNNTE DER NÄCHSTE SEIN
            </h3>
            <p className="font-mono text-gray-300 mb-6">
              Jeder Fall ist einzigartig. Jede Wahrheit verdient es, gefunden zu werden.
            </p>
            <Link href="/#contact">
              <Button 
                size="lg"
                className="font-serif text-lg px-8 py-6 shadow-2xl transition-all duration-300 border"
                style={{
                  backgroundColor: '#C2B16D', 
                  color: '#1A1612', 
                  borderColor: '#C2B16D'
                }}
              >
                <Phone className="mr-3 h-5 w-5" />
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  );
}