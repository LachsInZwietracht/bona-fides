/**
 * Belegte Schadenszahlen für die Section „Was auf dem Spiel steht".
 *
 * WICHTIG: Jede Zahl braucht eine zitierbare Quelle mit Jahr. Es gibt keine
 * erhobene Statistik darüber, wie viel Unternehmen durch die Beauftragung einer
 * Detektei „sparen" – deshalb steht hier ausschließlich der dokumentierte
 * Marktschaden. Keine Zahl ohne Quelle.
 */

export interface LossFigure {
  /** Die Zahl, die im Blick bleibt */
  value: string
  unit: string
  /** Worauf sich die Zahl bezieht – die eine Aussage der Kachel */
  claim: string
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
    unit: "Mrd. €",
    claim: "Schaden durch Diebstahl, Spionage und Sabotage – 87 % der Unternehmen betroffen",
    source: {
      label: "Bitkom, Wirtschaftsschutz",
      url: "https://www.bitkom.org/Bitkom/Publikationen/Wirtschaftsschutz",
      year: "2025",
    },
    slug: "cyber-forensik",
  },
  {
    value: "82",
    unit: "Mrd. €",
    claim: "Entgeltfortzahlung, die Arbeitgeber im Krankheitsfall getragen haben",
    source: {
      label: "IW Köln",
      url: "https://www.iwkoeln.de/studien/jochen-pimpertz-entgeltfortzahlung-bei-krankheit-kostet-82-milliarden-euro.html",
      year: "2024",
    },
    slug: "lohnfortzahlungsbetrug",
  },
  {
    value: "6",
    unit: "Mrd. €",
    claim: "Versicherungsbetrug jährlich – rund 10 % der Schadenmeldungen gelten als auffällig",
    source: {
      label: "GDV",
      url: "https://www.gdv.de/gdv/medien/medieninformationen/versicherungsbetrug-verursacht-schaeden-von-ueber-sechs-milliarden-euro-im-jahr-176852",
      year: "2024",
    },
    slug: "versicherungsbetrug",
  },
  {
    value: "2,76",
    unit: "Mrd. €",
    claim: "polizeilich erfasste Wirtschaftskriminalität – ein Drittel des gesamten Schadens",
    source: {
      label: "BKA, Bundeslagebild",
      url: "https://www.bka.de/SharedDocs/Kurzmeldungen/DE/Kurzmeldungen/250731_BLB_Wikri24.html",
      year: "2024",
    },
    slug: "wirtschaftsdetektei",
  },
]
