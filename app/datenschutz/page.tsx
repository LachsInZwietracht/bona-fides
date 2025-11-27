import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Bona Fides Detektei",
  description: "Datenschutzerklärung der Bona Fides Detektei - Ihre Privatsphäre und der Schutz Ihrer Daten haben oberste Priorität.",
};

export default function DatenschutzPage() {
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
                DATENSCHUTZ
              </h1>
              <p className="text-xl font-mono text-gray-300 max-w-2xl mx-auto">
                Ihre Privatsphäre und der Schutz Ihrer Daten haben oberste Priorität
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12">
              <div className="space-y-8 font-mono text-sm text-gray-300">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    Datenschutzerklärung
                  </h2>
                  <p className="leading-relaxed">
                    Diese Datenschutzerklärung wird derzeit erstellt und wird in Kürze verfügbar sein.
                    Als professionelle Detektei nehmen wir den Schutz Ihrer persönlichen Daten sehr ernst
                    und halten uns an alle geltenden Datenschutzgesetze.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Kontakt für Datenschutzfragen
                  </h3>
                  <p className="leading-relaxed">
                    Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                  </p>
                  <p className="mt-2">
                    E-Mail: ermittlungen@bonafides.agency
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    DSGVO-Konformität
                  </h3>
                  <p className="leading-relaxed">
                    Unsere Datenverarbeitung erfolgt vollständig im Einklang mit der
                    Datenschutz-Grundverordnung (DSGVO) und anderen anwendbaren Datenschutzgesetzen.
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