import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  Clock,
  Gavel,
  Radar,
  ShieldCheck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import type { RedesignVariant } from "@/lib/landing-redesigns"

const heroProof = [
  { icon: Clock, label: siteConfig.responsePromise, code: "24H" },
  { icon: ShieldCheck, label: "NDA vor dem Erstgespräch", code: "NDA" },
  { icon: Gavel, label: "Gerichtsverwertbar dokumentiert", code: "§" },
  { icon: Users, label: "Bundesweites Ermittlernetz", code: "DE" },
]

function HeroCopy({ contactHref }: { contactHref: string }) {
  return (
    <div className="redesign-hero-copy">
      <p className="eyebrow text-brass">Wirtschaftsdetektei · bundesweit</p>
      <h1 className="font-serif font-bold text-white">
        <span className="redesign-hero-headline block">
          <span className="redesign-hero-first-line">Verdacht ist keine</span>{" "}
          <br />
          Entscheidungs<wbr />grundlage.
        </span>
        <span className="redesign-hero-subline block font-normal text-brass">
          Wirtschaftsdetektei für Unternehmen
        </span>
      </h1>
      <p className="redesign-hero-intro text-gray-300 leading-relaxed">
        Wir liefern belegte Fakten – zum Kündigen, Klagen, Regulieren oder Entwarnung geben.
      </p>
      <div className="redesign-hero-actions flex flex-col sm:flex-row gap-3">
        <Button
          asChild
          size="lg"
          className="min-h-[56px] bg-brass px-7 text-base font-semibold text-black shadow-2xl transition-all duration-300 hover:bg-brass-light hover:shadow-[0_20px_40px_-15px_rgba(194,177,109,0.5)]"
        >
          <Link href={contactHref}>
            Fall vertraulich schildern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="min-h-[56px] border-white/25 bg-black/10 px-7 text-base text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
        >
          <Link href="/leistungen">Leistungen ansehen</Link>
        </Button>
      </div>
    </div>
  )
}

function AkteHero({ contactHref }: { contactHref: string }) {
  return (
    <section className="redesign-hero redesign-hero--akte relative z-10 overflow-hidden">
      <div className="akte-rule" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="akte-hero-grid grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <HeroCopy contactHref={contactHref} />

          <aside className="akte-dossier" aria-label="Leistungsversprechen">
            <div className="akte-dossier-tab">
              <span>Mandatsakte</span>
              <span>BF–24/7</span>
            </div>
            <div className="akte-dossier-body">
              <div className="akte-stamp" aria-hidden="true">
                Vertraulich
              </div>
              <div className="akte-dossier-heading">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gray-500">
                  Prüfvermerke
                </span>
                <span className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[10px] text-brass">04/04</span>
              </div>
              <ul className="mt-8 space-y-0">
                {heroProof.map((item, index) => (
                  <li key={item.label} className="akte-proof-row">
                    <span className="akte-proof-index">{String(index + 1).padStart(2, "0")}</span>
                    <item.icon className="h-4 w-4 text-brass" aria-hidden="true" />
                    <span>{item.label}</span>
                    <span className="akte-proof-check">✓</span>
                  </li>
                ))}
              </ul>
              <div className="akte-signoff">
                <span>BONA FIDES</span>
                <span>Fakten vor Entscheidung</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <a className="akte-scroll-cue" href="#fuer-wen" aria-label="Zum nächsten Abschnitt">
        <span>Mandat prüfen</span>
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}

function ObservatoriumHero({ contactHref }: { contactHref: string }) {
  return (
    <section className="redesign-hero redesign-hero--observatorium relative z-10 overflow-hidden">
      <div className="observatorium-grid" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="observatorium-hero-grid grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="observatorium-kicker mb-8 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brass opacity-40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brass" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gray-400">
                Wirtschaftsdetektei · bundesweit
              </span>
            </div>
            <HeroCopy contactHref={contactHref} />
          </div>

          <aside className="observatorium-console" aria-label="Leistungsversprechen">
            <div className="observatorium-console-head">
              <div className="flex items-center gap-2">
                <Radar className="h-4 w-4 text-brass" aria-hidden="true" />
                <span>Ermittlungsbereitschaft</span>
              </div>
              <span className="text-brass">Aktiv</span>
            </div>
            <div className="observatorium-radar" aria-hidden="true">
              <div className="observatorium-radar-sweep" />
              <span className="observatorium-radar-dot observatorium-radar-dot--one" />
              <span className="observatorium-radar-dot observatorium-radar-dot--two" />
              <div className="observatorium-radar-center">
                <strong>DE</strong>
                <span>bundesweit</span>
              </div>
            </div>
            <ul className="observatorium-proof-grid">
              {heroProof.map((item) => (
                <li key={item.label}>
                  <span className="observatorium-proof-code">{item.code}</span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
      <div className="observatorium-statusbar" aria-hidden="true">
        <span>Intelligence</span>
        <span>Forensik</span>
        <span>Observation</span>
        <span>Due Diligence</span>
      </div>
    </section>
  )
}

function SignaturHero({ contactHref }: { contactHref: string }) {
  return (
    <section className="redesign-hero redesign-hero--signatur relative z-10 overflow-hidden">
      <Image
        src="/hero-evidence-desk-v1.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div className="signatur-image-wash absolute inset-0" aria-hidden="true" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <HeroCopy contactHref={contactHref} />
      </div>
      <div className="signatur-proof-wrap relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="signatur-proof-grid">
            {heroProof.map((item, index) => (
              <li key={item.label}>
                <span className="signatur-proof-number">0{index + 1}</span>
                <item.icon className="h-4 w-4 text-brass" aria-hidden="true" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function LandingRedesignHero({
  variant,
  contactHref,
}: {
  variant: RedesignVariant
  contactHref: string
}) {
  if (variant === "akte") return <AkteHero contactHref={contactHref} />
  if (variant === "observatorium") return <ObservatoriumHero contactHref={contactHref} />
  return <SignaturHero contactHref={contactHref} />
}
