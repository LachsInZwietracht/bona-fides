import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | BONA FIDES Detektei - Geschäftsbedingungen für Ermittlungsdienste",
  description: "Allgemeine Geschäftsbedingungen der BONA FIDES Detektei. Transparente Konditionen für professionelle digitale Ermittlungsdienstleistungen, Cyber-Forensik und Online-Recherchen.",
  keywords: "AGB, Geschäftsbedingungen, Detektei Konditionen, Ermittlungsdienstleistungen, Bona Fides",
  alternates: {
    canonical: 'https://bona-fides.vercel.app/agb',
  },
  openGraph: {
    title: "AGB - BONA FIDES Detektei",
    description: "Allgemeine Geschäftsbedingungen für professionelle digitale Ermittlungsdienstleistungen.",
    url: 'https://bona-fides.vercel.app/agb',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Header dark />

      {/* Film grain texture */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 min-h-screen pt-20">
        <div className="container mx-auto px-8 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                AGB
              </h1>
              <p className="text-xl font-mono text-gray-300 max-w-2xl mx-auto">
                Allgemeine Geschäftsbedingungen für Ermittlungsdienstleistungen
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12">
              <div className="space-y-8 font-mono text-sm text-gray-300">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    Allgemeine Geschäftsbedingungen
                  </h2>
                  <p className="leading-relaxed">
                    Diese Allgemeinen Geschäftsbedingungen werden derzeit überarbeitet und
                    werden in Kürze in vollständiger Form verfügbar sein. Unsere AGB regeln
                    die professionelle Zusammenarbeit zwischen der Bona Fides Detektei und
                    unseren Mandanten.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Leistungsumfang
                  </h3>
                  <div className="space-y-2">
                    <p>• Digitale Ermittlungen und Cybercrime-Aufklärung</p>
                    <p>• Online-Hintergrundprüfungen</p>
                    <p>• Social Media Forensik</p>
                    <p>• Personensuche im digitalen Raum</p>
                    <p>• Account-Diebstahl-Aufklärung</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Vertraulichkeit
                  </h3>
                  <p className="leading-relaxed">
                    Alle Ermittlungen werden unter strenger Wahrung der Vertraulichkeit durchgeführt.
                    Unsere Detektive unterliegen der professionellen Schweigepflicht und halten sich
                    an höchste ethische Standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Rechtlicher Rahmen
                  </h3>
                  <p className="leading-relaxed">
                    Alle Ermittlungsmaßnahmen erfolgen im Rahmen der geltenden Gesetze der
                    Bundesrepublik Deutschland. Wir sind als Detektei lizenziert und versichert.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Kontakt
                  </h3>
                  <p className="leading-relaxed">
                    Bei Fragen zu unseren AGB kontaktieren Sie uns gerne unter:
                    ermittlungen@bonafides.agency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  );
}