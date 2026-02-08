import { Metadata } from "next"
import { HomePageClient } from "./home-page-client"

export const metadata: Metadata = {
  title: "BONA FIDES Detektei | Digitale Ermittlungen & Cyber-Forensik in Deutschland",
  description: "Spezialisierte Digital-Detektei für Cyber-Ermittlungen, Online-Forensik und Betrugsaufklärung. Bundesweites Expertennetzwerk für diskrete digitale Ermittlungen in Hamburg, Berlin, München. Kostenlose Erstberatung.",
  keywords: "Detektei, Privatdetektei, digitale Ermittlungen, Cyber-Forensik, Online-Betrug, Cybercrime, Hintergrundprüfung, Deutschland, Hamburg, Berlin, München",
  alternates: {
    canonical: 'https://bona-fides.vercel.app',
  },
  openGraph: {
    title: "BONA FIDES Detektei - Digitale Ermittlungen & Cyber-Forensik",
    description: "Spezialisierte Digital-Detektei für Cyber-Ermittlungen und Online-Forensik. Bundesweites Expertennetzwerk für diskrete digitale Ermittlungen.",
    url: 'https://bona-fides.vercel.app',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://bona-fides.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BONA FIDES Detektei - Professionelle digitale Ermittlungen',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BONA FIDES Detektei - Digitale Ermittlungen",
    description: "Spezialisierte Digital-Detektei für Cyber-Ermittlungen und Online-Forensik in Deutschland",
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
