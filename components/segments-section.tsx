"use client"

import { useState } from "react"
import {
  ArrowRight,
  Building2,
  FileCheck2,
  Handshake,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react"

const segments = [
  {
    icon: Building2,
    title: "Geschäftsführung & Vorstand",
    problem: "Der Verdacht steht im Raum, aber die Faktenlage trägt keine Entscheidung.",
    href: "/leistungen/wirtschaftsdetektei",
    linkLabel: "Wirtschaftsermittlungen",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Revision",
    problem: "Eine Meldung muss unabhängig geprüft werden – ohne interne Befangenheit.",
    href: "/leistungen/interne-ermittlungen",
    linkLabel: "Interne Ermittlungen",
  },
  {
    icon: Users,
    title: "Personalleitung & HR",
    problem: "Krankmeldungen, Nebentätigkeiten und Konkurrenztätigkeit, die nicht plausibel sind.",
    href: "/leistungen/lohnfortzahlungsbetrug",
    linkLabel: "Lohnfortzahlungsbetrug",
  },
  {
    icon: FileCheck2,
    title: "Versicherer & Schadenabteilungen",
    problem: "Ein Schadenfall, der zu glatt wirkt, um vor der Regulierung ungeprüft zu bleiben.",
    href: "/leistungen/versicherungsbetrug",
    linkLabel: "Schadenermittlung",
  },
  {
    icon: Scale,
    title: "Kanzleien & Rechtsabteilungen",
    problem: "Der Titel steht – nur das Vermögen des Schuldners ist nicht auffindbar.",
    href: "/leistungen/asset-tracing",
    linkLabel: "Asset Tracing",
  },
  {
    icon: Handshake,
    title: "Einkauf, M&A & Family Offices",
    problem: "Hinter dem Geschäftspartner steht jemand, den das Handelsregister nicht zeigt.",
    href: "/leistungen/due-diligence",
    linkLabel: "Due Diligence",
  },
]

/** Wie viele Kacheln auf dem Telefon sofort sichtbar sind. */
const MOBILE_PREVIEW = 3

/**
 * Auf dem Telefon kostete dieser Abschnitt 2,7 Bildschirme, obwohl er inhaltlich
 * nah am folgenden Leistungsabschnitt liegt. Die hinteren Kacheln bleiben daher
 * bis zum Antippen ausgeblendet – sie stehen aber vollständig im Markup, damit
 * die interne Verlinkung erhalten bleibt. Ab sm sind ohnehin alle sechs zu sehen.
 */
export function SegmentsSection() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section
      id="fuer-wen"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="segments-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Für wen wir arbeiten</p>
          <h2
            id="segments-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Sechs Ausgangslagen, in denen Unternehmen uns beauftragen
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Finden Sie Ihre Situation – Sie landen direkt bei der passenden Leistung samt Ablauf,
            Dauer und Kostenrahmen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {segments.map((segment, index) => (
            <a
              key={segment.title}
              href={segment.href}
              className={`group flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-white/[0.06] sm:flex ${
                index >= MOBILE_PREVIEW && !showAll ? "hidden" : "flex"
              }`}
            >
              <segment.icon className="h-6 w-6 text-brass" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-white">{segment.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{segment.problem}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-[13px] sm:text-xs uppercase tracking-wider text-brass">
                {segment.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        {!showAll && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-white/15 font-mono text-[13px] uppercase tracking-wider text-brass transition-colors hover:border-brass/40 hover:bg-white/[0.04] sm:hidden"
          >
            Alle sechs ansehen
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  )
}
