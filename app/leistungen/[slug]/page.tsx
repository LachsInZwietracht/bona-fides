import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NoirShell } from "@/components/noir-shell"
import { ServiceDetail } from "@/components/service-detail"
import { StickyCta } from "@/components/sticky-cta"
import { getServiceBySlug, services } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Leistung nicht gefunden" }
  }

  const url = `/leistungen/${service.slug}`

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const pageUrl = `${siteConfig.url}/leistungen/${service.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.h1,
        serviceType: service.navLabel,
        description: service.metaDescription,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#organization` },
        areaServed: { "@type": "Country", name: "Deutschland" },
        audience: {
          "@type": service.audience === "b2b" ? "BusinessAudience" : "Audience",
          name: service.buyers.join(", "),
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.navLabel} – Leistungsumfang`,
          itemListElement: service.deliverables.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: service.faq.map((entry) => ({
          "@type": "Question",
          name: entry.question,
          acceptedAnswer: { "@type": "Answer", text: entry.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Start", item: siteConfig.url },
          {
            "@type": "ListItem",
            position: 2,
            name: "Leistungen",
            item: `${siteConfig.url}/leistungen`,
          },
          { "@type": "ListItem", position: 3, name: service.navLabel, item: pageUrl },
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
        <ServiceDetail service={service} />
        <Footer />
      </NoirShell>
      <StickyCta />
    </div>
  )
}
