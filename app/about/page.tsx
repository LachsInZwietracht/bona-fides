import { Metadata } from "next"
import { AboutPageClient } from "./about-page-client"

export const metadata: Metadata = {
  title: "Über Uns | BONA FIDES Detektei - Digitale Ermittlungsexperten",
  description: "Spezialisierte Digital-Detektei mit interdisziplinärem Experten-Netzwerk für Cyber-Ermittlungen, Online-Forensik und digitale Beweissicherung. Erfahren Sie mehr über unsere Philosophie und fünfstufigen Ermittlungsprozess.",
  keywords: "Detektei Team, Digital-Detektei, Cyber-Ermittler, Online-Forensik, Ermittlungsprozess, Detektiv Netzwerk, Deutschland",
  alternates: {
    canonical: 'https://bona-fides.vercel.app/about',
  },
  openGraph: {
    title: "Über BONA FIDES - Spezialisierte Digital-Detektei",
    description: "Interdisziplinäres Experten-Netzwerk für Cyber-Ermittlungen, Online-Forensik und digitale Beweissicherung mit fünfstufigem Ermittlungsprozess.",
    url: 'https://bona-fides.vercel.app/about',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://bona-fides.vercel.app/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'BONA FIDES Detektei Team - Digitale Ermittlungsexperten',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Über BONA FIDES - Digital-Detektei",
    description: "Interdisziplinäres Experten-Netzwerk für Cyber-Ermittlungen und Online-Forensik",
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
