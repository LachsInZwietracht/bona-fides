/**
 * Hero-Entwürfe – drei Bildkonzepte für die Startseite.
 *
 * Gleicher Inhalt, drei unterschiedliche Bildmetaphern und Layouts.
 * Erreichbar nur über die unten stehenden Review-Tokens: nicht verlinkt,
 * nicht in Navigation, Sitemap oder robots.txt, per Middleware auf noindex.
 */
export const heroDesigns = {
  indiz: {
    number: "01",
    name: "Das Indiz",
    metaphor: "Fragment → Beweis",
    description:
      "Verstreute Bruchstücke ordnen sich zum versiegelten Monolithen. Vollflächiges Bild, Text links – das Konzept, das der Referenz am nächsten kommt.",
    image: "/hero-indiz-v1.png",
    reviewToken: "hero-indiz-7f7796815f34b551",
  },
  evidenz: {
    number: "02",
    name: "Die Evidenz",
    metaphor: "Rauschen → Signal",
    description:
      "Ein formloses Partikelfeld verdichtet sich zu einer exakten Linie. Zweispaltig, Bild als eigenständiges Tafelbild neben der Aussage.",
    image: "/hero-evidenz-v1.png",
    reviewToken: "hero-evidenz-8a21ebed21c02007",
  },
  geflecht: {
    number: "03",
    name: "Das Geflecht",
    metaphor: "Fassade → Struktur",
    description:
      "Hinter der glatten Fassade liegt das Geflecht aus Verbindungen. Vollflächig, Aussage am unteren Rand verankert, Fuge als Blickfang rechts.",
    image: "/hero-geflecht-v1.png",
    reviewToken: "hero-geflecht-dd49df7e576fe5a4",
  },
} as const

export type HeroDesignVariant = keyof typeof heroDesigns

export const heroDesignOrder = ["indiz", "evidenz", "geflecht"] as const

/** Sammelseite mit allen drei Entwürfen untereinander. */
export const heroOverviewToken = "hero-vergleich-3cca50f3308af36e"

export function getHeroDesignByToken(token: string): HeroDesignVariant | undefined {
  return heroDesignOrder.find((variant) => heroDesigns[variant].reviewToken === token)
}

export function heroReviewPath(token: string) {
  return `/entwuerfe/${token}`
}
