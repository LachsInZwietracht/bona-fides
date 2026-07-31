/**
 * Belegte Schadenszahlen für die Section „Was auf dem Spiel steht".
 *
 * WICHTIG: Jede Zahl braucht eine zitierbare Quelle mit Jahr. Es gibt keine
 * erhobene Statistik darüber, wie viel Unternehmen durch die Beauftragung einer
 * Detektei „sparen" – deshalb steht hier der dokumentierte Marktschaden und
 * daneben, was eine Ermittlung daran konkret ändert. Keine Zahl ohne Quelle.
 */

export interface LossFigure {
  /** Die Zahl, die im Blick bleibt */
  value: string
  unit: string
  /** Worauf sich die Zahl bezieht */
  claim: string
  /** Einordnung, damit die Zahl nicht größer wirkt, als sie ist */
  context: string
  /** Was eine Ermittlung an dieser Lage ändert – qualitativ, nicht beziffert */
  lever: string
  source: {
    label: string
    url: string
    year: string
  }
  /** Passende Leistungsseite */
  slug: string
}

export const lossFigures: LossFigure[] = [
  {
    value: "289",
    unit: "Mrd. € pro Jahr",
    claim: "Schaden für die deutsche Wirtschaft durch Diebstahl, Spionage und Sabotage",
    context:
      "87 % der befragten Unternehmen waren betroffen, 70 % des Schadens gehen auf Cyberangriffe zurück.",
    lever:
      "Wer den Abfluss nicht findet, zahlt ihn weiter. Forensik klärt, welcher Weg genutzt wurde und wer Zugriff hatte.",
    source: {
      label: "Bitkom, Wirtschaftsschutz 2025 (1.002 Unternehmen)",
      url: "https://www.bitkom.org/Bitkom/Publikationen/Wirtschaftsschutz",
      year: "2025",
    },
    slug: "cyber-forensik",
  },
  {
    value: "82",
    unit: "Mrd. € pro Jahr",
    claim: "Entgeltfortzahlung, die Arbeitgeber im Krankheitsfall getragen haben",
    context:
      "Mehr als doppelt so viel wie 2010. Der Betrag umfasst Lohnfortzahlung und Sozialbeiträge.",
    lever:
      "Nur ein Bruchteil davon ist missbräuchlich – aber bei begründetem Verdacht sind die Ermittlungskosten nach arbeitsgerichtlicher Rechtsprechung grundsätzlich vom Verursacher zu ersetzen.",
    source: {
      label: "Institut der deutschen Wirtschaft, Entgeltfortzahlung 2024",
      url: "https://www.iwkoeln.de/studien/jochen-pimpertz-entgeltfortzahlung-bei-krankheit-kostet-82-milliarden-euro.html",
      year: "2024",
    },
    slug: "lohnfortzahlungsbetrug",
  },
  {
    value: "6",
    unit: "Mrd. € pro Jahr",
    claim: "geschätzter Schaden durch Versicherungsbetrug",
    context:
      "Rund 10 % der Schadenmeldungen gelten als auffällig – auffällig heißt nicht automatisch betrügerisch.",
    lever:
      "Eine Prüfung vor der Regulierung trennt den berechtigten Anspruch vom konstruierten Schaden, bevor gezahlt wird.",
    source: {
      label: "Gesamtverband der Deutschen Versicherungswirtschaft (GDV)",
      url: "https://www.gdv.de/gdv/medien/medieninformationen/versicherungsbetrug-verursacht-schaeden-von-ueber-sechs-milliarden-euro-im-jahr-176852",
      year: "2024",
    },
    slug: "versicherungsbetrug",
  },
  {
    value: "2,76",
    unit: "Mrd. € pro Jahr",
    claim: "polizeilich erfasste Schadenssumme aus Wirtschaftskriminalität",
    context:
      "Rund ein Drittel des gesamten monetären Schadens der Kriminalstatistik – bei nur etwa 1 % der erfassten Straftaten.",
    lever:
      "Erfasst wird nur, was angezeigt wird. Ein dokumentierter Sachverhalt ist die Voraussetzung dafür, Ansprüche überhaupt geltend zu machen.",
    source: {
      label: "BKA, Bundeslagebild Wirtschaftskriminalität 2024",
      url: "https://www.bka.de/SharedDocs/Kurzmeldungen/DE/Kurzmeldungen/250731_BLB_Wikri24.html",
      year: "2024",
    },
    slug: "wirtschaftsdetektei",
  },
]
