'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/header';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Compass, MapPin, Phone, Radar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const detectiveMockImage =
  'https://sdmntprnortheu.oaiusercontent.com/files/00000000-e0b0-61f4-a7d9-3353bc4be91f/raw?se=2025-09-27T00%3A13%3A37Z&sp=r&sv=2024-08-04&sr=b&scid=3d6b4ee3-adb1-547e-8490-1b1da469143b&skoid=b32d65cd-c8f1-46fb-90df-c208671889d4&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-26T17%3A21%3A27Z&ske=2025-09-27T17%3A21%3A27Z&sks=b&skv=2024-08-04&sig=2vDGt%2BWMMM0at8vVC4OOi1/Sjkchlr%2BKQjb4qeUZcIY%3D';

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
    image: detectiveMockImage
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
    image: detectiveMockImage
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
    image: detectiveMockImage
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
    image: detectiveMockImage
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
    image: detectiveMockImage
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
    image: detectiveMockImage
  }
];

const unitFilters = [
  { label: 'Alle Einheiten', value: 'all' },
  { label: 'Feld', value: 'field' },
  { label: 'Digital', value: 'digital' },
  { label: 'Undercover', value: 'undercover' }
];

const tickerItems = [
  '312 offene Leads · Lagezentrum Berlin',
  '8 aktive Observationsteams',
  'Reaktionszeit aktuell 2h 14m',
  'ISO 27001 geprüfte Infrastruktur',
  '24/7 Einsatzbereitschaft',
  'Vertrauensstufe "Aurora" bestätigt'
];

const briefings = [
  {
    title: 'Field Kits',
    detail: 'Drohnenaufklärung · Spurensets · mobiles Analyse-Interface',
    accent: '#fef3c6'
  },
  {
    title: 'Safe Comms',
    detail: 'Quantenresistentes Messaging · biometrische Zugriffspfade',
    accent: '#56cbf9'
  },
  {
    title: 'Case Memory',
    detail: 'Lageboard mit Versionskontrolle und Audit Trail',
    accent: '#f25f5c'
  }
];

export default function TeamPage() {
  const [activeDivision, setActiveDivision] = useState('all');

  const filteredAgents = useMemo(() => {
    if (activeDivision === 'all') {
      return teamMembers;
    }
    return teamMembers.filter((member) => member.division === activeDivision);
  }, [activeDivision]);

  const doubledTicker = useMemo(() => [...tickerItems, ...tickerItems], []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#07090f] text-white">
      <Header dark />

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
        <div className="container mx-auto px-6 md:px-10 lg:px-16">
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
            <Badge
              className="mb-6 border border-[#c2b16d]/30 bg-[#c2b16d]/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.5em] text-[#fef3c6]"
            >
              Operation Bona Fides · Einsatzkader
            </Badge>
            <div className="relative">
              <h1 className="mb-4 font-serif text-5xl font-semibold tracking-tight md:text-6xl">Agentenübersicht</h1>
              <span className="typewriter absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.6em] text-[#c2b16d]/80 sm:block">
                Netzwerk wird initialisiert …
              </span>
            </div>
            <p className="mt-8 max-w-2xl text-center text-base text-gray-300">
              Kurierter Zugriff auf aktive Ermittlerkreise. Datenansicht automatisch anonymisiert, Statusmeldungen werden in
              Echtzeit synchronisiert.
            </p>
          </header>

          <div className="relative mt-16 overflow-hidden rounded-sm border border-white/10 bg-white/5">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#07090f] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#07090f] via-transparent to-transparent" />
            <div className="ticker-track flex gap-12 px-8 py-4">
              {doubledTicker.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="ticker-item inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-gray-300"
                >
                  <span className="h-1 w-1 rounded-full bg-[#f25f5c]" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <section className="relative mt-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-10 top-10 h-24 w-px bg-[#f25f5c]/30" />
              <div className="absolute right-16 top-0 h-24 w-px bg-[#c2b16d]/25" />
              <div className="absolute -left-10 bottom-24 h-px w-40 rotate-[12deg] bg-[#f25f5c]/25" />
              <div className="absolute bottom-20 right-20 h-px w-48 rotate-[-6deg] bg-[#56cbf9]/20" />
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
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.35em] text-gray-400">
                <Radar className="h-4 w-4 text-[#56cbf9]" />
                <span>{filteredAgents.length.toString().padStart(2, '0')} Agents sichtbar</span>
              </div>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
              {filteredAgents.map((member) => (
                <article
                  key={member.id}
                  className="group relative overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/80 p-6 shadow-[0_24px_50px_rgba(3,7,16,0.6)] backdrop-blur"
                >
                  <div className="pointer-events-none absolute inset-0 border border-white/5" style={{ mixBlendMode: 'overlay' }} />
                  <div className="absolute -top-6 left-6 h-8 w-24 rotate-[-6deg] bg-[#d6c189]/45" />
                  <div className="absolute -top-4 right-8 h-6 w-16 rotate-[12deg] bg-[#56cbf9]/25" />
                  <div className="absolute -right-6 bottom-12 h-20 w-20 rounded-full bg-[#f25f5c]/10 blur-3xl" />

                  <div className="relative flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="relative h-24 w-24 -rotate-2 overflow-hidden rounded-sm border border-black/30 bg-[#1c1711] shadow-[12px_18px_28px_rgba(0,0,0,0.45)] transition-transform duration-700 group-hover:-rotate-1">
                        <Image
                          src={member.image}
                          alt={`Agent ${member.name}`}
                          fill
                          sizes="96px"
                          className="object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 grayscale-[25%]"
                        />
                        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <Badge className="border border-[#f25f5c]/40 bg-[#f25f5c]/20 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[#ffb3a7]">
                            {member.codename}
                          </Badge>
                          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gray-400">{member.status}</span>
                        </div>
                        <h2 className="font-serif text-2xl font-semibold text-white">{member.name}</h2>
                        <p className="font-mono text-xs uppercase tracking-[0.35em] text-[#c2b16d]">{member.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 border-y border-white/10 py-4">
                      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.35em] text-gray-300">
                        <MapPin className="h-4 w-4 text-[#56cbf9]" />
                        {member.base}
                      </div>
                      {member.specialties.map((item) => (
                        <span
                          key={item}
                          className="rounded-sm border border-[#c2b16d]/40 bg-[#c2b16d]/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.35em] text-[#fef3c6]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.35em] text-gray-400">
                      <span>ID {member.id}</span>
                      <span className="flex items-center gap-2 text-[#56cbf9]">
                        <Compass className="h-4 w-4" />
                        {member.division}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="relative mt-24">
            <div className="absolute inset-0 border border-dashed border-white/10" />
            <div className="relative grid gap-10 lg:grid-cols-3">
              {briefings.map((item) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/75 p-6 shadow-[0_18px_45px_rgba(3,7,16,0.5)]"
                >
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `radial-gradient(circle at top, ${item.accent}33, transparent 60%)`
                    }}
                  />
                  <div className="relative flex h-full flex-col gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.45em] text-gray-400">Spezialausstattung</span>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.detail}</p>
                    <div className="mt-auto flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.35em] text-gray-400">
                      <span className="h-1 w-1 rounded-full bg-[#f25f5c]" />
                      Einsatzbereit
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mt-24">
            <div className="absolute inset-x-0 -top-8 h-px bg-gradient-to-r from-transparent via-[#c2b16d]/40 to-transparent" />
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-sm border border-white/10 bg-[#0d1018]/80 p-10 text-center shadow-[0_18px_60px_rgba(3,7,16,0.75)]">
              <div className="absolute inset-0 border border-white/5" style={{ mixBlendMode: 'overlay' }} />
              <Badge className="mx-auto mb-6 border border-[#56cbf9]/40 bg-[#56cbf9]/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.4em] text-[#cfe9ff]">
                Fallannahme · Direktkanal
              </Badge>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">Bereit für Ihren Fall?</h2>
              <p className="mt-4 text-base text-gray-300">
                Teilen Sie uns vertraulich Ihr Anliegen mit. Wir analysieren die Lage, definieren ein passendes Einsatzteam und
                liefern Ihnen binnen 24 Stunden eine belastbare Erstbewertung.
              </p>
              <Link href="/">
                <Button
                  size="lg"
                  className="mt-8 border border-[#c2b16d] bg-[#c2b16d] px-10 py-6 font-serif text-lg text-[#1a1612] shadow-[0_15px_45px_rgba(194,177,109,0.45)] transition-all duration-300 hover:scale-[1.02]"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
