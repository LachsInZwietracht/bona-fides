import Image from "next/image"
import { DossierHero } from "@/components/heroes/hero-dossier"
import { ObservationHero } from "@/components/heroes/hero-observation"
import { RedaktionHero } from "@/components/heroes/hero-redaktion"
import { heroDesigns, type HeroDesignVariant } from "@/lib/hero-designs"
import {
  CtaPair,
  Headline,
  heroEyebrow,
  heroLead,
  heroProof,
} from "@/components/hero-parts"

/* -------------------------------------------------- 01 · Das Indiz */

function IndizHero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-black">
      <Image
        src={heroDesigns.indiz.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[80%_center] lg:object-[78%_center]"
      />
      {/* Textzone freistellen: harter Verlauf von links, plus Absenkung nach unten */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(100deg,#000_0%,rgba(0,0,0,0.94)_34%,rgba(0,0,0,0.72)_52%,rgba(0,0,0,0.15)_78%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black via-black/70 to-transparent"
      />

      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-7">
          <p className="eyebrow text-brass">{heroEyebrow}</p>
          <Headline />
          <p className="max-w-xl text-lg leading-relaxed text-gray-300">{heroLead}</p>
          <CtaPair />
        </div>
      </div>

      {/* Beweisleiste als durchgehende Linie am unteren Rand */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 divide-white/10 sm:divide-x lg:grid-cols-4">
            {heroProof.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2.5 px-0 py-4 text-sm text-gray-400 sm:px-6 sm:first:pl-0"
              >
                <item.icon className="h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                <span className="leading-tight">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------ 02 · Die Evidenz */

function EvidenzHero() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_70%_40%,rgba(194,177,109,0.10),transparent_65%)]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.68fr] lg:gap-16">
          <div className="space-y-7">
            <p className="eyebrow text-brass">{heroEyebrow}</p>
            <Headline />
            <p className="max-w-xl text-lg leading-relaxed text-gray-300">{heroLead}</p>
            <CtaPair />

            {/* Nummerierte Prüfvermerke statt loser Icon-Reihe */}
            <ul className="border-t border-white/10 pt-2">
              {heroProof.map((item, index) => (
                <li
                  key={item.label}
                  className="flex items-baseline gap-4 border-b border-white/[0.07] py-3 text-sm text-gray-400"
                >
                  <span className="font-mono text-[10px] tracking-[0.2em] text-brass/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-brass" aria-hidden="true">
                    ✓
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tafelbild mit Messing-Haarlinie */}
          <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden bg-black ring-1 ring-white/12">
              <Image
                src={heroDesigns.evidenz.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-[0.24em] text-gray-400">
                <span>Rauschen</span>
                <span className="mx-3 h-px flex-1 bg-white/15" />
                <span className="text-brass">Signal</span>
              </figcaption>
            </div>
            <span
              aria-hidden="true"
              className="absolute -bottom-px -right-px h-12 w-12 border-b border-r border-brass/60"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------- 03 · Das Geflecht */

function GeflechtHero() {
  return (
    <section className="relative isolate flex min-h-[92vh] flex-col overflow-hidden bg-black">
      <Image
        src={heroDesigns.geflecht.image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] lg:object-center"
      />
      {/* Textspalte links absenken, Fuge im rechten Drittel frei stehen lassen */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(95deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.82)_42%,rgba(0,0,0,0.35)_62%,rgba(0,0,0,0.2)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/55 to-transparent"
      />

      {/* Meta-Leiste oben */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 font-mono text-[10px] uppercase tracking-[0.26em] text-gray-400 sm:px-6 lg:px-8">
          <span>Bona Fides · Wirtschaftsdetektei</span>
          <span className="hidden text-brass sm:inline">Fakten vor Entscheidung</span>
        </div>
      </div>

      {/* Leerraum oben, Aussage am unteren Rand verankert */}
      <div className="relative z-10 min-h-[18vh] flex-1" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        {/* Spaltenbreite endet vor der Fuge im Bild */}
        <div className="max-w-[46rem] space-y-7">
          <p className="eyebrow text-brass">{heroEyebrow}</p>
          <Headline size="large" />
          <p className="max-w-xl text-lg leading-relaxed text-gray-300">{heroLead}</p>
          <CtaPair />
        </div>
      </div>

      {/* Kennzahlenband */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 gap-x-6 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/10">
            {heroProof.map((item) => (
              <li key={item.label} className="flex items-center gap-3 py-4 lg:px-6 lg:first:pl-0">
                <span className="font-mono text-xs tracking-[0.14em] text-brass">{item.code}</span>
                <span className="text-sm leading-tight text-gray-400">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------- Export */

export function HeroDesign({ variant }: { variant: HeroDesignVariant }) {
  if (variant === "indiz") return <IndizHero />
  if (variant === "evidenz") return <EvidenzHero />
  if (variant === "geflecht") return <GeflechtHero />
  if (variant === "redaktion") return <RedaktionHero />
  if (variant === "observation") return <ObservationHero />
  return <DossierHero />
}
