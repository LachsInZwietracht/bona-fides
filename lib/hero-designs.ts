/**
 * Hero-Entwürfe – sechs Konzepte für die Startseite.
 *
 * 01–03 arbeiten mit Bildmetaphern, 04–06 kommen ohne Bild aus und tragen die
 * Aussage über Typografie, Bewegung und Layout. Gleicher Text in allen sechs.
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
  redaktion: {
    number: "04",
    name: "Die Schwärzung",
    metaphor: "Verdeckt → belegt",
    description:
      "Die Aussage steht unter Messingbalken, die beim Laden weglaufen – eine Akte, die vor den Augen des Mandanten freigegeben wird. Kein Bild, reine Typografie.",
    reviewToken: "hero-schwaerzung-8a6fd24a63bc2090",
  },
  observation: {
    number: "05",
    name: "Die Observation",
    metaphor: "Blickfeld → Befund",
    description:
      "Der Bildschirm wird zum Sucher: Eckwinkel, wandernder Suchstrahl und ein Fadenkreuz, das dem Zeiger folgt. Fallarten laufen als Band am unteren Rand.",
    reviewToken: "hero-observation-2087ade476f8874f",
  },
  dossier: {
    number: "06",
    name: "Das Dossier",
    metaphor: "Akte → Aussage",
    description:
      "Editorialer Bruch zwischen Papier und Schwarz. Die Wortmarke liegt über der Naht und kippt von Weiß auf Tinte, sobald sie das Papier kreuzt.",
    reviewToken: "hero-dossier-12722cdc37c829c6",
  },
} as const

export type HeroDesignVariant = keyof typeof heroDesigns

export const heroDesignOrder = [
  "indiz",
  "evidenz",
  "geflecht",
  "redaktion",
  "observation",
  "dossier",
] as const

/** Sammelseite mit allen Entwürfen untereinander. */
export const heroOverviewToken = "hero-vergleich-3cca50f3308af36e"

export function getHeroDesignByToken(token: string): HeroDesignVariant | undefined {
  return heroDesignOrder.find((variant) => heroDesigns[variant].reviewToken === token)
}

export function heroReviewPath(token: string) {
  return `/entwuerfe/${token}`
}
