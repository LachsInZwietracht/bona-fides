import { Metadata } from "next"
import { TeamPageClient } from "./team-page-client"

export const metadata: Metadata = {
  title: "Unser Team | BONA FIDES Detektei - Bundesweites Ermittler-Netzwerk",
  description: "Deutschlandweites Kooperationsnetzwerk spezialisierter Digital-Ermittler für Cyber-Forensik, Online-Recherchen und digitale Beweissicherung. Experten in Hamburg, Berlin, München und bundesweit verfügbar.",
  keywords: "Detektei Team, Ermittler Netzwerk, Cyber-Ermittler, Digital-Detektive, Deutschland, Hamburg, Berlin, München, bundesweit",
  alternates: {
    canonical: 'https://bona-fides.vercel.app/team',
  },
  openGraph: {
    title: "BONA FIDES Team - Bundesweites Ermittler-Netzwerk",
    description: "Deutschlandweites Kooperationsnetzwerk spezialisierter Digital-Ermittler für Cyber-Forensik und Online-Recherchen.",
    url: 'https://bona-fides.vercel.app/team',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://bona-fides.vercel.app/og-team.jpg',
        width: 1200,
        height: 630,
        alt: 'BONA FIDES Detektei - Bundesweites Ermittler-Netzwerk',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BONA FIDES Team - Ermittler-Netzwerk",
    description: "Bundesweites Netzwerk spezialisierter Digital-Ermittler für Cyber-Forensik",
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

export default function TeamPage() {
  return <TeamPageClient />
}
