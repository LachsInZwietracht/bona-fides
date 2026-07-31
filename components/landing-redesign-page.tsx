import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { ContactForm } from "@/components/contact-form"
import { CtaBand } from "@/components/cta-band"
import { LossLandscape } from "@/components/loss-landscape"
import { Footer } from "@/components/footer"
import {
  AssuranceSection,
  CaseStudySection,
  FaqSection,
  PricingSection,
  ProcessSection,
  SegmentsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/home-sections"
import { LandingRedesignHero } from "@/components/landing-redesign-hero"
import { RedesignHeader } from "@/components/redesign-header"
import { StickyCta } from "@/components/sticky-cta"
import { getAllArticles } from "@/lib/blog"
import { redesignReviewPath, type RedesignVariant } from "@/lib/landing-redesigns"

export function LandingRedesignPage({ variant }: { variant: RedesignVariant }) {
  const latestArticles = getAllArticles().slice(0, 3)
  const contactHref = `${redesignReviewPath(variant)}#contact`

  return (
    <div className={`redesign-shell redesign-shell--${variant}`}>
      <RedesignHeader variant={variant} contactHref={contactHref} />
      <main className={`landing-redesign landing-redesign--${variant}`}>
        <div className="redesign-atmosphere" aria-hidden="true" />
        <LandingRedesignHero variant={variant} contactHref={contactHref} />
        <SegmentsSection />
        <ServicesSection />
        <LossLandscape />
        <ProcessSection />
        <PricingSection />
        <AssuranceSection />
        <CaseStudySection />
        <TestimonialsSection />

        {latestArticles.length > 0 && (
          <section
            className="relative z-10 border-t border-white/10 py-20 sm:py-24"
            aria-labelledby="aktuelles-heading"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow mb-4 text-brass">Fachbeiträge</p>
                  <h2
                    id="aktuelles-heading"
                    className="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl"
                  >
                    Erkenntnisse aus laufenden Mandaten
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-brass transition-colors hover:text-brass-light"
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
          primaryLabel="Einschätzung anfordern"
          contactHref={contactHref}
        />
        <Footer contactHref={contactHref} />
      </main>
      <StickyCta contactHref={contactHref} />
    </div>
  )
}
