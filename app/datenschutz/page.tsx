import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | BONA FIDES Detektei - DSGVO-konforme Datenverarbeitung",
  description: "Datenschutzerklärung der BONA FIDES Detektei gemäß DSGVO. Ihre Privatsphäre und der Schutz Ihrer Daten haben oberste Priorität. Transparente Informationen zur Datenverarbeitung.",
  keywords: "Datenschutz, DSGVO, Datenschutzerklärung, Privatsphäre, Bona Fides Detektei",
  alternates: {
    canonical: 'https://bona-fides.vercel.app/datenschutz',
  },
  openGraph: {
    title: "Datenschutz - BONA FIDES Detektei",
    description: "Datenschutzerklärung der BONA FIDES Detektei gemäß DSGVO. Transparente Informationen zur Datenverarbeitung.",
    url: 'https://bona-fides.vercel.app/datenschutz',
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
              <div className="space-y-8 font-mono text-sm text-gray-300 leading-relaxed">

                {/* 1. Verantwortlicher */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    1. Verantwortlicher
                  </h2>
                  <p className="mb-4">
                    Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                  </p>
                  <div className="bg-white/5 p-4 rounded border border-white/10">
                    <p>Bona Fides Detektei</p>
                    <p>E-Mail: ermittlungen@bonafides.agency</p>
                  </div>
                </div>

                {/* 2. Allgemeine Hinweise */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    2. Allgemeine Hinweise zur Datenverarbeitung
                  </h2>
                  <p className="mb-4">
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen
                    Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                  </p>
                  <p>
                    Die Nutzung unserer Website ist grundsätzlich ohne Angabe personenbezogener Daten möglich.
                    Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf
                    freiwilliger Basis.
                  </p>
                </div>

                {/* 3. Datenerfassung */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    3. Datenerfassung auf unserer Website
                  </h2>

                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Kontaktformular
                  </h3>
                  <p className="mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                    Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
                    der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>

                  <h3 className="text-xl font-serif font-bold text-white mb-3">
                    Server-Log-Dateien
                  </h3>
                  <p className="mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                    Server-Log-Dateien:
                  </p>
                  <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>
                    Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen
                    Datenquellen zusammengeführt. Die Speicherung erfolgt aus berechtigten Interessen zur
                    Systemsicherheit und -optimierung.
                  </p>
                </div>

                {/* 4. Google Analytics */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    4. Google Analytics
                  </h2>
                  <p className="mb-4">
                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die
                    Google Ireland Limited (&ldquo;Google&rdquo;), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="mb-4">
                    Google Analytics verwendet so genannte &ldquo;Cookies&rdquo;. Das sind Textdateien, die auf Ihrem
                    Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
                    ermöglichen.
                  </p>
                  <p className="mb-4">
                    Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden
                    in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                    Im Falle der Aktivierung der IP-Anonymisierung auf dieser Website, wird Ihre IP-Adresse
                    von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen
                    Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
                  </p>
                  <p className="mb-4">
                    Die Speicherung von Google-Analytics-Cookies und die Nutzung dieses Analyse-Tools
                    erfolgen auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                    berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot
                    als auch seine Werbung zu optimieren.
                  </p>
                  <p>
                    Sie können die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer
                    Browser-Software verhindern.
                  </p>
                </div>

                {/* 5. Cookies */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    5. Cookies
                  </h2>
                  <p className="mb-4">
                    Die Internetseiten verwenden teilweise so genannte Cookies. Cookies sind kleine
                    Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                    Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  <p className="mb-4">
                    Die meisten der von uns verwendeten Cookies sind so genannte &ldquo;Session-Cookies&rdquo;.
                    Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben
                    auf Ihrem Endgerät gespeichert bis Sie diese löschen.
                  </p>
                  <p>
                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
                    werden und Cookies nur im Einzelfall erlauben.
                  </p>
                </div>

                {/* 6. Rechte der betroffenen Person */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    6. Ihre Rechte
                  </h2>
                  <p className="mb-4">Sie haben folgende Rechte:</p>
                  <ul className="list-disc list-inside mb-4 space-y-2 pl-4">
                    <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns
                    verarbeiteten personenbezogenen Daten verlangen.</li>
                    <li><strong>Berichtigungsrecht (Art. 16 DSGVO):</strong> Sie können die Berichtigung
                    unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.</li>
                    <li><strong>Löschungsrecht (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer
                    personenbezogenen Daten verlangen.</li>
                    <li><strong>Einschränkungsrecht (Art. 18 DSGVO):</strong> Sie können die Einschränkung
                    der Verarbeitung verlangen.</li>
                    <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können der Verarbeitung
                    widersprechen.</li>
                    <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie können eine Übertragung
                    Ihrer Daten verlangen.</li>
                  </ul>
                </div>

                {/* 7. Widerruf */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    7. Widerruf Ihrer Einwilligung
                  </h2>
                  <p>
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
                    Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine
                    formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                    Datenverarbeitung bleibt vom Widerruf unberührt.
                  </p>
                </div>

                {/* 8. Beschwerde */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    8. Beschwerderecht bei der zuständigen Aufsichtsbehörde
                  </h2>
                  <p>
                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
                    einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts,
                    ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu.
                  </p>
                </div>

                {/* 9. SSL/TLS-Verschlüsselung */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    9. SSL- bzw. TLS-Verschlüsselung
                  </h2>
                  <p>
                    Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                    Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                    daran, dass die Adresszeile des Browsers von &ldquo;http://&rdquo; auf &ldquo;https://&rdquo; wechselt und an
                    dem Schloss-Symbol in Ihrer Browserzeile.
                  </p>
                </div>

                {/* 10. Kontakt */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-4">
                    10. Kontakt für Datenschutzfragen
                  </h2>
                  <p className="mb-4">
                    Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:
                  </p>
                  <div className="bg-white/5 p-4 rounded border border-white/10">
                    <p>Bona Fides Detektei</p>
                    <p>E-Mail: ermittlungen@bonafides.agency</p>
                  </div>
                  <p className="mt-4 text-xs text-gray-400">
                    Stand dieser Datenschutzerklärung: Dezember 2024
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