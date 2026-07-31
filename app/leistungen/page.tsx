import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NoirShell } from "@/components/noir-shell"
import { ServiceIcon } from "@/components/service-icon"
import { CtaBand } from "@/components/cta-band"
import { StickyCta } from "@/components/sticky-cta"
import { b2bServices, services } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Leistungen – Ermittlungen für Unternehmen",
  description:
    "Alle Ermittlungsleistungen für Unternehmen, Versicherer und Kanzleien: Wirtschaftsermittlungen, Lohnfortzahlungsbetrug, interne Ermittlungen, Due Diligence, IT-Forensik, Asset Tracing. Bundesweit und DSGVO-konform.",
  keywords: [
    "Detektei Leistungen Unternehmen",
    "Wirtschaftsdetektei Leistungen",
    "Ermittlungen für Unternehmen",
    "B2B Detektei",
    "Detektei für Versicherer",
  ],
  alternates: { canonical: "/leistungen" },
  openGraph: {
    title: "Leistungen der Wirtschaftsdetektei BONA FIDES",
    description:
      "Ermittlungsleistungen für Unternehmen, Versicherer und Kanzleien – von der internen Untersuchung bis zum Asset Tracing.",
    url: "/leistungen",
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
  },
}

const privateService = services.find((service) => service.audience === "b2c")

export default function LeistungenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteConfig.url}/leistungen#page`,
        name: "Leistungen der Wirtschaftsdetektei BONA FIDES",
        url: `${siteConfig.url}/leistungen`,
        about: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/leistungen#list`,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.h1,
          url: `${siteConfig.url}/leistungen/${service.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/leistungen#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: `${siteConfig.url}/leistungen`,
          },
        ],
      },
    ],
  }

  return (
    <div>
      <Header dark />
      <NoirShell>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="relative z-10">
          <header className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-14">
            <p className="eyebrow text-brass mb-4">Leistungen</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.1] max-w-3xl">
              Ermittlungsleistungen für Unternehmen, Versicherer und Kanzleien
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-gray-300 leading-relaxed">
              Acht Mandatstypen, ein Prinzip: Wir liefern keinen Verdacht, sondern einen
              dokumentierten Sachverhalt, auf dessen Grundlage Sie entscheiden, kündigen, klagen
              oder regulieren können.
            </p>
          </header>

          <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {b2bServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/leistungen/${service.slug}`}
                  className="group flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-brass/40 hover:bg-white/[0.06]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brass/15">
                    <ServiceIcon name={service.icon} className="h-5 w-5 text-brass" />
                  </div>
                  <p className="eyebrow text-gray-500 mt-5">{service.kicker}</p>
                  <h2 className="mt-2 font-serif text-xl font-semibold text-white group-hover:text-brass-light transition-colors">
                    {service.navLabel}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-gray-400 leading-relaxed">
                    {service.teaser}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass">
                    Details
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {privateService && (
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <div className="rounded-sm border border-white/10 bg-white/[0.02] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
                <div>
                  <p className="eyebrow text-gray-500 mb-2">Auch für Privatpersonen</p>
                  <h2 className="font-serif text-xl font-semibold text-white">
                    {privateService.navLabel}
                  </h2>
                  <p className="mt-2 max-w-xl text-sm text-gray-400 leading-relaxed">
                    {privateService.teaser}
                  </p>
                </div>
                <Link
                  href={`/leistungen/${privateService.slug}`}
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-sm border border-brass/40 px-5 py-3 font-mono text-xs uppercase tracking-wider text-brass transition-colors hover:bg-brass/10"
                >
                  Privatmandate ansehen
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          )}

          <CtaBand
            headline="Nicht sicher, welche Leistung zu Ihrem Fall passt?"
            subline="Schildern Sie den Sachverhalt in zwei Sätzen. Wir ordnen ihn ein und sagen Ihnen, was sich mit welchem Aufwand klären lässt – oder ob eine Beauftragung sich für Sie nicht lohnt."
          />

          <Footer />
        </div>
      </NoirShell>
      <StickyCta />
    </div>
  )
}
