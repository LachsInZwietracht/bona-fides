'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

const dubaiCase = {
  caseNumber: "DE-047",
  title: "Internationale Due Diligence",
  service: "Wirtschaftsermittlungen",
  description: "Ein Mandant beauftragte uns, potenzielle Geschäftspartner im deutschen Markt für sein Finanzdienstleistungsunternehmen zu identifizieren.",
  location: "Dubai / UK / Deutschland",
  duration: "Mehrere Monate",
  classification: "VERTRAULICH",
  outcome: "An Behörden übergeben",
  evidence: "Unternehmensrecherche, Rechtsanalyse, Behördenmeldung",
  year: "2024",
  detailedReport: {
    background: "Im Rahmen unserer standardmäßigen Sorgfaltsprüfung fielen uns Unstimmigkeiten in der Unternehmensstruktur auf, die eine vertiefte Analyse erforderten.",
    findings: [
      {
        title: "Auffällige Unternehmensstruktur",
        description: "Die UK-Limited des Mandanten teilte sich die Geschäftsadresse mit einer benachbarten Kanzlei – ein Umstand, der weitere Nachforschungen erforderte."
      },
      {
        title: "Internationale Verbindungen",
        description: "Unsere Recherchen offenbarten Geschäftsbeziehungen nach Dubai sowie ungewöhnliche Finanzströme zwischen mehreren Jurisdiktionen."
      },
      {
        title: "Gesamtbewertung",
        description: "Die Summe der Erkenntnisse – intransparente Strukturen, unklare Geschäftsbeziehungen und die Art der angebotenen Dienstleistung – erforderte eine rechtliche Einschätzung."
      }
    ],
    actions: [
      "Konsultation spezialisierter Rechtsanwälte",
      "Analyse der Unternehmensstrukturen und Verbindungen",
      "Sorgfältige Dokumentation aller Erkenntnisse",
      "Meldung an die zuständige deutsche Behörde"
    ],
    outcome: "Nach gründlicher Prüfung und rechtlicher Beratung haben wir die Erkenntnisse an die deutsche Zollbehörde weitergeleitet. Der Fall verdeutlicht den Wert professioneller Due Diligence im internationalen Geschäftsverkehr."
  }
};

export default function GeloesteFaellePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
              FALLSTUDIE
            </Badge>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              REFERENZFALL
            </h1>

            <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
              Ein Beispiel aus unserer Praxis
            </p>
          </div>

          {/* Featured Case: Dubai Investigation - Full Screen */}
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Title Header */}
            <div className="text-center space-y-6">
              <div className="inline-block bg-white/10 border border-white/20 rounded px-4 py-2">
                <span className="text-sm font-mono text-gray-300 tracking-widest">
                  AKTE {dubaiCase.caseNumber} • {dubaiCase.classification}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                {dubaiCase.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded text-base font-mono border border-white/20">
                  {dubaiCase.service}
                </div>
                <div className="inline-block bg-white/10 text-white px-4 py-2 rounded text-base font-mono border border-white/20">
                  {dubaiCase.year}
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: Background & Context */}
              <div className="space-y-8">
                {/* Background */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 space-y-4">
                  <h3 className="text-2xl font-serif font-semibold text-[#FEF3C6] border-b border-[#C2B16D]/30 pb-3">
                    Ausgangslage
                  </h3>
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    {dubaiCase.description}
                  </p>
                  <p className="text-gray-300 font-mono text-base leading-relaxed">
                    {dubaiCase.detailedReport.background}
                  </p>
                </div>

                {/* Case Details */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
                  <h3 className="text-xl font-serif font-semibold text-[#FEF3C6] mb-6">Falldetails</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">Ort</div>
                      <div className="text-base font-mono text-white">{dubaiCase.location}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">Dauer</div>
                      <div className="text-base font-mono text-white">{dubaiCase.duration}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">Status</div>
                      <div className="text-base font-mono text-white">{dubaiCase.outcome}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-mono text-gray-400 uppercase tracking-wider">Methoden</div>
                      <div className="text-base font-mono text-white">{dubaiCase.evidence}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Findings & Actions */}
              <div className="space-y-8">
                {/* Findings */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 space-y-6">
                  <h3 className="text-2xl font-serif font-semibold text-[#FEF3C6] border-b border-[#C2B16D]/30 pb-3">
                    Erkenntnisse
                  </h3>
                  <div className="space-y-4">
                    {dubaiCase.detailedReport.findings.map((finding: { title: string; description: string }, idx: number) => (
                      <div key={idx} className="bg-black/40 border border-white/20 rounded-sm p-5 space-y-2">
                        <h4 className="font-mono font-bold text-[#FEF3C6] text-sm uppercase tracking-wide">
                          {finding.title}
                        </h4>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed">
                          {finding.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Full Width: Actions & Outcome */}
            <div className="space-y-8">
              {/* Actions Taken */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8">
                <h3 className="text-2xl font-serif font-semibold text-[#FEF3C6] border-b border-[#C2B16D]/30 pb-3 mb-6">
                  Unser Vorgehen
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {dubaiCase.detailedReport.actions.map((action: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 bg-black/20 border border-white/10 rounded-sm p-4">
                      <span className="text-[#C2B16D] text-lg mt-0.5 flex-shrink-0">{idx + 1}.</span>
                      <span className="text-gray-300 font-mono text-sm leading-relaxed">{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-10 text-center">
                <div className="space-y-4">
                  <div className="inline-block bg-white/10 border border-white/20 rounded-full px-6 py-2">
                    <span className="text-sm font-mono text-gray-300 tracking-widest uppercase">
                      Abgeschlossen
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-[#FEF3C6]">Ergebnis</h3>
                  <p className="text-gray-200 font-mono text-lg leading-relaxed max-w-4xl mx-auto">
                    {dubaiCase.detailedReport.outcome}
                  </p>
                </div>
              </div>
            </div>
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