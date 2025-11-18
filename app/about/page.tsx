'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import {
  Shield,
  Target,
  FileSignature,
  Users,
  Compass,
  Award,
  Camera,
  Fingerprint,
  Newspaper,
  Disc3,
} from 'lucide-react';

const milestones = [
  {
    year: 'PHASE 1',
    title: 'Erstberatung & Fallaufnahme',
    description:
      'Vertrauliches Erstgespräch zur Risikoanalyse, Zielsetzung und Budgetrahmen. Gemeinsame Erarbeitung der Ermittlungsstrategie.',
    evidence: {
      title: 'Intake-Protokoll',
      summary: 'Strukturierter Fallbogen mit Hypothesen-Matrix, Compliance-Checkliste und Ressourcenplanung.',
      tag: 'INTAKE',
    },
  },
  {
    year: 'PHASE 2',
    title: 'Team-Assembly & Einsatzplanung',
    description:
      'Zusammenstellung eines spezialisierten Strike-Teams basierend auf Fallkomplexität und erforderlichen Kompetenzen.',
    evidence: {
      title: 'Team-Briefing',
      summary: 'Fallleiter-Assignment, Skillset-Mapping und verschlüsselte Kommunikationskanäle.',
      tag: 'TASKFORCE',
    },
  },
  {
    year: 'PHASE 3',
    title: 'Aktive Ermittlung & Observation',
    description:
      'Systematische Beweissammlung durch OSINT-Recherche, Feldarbeit und forensische Analyse mit laufender Dokumentation.',
    evidence: {
      title: 'Field Reports',
      summary: 'Echtzeitprotokollierung, GPS-gestützte Observation und kryptographisch gesicherte Beweiskette.',
      tag: 'OPERATION',
    },
  },
  {
    year: 'PHASE 4',
    title: 'Datenanalyse & Mustererkennung',
    description:
      'Strukturierte Auswertung gesammelter Informationen, Plausibilitätsprüfung und Vorbereitung rechtskonformer Beweisführung.',
    evidence: {
      title: 'Analyse-Dashboard',
      summary: 'Visualisierte Zusammenhänge, Timeline-Rekonstruktion und rechtliche Bewertung aller Befunde.',
      tag: 'INTEL',
    },
  },
  {
    year: 'PHASE 5',
    title: 'Abschlussbericht & Übergabe',
    description:
      'Vollständige Fallakte mit Executive Summary, Beweismitteln und Handlungsempfehlungen für weitere rechtliche Schritte.',
    evidence: {
      title: 'Case File Complete',
      summary: 'Strukturierte Fallakte, Audit-Trail und sichere Übergabe an Mandant oder Rechtsvertretung.',
      tag: 'DELIVERY',
    },
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

const combinationAngles = [320, 140, 25];
const spotlightTrailLength = 6;

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [trailPoints, setTrailPoints] = useState(() =>
    Array.from({ length: spotlightTrailLength }).map(() => ({ x: 50, y: 240 }))
  );
  const [dossierActive, setDossierActive] = useState(false);
  const [dossierStage, setDossierStage] = useState(0);
  const dossierTimeoutRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);

  const principleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visiblePrinciples, setVisiblePrinciples] = useState<Set<number>>(new Set());

  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);
  const activeMilestone = useMemo(() => milestones[activeMilestoneIndex], [activeMilestoneIndex]);

const [dialRotation, setDialRotation] = useState(0);
const [dialStage, setDialStage] = useState(0);
const [vaultUnlocked, setVaultUnlocked] = useState(false);
const dialTimeoutRef = useRef<ReturnType<typeof setTimeout>>();


  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setTrailPoints((prev) => {
        const next = [...prev.slice(1), { x, y }];
        return next;
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
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
      { threshold: 0.2, rootMargin: '120px' }
    );

    principleRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    if (dossierActive) {
      [1, 2, 3].forEach((stage, idx) => {
        timeouts[idx] = setTimeout(() => setDossierStage(stage), (idx + 1) * 180);
      });
    } else {
      timeouts.push(setTimeout(() => setDossierStage(0), 120));
    }
    dossierTimeoutRef.current = timeouts;
    return () => {
      dossierTimeoutRef.current.forEach((timeout) => clearTimeout(timeout));
    };
  }, [dossierActive]);

  useEffect(() => {
    if (dialStage >= combinationAngles.length && !vaultUnlocked) {
      const timeout = setTimeout(() => setVaultUnlocked(true), 600);
      dialTimeoutRef.current = timeout;
    }
    return () => {
      if (dialTimeoutRef.current) {
        clearTimeout(dialTimeoutRef.current);
      }
    };
  }, [dialStage, vaultUnlocked]);

  const dossierPages = useMemo(
    () => [
      {
        heading: 'Mandantenbriefing',
        content:
          'Hypothesen-Workshop, Gefährdungslage und operative Ziele werden innerhalb von 12 Stunden fixiert.',
        stamp: 'VERTRAULICH',
      },
      {
        heading: 'Einsatzteam',
        content: 'Strike-Team aus Fallleiterin, Analyst, Observations-Spezialist und Forensiker.',
        stamp: 'CLASSIFIED',
      },
      {
        heading: 'Methodik',
        content: 'OSINT-Layer, Observation, Supabase-Fallakte mit Zero-Knowledge-Protokollierung.',
        stamp: 'FREIGABE A',
      },
    ],
    []
  );

  const advanceDial = () => {
    if (vaultUnlocked || dialStage >= combinationAngles.length) return;
    setDialRotation(combinationAngles[dialStage]);
    const timeout = setTimeout(() => {
      setDialStage((prev) => prev + 1);
    }, 700);
    dialTimeoutRef.current = timeout;
  };


  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <Header dark />

      <div
        className="pointer-events-none absolute inset-0 opacity-15 mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="h-full w-full"
          style={{
            background: `repeating-linear-gradient(0deg, transparent 0px, transparent 15px, rgba(255,255,255,0.08) 15px, rgba(255,255,255,0.08) 18px, transparent 18px, transparent 35px)`,
          }}
        />
      </div>

      {[...trailPoints].reverse().map((point, idx) => (
        <div
          key={`trail-${idx}`}
          className="pointer-events-none absolute z-10"
          style={{
            top: point.y - 400,
            left: point.x - 400,
            width: 800,
            height: 800,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 35%, rgba(255,255,255,0) 70%)',
            filter: 'blur(1px)',
            opacity: 0.15 - idx * 0.02,
            transition: 'opacity 0.12s ease-out',
          }}
        />
      ))}

      <div
        className="pointer-events-none absolute z-20"
        style={{
          top: Math.max(180, scrollY * 0.45),
          left: '50%',
          transform: 'translateX(-50%)',
          width: 780,
          height: 780,
          background:
            'radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(1px)',
        }}
      />

      <div className="absolute -top-32 -left-32 h-96 w-96 bg-gradient-radial from-white/20 via-white/5 to-transparent blur-3xl" />
      <div className="absolute top-0 right-1/4 h-full w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent blur-sm" />
      <div className="absolute top-0 right-1/3 h-full w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent blur-sm" />
      <main className="relative z-20">
        <section className="container mx-auto px-8 pb-24 pt-28">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <h1 className="text-5xl font-serif font-bold tracking-tight text-white drop-shadow-xl md:text-6xl">
                Wer wir sind, wofür wir stehen
              </h1>
              <p className="text-lg font-mono uppercase tracking-[0.3em] text-gray-400">
                Detektivische Exzellenz seit über fünf Jahrzehnten
              </p>
              <p className="max-w-xl text-lg text-gray-300">
                Bona Fides ist mehr als eine Detektei – wir sind Vertraute unserer Mandanten. Seit 1965 lösen wir
                heikle Fälle für Familienunternehmen, Konzerne und Privatpersonen, die absolute Diskretion
                benötigen. Unsere Methoden verbinden klassische Observation, digitale Forensik und menschliche
                Intuition zu einer zuverlässigen Ermittlungsarchitektur.
              </p>
              <div className="flex flex-wrap items-center gap-6 text-gray-400">
                <div>
                  <div className="text-4xl font-serif text-white">2.500+</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">erfolgreich gelöste Fälle</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white">24/7</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">einsatzbereites Handlungsteam</div>
                </div>
                <div>
                  <div className="text-4xl font-serif text-white">98%</div>
                  <div className="font-mono text-xs uppercase tracking-wide text-gray-500">Mandanten-Zufriedenheit</div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDossierActive(true)}
              onMouseLeave={() => setDossierActive(false)}
              onFocus={() => setDossierActive(true)}
              onBlur={() => setDossierActive(false)}
            >
              <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-sm border border-white/10 bg-white/5 backdrop-blur" />
              <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black/60 p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="rounded-full border border-white/20 p-3">
                      <FileSignature className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-white">Mandantenbriefing</h2>
                  </div>
                  <p className="text-sm text-gray-400">
                    Jeder Auftrag beginnt mit einem vertraulichen Deep-Dive, in dem wir Hypothesen, Risiken und operative Ziele
                    definieren. Ein Fallprotokoll in Supabase hält alle Entscheidungspunkte revisionssicher fest.
                  </p>
                  <div className="relative mt-6 flex flex-col gap-4">
                    {dossierPages.map((page, index) => (
                      <div
                        key={page.heading}
                        className={`dossier-page ${
                          dossierStage >= index + 1 ? 'dossier-page--visible' : 'dossier-page--hidden'
                        }`}
                        style={{ zIndex: 40 - index }}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-lg text-white">{page.heading}</h3>
                          <span className="rounded-sm border border-white/20 px-2 py-0.5 text-xs font-mono tracking-[0.3em] text-gray-400">
                            {page.stamp}
                          </span>
                        </div>
                        <p className="mt-3 text-sm text-gray-400">{page.content}</p>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="relative z-40 w-full border text-black"
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
                Unsere Arbeit basiert auf gerichtsverwertbarer Beweisführung und respektvollem Umgang mit allen Beteiligten.
                Sorgfältige Recherche, mehrstufige Verifikation und dokumentierte Abläufe garantieren belastbare Ergebnisse.
              </p>
              <p className="text-gray-400">
                Moderne Tools unterstützen uns, ersetzen aber nie die Erfahrung unserer Ermittler. Wir kalibrieren jedes Mandat
                entlang eines Risiko-Rahmens, der Compliance, Reputation und Sicherheit gleichwertig berücksichtigt.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                const isVisible = visiblePrinciples.has(index);
                return (
                  <div
                    key={principle.title}
                    ref={(el) => {
                      principleRefs.current[index] = el;
                    }}
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
            <div className="space-y-12">
              {/* Title and Description */}
              <div className="space-y-6">
                <h2 className="text-3xl font-serif font-semibold text-white">Chronik der Wahrheitssuche</h2>
                <p className="text-gray-400">
                  Jeder Auftrag folgt einem strukturierten fünfstufigen Prozess – von der vertraulichen Erstberatung bis zur
                  abschließenden Beweisübergabe. Systematische Methodik und transparente Kommunikation garantieren optimale Ergebnisse.
                </p>
              </div>

              {/* Main Content: Left Column (Slider + Featured Card) | Right Column (Overview Cards) */}
              <div className="grid gap-8 lg:grid-cols-[0.55fr_0.45fr]">
                {/* Left Column: Slider + Featured Card */}
                <div className="space-y-8">
                  {/* Slider Control */}
                  <div className="rounded-sm border border-white/5 bg-black/40 p-4">
                    <label className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500" htmlFor="timeline-slider">
                      Prozess-Phasen durchlaufen
                    </label>
                    <input
                      id="timeline-slider"
                      type="range"
                      min={0}
                      max={milestones.length - 1}
                      value={activeMilestoneIndex}
                      onChange={(event) => setActiveMilestoneIndex(Number(event.target.value))}
                      className="timeline-slider mt-4 w-full"
                    />
                    <div className="mt-3 flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                      {milestones.map((milestone, index) => (
                        <span key={milestone.year} className={index === activeMilestoneIndex ? 'text-white' : undefined}>
                          {milestone.year}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Featured Card */}
                  <div className="relative overflow-hidden rounded-sm border border-white/10 bg-black/70 p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-mono text-xs uppercase tracking-[0.3em] text-gray-500">{activeMilestone.year}</div>
                        <h3 className="mt-2 font-serif text-2xl text-white">{activeMilestone.title}</h3>
                      </div>
                      <span className="rounded-sm border border-white/20 px-3 py-1 text-xs font-mono tracking-[0.3em] text-gray-400">
                        FALLAKTE
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-gray-400">{activeMilestone.description}</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-[0.4fr_0.6fr]">
                      <div className="rounded-sm border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-transparent p-4">
                        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-gray-400">
                          <span>{activeMilestone.evidence.tag}</span>
                          <Camera className="h-4 w-4" />
                        </div>
                        <div className="mt-4 h-24 rounded-sm border border-dashed border-white/20 bg-black/40">
                          <div className="flex h-full items-center justify-center text-[10px] font-mono uppercase tracking-[0.4em] text-gray-500">
                            Beweisfoto
                          </div>
                        </div>
                      </div>
                      <div className="rounded-sm border border-white/10 bg-black/60 p-4">
                        <div className="flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                          <Fingerprint className="h-4 w-4" />
                          <span>Beweisdokument</span>
                        </div>
                        <h4 className="mt-3 font-serif text-lg text-white">{activeMilestone.evidence.title}</h4>
                        <p className="mt-3 text-sm text-gray-400">{activeMilestone.evidence.summary}</p>
                        <div className="mt-4 flex items-center space-x-3 text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                          <Newspaper className="h-4 w-4" />
                          <span>Archiviertes Protokoll verfügbar</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Overview Cards */}
                <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`rounded-sm border border-white/10 bg-black/60 p-4 transition-all duration-500 cursor-pointer ${
                        index === activeMilestoneIndex ? 'ring-2 ring-[#C2B16D]/80 shadow-[0_20px_60px_-40px_rgba(194,177,109,0.8)]' : 'opacity-60 hover:opacity-80'
                      }`}
                      onClick={() => setActiveMilestoneIndex(index)}
                    >
                      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                        <span>{milestone.year}</span>
                        <span>{milestone.evidence.tag}</span>
                      </div>
                      <h4 className="mt-3 font-serif text-lg text-white">{milestone.title}</h4>
                      <p className="mt-2 text-xs text-gray-400">{milestone.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-8 py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-semibold text-white">Ihr Auftrag, unser Mandat</h2>
              <p className="text-gray-400">
                Wir begleiten Sie von der ersten Risikoanalyse bis zur abschließenden Beweisübergabe. Alle Maßnahmen werden
                dokumentiert, rechtlich geprüft und erst nach Ihrer Freigabe umgesetzt.
              </p>
              <p className="text-gray-400">
                Sprechen Sie mit unserem Fallannahme-Team über Ihr Anliegen. In einem unverbindlichen Erstgespräch entwickeln wir
                einen strukturierten Fahrplan und prüfen notwendige Ressourcen.
              </p>
              <div className="flex flex-col gap-6 rounded-sm border border-white/10 bg-black/60 p-6 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Disc3 className="h-6 w-6 text-white" />
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400">
                      Tresor-Authentifizierung
                    </span>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                    {vaultUnlocked ? 'FREIGESCHALTET' : `KOMBI ${dialStage + 1}/${combinationAngles.length}`}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="button"
                    onClick={advanceDial}
                    className="dial"
                    aria-label="Tresor kombinieren"
                    aria-live="polite"
                  >
                    <div className="dial-inner" style={{ transform: `rotate(${dialRotation}deg)` }}>
                      <div className="dial-notch" />
                    </div>
                  </button>
                </div>
                <div className="rounded-sm border border-white/10 bg-black/70 p-4 text-center text-xs font-mono uppercase tracking-[0.3em] text-gray-500">
                  {vaultUnlocked ? 'Tresor geöffnet – Zugriff auf sichere Kontaktaufnahme aktiviert.' : 'Drehen Sie den Wahlscheibenschutz, um den Zugriff freizuschalten.'}
                </div>
                <Button
                  className="border text-black disabled:cursor-not-allowed disabled:opacity-60"
                  style={{ backgroundColor: '#C2B16D', borderColor: '#C2B16D', width: 'fit-content' }}
                  asChild
                  disabled={!vaultUnlocked}
                >
                  <Link href="/#contact">Kontakt aufnehmen</Link>
                </Button>
              </div>
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

      <style jsx global>{`
        .dossier-page {
          position: relative;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 0.125rem;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.8));
          box-shadow: 0 20px 60px -35px rgba(0, 0, 0, 0.8);
          transform-origin: left center;
          transform: perspective(900px) rotateY(-90deg) translateX(-20px);
          opacity: 0;
        }
        .dossier-page::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.12), transparent 40%);
          mix-blend-mode: screen;
          opacity: 0.25;
        }
        .dossier-page--visible {
          animation: dossierFlip 0.6s forwards;
        }
        .dossier-page--hidden {
          animation: dossierClose 0.3s forwards;
        }
        @keyframes dossierFlip {
          0% {
            transform: perspective(900px) rotateY(-90deg) translateX(-20px);
            opacity: 0;
          }
          60% {
            transform: perspective(900px) rotateY(12deg) translateX(4px);
            opacity: 1;
          }
          100% {
            transform: perspective(900px) rotateY(0deg) translateX(0);
            opacity: 1;
          }
        }
        @keyframes dossierClose {
          0% {
            transform: perspective(900px) rotateY(0deg) translateX(0);
            opacity: 1;
          }
          100% {
            transform: perspective(900px) rotateY(-90deg) translateX(-20px);
            opacity: 0;
          }
        }
        .timeline-slider {
          -webkit-appearance: none;
          height: 4px;
          border-radius: 9999px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.1), rgba(194, 177, 109, 0.6));
          outline: none;
        }
        .timeline-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c2b16d;
          border: 2px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 0 0 6px rgba(194, 177, 109, 0.15);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .timeline-slider::-webkit-slider-thumb:hover {
          transform: scale(1.05);
        }
        .timeline-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #c2b16d;
          border: 2px solid rgba(255, 255, 255, 0.6);
          box-shadow: 0 0 0 6px rgba(194, 177, 109, 0.15);
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .timeline-slider::-moz-range-thumb:hover {
          transform: scale(1.05);
        }
        .dial {
          width: 140px;
          height: 140px;
          border-radius: 9999px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: radial-gradient(circle at center, rgba(194, 177, 109, 0.25), rgba(0, 0, 0, 0.8));
          display: grid;
          place-items: center;
          position: relative;
          overflow: hidden;
          transition: border 0.3s ease, box-shadow 0.3s ease;
        }
        .dial:before {
          content: '';
          position: absolute;
          inset: 12px;
          border-radius: 9999px;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          opacity: 0.8;
        }
        .dial-inner {
          width: 100px;
          height: 100px;
          border-radius: 9999px;
          border: 2px solid rgba(255, 255, 255, 0.25);
          display: grid;
          place-items: center;
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.45), rgba(0, 0, 0, 0.9));
          position: relative;
        }
        .dial-notch {
          width: 6px;
          height: 26px;
          border-radius: 3px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 12px 18px -12px rgba(0, 0, 0, 0.85);
        }
        .dial:active {
          border-color: rgba(194, 177, 109, 0.6);
          box-shadow: 0 0 30px -10px rgba(194, 177, 109, 0.8);
        }
      `}</style>
    </div>
  );
}
