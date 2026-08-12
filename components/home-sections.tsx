import Link from "next/link"
import {
  ArrowRight,
  Banknote,
  Briefcase,
  Building2,
  Check,
  FileCheck2,
  Gavel,
  Handshake,
  Scale,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react"
import { ServiceIcon } from "@/components/service-icon"
import { ObservationHero } from "@/components/heroes/hero-observation"
import { b2bServices, services } from "@/lib/services-data"
import { getTeamMemberCount } from "@/lib/team-data"

/* ------------------------------------------------------------------ Hero */

/**
 * Entwurf 05 "Die Observation": Der Bildschirm wird zum Sucher – Eckwinkel,
 * wandernder Suchstrahl und ein Fadenkreuz, das den Systemcursor ersetzt.
 * Höhe abzüglich der 4rem hohen, sticky Kopfzeile, damit Hero und Header
 * zusammen genau einen Bildschirm füllen.
 */
export function HeroSection() {
  return <ObservationHero fullHeight />
}

/* -------------------------------------------------------------- Segments */

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

export function SegmentsSection() {
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
          {segments.map((segment) => (
            <a
              key={segment.title}
              href={segment.href}
              className="group flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-white/[0.06]"
            >
              <segment.icon className="h-6 w-6 text-brass" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-white">{segment.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{segment.problem}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass">
                {segment.linkLabel}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- Services */

export function ServicesSection() {
  const privateService = services.find((service) => service.audience === "b2c")

  return (
    <section
      id="leistungen"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-brass mb-4">Leistungen</p>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
            >
              Ermittlungsmandate, die wir übernehmen
            </h2>
          </div>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass hover:text-brass-light transition-colors"
          >
            Alle Leistungen
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {b2bServices.map((service) => (
            <Link
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="group flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brass/15">
                <ServiceIcon name={service.icon} className="h-5 w-5 text-brass" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold text-white group-hover:text-brass-light transition-colors">
                {service.navLabel}
              </h3>
              <p className="mt-2 flex-1 text-sm text-gray-400 leading-relaxed">{service.teaser}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass">
                Mehr
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {privateService && (
          <p className="mt-8 text-sm text-gray-400">
            Kein Unternehmensfall?{" "}
            <Link
              href={`/leistungen/${privateService.slug}`}
              className="text-brass underline underline-offset-4 hover:text-brass-light"
            >
              Ausgewählte Privatmandate
            </Link>{" "}
            übernehmen wir ebenfalls.
          </p>
        )}
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Ablauf */

const processSteps = [
  {
    title: "Erstgespräch",
    duration: "20 Minuten, kostenfrei",
    description:
      "Sie schildern den Sachverhalt, wir sagen Ihnen ehrlich, was aufklärbar ist und was nicht. Auf Wunsch mit NDA, bevor Sie das erste Detail nennen.",
  },
  {
    title: "Mandatsvorschlag",
    duration: "in der Regel binnen 24 Stunden",
    description:
      "Sie erhalten schriftlich Ermittlungsziel, Methodik, Rechtsrahmen sowie Zeit- und Kostenrahmen mit Obergrenze. Erst dann entscheiden Sie.",
  },
  {
    title: "Ermittlung",
    duration: "verdeckt, mit festem Takt",
    description:
      "Wir arbeiten, ohne dass Ihr Betrieb es bemerkt, und melden Zwischenstände im vereinbarten Rhythmus – auch wenn sie unbequem sind.",
  },
  {
    title: "Bericht & Briefing",
    duration: "entscheidungsreif aufbereitet",
    description:
      "Executive Summary, belegte Chronologie, Beweismittel mit Kette und Handlungsempfehlung. Auf Wunsch persönliches Briefing für Ihre Gremien.",
  },
]

export function ProcessSection() {
  return (
    <section
      id="ablauf"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="process-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Ablauf</p>
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Vom ersten Anruf zum verwertbaren Ergebnis
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Kein Mandat beginnt mit einer Rechnung. Es beginnt mit einer Einschätzung, ob sich der
            Aufwand für Sie überhaupt lohnt.
          </p>
        </div>

        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-sm border border-white/10 bg-white/[0.03] p-6"
            >
              <span className="font-mono text-xs text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-brass/80">
                {step.duration}
              </p>
              <p className="mt-3 text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- Honorar */

const pricingModels = [
  {
    icon: Handshake,
    title: "Erste Einschätzung",
    price: "kostenfrei",
    description:
      "Einordnung Ihres Sachverhalts, Machbarkeit und grober Rahmen. Ohne Verpflichtung, auf Wunsch unter NDA.",
    points: ["20-minütiges Gespräch", "Ehrliche Machbarkeitsaussage", "Keine Beauftragung nötig"],
  },
  {
    icon: Briefcase,
    title: "Phasenfestpreis",
    price: "je Mandatsphase",
    description:
      "Für planbare Mandate wie Due Diligence, Forensik oder interne Untersuchungen. Sie wissen vorher, was jede Phase kostet und liefert.",
    points: ["Definierte Deliverables", "Kein Nachschlag ohne Freigabe", "Budgetierbar für Gremien"],
    highlighted: true,
  },
  {
    icon: Banknote,
    title: "Tagessatz",
    price: "transparent, mit Obergrenze",
    description:
      "Für Feldarbeit wie Observationen, deren Umfang sich erst im Verlauf zeigt. Die vereinbarte Obergrenze wird nie ohne Ihre Freigabe überschritten.",
    points: ["Tagesgenaue Abrechnung", "Vereinbarte Obergrenze", "Nachweis für Kostenerstattung"],
  },
]

export function PricingSection() {
  return (
    <section
      id="honorar"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="pricing-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Honorar</p>
          <h2
            id="pricing-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was ein Mandat kostet – und wer es am Ende zahlt
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Detekteien, die über Preise schweigen, haben meist einen Grund dafür. Wir nennen die
            Modelle vorab und legen die Obergrenze schriftlich fest.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pricingModels.map((model) => (
            <div
              key={model.title}
              className={`flex flex-col rounded-sm border p-6 sm:p-8 ${
                model.highlighted
                  ? "border-brass/40 bg-brass/[0.06]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <model.icon className="h-6 w-6 text-brass" aria-hidden="true" />
              <h3 className="mt-4 font-serif text-xl font-semibold text-white">{model.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-wider text-brass">
                {model.price}
              </p>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">{model.description}</p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5">
                {model.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-gray-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-4 rounded-sm border border-white/10 bg-white/[0.02] p-6">
          <Gavel className="h-5 w-5 flex-shrink-0 text-brass mt-0.5" aria-hidden="true" />
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Kostenerstattung:</strong> Bestätigt sich ein konkreter,
            durch Tatsachen begründeter Verdacht auf eine vorsätzliche Pflichtverletzung, können
            Arbeitgeber die notwendigen Ermittlungskosten nach arbeitsgerichtlicher Rechtsprechung
            grundsätzlich vom Verursacher ersetzt verlangen. Unsere Berichte und Kostennachweise
            sind auf genau diese Anforderung ausgelegt. Die Durchsetzung im Einzelfall bewertet Ihre
            Rechtsvertretung.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Rechtssicher */

const assurances = [
  {
    icon: Scale,
    title: "Verhältnismäßigkeit vor dem Einsatz",
    description:
      "Wir dokumentieren Anlass, Umfang und Erforderlichkeit, bevor wir beginnen – und lehnen Aufträge ab, die diese Schwelle nicht erreichen.",
  },
  {
    icon: Gavel,
    title: "Lückenlose Beweiskette",
    description:
      "Zeitstempel, Hashwerte und Chain of Custody bei digitalen Beweisen, minutengenaue Protokolle bei Feldarbeit.",
  },
  {
    icon: Users,
    title: "Zeugenbereitschaft",
    description:
      "Unsere Ermittler stehen als Zeugen zur Verfügung – im arbeits-, zivil- und strafrechtlichen Verfahren.",
  },
  {
    icon: ShieldCheck,
    title: "DSGVO und Vertraulichkeit",
    description:
      "Auftragsverarbeitungsvertrag, verschlüsselte Kommunikation, getrennte Mandatsumgebungen und Need-to-know im Team.",
  },
]

export function AssuranceSection() {
  return (
    <section
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="assurance-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <p className="eyebrow text-brass mb-4">Rechtssicherheit</p>
            <h2
              id="assurance-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
            >
              Ein Ergebnis nützt Ihnen nur, wenn es standhält
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Beweise, die unsauber erhoben wurden, kosten Sie im Verfahren mehr, als sie je
              eingebracht haben. Deshalb ist unser Vorgehen von der ersten Minute an auf
              Nachprüfbarkeit ausgelegt.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <dt className="font-serif text-3xl font-bold text-brass">
                  {getTeamMemberCount()}
                </dt>
                <dd className="mt-1 text-sm text-gray-400">Ermittler im Netzwerk, bundesweit</dd>
              </div>
              <div>
                <dt className="font-serif text-3xl font-bold text-brass">24 h</dt>
                <dd className="mt-1 text-sm text-gray-400">
                  bis zur ersten Einschätzung Ihres Falls
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {assurances.map((item) => (
              <div key={item.title} className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
                <item.icon className="h-5 w-5 text-brass" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------- Fallstudie */

export function CaseStudySection() {
  return (
    <section
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="case-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Fallstudie · Internationale Wirtschaftsermittlung</p>
          <h2
            id="case-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Aus einer Marktrecherche wurde eine Behördenmeldung
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-3">Ausgangslage</h3>
              <p className="text-gray-300 leading-relaxed">
                Ein Finanzdienstleister wollte in den deutschen Markt eintreten und bat uns,
                geeignete Geschäftspartner zu identifizieren. Ein Kandidat wirkte auf dem Papier
                einwandfrei – bis wir prüften, wer tatsächlich hinter der Gesellschaft stand.
              </p>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-5">Verlauf</h3>
              <ol className="space-y-4">
                {[
                  "Erstgespräch und Mandatsdefinition",
                  "Due-Diligence-Prüfung der Zielgesellschaften",
                  "Auffälligkeiten in Struktur und Zahlungswegen identifiziert",
                  "Rechtliche Bewertung, anschließend Behördenmeldung",
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full font-mono text-xs ${
                        index === 3 ? "bg-brass/25 text-brass" : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        index === 3 ? "text-brass" : "text-gray-400"
                      }`}
                    >
                      {step}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

          <div className="space-y-6">
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-5">Feststellungen</h3>
              <ul className="space-y-5">
                {[
                  [
                    "Auffällige Unternehmensstruktur",
                    "UK-Limited mit Geschäftsadresse einer benachbarten Kanzlei statt eigenem Betrieb",
                  ],
                  [
                    "Internationale Verflechtungen",
                    "Geschäftsbeziehungen nach Dubai mit nicht nachvollziehbaren Finanzströmen",
                  ],
                  [
                    "Rechtliche Einordnung",
                    "Nach Konsultation mit Fachanwälten wurde eine Meldepflicht identifiziert",
                  ],
                ].map(([title, detail], index) => (
                  <li key={title} className="flex items-start gap-4">
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brass/20 font-mono text-xs font-bold text-brass">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-white">{title}</p>
                      <p className="mt-1 text-sm text-gray-400 leading-relaxed">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-brass/30 bg-brass/[0.06] p-6">
              <p className="italic text-gray-300 leading-relaxed">
                „Eine gründliche Hintergrundprüfung schützt nicht nur vor finanziellem Schaden – sie
                verhindert, dass Sie unwissentlich Teil eines Sachverhalts werden, der später
                meldepflichtig ist.&ldquo;
              </p>
              <p className="mt-4 font-mono text-xs uppercase tracking-wider text-gray-400">
                Ermittlungsteam BONA FIDES
              </p>
            </div>

            <Link
              href="/leistungen/due-diligence"
              className="group inline-flex items-center gap-2 rounded-sm border border-brass/40 px-5 py-3 font-mono text-xs uppercase tracking-wider text-brass transition-colors hover:bg-brass/10 hover:text-brass-light"
            >
              Wie unsere Due Diligence arbeitet
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------- Testimonials */

const testimonials = [
  {
    role: "Compliance-Leitung",
    org: "Mittelständischer Anlagenbauer",
    caseType: "Interne Untersuchung",
    text: "Sauber dokumentiert, rechtssicher aufbereitet und jederzeit ansprechbar. Das Ergebnis hat unsere Entscheidung im Vorstand getragen.",
  },
  {
    role: "Leiterin Schadenabteilung",
    org: "Versicherer",
    caseType: "Versicherungsbetrug",
    text: "Belastbare Beweise in einem komplexen Schadenfall. Die Ermittlung hat uns eine Auszahlung in sechsstelliger Höhe erspart – vollständig dokumentiert.",
  },
  {
    role: "Personalleitung",
    org: "Handelsunternehmen, 400 Mitarbeitende",
    caseType: "Lohnfortzahlungsbetrug",
    text: "Nach drei Einsatztagen lag der Nachweis vor. Die Kündigung hat gehalten, die Ermittlungskosten haben wir erstattet bekommen.",
  },
]

export function TestimonialsSection() {
  return (
    <section
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="testimonials-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Mandantenstimmen</p>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was Auftraggeber nach Mandatsende sagen
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            Anonymisiert – Mandatsverhältnisse unterliegen der Vertraulichkeit.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.role}
              className="flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brass/30"
            >
              <div className="flex gap-1" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-brass text-brass" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 italic text-gray-300 leading-relaxed">
                „{testimonial.text}&ldquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <p className="font-medium text-white">{testimonial.role}</p>
                <p className="mt-0.5 font-mono text-xs text-gray-500">{testimonial.org}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-wider text-brass/80">
                  {testimonial.caseType}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------- FAQ */

export const homeFaq = [
  {
    question: "Arbeiten Sie ausschließlich für Unternehmen?",
    answer:
      "Unser Schwerpunkt liegt eindeutig auf Unternehmen, Versicherern und Kanzleien – dort liegen unsere Methoden und unsere Erfahrung. Ausgewählte Privatmandate übernehmen wir dennoch, etwa in Unterhalts- und Sorgerechtsfragen oder bei Online-Betrug. Im Erstgespräch sagen wir Ihnen offen, ob wir Ihnen weiterhelfen können.",
  },
  {
    question: "Ab welcher Unternehmensgröße lohnt sich ein Mandat?",
    answer:
      "Es kommt nicht auf die Mitarbeiterzahl an, sondern auf die Schadenshöhe. Ein einzelner Fall vorgetäuschter Arbeitsunfähigkeit kostet einen 30-Personen-Betrieb schnell einen fünfstelligen Betrag. Wir beauftragen uns nicht selbst: Wenn Aufwand und erwartbarer Nutzen nicht zusammenpassen, sagen wir das im Erstgespräch.",
  },
  {
    question: "Wie schnell können Sie beginnen?",
    answer:
      "Eine erste Einschätzung erhalten Sie in der Regel binnen 24 Stunden. Feldarbeit können wir bundesweit meist innerhalb von 24 bis 48 Stunden aufnehmen. Bei laufenden Krankmeldungen oder drohenden Verfügungsfristen zählt jeder Tag – melden Sie sich lieber zu früh als zu spät.",
  },
  {
    question: "Was kostet ein Ermittlungsmandat?",
    answer:
      "Wahlweise Phasenfestpreis mit definierten Deliverables oder transparenter Tagessatz mit vereinbarter Obergrenze. Vor Mandatsannahme erhalten Sie ein schriftliches Angebot mit Zeit- und Kostenrahmen. Die erste Einschätzung ist kostenfrei und unverbindlich.",
  },
  {
    question: "Sind die Ergebnisse vor Gericht verwendbar?",
    answer:
      "Wir dokumentieren forensisch – mit Beweiskette, Hashwerten und Zeitstempeln – und unsere Ermittler stehen als Zeugen zur Verfügung. Damit sind die Ergebnisse in arbeits-, zivil- und strafrechtlichen Verfahren einbringbar. Über die Verwertung im Einzelfall entscheidet das Gericht; wir legen die Erhebungsumstände dafür vollständig offen.",
  },
  {
    question: "Bekommt unsere Belegschaft etwas von der Ermittlung mit?",
    answer:
      "Nein, sofern das nicht ausdrücklich Teil Ihrer Strategie ist. Wir arbeiten verdeckt, kommunizieren ausschließlich über einen von Ihnen benannten Kontakt und hinterlassen keine Spuren in Ihren Systemen, die auf ein laufendes Mandat hindeuten.",
  },
  {
    question: "Wie schützen Sie unsere Mandatsdaten?",
    answer:
      "NDA vor dem ersten Briefing, verschlüsselte Kommunikation, getrennte Mandatsumgebungen und Need-to-know-Zugriff im Team. Auf Wunsch schließen wir einen Auftragsverarbeitungsvertrag. Daten werden nur über die vereinbarte Mandatsdauer aufbewahrt.",
  },
  {
    question: "Was passiert, wenn sich unser Verdacht nicht bestätigt?",
    answer:
      "Auch eine fundierte Nichtfeststellung ist ein Ergebnis. Sie erhalten dokumentiert, was mit welcher Methode geprüft wurde und warum sich der Verdacht nicht erhärten ließ. Das entlastet Betroffene und schützt Sie vor personellen Maßnahmen, die später teuer werden.",
  },
  {
    question: "Arbeiten Sie mit unserer Kanzlei zusammen?",
    answer:
      "Regelmäßig. Wir übernehmen die ermittelnde Arbeit und liefern die Faktenbasis, Ihre Kanzlei verantwortet die rechtliche Bewertung und Durchsetzung. Auf Wunsch berichten wir direkt an die mandatierte Kanzlei.",
  },
  {
    question: "Sind Sie bundesweit und international einsetzbar?",
    answer:
      "Ja. Feldarbeit leisten wir bundesweit über unser koordiniertes Ermittlernetzwerk, internationale Mandate über geprüfte Partner mit lokaler Compliance. Bei Jurisdiktionen mit eingeschränkter Registertransparenz benennen wir offen, welche Aussagen belastbar sind.",
  },
]

export function FaqSection() {
  return (
    <section
      id="faq"
      className="relative z-10 py-20 sm:py-24 border-t border-white/10"
      aria-labelledby="faq-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-brass mb-4">Häufige Fragen</p>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
          >
            Was Entscheider vor der Beauftragung wissen wollen
          </h2>
        </div>

        <div className="max-w-3xl space-y-3">
          {homeFaq.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-sm border border-white/10 bg-white/[0.03] transition-colors hover:border-brass/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-white">
                <span>{faq.question}</span>
                <span className="text-xl text-brass transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/10 px-5 pb-5 pt-4 text-gray-300 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
