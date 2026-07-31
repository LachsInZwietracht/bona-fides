export interface ContactOption {
  value: string
  label: string
}

export const caseTypes: ContactOption[] = [
  { value: "corporate-investigation", label: "Wirtschaftsermittlung / Unternehmensdelikt" },
  { value: "internal-investigation", label: "Interne Ermittlung / Compliance-Vorfall" },
  { value: "continued-pay-fraud", label: "Lohnfortzahlungsbetrug / vorgetäuschte Krankheit" },
  { value: "due-diligence", label: "Due Diligence / Geschäftspartnerprüfung" },
  { value: "insurance-fraud", label: "Versicherungs- & Schadenermittlung" },
  { value: "cyber-forensics", label: "IT-Forensik / Cyber-Vorfall" },
  { value: "competition", label: "Wettbewerbsverstoß / Geheimnisverrat" },
  { value: "asset-tracing", label: "Asset Tracing / Forderungsdurchsetzung" },
  { value: "private", label: "Privatmandat" },
  { value: "other", label: "Sonstiges" },
]

export const urgencyOptions: ContactOption[] = [
  { value: "immediate", label: "Sofort – es laufen Fristen" },
  { value: "days", label: "Innerhalb weniger Tage" },
  { value: "weeks", label: "In den nächsten Wochen" },
  { value: "orientation", label: "Zunächst nur Orientierung" },
]

export function labelFor(options: ContactOption[], value: string): string {
  return options.find((option) => option.value === value)?.label ?? value
}
