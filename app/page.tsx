import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NoirShell } from "@/components/noir-shell"
import { BlogCard } from "@/components/blog-card"
import { ContactForm } from "@/components/contact-form"
import { LossLandscape } from "@/components/loss-landscape"
import { StickyCta } from "@/components/sticky-cta"
import { CtaBand } from "@/components/cta-band"
import {
  AssuranceSection,
  CaseStudySection,
  FaqSection,
  HeroSection,
  PricingSection,
  ProcessSection,
  SegmentsSection,
  ServicesSection,
  TestimonialsSection,
  homeFaq,
} from "@/components/home-sections"
import { getAllArticles } from "@/lib/blog"
import { siteConfig } from "@/lib/site-config"

const title = "Wirtschaftsdetektei für Unternehmen | BONA FIDES Detektei"
const description =
  "Wirtschaftsdetektei für Unternehmen, Versicherer und Kanzleien: interne Untersuchungen, Lohnfortzahlungsbetrug, Due Diligence, IT-Forensik und Asset Tracing. Gerichtsverwertbar dokumentiert, DSGVO-konform, erste Einschätzung binnen 24 Stunden."

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Wirtschaftsdetektei",
    "Detektei für Unternehmen",
    "B2B Detektei",
    "Unternehmensermittlung",
    "interne Ermittlungen",
    "Lohnfortzahlungsbetrug Detektei",
    "Due Diligence Detektei",
    "Versicherungsbetrug Ermittlung",
    "IT-Forensik Unternehmen",
    "Asset Tracing",
    "Detektei Deutschland",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: siteConfig.name,
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BONA FIDES – Wirtschaftsdetektei für Unternehmen und Versicherer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {
  const latestArticles = getAllArticles().slice(0, 3)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: title,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: homeFaq.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
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

        <HeroSection />
        <SegmentsSection />
        <ServicesSection />
        <LossLandscape />
        <ProcessSection />
        <PricingSection />
        <AssuranceSection />
        <CaseStudySection />
        <TestimonialsSection />

        {/* Aktuelles – serverseitig gerendert, damit die Artikel indexiert werden */}
        {latestArticles.length > 0 && (
          <section
            className="relative z-10 py-20 sm:py-24 border-t border-white/10"
            aria-labelledby="aktuelles-heading"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                <div className="max-w-2xl">
                  <p className="eyebrow text-brass mb-4">Fachbeiträge</p>
                  <h2
                    id="aktuelles-heading"
                    className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight"
                  >
                    Erkenntnisse aus laufenden Mandaten
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex min-h-11 items-center gap-2 font-mono text-[13px] sm:text-xs uppercase tracking-wider text-brass hover:text-brass-light transition-colors"
                >
                  Zum Fallarchiv
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {latestArticles.map((article) => (
                  <BlogCard key={article.metadata.slug} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        <FaqSection />

        <section id="contact">
          <ContactForm />
        </section>

        <CtaBand
          headline="Risiken sichtbar machen. Entscheidungen absichern."
          subline="Schildern Sie uns Ihren Fall vertraulich. Sie erhalten in der Regel binnen 24 Stunden eine erste Einschätzung: was aufklärbar ist, mit welchem Aufwand und in welchem Zeitrahmen."
          primaryLabel="Fall schildern"
        />

        <Footer />
      </NoirShell>
      <StickyCta />
    </div>
  )
}
