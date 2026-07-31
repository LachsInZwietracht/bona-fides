export const siteConfig = {
  name: "BONA FIDES Detektei",
  legalName: "BONA FIDES Detektei",
  url: "https://www.bona-fides-detektei.de",
  email: "ermittlungen@bonafides.agency",
  street: "Hahnenstraße 23",
  postalCode: "50354",
  city: "Hürth",
  country: "DE",
  positioning: "Wirtschaftsdetektei für Unternehmen, Versicherer und Kanzleien",
  responsePromise: "Erstbewertung binnen 24 Stunden",
} as const

export const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Vertrauliche Fallanfrage",
)}`
