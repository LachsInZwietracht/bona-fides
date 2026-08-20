import Link from "next/link"
import { ArrowRight, Check, ChevronRight, FileText, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceIcon } from "@/components/service-icon"
import { CtaBand } from "@/components/cta-band"
import { getRelatedServices, type Service } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"

export function ServiceDetail({ service }: { service: Service }) {
  const related = getRelatedServices(service)

  return (
    <div className="relative z-10">
      {/* Breadcrumb */}
      <nav aria-label="Brotkrumen" className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <ol className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-400">
          <li>
            <Link href="/" className="hover:text-brass transition-colors">
              Start
            </Link>
          </li>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <li>
            <Link href="/leistungen" className="hover:text-brass transition-colors">
              Leistungen
            </Link>
          </li>
          <ChevronRight className="h-3 w-3" aria-hidden="true" />
          <li className="text-gray-300" aria-current="page">
            {service.navLabel}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            <p className="eyebrow text-brass">{service.kicker}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.1]">
              {service.h1}
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
              {service.lead}
            </p>

            {/* Ein Hauptweg als Fläche, der Nebenweg als Verweis – zwei gleich
                laute Schaltflächen übereinander lasen sich mobil wie ein
                Einwilligungsbanner. */}
            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:gap-7">
              <Button
                asChild
                size="lg"
                className="bg-brass text-black hover:bg-brass-light font-semibold min-h-[52px] px-7 sm:px-8"
              >
                <Link href="/#contact">
                  Fall schildern
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="#ablauf"
                className="group inline-flex min-h-[44px] items-center gap-2 text-base text-gray-300 underline decoration-white/25 underline-offset-[6px] transition-colors hover:text-brass hover:decoration-brass/50"
              >
                So läuft ein Mandat
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-mono text-xs text-gray-400">
              <li>{siteConfig.responsePromise}</li>
              <li>NDA vor dem Erstgespräch</li>
              <li>Bundesweit im Einsatz</li>
            </ul>
          </div>

          {/* Rahmen-Karte: beantwortet Dauer/Kosten sofort */}
          <aside className="rounded-sm border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass/15">
                <ServiceIcon name={service.icon} className="h-5 w-5 text-brass" />
              </div>
              <p className="eyebrow text-gray-400">Rahmen</p>
            </div>
            <dl className="space-y-4">
              {service.frame.map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                    {item.label}
                  </dt>
                  <dd className="text-white mt-0.5">{item.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                Typischerweise beauftragt von
              </p>
              <p className="text-sm text-gray-300">{service.buyers.join(" · ")}</p>
            </div>
          </aside>
        </div>
      </header>

      {/* Anlässe */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <p className="eyebrow text-brass mb-4">Typische Anlässe</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Kommt Ihnen eine dieser Situationen bekannt vor?
            </h2>
            <ul className="space-y-3">
              {service.triggers.map((trigger) => (
                <li key={trigger} className="flex gap-3 text-gray-300 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                  {trigger}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-brass mb-4">Was Sie erhalten</p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Ergebnisse, mit denen Sie entscheiden können
            </h2>
            <ul className="space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-gray-300 leading-relaxed">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Vorgehen */}
      <section id="ablauf" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <p className="eyebrow text-brass mb-4">Vorgehen</p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-10">
          Wie wir vorgehen
        </h2>
        <ol className="grid gap-6 sm:grid-cols-2">
          {service.methods.map((method, index) => (
            <li
              key={method.title}
              className="rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-brass/40"
            >
              <span className="font-mono text-xs text-brass">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-serif font-semibold text-white">{method.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{method.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Deliverables + Recht */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="h-4 w-4 text-brass" aria-hidden="true" />
              <p className="eyebrow text-brass">Deliverables</p>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Das liegt am Ende auf Ihrem Tisch
            </h2>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-gray-300 leading-relaxed">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-brass" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 self-start">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-4 w-4 text-brass" aria-hidden="true" />
              <p className="eyebrow text-brass">Rechtlicher Rahmen</p>
            </div>
            <p className="text-gray-300 leading-relaxed">{service.legalNote}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
        <p className="eyebrow text-brass mb-4">Häufige Fragen</p>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-8">
          {service.navLabel}: Was Mandanten vorab wissen wollen
        </h2>
        <div className="max-w-3xl space-y-3">
          {service.faq.map((entry) => (
            <details
              key={entry.question}
              className="group rounded-sm border border-white/10 bg-white/[0.03] transition-colors hover:border-brass/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-medium text-white">
                <span>{entry.question}</span>
                <span className="text-xl text-brass transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-white/10 px-5 pb-5 pt-4 text-gray-300 leading-relaxed">
                {entry.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Verwandte Leistungen */}
      {related.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/10">
          <p className="eyebrow text-brass mb-6">Verwandte Leistungen</p>
          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/leistungen/${item.slug}`}
                className="group rounded-sm border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-brass/40"
              >
                <ServiceIcon name={item.icon} className="h-5 w-5 text-brass" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-white group-hover:text-brass-light transition-colors">
                  {item.navLabel}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.teaser}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBand
        headline={`${service.navLabel}: Schildern Sie uns Ihren Fall`}
        subline={`Ein vertrauliches Erstgespräch kostet Sie nichts außer 20 Minuten. Sie erhalten eine ehrliche Einschätzung, ob und wie sich Ihr Anliegen aufklären lässt – inklusive Zeit- und Kostenrahmen.`}
      />
    </div>
  )
}
