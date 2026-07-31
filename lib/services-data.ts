export type ServiceAudience = "b2b" | "b2c"

export interface ServiceFaq {
  question: string
  answer: string
}

export interface ServiceMethod {
  title: string
  description: string
}

export interface Service {
  /** URL segment under /leistungen */
  slug: string
  audience: ServiceAudience
  /** Short label for navigation and cards */
  navLabel: string
  /** Icon name resolved in components/service-icon.tsx */
  icon: string
  /** One-line teaser used on cards and in the mega menu */
  teaser: string
  h1: string
  kicker: string
  /** Opening paragraph – answers "ist das hier richtig für mich?" in 2 Sätzen */
  lead: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  /** Typische Anlässe – buyer recognises their own situation here */
  triggers: string[]
  /** Konkrete Ergebnisse, die der Mandant erhält */
  outcomes: string[]
  methods: ServiceMethod[]
  deliverables: string[]
  /** Rechtlicher Rahmen – Vertrauensanker, kein Rechtsrat */
  legalNote: string
  /** Grobe Einordnung von Aufwand und Rahmen */
  frame: { label: string; value: string }[]
  faq: ServiceFaq[]
  /** Slugs verwandter Leistungen für interne Verlinkung */
  related: string[]
  /** Zielgruppen, die diese Leistung typischerweise beauftragen */
  buyers: string[]
}

const rechtshinweis =
  "Wir ermitteln ausschließlich im Rahmen des geltenden Rechts und dokumentieren jeden Schritt so, dass er einer Prüfung standhält. Die Bewertung der Verwertbarkeit im konkreten Verfahren obliegt Ihrer Rechtsvertretung – diese Seite ist keine Rechtsberatung."

export const services: Service[] = [
  {
    slug: "wirtschaftsdetektei",
    audience: "b2b",
    navLabel: "Wirtschaftsermittlungen",
    icon: "building",
    teaser: "Wirtschaftsdelikte im eigenen Unternehmen aufklären – belastbar und diskret.",
    h1: "Wirtschaftsdetektei für Unternehmen",
    kicker: "Wirtschaftsermittlungen",
    lead: "Wenn Zahlen, Warenbestände oder Aussagen nicht zusammenpassen, brauchen Sie keine Vermutung, sondern einen belastbaren Sachverhalt. Wir klären Wirtschaftsdelikte im Unternehmen strukturiert auf – ohne dass der Betrieb davon erfährt, solange das nicht gewollt ist.",
    metaTitle: "Wirtschaftsdetektei für Unternehmen",
    metaDescription:
      "Wirtschaftsdetektei für Unternehmen: Aufklärung von Untreue, Diebstahl, Korruption und Wirtschaftsbetrug. Gerichtsverwertbar dokumentiert, DSGVO-konform, bundesweit. Erste Einschätzung binnen 24 Stunden.",
    keywords: [
      "Wirtschaftsdetektei",
      "Detektei Unternehmen",
      "Wirtschaftsermittlungen",
      "Untreue aufklären",
      "Korruption Ermittlung",
      "Wirtschaftskriminalität Unternehmen",
      "Detektei Wirtschaftskriminalität",
    ],
    triggers: [
      "Unerklärliche Schwundquoten in Lager, Kasse oder Warenwirtschaft",
      "Auffällige Zahlungsflüsse, Scheinrechnungen oder Lieferanten ohne Substanz",
      "Verdacht auf Kick-back-Zahlungen im Einkauf",
      "Anonymer Hinweis aus dem Hinweisgebersystem, der verifiziert werden muss",
      "Vermögensschaden, für den Sie Regress nehmen oder Anzeige erstatten wollen",
    ],
    outcomes: [
      "Ein geklärter Sachverhalt statt eines Verdachts – schriftlich, chronologisch, belegt",
      "Beweismittel mit lückenloser Kette, verwendbar in arbeits-, zivil- und strafrechtlichen Verfahren",
      "Eine Schadenshöhe, die Sie beziffern und geltend machen können",
      "Handlungsoptionen mit Konsequenzen – von der Abmahnung bis zur Strafanzeige",
    ],
    methods: [
      {
        title: "Sachverhaltsanalyse",
        description:
          "Wir sichten vorhandene Unterlagen, Systemdaten und Aussagen und bestimmen, welche Hypothese sich mit welchem Mittel überhaupt belegen lässt.",
      },
      {
        title: "Daten- und Belegprüfung",
        description:
          "Abgleich von Buchungen, Bestellungen, Wareneingängen und Zahlungsläufen zur Identifikation von Mustern, Dubletten und Anomalien.",
      },
      {
        title: "Umfeld- und Beteiligtenrecherche",
        description:
          "Verflechtungen zwischen Mitarbeitenden, Lieferanten und Dritten – Beteiligungen, Adressgleichheiten, wirtschaftliche Abhängigkeiten.",
      },
      {
        title: "Verdeckte Feldarbeit",
        description:
          "Wo erforderlich und rechtlich zulässig: Observation, Testkäufe und Vor-Ort-Prüfungen durch unser bundesweites Ermittlernetzwerk.",
      },
    ],
    deliverables: [
      "Ermittlungsbericht mit Executive Summary für die Geschäftsführung",
      "Chronologie mit Einzelnachweisen und Quellenangabe",
      "Foto-, Video- und Dokumentenbeweise mit Zeitstempel",
      "Methodendokumentation für die rechtliche Prüfung",
      "Persönliches Briefing für Geschäftsführung, Compliance oder Rechtsabteilung",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Erste Einschätzung", value: "kostenfrei, binnen 24 h" },
      { label: "Typische Laufzeit", value: "2 Wochen bis 4 Monate" },
      { label: "Abrechnung", value: "Festpreis je Phase oder Tagessatz" },
    ],
    faq: [
      {
        question: "Bekommt die Belegschaft mit, dass ermittelt wird?",
        answer:
          "Nein, solange das nicht Teil Ihrer Strategie ist. Wir arbeiten verdeckt, kommunizieren ausschließlich über einen von Ihnen benannten Kontakt und hinterlassen keine Spuren in Ihren Systemen, die auf eine laufende Ermittlung hindeuten.",
      },
      {
        question: "Können wir die Ermittlungskosten vom Verursacher zurückfordern?",
        answer:
          "In vielen Fällen ja. Das Bundesarbeitsgericht hat mehrfach entschieden, dass Arbeitgeber notwendige Detektivkosten ersetzt verlangen können, wenn ein konkreter Verdacht auf eine vorsätzliche Vertragspflichtverletzung bestand und sich dieser bestätigt. Voraussetzung ist eine saubere Dokumentation von Anlass, Umfang und Erforderlichkeit – genau darauf ist unser Berichtsformat ausgelegt. Die Durchsetzung im Einzelfall bewertet Ihre Rechtsvertretung.",
      },
      {
        question: "Was passiert, wenn sich der Verdacht nicht bestätigt?",
        answer:
          "Auch das ist ein verwertbares Ergebnis. Sie erhalten dokumentiert, was mit welcher Methode geprüft wurde und warum sich der Verdacht nicht erhärten ließ. Das entlastet Beschuldigte und schützt Sie vor voreiligen personellen Maßnahmen, die später teuer werden.",
      },
    ],
    related: ["interne-ermittlungen", "wettbewerbsverstoesse", "asset-tracing"],
    buyers: ["Geschäftsführung", "Compliance", "Rechtsabteilung", "Konzernrevision"],
  },
  {
    slug: "lohnfortzahlungsbetrug",
    audience: "b2b",
    navLabel: "Lohnfortzahlungsbetrug",
    icon: "user-check",
    teaser: "Vorgetäuschte Arbeitsunfähigkeit beweisen – rechtssicher und wirtschaftlich.",
    h1: "Detektei bei Lohnfortzahlungsbetrug und vorgetäuschter Krankheit",
    kicker: "Personal & Arbeitsrecht",
    lead: "Eine Krankmeldung, die verdächtig gut zum abgelehnten Urlaubsantrag passt, kostet Sie Lohnfortzahlung, Vertretung und Betriebsfrieden. Wir klären, ob tatsächlich Arbeitsunfähigkeit vorliegt – mit Beweisen, die vor dem Arbeitsgericht Bestand haben.",
    metaTitle: "Detektei bei Lohnfortzahlungsbetrug",
    metaDescription:
      "Verdacht auf vorgetäuschte Arbeitsunfähigkeit? Wir erschüttern den Beweiswert der AU-Bescheinigung mit gerichtsverwertbarer Dokumentation. Bundesweite Observation, DSGVO-konform, Einschätzung in 24 h.",
    keywords: [
      "Detektei Lohnfortzahlungsbetrug",
      "vorgetäuschte Krankheit Detektei",
      "Detektei Krankschreibung überprüfen",
      "Arbeitsunfähigkeit Observation",
      "Blaumacher überführen",
      "Detektiv Arbeitgeber Krankmeldung",
    ],
    triggers: [
      "Krankmeldung direkt nach abgelehntem Urlaub, Abmahnung oder Konflikt",
      "Auffällige Häufung an Brückentagen, Freitagen oder Montagen",
      "Hinweise, dass die Person während der AU einer anderen Tätigkeit nachgeht",
      "Nebentätigkeit oder Schwarzarbeit während der Lohnfortzahlung",
      "Langzeiterkrankung mit widersprüchlichen Beobachtungen aus dem Team",
    ],
    outcomes: [
      "Dokumentierte Tätigkeiten, die mit der attestierten Arbeitsunfähigkeit unvereinbar sind",
      "Beweismittel, die den Beweiswert der AU-Bescheinigung erschüttern können",
      "Grundlage für Abmahnung, Kündigung oder Rückforderung der Entgeltfortzahlung",
      "Dokumentation von Anlass und Erforderlichkeit – Basis für den Kostenersatz",
    ],
    methods: [
      {
        title: "Verdachtsprüfung vor dem Einsatz",
        description:
          "Wir prüfen zuerst, ob Ihr Anlass konkret genug ist. Ohne tragfähigen Verdacht raten wir ab – eine Observation ins Blaue hinein schadet Ihnen mehr, als sie nützt.",
      },
      {
        title: "Verhältnismäßige Observation",
        description:
          "Zeitlich und örtlich eng begrenzte Observation, ausschließlich im öffentlich einsehbaren Raum, dokumentiert mit lückenlosem Zeitprotokoll.",
      },
      {
        title: "Beweissicherung",
        description:
          "Foto- und Videomaterial mit Zeitstempel, Bewegungsprotokoll und Zeugenbereitschaft der eingesetzten Ermittler.",
      },
      {
        title: "Auswertung für das Arbeitsrecht",
        description:
          "Aufbereitung so, dass Ihre Kanzlei die Beobachtungen unmittelbar in Anhörung, Kündigungsschutzverfahren oder Rückforderung einbringen kann.",
      },
    ],
    deliverables: [
      "Observationsbericht mit minutengenauem Ablaufprotokoll",
      "Bild- und Videomaterial mit Zeitstempel",
      "Zeugenaussage der eingesetzten Ermittler vor Gericht",
      "Kostennachweis in der vom Arbeitsgericht erwarteten Form",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Vorlaufzeit", value: "Einsatzbereit in 24–48 h" },
      { label: "Typischer Umfang", value: "2–5 Observationstage" },
      { label: "Abrechnung", value: "Transparenter Tagessatz, Obergrenze vereinbar" },
    ],
    faq: [
      {
        question: "Ist die Observation eines krankgemeldeten Mitarbeiters überhaupt erlaubt?",
        answer:
          "Sie ist zulässig, wenn ein konkreter, durch Tatsachen begründeter Verdacht besteht und die Maßnahme verhältnismäßig ist, also kein milderes Mittel zur Verfügung steht. Der bloße Ärger über eine Krankmeldung reicht nicht. Wir dokumentieren den Anlass deshalb vor dem Einsatz und begrenzen Umfang und Dauer strikt – das ist zugleich die Voraussetzung für den späteren Kostenersatz.",
      },
      {
        question: "Was kostet der Einsatz – und rechnet sich das?",
        answer:
          "Ein Observationstag bewegt sich im niedrigen vierstelligen Bereich. Dem stehen Entgeltfortzahlung, Sozialabgaben, Vertretungskosten und Produktivitätsverlust gegenüber, die bei mehrwöchigen Fällen schnell ein Vielfaches erreichen. Bei bestätigtem Verdacht sind die notwendigen Kosten zudem grundsätzlich erstattungsfähig. Sie erhalten vorab eine Aufwandsschätzung mit Obergrenze.",
      },
      {
        question: "Wie schnell können Sie beginnen?",
        answer:
          "In der Regel innerhalb von 24 bis 48 Stunden nach Auftragserteilung. Bei laufenden Krankmeldungen zählt Zeit – melden Sie sich deshalb früh, auch wenn der Sachverhalt noch nicht vollständig ist.",
      },
      {
        question: "Kann der Mitarbeiter uns wegen der Observation verklagen?",
        answer:
          "Bei unverhältnismäßiger oder anlassloser Überwachung drohen Ansprüche wegen Persönlichkeitsrechtsverletzung. Genau deshalb prüfen wir die Verhältnismäßigkeit vor dem Einsatz, halten sie schriftlich fest und lehnen Aufträge ab, die diese Schwelle nicht erreichen.",
      },
    ],
    related: ["wettbewerbsverstoesse", "interne-ermittlungen", "wirtschaftsdetektei"],
    buyers: ["Personalleitung", "Geschäftsführung", "Arbeitsrechtskanzleien"],
  },
  {
    slug: "interne-ermittlungen",
    audience: "b2b",
    navLabel: "Interne Ermittlungen",
    icon: "shield",
    teaser: "Compliance-Vorfälle und Hinweise strukturiert und rechtssicher untersuchen.",
    h1: "Interne Ermittlungen und Compliance-Untersuchungen",
    kicker: "Compliance & Governance",
    lead: "Ein Hinweis aus dem Meldesystem, ein Vorwurf gegen eine Führungskraft, ein Verdacht auf Regelverstoß: Solche Sachverhalte müssen unabhängig, dokumentiert und ohne Interessenkonflikt aufgeklärt werden. Wir übernehmen die Untersuchung als externe Instanz – oder unterstützen Ihr Compliance-Team dort, wo interne Nähe zum Problem wird.",
    metaTitle: "Interne Ermittlungen für Unternehmen",
    metaDescription:
      "Externe interne Ermittlungen für Compliance, Revision und Geschäftsführung: Hinweisgebermeldungen verifizieren, Vorfälle unabhängig untersuchen, rechtssicher dokumentieren. Bundesweit, DSGVO-konform.",
    keywords: [
      "interne Ermittlungen",
      "Compliance Untersuchung",
      "Internal Investigations Deutschland",
      "Hinweisgebersystem Meldung prüfen",
      "Whistleblower Verifikation",
      "Compliance Detektei",
    ],
    triggers: [
      "Meldung im Hinweisgebersystem, die über eine reine Plausibilitätsprüfung hinausgeht",
      "Vorwurf gegen Führungskräfte, bei dem interne Aufklärung befangen wäre",
      "Verdacht auf Verstöße gegen Richtlinien, Sanktionsrecht oder Vergaberegeln",
      "Vorbereitung einer Selbstanzeige oder Behördenauskunft",
      "Nachweisbedarf gegenüber Aufsichtsrat, Versicherer oder Mutterkonzern",
    ],
    outcomes: [
      "Unabhängiger Untersuchungsbericht ohne interne Interessenkonflikte",
      "Belastbare Faktenbasis für arbeitsrechtliche und organisatorische Konsequenzen",
      "Nachweis der Aufklärungsbemühungen gegenüber Aufsichtsgremien und Behörden",
      "Konkrete Empfehlungen zur Schließung der ausgenutzten Lücke",
    ],
    methods: [
      {
        title: "Untersuchungsplan",
        description:
          "Scope, Hypothesen, Beweismittelstrategie und Eskalationswege werden vor dem ersten Schritt schriftlich festgelegt und mit Ihnen abgestimmt.",
      },
      {
        title: "Dokumenten- und Datenauswertung",
        description:
          "Strukturierte Sichtung relevanter Unterlagen und Systemdaten unter Wahrung der Verhältnismäßigkeit und der Rechte der Betroffenen.",
      },
      {
        title: "Befragungen",
        description:
          "Strukturierte Interviews mit Zeugen und Betroffenen, protokolliert und unter Beachtung der arbeitsrechtlichen Rahmenbedingungen.",
      },
      {
        title: "Bewertung und Abschluss",
        description:
          "Feststellungen, offene Punkte und Empfehlungen – klar getrennt, damit Ihre Entscheider wissen, was belegt ist und was nicht.",
      },
    ],
    deliverables: [
      "Untersuchungsbericht mit klarer Trennung von Feststellung und Bewertung",
      "Interviewprotokolle und Beweismittelverzeichnis",
      "Dokumentation des Untersuchungsvorgehens für Aufsicht und Prüfer",
      "Maßnahmenempfehlungen mit Priorisierung",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Erstgespräch", value: "vertraulich, auf Wunsch unter NDA" },
      { label: "Typische Laufzeit", value: "3 Wochen bis 6 Monate" },
      { label: "Abrechnung", value: "Phasenfestpreis mit definierten Deliverables" },
    ],
    faq: [
      {
        question: "Warum extern untersuchen statt intern?",
        answer:
          "Weil die Unabhängigkeit der Untersuchung später genauso geprüft wird wie ihr Ergebnis. Wenn Betroffene Vorgesetzte, Gesellschafter oder Mitglieder des Compliance-Teams selbst sind, ist eine interne Aufklärung angreifbar. Ein externer Untersuchungsbericht hält gegenüber Aufsichtsrat, Versicherer und Behörden stand.",
      },
      {
        question: "Arbeiten Sie mit unserer Kanzlei zusammen?",
        answer:
          "Regelmäßig. Wir übernehmen die ermittelnde Arbeit und liefern die Faktenbasis, Ihre Kanzlei verantwortet die rechtliche Bewertung. Auf Wunsch berichten wir direkt an die mandatierte Kanzlei.",
      },
      {
        question: "Wie schützen Sie die Identität von Hinweisgebern?",
        answer:
          "Wir arbeiten mit getrennten Mandatsumgebungen, Need-to-know-Zugriff und pseudonymisierten Aktenbezeichnungen. Rückschlüsse auf die meldende Person werden im Bericht vermieden, soweit das mit der Beweisführung vereinbar ist.",
      },
    ],
    related: ["wirtschaftsdetektei", "cyber-forensik", "due-diligence"],
    buyers: ["Compliance Officer", "Aufsichtsrat", "Rechtsabteilung", "Konzernrevision"],
  },
  {
    slug: "due-diligence",
    audience: "b2b",
    navLabel: "Due Diligence",
    icon: "search",
    teaser: "Geschäftspartner, Investoren und Kandidaten prüfen – vor der Unterschrift.",
    h1: "Business Partner Due Diligence und Background Checks",
    kicker: "Risikoprüfung",
    lead: "Ein Handelsregisterauszug sagt Ihnen, dass es die Firma gibt – nicht, wer wirklich dahintersteht. Wir prüfen Geschäftspartner, Investoren, Zielunternehmen und Schlüsselpersonen, bevor Verträge, Kapital oder Reputation im Feuer stehen.",
    metaTitle: "Business Partner Due Diligence",
    metaDescription:
      "Business Partner Due Diligence: Wirtschaftlich Berechtigte, Verflechtungen, Bonität, Reputation und Sanktionslisten prüfen. Für M&A, Einkauf und Investment – international, DSGVO-konform.",
    keywords: [
      "Due Diligence Detektei",
      "Business Partner Due Diligence",
      "Background Check Unternehmen",
      "Geschäftspartner überprüfen lassen",
      "Integrity Due Diligence",
      "Pre-Employment Screening Führungskräfte",
    ],
    triggers: [
      "Neuer Lieferant, Vertriebspartner oder Joint-Venture-Partner vor Vertragsschluss",
      "Zielunternehmen im M&A-Prozess mit unklarer Eigentümerstruktur",
      "Investor oder Kapitalgeber, dessen Mittelherkunft nicht nachvollziehbar ist",
      "Kandidat für eine Schlüsselposition mit lückenhaftem Lebenslauf",
      "Auffälligkeiten in bestehenden Geschäftsbeziehungen",
    ],
    outcomes: [
      "Klarheit über wirtschaftlich Berechtigte und tatsächliche Entscheidungsträger",
      "Aufgedeckte Verflechtungen, Interessenkonflikte und Strohmannstrukturen",
      "Bewertete Risiken aus Insolvenzhistorie, Verfahren und Reputation",
      "Eine dokumentierte Entscheidungsgrundlage, die Ihre Sorgfaltspflicht belegt",
    ],
    methods: [
      {
        title: "Register- und Quellenrecherche",
        description:
          "Handels-, Insolvenz- und Transparenzregister, Jahresabschlüsse, Verfahrensdatenbanken und internationale Äquivalente.",
      },
      {
        title: "OSINT-Analyse",
        description:
          "Strukturierte Auswertung öffentlich zugänglicher Quellen: Medien, Fachpresse, Netzwerke, Domains, Ausschreibungen und Leaks-Datenbanken.",
      },
      {
        title: "Verflechtungsanalyse",
        description:
          "Beteiligungen, Adress- und Personengleichheiten, gemeinsame Mandate – visualisiert als Netzwerk statt als Textwüste.",
      },
      {
        title: "Verifikation vor Ort",
        description:
          "Existenz, Betriebsgröße und Geschäftstätigkeit prüfen wir bei Bedarf physisch – Briefkastenfirmen erkennt man selten am Bildschirm.",
      },
    ],
    deliverables: [
      "Due-Diligence-Bericht mit Ampelbewertung je Risikodimension",
      "Verflechtungsgrafik der beteiligten Gesellschaften und Personen",
      "Quellenverzeichnis mit Abrufdatum für die Nachprüfbarkeit",
      "Red-Flag-Zusammenfassung für Entscheidungsvorlagen",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Basisprüfung", value: "3–5 Werktage" },
      { label: "Vertiefte Prüfung", value: "2–4 Wochen, auch international" },
      { label: "Abrechnung", value: "Festpreis je Prüftiefe" },
    ],
    faq: [
      {
        question: "Wie unterscheidet sich das von einer Wirtschaftsauskunft?",
        answer:
          "Eine Wirtschaftsauskunft liefert strukturierte Daten aus vorhandenen Beständen. Wir recherchieren zusätzlich das, was in keiner Datenbank steht: tatsächliche Entscheidungsträger hinter Treuhandkonstruktionen, Reputation im Markt, laufende Auseinandersetzungen und die Frage, ob am angegebenen Sitz überhaupt ein Geschäftsbetrieb existiert.",
      },
      {
        question: "Prüfen Sie auch international?",
        answer:
          "Ja. Über geprüfte Partner in Europa, Nordamerika, dem Nahen Osten und Asien – jeweils unter Beachtung der lokalen Rechtslage. Bei Jurisdiktionen mit eingeschränkter Registertransparenz benennen wir offen, welche Aussagen belastbar sind und welche nicht.",
      },
      {
        question: "Erfährt der Geprüfte von der Prüfung?",
        answer:
          "Bei der Standardprüfung nicht – sie stützt sich auf öffentlich zugängliche und registerbasierte Quellen. Sobald Befragungen im Marktumfeld sinnvoll werden, stimmen wir das vorher mit Ihnen ab.",
      },
    ],
    related: ["asset-tracing", "wirtschaftsdetektei", "interne-ermittlungen"],
    buyers: ["M&A-Teams", "Einkauf", "Family Offices", "Investoren", "Geschäftsführung"],
  },
  {
    slug: "versicherungsbetrug",
    audience: "b2b",
    navLabel: "Versicherungsbetrug",
    icon: "file-search",
    teaser: "Zweifelhafte Schadenfälle prüfen, bevor reguliert wird.",
    h1: "Versicherungsbetrug aufdecken – Ermittlungen für Versicherer",
    kicker: "Versicherungswirtschaft",
    lead: "Zwischen berechtigtem Anspruch und konstruiertem Schaden liegt oft nur eine gründliche Prüfung. Wir unterstützen Schadenabteilungen und Sonderermittlungen mit Feldarbeit, Plausibilitätsanalyse und gerichtsfester Dokumentation – bevor die Regulierung angewiesen wird.",
    metaTitle: "Versicherungsbetrug aufdecken",
    metaDescription:
      "Ermittlungen bei Verdacht auf Versicherungsbetrug: Personen-, Sach- und Kfz-Schäden prüfen, Plausibilität bewerten, Beweise gerichtsfest sichern. Bundesweit für Versicherer und Regulierer.",
    keywords: [
      "Versicherungsbetrug Detektei",
      "Ermittlungen Versicherer",
      "Schadenermittlung Detektei",
      "Personenschaden Überprüfung",
      "Kfz-Versicherungsbetrug",
      "Invaliditätsprüfung Detektei",
    ],
    triggers: [
      "Schadenmeldung mit widersprüchlichem oder zu glattem Hergang",
      "Personenschaden mit dauerhafter Invaliditätsbehauptung",
      "Auffällige Häufung von Schäden bei derselben Person oder Werkstatt",
      "Verdacht auf gestellten Unfall oder fingierten Diebstahl",
      "Berufsunfähigkeitsfall mit Hinweisen auf fortgesetzte Tätigkeit",
    ],
    outcomes: [
      "Belastbare Tatsachengrundlage für Leistungsablehnung oder Regulierung",
      "Dokumentierte Diskrepanzen zwischen behaupteter und tatsächlicher Beeinträchtigung",
      "Beweismittel für Regress- und Strafverfahren",
      "Klare Entscheidung statt teurer Vergleichsbereitschaft aus Unsicherheit",
    ],
    methods: [
      {
        title: "Aktenanalyse und Plausibilisierung",
        description:
          "Abgleich von Schadenanzeige, Gutachten und Zeitverläufen auf innere Widersprüche und technische Unmöglichkeiten.",
      },
      {
        title: "Umfeld- und Aktivitätsrecherche",
        description:
          "Öffentlich zugängliche Informationen zu Tätigkeit, Mobilität und wirtschaftlicher Situation der Anspruchsteller.",
      },
      {
        title: "Observation im gebotenen Umfang",
        description:
          "Zeitlich begrenzte, anlassbezogene Beobachtung zur Feststellung tatsächlicher Belastbarkeit oder Tätigkeit.",
      },
      {
        title: "Beweisaufbereitung",
        description:
          "Dokumentation in einer Form, die Schadenprüfung, Justiziariat und Gericht ohne Nacharbeit übernehmen können.",
      },
    ],
    deliverables: [
      "Schadenermittlungsbericht mit Widerspruchsanalyse",
      "Bild- und Videodokumentation mit Zeitstempel",
      "Bewegungs- und Aktivitätsprotokoll",
      "Aussagebereitschaft der Ermittler im Verfahren",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Fallannahme", value: "auch kurzfristig, bundesweit" },
      { label: "Typischer Umfang", value: "1–10 Einsatztage" },
      { label: "Abrechnung", value: "Tagessatz oder Rahmenvereinbarung" },
    ],
    faq: [
      {
        question: "Arbeiten Sie auch über Rahmenvereinbarungen?",
        answer:
          "Ja. Für Versicherer mit regelmäßigem Fallaufkommen richten wir feste Ansprechpartner, standardisierte Berichtsformate und vereinbarte Konditionen ein, damit Einzelbeauftragungen ohne Abstimmungsaufwand laufen.",
      },
      {
        question: "Wie gehen Sie mit dem Persönlichkeitsrecht der Anspruchsteller um?",
        answer:
          "Beobachtungen beschränken sich auf den öffentlich einsehbaren Raum und auf den zur Klärung erforderlichen Umfang. Wir dokumentieren Anlass und Verhältnismäßigkeit vorab. Aufträge ohne tragfähigen Anlass nehmen wir nicht an – sie gefährden Ihr Verfahren mehr, als sie nützen.",
      },
      {
        question: "Lohnt sich eine Ermittlung bei kleineren Schadensummen?",
        answer:
          "Häufig ja, weil Betrugsfälle selten Einzelfälle sind. Wir schätzen vor Beauftragung ein, ob der erwartbare Erkenntnisgewinn den Aufwand rechtfertigt – und sagen Ihnen offen, wenn er das nicht tut.",
      },
    ],
    related: ["wirtschaftsdetektei", "lohnfortzahlungsbetrug", "cyber-forensik"],
    buyers: ["Schadenabteilungen", "Sonderermittlung", "Justiziariat", "Rückversicherer"],
  },
  {
    slug: "cyber-forensik",
    audience: "b2b",
    navLabel: "IT- & Cyber-Forensik",
    icon: "lock",
    teaser: "Digitale Vorfälle rekonstruieren und Spuren gerichtsfest sichern.",
    h1: "IT-Forensik und Cyber-Ermittlungen für Unternehmen",
    kicker: "Digitale Beweissicherung",
    lead: "Nach einem Datenabfluss, einer Manipulation oder einem Angriff entscheidet die erste Stunde darüber, ob Spuren erhalten bleiben. Wir sichern digitale Beweise forensisch korrekt, rekonstruieren den Vorfall und benennen, wer wann worauf zugegriffen hat.",
    metaTitle: "IT-Forensik & Cyber-Ermittlungen",
    metaDescription:
      "Digitale Forensik für Unternehmen: Datenabfluss, Manipulation und Cyberangriffe aufklären, Beweise mit Hashwerten und Beweiskette sichern, Täter identifizieren. Bundesweit, DSGVO-konform.",
    keywords: [
      "IT-Forensik Unternehmen",
      "digitale Forensik Detektei",
      "Cyber Ermittlungen",
      "Datenabfluss aufklären",
      "Computer Forensik Beweissicherung",
      "Incident Response Ermittlung",
    ],
    triggers: [
      "Datenabfluss beim Ausscheiden von Mitarbeitenden oder ganzen Teams",
      "Manipulierte Buchungen, Stammdaten oder Zeiterfassung",
      "CEO-Fraud, Rechnungsmanipulation oder kompromittierte Postfächer",
      "Ransomware- oder Angriffsvorfall mit Aufklärungs- und Meldebedarf",
      "Anonyme Bedrohungen, Erpressung oder Rufschädigung im Netz",
    ],
    outcomes: [
      "Rekonstruierter Vorfallsverlauf mit Zeitachse und betroffenen Systemen",
      "Forensisch gesicherte Beweise mit Hashwerten und lückenloser Beweiskette",
      "Identifizierte Zugriffe, Exfiltrationswege und – wo möglich – Verantwortliche",
      "Belastbare Grundlage für Meldepflichten, Anzeige und Regress",
    ],
    methods: [
      {
        title: "Sofortsicherung",
        description:
          "Gerichtsfeste Images und Log-Sicherung, bevor durch Aufräumarbeiten oder Weiterbetrieb Spuren verloren gehen.",
      },
      {
        title: "Forensische Analyse",
        description:
          "Auswertung von Endgeräten, Servern, Cloud-Diensten und Protokollen auf Zugriffe, Kopiervorgänge und Manipulationen.",
      },
      {
        title: "Attribution",
        description:
          "Zusammenführung technischer Spuren mit OSINT und Sachverhaltsinformationen zur Eingrenzung der handelnden Personen.",
      },
      {
        title: "Berichterstattung",
        description:
          "Technische Befunde übersetzt in eine Sprache, die Geschäftsführung, Datenschutzbehörde und Gericht verstehen.",
      },
    ],
    deliverables: [
      "Forensikbericht mit Zeitachse und technischer Beweisführung",
      "Beweismitteldokumentation mit Hashwerten und Chain of Custody",
      "Auswertung für Meldepflichten nach Art. 33 DSGVO",
      "Empfehlungen zur Schließung des ausgenutzten Wegs",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Reaktionszeit", value: "kurzfristige Sofortsicherung möglich" },
      { label: "Typische Laufzeit", value: "1–8 Wochen je nach Umfang" },
      { label: "Abrechnung", value: "Phasenfestpreis oder Tagessatz" },
    ],
    faq: [
      {
        question: "Unsere IT hat schon aufgeräumt – ist es zu spät?",
        answer:
          "Nicht zwangsläufig. Viele Spuren überleben in Backups, Cloud-Protokollen, Mailservern und Endgeräten, auch wenn lokal gelöscht wurde. Wichtig ist, ab sofort nichts weiter zu überschreiben. Melden Sie sich, bevor weitere Wiederherstellungen laufen.",
      },
      {
        question: "Können die Ergebnisse vor Gericht verwendet werden?",
        answer:
          "Wir arbeiten mit Hashwerten, Zeitstempeln und dokumentierter Beweiskette, damit die Integrität der Daten nachweisbar bleibt. Ob ein Beweismittel im konkreten Verfahren verwertet wird, entscheidet das Gericht auf Grundlage der Erhebungsumstände – die wir vollständig offenlegen.",
      },
      {
        question: "Arbeiten Sie mit unserem IT-Dienstleister zusammen?",
        answer:
          "Ja. Wir übernehmen die forensische Beweissicherung und Aufklärung, Ihr Dienstleister die Wiederherstellung des Betriebs. Diese Trennung ist gewollt: Wer den Schaden behebt, sollte nicht zugleich die Spuren sichern.",
      },
    ],
    related: ["interne-ermittlungen", "wirtschaftsdetektei", "wettbewerbsverstoesse"],
    buyers: ["IT-Leitung", "CISO", "Datenschutzbeauftragte", "Geschäftsführung"],
  },
  {
    slug: "wettbewerbsverstoesse",
    audience: "b2b",
    navLabel: "Wettbewerb & Geheimnisschutz",
    icon: "eye",
    teaser: "Konkurrenztätigkeit, Abwerbung und Geheimnisverrat nachweisen.",
    h1: "Wettbewerbsverstöße, Konkurrenztätigkeit und Geheimnisverrat",
    kicker: "Wettbewerb & Know-how",
    lead: "Wenn Kundenlisten wandern, Mitarbeitende abgeworben werden oder ein Wettbewerbsverbot ignoriert wird, ist der Schaden meist längst entstanden, bevor er sichtbar wird. Wir belegen, was tatsächlich passiert – als Grundlage für Unterlassung, Schadensersatz und einstweiligen Rechtsschutz.",
    metaTitle: "Wettbewerbsverstöße & Geheimnisverrat",
    metaDescription:
      "Verstöße gegen Wettbewerbsverbote, unerlaubte Konkurrenztätigkeit, Abwerbung und Verrat von Geschäftsgeheimnissen nachweisen. Beweissicherung für Unterlassung und Schadensersatz.",
    keywords: [
      "Detektei Wettbewerbsverstoß",
      "Konkurrenztätigkeit nachweisen",
      "Wettbewerbsverbot Verstoß Beweis",
      "Geschäftsgeheimnis Verrat Ermittlung",
      "Abwerbung Mitarbeiter Detektei",
      "Schwarzarbeit Mitarbeiter nachweisen",
    ],
    triggers: [
      "Ehemalige Führungskraft baut trotz Wettbewerbsverbot Konkurrenz auf",
      "Kunden wandern auffällig geschlossen zu einem neuen Anbieter ab",
      "Mitarbeitende betreiben während der Arbeitszeit eigene Geschäfte",
      "Verdacht auf Weitergabe von Kalkulationen, Rezepturen oder Kundendaten",
      "Systematische Abwerbung ganzer Teams durch einen Wettbewerber",
    ],
    outcomes: [
      "Dokumentierte Verstöße mit Datum, Ort und Beteiligten",
      "Beweise für Unterlassungsanspruch und einstweilige Verfügung",
      "Nachvollziehbare Schadensschätzung als Basis für Schadensersatz",
      "Klarheit darüber, wie weit der Abfluss tatsächlich reicht",
    ],
    methods: [
      {
        title: "Marktbeobachtung",
        description:
          "Auswertung von Angeboten, Ausschreibungen, Registerdaten und Marktauftritten des betroffenen Wettbewerbers.",
      },
      {
        title: "Testanfragen",
        description:
          "Verdeckte Anfragen und Testkäufe zum Nachweis tatsächlich angebotener Leistungen – rechtlich abgesichert konzipiert.",
      },
      {
        title: "Observation und Feldarbeit",
        description:
          "Nachweis von Tätigkeiten, Kundenterminen und Betriebsstätten durch anlassbezogene Beobachtung.",
      },
      {
        title: "Digitale Spurensuche",
        description:
          "Domains, Impressen, Netzwerke, Stellenanzeigen und Datenspuren, die Verbindungen sichtbar machen.",
      },
    ],
    deliverables: [
      "Beweisbericht mit Chronologie der festgestellten Verstöße",
      "Dokumentation von Testanfragen inklusive Kommunikation",
      "Foto- und Videobelege mit Zeitstempel",
      "Aufbereitung für Abmahnung und einstweilige Verfügung",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Erste Einschätzung", value: "kostenfrei, binnen 24 h" },
      { label: "Typische Laufzeit", value: "1–8 Wochen" },
      { label: "Abrechnung", value: "Tagessatz oder Phasenfestpreis" },
    ],
    faq: [
      {
        question: "Wie schnell brauchen wir Beweise für eine einstweilige Verfügung?",
        answer:
          "Sehr schnell – Verfügungsverfahren setzen Dringlichkeit voraus, und die geht verloren, wenn zu lange zugewartet wird. Sprechen Sie uns an, sobald der Verdacht konkret wird, nicht erst wenn er sich vermeintlich erhärtet hat.",
      },
      {
        question: "Sind Testkäufe zulässig?",
        answer:
          "Testanfragen und Testkäufe sind in engen Grenzen zulässig, dürfen aber nicht in eine unzulässige Provokation umschlagen. Wir konzipieren sie so, dass die dokumentierte Handlung aus dem Gegenüber selbst kommt – und stimmen das Vorgehen bei Bedarf mit Ihrer Kanzlei ab.",
      },
      {
        question: "Können Sie den entstandenen Schaden beziffern?",
        answer:
          "Wir liefern die Tatsachenbasis: welche Kunden, welche Aufträge, welcher Zeitraum. Die rechtliche Schadensberechnung – etwa Lizenzanalogie oder entgangener Gewinn – nimmt Ihre Rechtsvertretung auf dieser Grundlage vor.",
      },
    ],
    related: ["lohnfortzahlungsbetrug", "cyber-forensik", "wirtschaftsdetektei"],
    buyers: ["Geschäftsführung", "Vertriebsleitung", "Rechtsabteilung", "Wettbewerbskanzleien"],
  },
  {
    slug: "asset-tracing",
    audience: "b2b",
    navLabel: "Asset Tracing",
    icon: "banknote",
    teaser: "Vermögenswerte aufspüren, bevor der Titel wertlos wird.",
    h1: "Asset Tracing und Bonitätsermittlung",
    kicker: "Forderungsdurchsetzung",
    lead: "Ein Titel ist nur so viel wert wie das Vermögen, auf das er zugreifen kann. Wir ermitteln, wo Werte tatsächlich liegen, wer sie hält und ob eine Vollstreckung wirtschaftlich sinnvoll ist – bevor Sie weiteres Geld in ein Verfahren investieren.",
    metaTitle: "Asset Tracing & Vermögensermittlung",
    metaDescription:
      "Asset Tracing für Unternehmen, Insolvenzverwalter und Gläubiger: Vermögenswerte lokalisieren, Verschiebungen aufdecken, Vollstreckungsaussichten realistisch bewerten. National und international.",
    keywords: [
      "Asset Tracing",
      "Vermögensermittlung Detektei",
      "Bonitätsermittlung Unternehmen",
      "Forderungsdurchsetzung Ermittlung",
      "Vermögensverschiebung aufdecken",
      "Schuldnerermittlung",
    ],
    triggers: [
      "Titulierte Forderung, bei der die Vollstreckung ins Leere läuft",
      "Verdacht auf Vermögensverschiebung an Angehörige oder Gesellschaften",
      "Insolvenzverfahren mit Hinweisen auf beiseitegeschaffte Werte",
      "Schuldner mit unbekanntem Aufenthalt oder wechselndem Wohnsitz",
      "Prüfung der Vollstreckungsaussicht vor einem teuren Prozess",
    ],
    outcomes: [
      "Übersicht der auffindbaren Vermögenswerte und ihrer Zuordnung",
      "Aufgedeckte Verschiebungen und zwischengeschaltete Strukturen",
      "Realistische Einschätzung der Vollstreckungsaussichten",
      "Ansatzpunkte für Arrest, Pfändung und Anfechtung",
    ],
    methods: [
      {
        title: "Vermögens- und Registerrecherche",
        description:
          "Grundbuch- und Registerauswertung, Beteiligungen, Fahrzeuge, gewerbliche Aktivitäten und Zahlungsverhalten.",
      },
      {
        title: "Struktur- und Verflechtungsanalyse",
        description:
          "Identifikation vorgeschobener Gesellschaften, Treuhänder und nahestehender Personen als Haltevehikel.",
      },
      {
        title: "Aufenthalts- und Anschriftenermittlung",
        description:
          "Aktuelle Zustelladressen und tatsächliche Aufenthaltsorte als Voraussetzung jeder Vollstreckung.",
      },
      {
        title: "Internationale Recherche",
        description:
          "Auslandsvermögen über geprüfte Partner, mit klarer Aussage zur Belastbarkeit je Jurisdiktion.",
      },
    ],
    deliverables: [
      "Vermögensbericht mit Bewertung der Verwertbarkeit",
      "Strukturübersicht der beteiligten Personen und Gesellschaften",
      "Zustellfähige Anschriften mit Verifikationsnachweis",
      "Handlungsempfehlung zur Vollstreckungsstrategie",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Erstrecherche", value: "5–10 Werktage" },
      { label: "Internationale Fälle", value: "3–10 Wochen" },
      { label: "Abrechnung", value: "Festpreis je Recherchestufe" },
    ],
    faq: [
      {
        question: "Wann lohnt sich Asset Tracing?",
        answer:
          "Immer dann, wenn die Forderungshöhe die Ermittlungskosten deutlich übersteigt oder wenn Sie vor einem Prozess wissen wollen, ob am Ende überhaupt etwas zu holen ist. Diese Vorprüfung ist regelmäßig die günstigste Position im gesamten Verfahren.",
      },
      {
        question: "Woher stammen Ihre Informationen?",
        answer:
          "Aus Registern, öffentlich zugänglichen Quellen, gewerblichen Auskunfteien und eigener Feldrecherche. Wir legen jede Quelle offen. Zugriffe auf Konten- oder Steuerdaten sind uns – wie jedem Privaten – verschlossen; wer Ihnen das anbietet, arbeitet nicht rechtmäßig.",
      },
      {
        question: "Arbeiten Sie auch für Insolvenzverwalter?",
        answer:
          "Ja, regelmäßig. Insbesondere bei Anfechtungssachverhalten und dem Verdacht auf Vermögensverschiebungen im Vorfeld der Insolvenz.",
      },
    ],
    related: ["due-diligence", "wirtschaftsdetektei", "interne-ermittlungen"],
    buyers: ["Gläubiger", "Insolvenzverwalter", "Inkasso", "Rechtsanwälte"],
  },
  {
    slug: "privatpersonen",
    audience: "b2c",
    navLabel: "Privatmandate",
    icon: "users",
    teaser: "Ausgewählte Privatmandate – mit derselben Sorgfalt wie ein Unternehmensfall.",
    h1: "Ermittlungen für Privatpersonen",
    kicker: "Privatmandate",
    lead: "Unser Schwerpunkt liegt auf Unternehmen und Versicherern. Ausgewählte Privatmandate übernehmen wir dennoch – dort, wo unsere Methoden tatsächlich weiterhelfen: bei Unterhalts- und Sorgerechtsfragen, Vermögensauseinandersetzungen, digitalem Betrug und Belästigung im Netz.",
    metaTitle: "Detektei für Privatpersonen",
    metaDescription:
      "Detektei für Privatpersonen: Unterhalt und Sorgerecht, Vermögensauseinandersetzung, Online-Betrug, Stalking und digitale Belästigung. Diskret, DSGVO-konform, gerichtsverwertbar dokumentiert.",
    keywords: [
      "Detektei Privatpersonen",
      "Detektei Unterhalt",
      "Detektei Sorgerecht",
      "Online Betrug Ermittlung privat",
      "Stalking Ermittlung",
      "Privatdetektiv beauftragen",
    ],
    triggers: [
      "Unterhaltsverfahren mit Verdacht auf verschwiegenes Einkommen",
      "Sorgerechtsstreit, in dem das Kindeswohl konkret in Frage steht",
      "Vermögensauseinandersetzung mit unklaren Werten",
      "Online-Betrug, Anlagebetrug oder Romance Scam",
      "Stalking, Bedrohung oder Rufschädigung im Netz",
    ],
    outcomes: [
      "Belegte Tatsachen statt Vermutungen für Ihr Verfahren",
      "Dokumentation, die Ihre Anwältin oder Ihr Anwalt direkt verwenden kann",
      "Identifikation von Personen hinter anonymen Profilen, soweit rechtlich möglich",
      "Eine ehrliche Einschätzung, ob sich eine Beauftragung für Sie überhaupt lohnt",
    ],
    methods: [
      {
        title: "Erstgespräch mit Erwartungsabgleich",
        description:
          "Wir sagen Ihnen vorab, was erreichbar ist und was nicht – und raten ab, wenn Aufwand und Nutzen nicht in Verhältnis stehen.",
      },
      {
        title: "Digitale Recherche",
        description:
          "OSINT-Analyse zu Personen, Profilen, Zahlungswegen und Verbindungen im Netz.",
      },
      {
        title: "Feldarbeit",
        description:
          "Anlassbezogene Observation und Anschriftenermittlung, streng auf das Erforderliche begrenzt.",
      },
      {
        title: "Aufbereitung für das Verfahren",
        description:
          "Bericht und Beweismittel in einer Form, die im familien- oder zivilrechtlichen Verfahren eingebracht werden kann.",
      },
    ],
    deliverables: [
      "Schriftlicher Ermittlungsbericht mit Beweismitteln",
      "Foto- und Videodokumentation mit Zeitstempel",
      "Zeugenbereitschaft der eingesetzten Ermittler",
      "Verständliche Erläuterung der Ergebnisse im persönlichen Gespräch",
    ],
    legalNote: rechtshinweis,
    frame: [
      { label: "Erstgespräch", value: "kostenfrei und unverbindlich" },
      { label: "Typischer Umfang", value: "1–5 Einsatztage" },
      { label: "Abrechnung", value: "Tagessatz mit vereinbarter Obergrenze" },
    ],
    faq: [
      {
        question: "Nehmen Sie überhaupt Privatmandate an?",
        answer:
          "Ja, in ausgewählten Fällen. Wir prüfen im Erstgespräch, ob unsere Methoden Ihrem Anliegen tatsächlich weiterhelfen. Wenn nicht, sagen wir das offen, statt einen Auftrag anzunehmen, der Sie nur Geld kostet.",
      },
      {
        question: "Was kostet ein Privatmandat?",
        answer:
          "Sie erhalten vor Beauftragung eine schriftliche Aufwandsschätzung mit Obergrenze, damit die Kosten kalkulierbar bleiben. Abgerechnet wird nach Tagessatz zuzüglich vereinbarter Nebenkosten.",
      },
      {
        question: "Erfährt die betroffene Person davon?",
        answer:
          "Nicht durch uns. Wir arbeiten verdeckt und kommunizieren ausschließlich mit Ihnen über den von Ihnen gewünschten Kanal.",
      },
    ],
    related: ["cyber-forensik", "asset-tracing", "due-diligence"],
    buyers: ["Privatpersonen", "Familienrechtskanzleien"],
  },
]

export const b2bServices = services.filter((service) => service.audience === "b2b")

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getRelatedServices(service: Service): Service[] {
  return service.related
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related))
}
