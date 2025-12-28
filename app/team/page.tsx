'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MapPin, PenSquare, Phone, Radar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const detectiveMockImage = '/detective-silhouette.png';

const teamMembers = [
  {
    id: 'A-01',
    name: 'Klaus Hoffmann',
    codename: 'Fallleiter',
    role: 'Leitender Ermittler',
    base: 'Feldbüro Hamburg',
    division: 'field',
    specialties: ['Verhörtechnik', 'Taktische Planung'],
    status: 'Aktiv',
    image: detectiveMockImage,
    note: 'Legendär beim Aufbrechen geschlossener Aussagen. Misstraut zu linearen Zeitabläufen.'
  },
  {
    id: 'A-02',
    name: 'Dr. Sarah Müller',
    codename: 'Trace',
    role: 'Digitale Forensikerin',
    base: 'Analysezentrum Wiesbaden',
    division: 'digital',
    specialties: ['OSINT', 'Speicherforensik'],
    status: 'Bereit',
    image: detectiveMockImage,
    note: 'Sieht Muster in Störgeräuschen. Hinweis: Kaffee streng filtriert liefern.'
  },
  {
    id: 'A-03',
    name: 'Michael Weber',
    codename: 'Locator',
    role: 'Umfeldanalyst',
    base: 'Operationshub Berlin',
    division: 'field',
    specialties: ['Netzwerkrecherche', 'Personensuche'],
    status: 'Im Einsatz',
    image: detectiveMockImage,
    note: 'Typische Bewegungsmuster der Zielperson in 6 Min skizziert. Mag analoge Karten.'
  },
  {
    id: 'A-04',
    name: 'Isabella Rossi',
    codename: 'Mirage',
    role: 'Undercover Spezialistin',
    base: 'Mobile Einheit NRW',
    division: 'undercover',
    specialties: ['Cover-Aufbau', 'Human Intelligence'],
    status: 'Verdeckt',
    image: detectiveMockImage,
    note: 'Archiv führt fünf bestätigte Identitäten. Kein Kontakt nach 23:00 Uhr.'
  },
  {
    id: 'A-05',
    name: 'Jonas Richter',
    codename: 'Cipher',
    role: 'Threat Analyst',
    base: 'Signals Lab München',
    division: 'digital',
    specialties: ['Signalaufklärung', 'Pattern Mining'],
    status: 'Analyse',
    image: detectiveMockImage,
    note: 'Ersetzt Whiteboards durch Post-Quantum-Notizen. Immer mit Funkkopfhörer.'
  },
  {
    id: 'A-06',
    name: 'Lina Petrovic',
    codename: 'Ghostline',
    role: 'Tarnidentität-Expertin',
    base: 'Backchannel Prag',
    division: 'undercover',
    specialties: ['Legendenbau', 'Psychologie'],
    status: 'Standby',
    image: detectiveMockImage,
    note: 'Verhandelt nur über handschriftliche Notizen. Lacht selten, erinnert alles.'
  }
];

const unitFilters = [
  { label: 'Alle Einheiten', value: 'all' },
  { label: 'Feld', value: 'field' },
  { label: 'Digital', value: 'digital' },
  { label: 'Undercover', value: 'undercover' }
];


export default function TeamPage() {
  const [activeDivision, setActiveDivision] = useState('all');
  const [showAnnotations, setShowAnnotations] = useState(false);
  const [isTickerPaused, setIsTickerPaused] = useState(false);

  const filteredAgents = useMemo(() => {
    if (activeDivision === 'all') {
      return teamMembers;
    }
    return teamMembers.filter((member) => member.division === activeDivision);
  }, [activeDivision]);

  const codenameTickerItems = useMemo(() => {
    const items = teamMembers.map(
      (member) =>
        `${member.codename.toUpperCase()} · ${member.base.toUpperCase()} · STATUS ${member.status.toUpperCase()}`
    );
    return [...items, ...items];
  }, []);

  const pinAngles = useMemo(
    () => ['rotate-[1deg]', '-rotate-[0.75deg]', 'rotate-[2deg]', '-rotate-[1.5deg]', 'rotate-[0.5deg]'],
    []
  );

  return (
    <div>
      <Header dark />
      <div className="relative min-h-screen overflow-hidden bg-[#07090f] text-white">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(254,243,198,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(90,164,255,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-25 mix-blend-soft-light"
          style={{
            backgroundImage:
              'linear-gradient(0deg, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
            backgroundSize: '140px 140px'
          }}
        />
        <div className="absolute inset-x-0 top-44 h-px bg-gradient-to-r from-transparent via-[#c2b16d]/40 to-transparent" />
      </div>

      <main className="relative z-10 pt-20 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex w-max items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Zurück zur Startseite
            </Link>
          </div>

          <header className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="relative">
              <h1 className="mb-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Agentenübersicht</h1>
              <span className="typewriter absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.6em] text-[#c2b16d]/80 sm:block">
                Deutschlandweites Netzwerk aktiv …
              </span>
            </div>
            <p className="mt-8 max-w-2xl text-center text-base text-gray-300">
              Übersicht über unser deutschlandweites Ermittlernetzwerk. Zeigt alle für uns verfügbaren Ermittler -
              Datenansicht automatisch anonymisiert, Statusmeldungen werden in Echtzeit synchronisiert.
            </p>
          </header>

          <div className="relative mt-16 overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/80 shadow-[0_22px_55px_rgba(3,7,16,0.65)]">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07090f] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07090f] via-transparent to-transparent" />
            <div
              className="ticker-track flex gap-12 px-10 py-5"
              onMouseEnter={() => setIsTickerPaused(true)}
              onMouseLeave={() => setIsTickerPaused(false)}
              onFocus={() => setIsTickerPaused(true)}
              onBlur={() => setIsTickerPaused(false)}
              tabIndex={0}
              aria-label="Codename rotation ticker"
              style={{ animationPlayState: isTickerPaused ? 'paused' : undefined }}
            >
              {codenameTickerItems.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-[0.45em] text-[#fef3c6]/90"
                >
                  <span className="h-1 w-1 rounded-full bg-[#f25f5c] shadow-[0_0_12px_rgba(242,95,92,0.6)]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <section className="relative mt-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-12 top-10 h-24 w-px bg-[#f25f5c]/20" />
              <div className="absolute right-16 top-0 h-28 w-px bg-[#c2b16d]/25" />
              <div className="absolute left-20 bottom-16 h-px w-56 -rotate-[8deg] bg-[#f25f5c]/25" />
              <div className="absolute right-20 bottom-24 h-px w-48 rotate-[6deg] bg-[#56cbf9]/20" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {unitFilters.map((filter) => {
                  const isActive = activeDivision === filter.value || (filter.value === 'all' && activeDivision === 'all');
                  return (
                    <button
                      key={filter.value}
                      type="button"
                      onClick={() => setActiveDivision(filter.value)}
                      className={`relative overflow-hidden rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] transition ${
                        isActive
                          ? 'border-[#c2b16d] bg-[#c2b16d]/20 text-[#fef3c6] shadow-[0_0_25px_rgba(194,177,109,0.35)]'
                          : 'border-white/15 bg-transparent text-gray-400 hover:border-[#c2b16d]/40 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{filter.label}</span>
                      {isActive && (
                        <span className="absolute inset-0 bg-gradient-to-r from-[#c2b16d]/0 via-[#c2b16d]/20 to-[#c2b16d]/0" />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAnnotations((prev) => !prev)}
                  className={`relative flex items-center gap-2 rounded-sm border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.35em] transition ${
                    showAnnotations
                      ? 'border-[#fef3c6] bg-[#fef3c6]/15 text-[#fef3c6] shadow-[0_0_25px_rgba(254,243,198,0.25)]'
                      : 'border-white/20 bg-transparent text-gray-400 hover:border-[#fef3c6]/40 hover:text-white'
                  }`}
                  aria-pressed={showAnnotations}
                >
                  <PenSquare className="h-4 w-4" />
                  Notizmodus
                </button>
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.35em] text-gray-400">
                  <Radar className="h-4 w-4 text-[#56cbf9]" />
                  <span>{filteredAgents.length.toString().padStart(2, '0')} Agents sichtbar</span>
                </div>
              </div>
            </div>

            <div className="relative mt-12 rounded-3xl border border-[#2b211b] bg-[#1c1510]/90 p-6 sm:p-8 lg:p-10 shadow-[0_35px_100px_rgba(3,7,16,0.7)]">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(circle at 20% 15%, rgba(213,188,120,0.18), transparent 55%), radial-gradient(circle at 80% 80%, rgba(86,203,249,0.12), transparent 60%)'
                }}
              />
              <div className="pointer-events-none absolute -top-7 left-16 h-10 w-32 -rotate-[6deg] bg-[#d6c189]/25" />
              <div className="pointer-events-none absolute -top-9 right-24 h-12 w-40 rotate-[8deg] bg-[#f25f5c]/12" />
              <div className="pointer-events-none absolute -bottom-8 left-32 h-16 w-44 rotate-[-5deg] bg-[#56cbf9]/12" />

              <div className="relative z-10 grid gap-x-14 gap-y-16 pb-6 pt-4 sm:grid-cols-2 xl:grid-cols-3">
                {filteredAgents.map((member, index) => (
                  <article
                    key={member.id}
                    className={`group relative transition duration-500 ease-out ${
                      pinAngles[index % pinAngles.length]
                    } hover:-translate-y-1.5`}
                  >
                    <span className="absolute left-1/2 top-5 h-4 w-4 -translate-x-1/2 rounded-full bg-[#cf524f] shadow-[0_6px_12px_rgba(0,0,0,0.45)]" />
                    <span className="absolute left-1/2 top-8 h-2 w-12 -translate-x-1/2 rotate-[3deg] bg-[#281d14]/70 opacity-80" />
                    <div className="relative overflow-hidden rounded-md border border-black/10 bg-[#f4efe4]/95 p-5 text-[#1f1712] shadow-[0_24px_40px_rgba(18,12,8,0.38)] transition duration-500 group-hover:shadow-[0_32px_56px_rgba(18,12,8,0.48)]">
                      <div className="relative h-40 w-full overflow-hidden rounded-sm bg-black/10">
                        <Image
                          src={member.image}
                          alt={`Agent ${member.name}`}
                          fill
                          sizes="(max-width: 768px) 240px, 260px"
                          className="object-cover transition duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/45 to-transparent" />
                      </div>
                      <div className="mt-4 flex flex-col gap-3 text-left">
                        <h2 className="font-serif text-2xl leading-tight text-[#23190f]">{member.name}</h2>
                        <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#5c4a39]">
                          <span>{member.role}</span>
                          <span className="flex items-center gap-2 text-[#392d20]">
                            <MapPin className="h-3.5 w-3.5 text-[#b04d3e]" />
                            {member.base}
                          </span>
                        </div>
                        <div className="mt-3 rounded-sm border border-dashed border-[#d1b980] bg-[#f8f3e7] px-3 py-2">
                          <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-[#a88953]">Fokus</span>
                          <p className="mt-1 font-serif text-sm leading-snug text-[#2d2218]">
                            {member.specialties.join(' · ')}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.35em] text-[#3b3024]">
                        <span>ID {member.id}</span>
                      </div>
                    </div>

                    {showAnnotations && (
                      <div className="annotation-note absolute -right-6 bottom-6 w-36 rotate-[5deg] rounded-sm border border-[#e0cfa2]/70 bg-[#fff7d1]/95 p-3 text-left text-[#312719] shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
                        <span className="font-mono text-[9px] uppercase tracking-[0.5em] text-[#b48b49]">Notiz</span>
                        <p className="mt-2 text-[13px] leading-4 italic text-[#2d2417]">{member.note}</p>
                        <span className="pointer-events-none absolute -top-2 left-6 h-4 w-12 rotate-[-10deg] bg-[#d3c39d]/80" />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mt-24">
            <div className="absolute inset-x-0 -top-8 h-px bg-gradient-to-r from-transparent via-[#c2b16d]/40 to-transparent" />
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/80 p-6 sm:p-8 lg:p-12 shadow-[0_35px_100px_rgba(3,7,16,0.7)]">
              <div className="pointer-events-none absolute inset-0 opacity-40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,_rgba(194,177,109,0.15),transparent_55%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,_rgba(86,203,249,0.12),transparent_60%)]" />
              </div>
              <div className="relative z-10 text-center">
                <h2 className="mb-8 font-serif text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                  Deutschlands führende <br className="hidden sm:block" />
                  <span className="text-[#c2b16d]">Digital-Ermittler</span>
                </h2>
                <div className="mx-auto max-w-4xl space-y-6 text-left">
                  <p className="text-lg leading-relaxed text-gray-300">
                    Unser spezialisiertes <strong className="text-white">Digitale Detektei Team</strong> vereint langjährige Ermittlungserfahrung mit modernster Cyber-Forensik-Technologie. Als führende <strong className="text-white">Online-Detektive in Deutschland</strong> lösen wir komplexe digitale Fälle für Privatpersonen und Unternehmen in Hamburg, Berlin, München und bundesweit.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Von <strong className="text-white">OSINT-Ermittlungen</strong> und Social Media Investigations bis hin zu Blockchain-Forensik und Dark Web Recherchen – unsere zertifizierten <strong className="text-white">Cyber-Ermittler</strong> decken das gesamte Spektrum der digitalen Aufklärung ab. Durch kontinuierliche Weiterbildung in Datenforensik und modernsten Analyseverfahren garantieren wir höchste Standards in der digitalen Beweissicherung.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-300">
                    Vertrauen Sie auf unser eingespieltes Team aus IT-Forensikern, Cyber-Security-Experten und erfahrenen Privatdetektiven. Gemeinsam bieten wir diskrete und rechtssichere Lösungen für Identitätsdiebstahl, Online-Betrug, Cyberstalking und Corporate Investigations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mt-24">
            <div className="absolute inset-x-0 -top-8 h-px bg-gradient-to-r from-transparent via-[#c2b16d]/40 to-transparent" />
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/80 p-6 sm:p-8 lg:p-10 text-center shadow-[0_18px_60px_rgba(3,7,16,0.75)]">
              <div className="absolute inset-0 border border-white/5 pointer-events-none" style={{ mixBlendMode: 'overlay' }} />
              <h2 className="font-serif text-2xl font-semibold text-white sm:text-3xl md:text-4xl">Bereit für Ihren Fall?</h2>
              <p className="mt-4 text-base text-gray-300">
                Teilen Sie uns vertraulich Ihr Anliegen mit. Wir analysieren die Lage, definieren ein passendes Einsatzteam und
                liefern Ihnen binnen 24 Stunden eine belastbare Erstbewertung.
              </p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="mt-8 border border-[#c2b16d] bg-[#c2b16d] hover:bg-[#a89a5a] px-6 py-4 sm:px-8 sm:py-5 lg:px-10 lg:py-6 font-serif text-lg text-[#1a1612] hover:text-[#1a1612] shadow-[0_15px_45px_rgba(194,177,109,0.45)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      </div>
    </div>
  );
}
