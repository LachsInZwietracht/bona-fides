import { Metadata } from "next"
import { AboutPageClient } from "./about-page-client"

export const metadata: Metadata = {
  title: "Über uns | BONA FIDES Detektei – Digitale Ermittlungen für Unternehmen",
  description: "Spezialisierte digitale Detektei mit interdisziplinärem Experten-Netzwerk für Unternehmen und Versicherer. Strukturierter Mandatsprozess, DSGVO-konform und rechtssicher dokumentiert.",
  keywords: "Detektei, digitale Ermittlungen, Unternehmensermittlung, Wirtschaftsermittlung, Cyber-Forensik, OSINT, Asset Tracing, Versicherungsbetrug, Deutschland",
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: "Über BONA FIDES – Digitale Detektei für Unternehmen & Versicherer",
    description: "Spezialisierte digitale Detektei mit interdisziplinärem Experten-Netzwerk. Strukturierter Mandatsprozess, DSGVO-konform und rechtssicher dokumentiert.",
    url: '/about',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'BONA FIDES Detektei – Digitale Ermittlungen für Unternehmen und Versicherer',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Über BONA FIDES – Digitale Detektei",
    description: "Spezialisierte digitale Detektei für Unternehmen und Versicherer.",
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

export default function AboutPage() {
  return <AboutPageClient />
}
