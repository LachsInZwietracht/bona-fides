/**
 * Annahmen für den Break-even-Rechner auf der Startseite.
 *
 * ACHTUNG: Tagessatz und Aufwandsspannen sind Schätzwerte und keine Preisliste.
 * Sie erscheinen dem Besucher als grobe Einordnung, nicht als Angebot. Wenn sich
 * eure realen Sätze ändern, ist diese Datei die einzige Stelle, die angepasst
 * werden muss.
 */

/** Angenommene Tagessatzspanne in Euro. */
export const DAILY_RATE = { min: 700, max: 1100 } as const

export interface CalculatorCase {
  value: string
  label: string
  /** Typischer Einsatzumfang in Ermittlungstagen */
  days: { min: number; max: number }
  /** Startwert des Schadensreglers – der Fall, den Mandanten typischerweise schildern */
  defaultDamage: number
  /** Obergrenze des Reglers */
  maxDamage: number
  /** Was der Mandant konkret gewinnt, wenn der Sachverhalt geklärt ist */
  payoff: string
  /** Passende Leistungsseite */
  slug: string
}

export const calculatorCases: CalculatorCase[] = [
  {
    value: "untreue",
    label: "Untreue oder Korruption im Einkauf",
    days: { min: 8, max: 20 },
    defaultDamage: 120000,
    maxDamage: 1000000,
    payoff: "Schaden beziffert, Regress und Trennung belastbar begründet",
    slug: "wirtschaftsdetektei",
  },
  {
    value: "lohnfortzahlung",
    label: "Vorgetäuschte Arbeitsunfähigkeit",
    days: { min: 2, max: 5 },
    defaultDamage: 9000,
    maxDamage: 120000,
    payoff: "Entgeltfortzahlung gestoppt, Kündigung tragfähig, Kosten erstattungsfähig",
    slug: "lohnfortzahlungsbetrug",
  },
  {
    value: "know-how",
    label: "Know-how-Abfluss oder Konkurrenztätigkeit",
    days: { min: 6, max: 15 },
    defaultDamage: 90000,
    maxDamage: 1500000,
    payoff: "Unterlassung durchsetzbar, Abfluss gestoppt, Schadensersatz begründbar",
    slug: "wettbewerbsverstoesse",
  },
  {
    value: "schwund",
    label: "Diebstahl oder Schwund im Betrieb",
    days: { min: 5, max: 12 },
    defaultDamage: 45000,
    maxDamage: 500000,
    payoff: "Quelle identifiziert, laufender Abfluss beendet",
    slug: "wirtschaftsdetektei",
  },
  {
    value: "versicherung",
    label: "Zweifelhafter Schadenfall",
    days: { min: 3, max: 10 },
    defaultDamage: 60000,
    maxDamage: 800000,
    payoff: "Regulierung fundiert entschieden statt aus Unsicherheit gezahlt",
    slug: "versicherungsbetrug",
  },
  {
    value: "forderung",
    label: "Offene Forderung ohne auffindbares Vermögen",
    days: { min: 4, max: 10 },
    defaultDamage: 75000,
    maxDamage: 1000000,
    payoff: "Vollstreckungsaussicht geklärt, bevor weitere Kosten entstehen",
    slug: "asset-tracing",
  },
]

export function effortRange(caseItem: CalculatorCase) {
  return {
    min: caseItem.days.min * DAILY_RATE.min,
    max: caseItem.days.max * DAILY_RATE.max,
  }
}
