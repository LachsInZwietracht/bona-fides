import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { HashNavigationHandler } from "@/components/hash-navigation-handler"
import { CookiesProvider } from "@/hooks/use-cookies"
import { CookieBanner } from "@/components/cookie-banner"
import { services } from "@/lib/services-data"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

/** Fließtext in einer Grotesk – Mono bleibt Labels und Kennzahlen vorbehalten. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const description =
  "Wirtschaftsdetektei für Unternehmen, Versicherer und Kanzleien: interne Untersuchungen, Lohnfortzahlungsbetrug, Due Diligence, IT-Forensik und Asset Tracing – gerichtsverwertbar dokumentiert, DSGVO-konform, bundesweit."

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wirtschaftsdetektei für Unternehmen | BONA FIDES Detektei",
    template: "%s | BONA FIDES Detektei",
  },
  description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: siteConfig.name,
    title: "Wirtschaftsdetektei für Unternehmen | BONA FIDES Detektei",
    description,
    url: siteConfig.url,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        alternateName: "Bona Fides",
        description,
        url: siteConfig.url,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.street,
          postalCode: siteConfig.postalCode,
          addressLocality: siteConfig.city,
          addressCountry: siteConfig.country,
        },
        areaServed: [
          { "@type": "Country", name: "Deutschland" },
          { "@type": "Country", name: "Österreich" },
          { "@type": "Country", name: "Schweiz" },
        ],
        knowsLanguage: ["de", "en"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Ermittlungsleistungen",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.h1,
              url: `${siteConfig.url}/leistungen/${service.slug}`,
            },
          })),
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Mandatsanfragen",
          email: siteConfig.email,
          availableLanguage: ["de", "en"],
          areaServed: "DE",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: siteConfig.url,
        inLanguage: "de-DE",
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  }

  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${jetbrains.variable} ${inter.variable} font-sans antialiased`}
      >
        <CookiesProvider>
          <HashNavigationHandler />
          <Suspense fallback={null}>{children}</Suspense>
          <CookieBanner />
          <Analytics />
        </CookiesProvider>
      </body>
    </html>
  )
}
