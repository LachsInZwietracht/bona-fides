import { Metadata } from "next"
import { HomePageClient } from "./home-page-client"

export const metadata: Metadata = {
  title: "BONA FIDES Detektei | Digitale Ermittlungen für Unternehmen & Versicherer",
  description: "Deutschlands führende digitale Detektei für Unternehmen und Versicherer. Vertrauliche Ermittlungen, Cyber-Forensik, Due Diligence, Asset Tracing und Versicherungsbetrug – DSGVO-konform, bundesweit, entscheidungsreif aufbereitet.",
  keywords: "Detektei, digitale Ermittlungen, Unternehmensermittlung, Wirtschaftsermittlung, Due Diligence, Compliance, Fraud, interne Untersuchung, Cyber-Forensik, OSINT, Asset Tracing, Versicherungsbetrug, Deutschland, Hamburg, Berlin, München",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "BONA FIDES Detektei – Digitale Ermittlungen für Unternehmen & Versicherer",
    description: "Deutschlands führende digitale Detektei für Unternehmen und Versicherer. Vertrauliche Ermittlungen, Cyber-Forensik, Due Diligence und Versicherungsbetrug.",
    url: '/',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BONA FIDES Detektei – Digitale Ermittlungen für Unternehmen und Versicherer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BONA FIDES Detektei – Digitale Ermittlungen für Unternehmen & Versicherer",
    description: "Deutschlands führende digitale Detektei für Unternehmen und Versicherer.",
    creator: '@bonafides',
    site: '@bonafides',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function HomePage() {
  return <HomePageClient />
}
