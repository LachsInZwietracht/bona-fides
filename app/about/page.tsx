'use client';

import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Target, FileSignature, Users, Compass, Award } from 'lucide-react';

const milestones = [
  {
    year: '1965',
    title: 'Gründung der Detektei Bona Fides',
    description:
      'Helene und Jakob Radlow eröffnen in Hamburg eine spezialisierte Ermittlungsagentur für anspruchsvolle Wirtschaftsklientel.',
  },
  {
    year: '1988',
    title: 'Expansion in bundesweite Netzwerke',
    description:
      'Aufbau eines verdeckten Partnernetzes in allen Großstädten Deutschlands mit geprüften Ermittlerinnen und Ermittlern.',
  },
  {
    year: '2001',
    title: 'Digitale Forensik und Cyber-Ermittlungen',
    description:
      'Einrichtung eines internen Labors für IT-Forensik, Darknet-Analysen und datengetriebene Beweisführung.',
  },
  {
    year: '2018',
    title: 'Supabase-basierte Fallakten',
    description:
      'Sichere Mandantenplattform für verschlüsselte Fallkommunikation, Audit-Trails und Live-Berichte eingeführt.',
  },
];

const principles = [
  {
    icon: Shield,
    title: 'Integrität & Diskretion',
    body: 'Jeder Auftrag erhält einen dedizierten Fallleiter mit Vier-Augen-Prinzip und verschlüsselten Kommunikationskanälen.',
  },
  {
    icon: Target,
    title: 'Präzise Ermittlungsstrategien',
    body: 'Wir kombinieren klassische Observation mit digitalen Werkzeugen, um gerichtsfeste Ergebnisse zu liefern.',
  },
  {
    icon: Users,
    title: 'Interdisziplinäres Team',
    body: 'Juristen, Analytikerinnen und ehemalige Kriminalbeamte arbeiten in kleinen Strike-Teams zusammen.',
  },
  {
    icon: Compass,
    title: 'Internationale Reichweite',
    body: 'Europaweite Einsätze durch verifizierte Partnerbüros und gemeinsame Compliance-Standards.',
  },
];

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const principleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visiblePrinciples, setVisiblePrinciples] = useState<Set<number>>(new Set());

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisiblePrinciples((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '100px' }
    );

    principleRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header dark />

      {/* Film grain texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
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

      {/* Spotlight */}
      <div
        className="absolute pointer-events-none z-10"
        style={{
          top: Math.max(180, scrollY * 0.45),
          left: '50%',
          transform: 'translateX(-50%)',
          width: '780px',
          height: '780px',
          background:
            'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
          transition: 'all 0.1s linear',
        }}
      />

      {/* Lighting accents */}
      <div className="absolute -top-32 -left-32 h-96 w-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />

      <main className="relative z-20">
        <section className="container mx-auto px-8 pb-24 pt-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <Badge className="border" style={{ backgroundColor: '#C2B16D', color: '#1A1612', borderColor: '#C2B16D' }}>
                EINBLICKE IN UNSERE ARBEIT
              </Badge>
              <h1 className="text-5xl font-serif font-bold tracking-tight text-white drop-shadow-xl md:text-6xl">
                Wer wir sind, wofür wir stehen
              </h1>
              <p className="text-lg font-mono uppercase tracking-[0.3em] text-gray-400">
                Detektivische Exzellenz seit über fünf Jahrzehnten
              </p>
              <p className="max-w-xl text-lg text-gray-300">
                Bona Fides ist mehr als eine Detektei – wir sind Vertraute unserer Mandanten. Seit 1965
                lösen wir heikle Fälle für Familienunternehmen, Konzerne und Privatpersonen, die absolute
                Diskretion benötigen. Unsere Methoden verbinden klassische Observation, digitale Forensik
                und menschliche Intuition zu einer zuverlässigen Ermittlungsarchitektur.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div>
                  <div className="text-4xl font-serif text-white">2.500+</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">
                    erfolgreich gelöste Fälle
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white">24/7</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">
                    einsatzbereites Handlungsteam
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white">98%</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">
                    Mandanten-Zufriedenheit
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-sm border border-white/10 bg-white/5 backdrop-blur" />
              <div className="relative rounded-sm border border-white/10 bg-black/60 p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full border border-white/20 p-3">
                      <FileSignature className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-white">Mandantenbriefing</h2>
                  </div>
                  <p className="text-sm text-gray-400">
                    Jeder Auftrag beginnt mit einem vertraulichen Deep-Dive, in dem wir Hypothesen, Risiken
                    und operative Ziele definieren. Ein Fallprotokoll in Supabase hält alle Entscheidungspunkte
                    revisionssicher fest.
                  </p>
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-start space-x-3">
                      <Shield className="mt-1 h-4 w-4 text-white" />
                      <span>Verschlüsselte Übergaben per Zero-Knowledge-Kanal.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Target className="mt-1 h-4 w-4 text-white" />
                      <span>Quantifizierte Ermittlungsziele mit klaren Meilensteinen.</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="mt-1 h-4 w-4 text-white" />
                      <span>Qualitätskontrolle durch ein unabhängiges Review-Board.</span>
                    </div>
                  </div>
                  <Button
                    className="w-full border text-black"
                    style={{ backgroundColor: '#C2B16D', borderColor: '#C2B16D' }}
                  >
                    Vertrauliche Erstberatung sichern
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold text-white">Unsere Ermittlungsphilosophie</h2>
              <p className="text-gray-400">
                Unsere Arbeit basiert auf gerichtsverwertbarer Beweisführung und respektvollem Umgang mit
                allen Beteiligten. Sorgfältige Recherche, mehrstufige Verifikation und dokumentierte Abläufe
                garantieren belastbare Ergebnisse.
              </p>
              <p className="text-gray-400">
                Moderne Tools unterstützen uns, ersetzen aber nie die Erfahrung unserer Ermittler. Wir
                kalibrieren jedes Mandat entlang eines Risiko-Rahmens, der Compliance, Reputation und
                Sicherheit gleichwertig berücksichtigt.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const isVisible = visiblePrinciples.has(index);
                return (
                  <div
                    key={principle.title}
                    ref={(el) => (principleRefs.current[index] = el)}
                    data-index={index}
                    className={`rounded-sm border border-white/10 bg-black/60 p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                  >
                    <Icon className="mb-4 h-8 w-8 text-white" />
                    <h3 className="font-serif text-xl font-semibold text-white">{principle.title}</h3>
                    <p className="text-sm text-gray-400">{principle.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/5 bg-white/5 py-24">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="container relative mx-auto px-8">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-serif font-semibold text-white">Chronik der Wahrheitssuche</h2>
                <p className="mt-4 text-gray-400">
                  Jede Dekade brachte neue Herausforderungen: Industriespionage, Finanzbetrug, Cybercrime.
                  Wir reagierten mit spezialisierten Taskforces und kontinuierlicher Weiterbildung.
                </p>
              </div>
              <div className="space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.year} className="relative pl-10">
                    <div className="absolute left-0 top-1 h-full w-px bg-white/10" />
                    <div className="absolute -left-[11px] top-1 h-6 w-6 rounded-full border border-white/40 bg-black" />
                    <div className="rounded-sm border border-white/10 bg-black/60 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
                      <div className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">
                        {milestone.year}
                      </div>
                      <h3 className="mt-2 font-serif text-2xl text-white">{milestone.title}</h3>
                      <p className="mt-3 text-sm text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold text-white">Ihr Auftrag, unser Mandat</h2>
              <p className="text-gray-400">
                Wir begleiten Sie von der ersten Risikoanalyse bis zur abschließenden Beweisübergabe. Alle
                Maßnahmen werden dokumentiert, rechtlich geprüft und erst nach Ihrer Freigabe umgesetzt.
              </p>
              <p className="text-gray-400">
                Sprechen Sie mit unserem Fallannahme-Team über Ihr Anliegen. In einem unverbindlichen
                Erstgespräch entwickeln wir einen strukturierten Fahrplan und prüfen notwendige Ressourcen.
              </p>
              <Button
                className="border text-black"
                style={{ backgroundColor: '#C2B16D', borderColor: '#C2B16D', width: 'fit-content' }}
                asChild
              >
                <a href="#contact">Kontakt aufnehmen</a>
              </Button>
            </div>
            <div className="rounded-sm border border-white/10 bg-black/60 p-8 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)]">
              <div className="space-y-5 text-sm text-gray-400">
                <div className="flex items-start space-x-3">
                  <Shield className="mt-1 h-5 w-5 text-white" />
                  <span>ISO 27001-konforme Datenhaltung in unserem Supabase-Mandanten.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="mt-1 h-5 w-5 text-white" />
                  <span>Taskforces mit klaren Zugriffsrechten und signierten Einsatzberichten.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="mt-1 h-5 w-5 text-white" />
                  <span>Evidence Kits mit Kettennachweis, bereit für anwaltliche Übergabe.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="mt-1 h-5 w-5 text-white" />
                  <span>Jährliche Rezertifizierung durch den Bundesverband Deutscher Detektive.</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
