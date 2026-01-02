import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Bona Fides Detektei",
  description: "Impressum und Anbieterkennung der Bona Fides Detektei - Deutschlands führende Detektei für digitale Ermittlungen.",
};

export default function ImpressumPage() {
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
                IMPRESSUM
              </h1>
              <p className="text-xl font-mono text-gray-300 max-w-2xl mx-auto">
                Anbieterkennung nach § 5 TMG
              </p>
            </div>

            {/* Content */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12">
              <div className="space-y-8 font-mono text-sm text-gray-300">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    Anbieter
                  </h2>
                  <div className="space-y-2">
                    <p className="font-serif text-lg text-white">BONA FIDES Private Detektei</p>
                    <p>Eine von Deutschlands führenden Detekteien für digitale Ermittlungen</p>
                    <p>Deutschlandweit tätig</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Anschrift
                  </h3>
                  <div className="space-y-2">
                    <p>Hahnenstraße 23</p>
                    <p>50354 Hürth</p>
                    <p>Deutschland</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Kontakt
                  </h3>
                  <div className="space-y-2">
                    <p>E-Mail: ermittlungen@bonafides.agency</p>
                    <p>Web: https://bona-fides.vercel.app</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Haftungsausschluss
                  </h3>
                  <p className="leading-relaxed">
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
                    jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
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