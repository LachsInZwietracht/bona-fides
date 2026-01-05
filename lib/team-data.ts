export interface TeamMember {
  id: string;
  name: string;
  codename: string;
  role: string;
  base: string;
  division: 'field' | 'digital' | 'undercover';
  specialties: string[];
  status: string;
  image: string;
  note: string;
}

const detectiveMockImage = '/detective-silhouette.png';

export const teamMembers: TeamMember[] = [
  {
    id: 'A-01',
    name: 'Klaus Hoffmann',
    codename: 'Fallleiter',
    role: 'Leitender Ermittler',
    base: 'Feldbüro Hamburg',
    division: 'field',
    specialties: ['Verhörtechnik', 'Taktische Planung'],
    status: 'Aktiv',
    image: detectiveMockImage,
    note: 'Legendär beim Aufbrechen geschlossener Aussagen. Misstraut zu linearen Zeitabläufen.'
  },
  {
    id: 'A-02',
    name: 'Dr. Sarah Müller',
    codename: 'Trace',
    role: 'Digitale Forensikerin',
    base: 'Analysezentrum Wiesbaden',
    division: 'digital',
    specialties: ['OSINT', 'Speicherforensik'],
    status: 'Bereit',
    image: detectiveMockImage,
    note: 'Sieht Muster in Störgeräuschen. Hinweis: Kaffee streng filtriert liefern.'
  },
  {
    id: 'A-03',
    name: 'Michael Weber',
    codename: 'Locator',
    role: 'Umfeldanalyst',
    base: 'Operationshub Berlin',
    division: 'field',
    specialties: ['Netzwerkrecherche', 'Personensuche'],
    status: 'Im Einsatz',
    image: detectiveMockImage,
    note: 'Typische Bewegungsmuster der Zielperson in 6 Min skizziert. Mag analoge Karten.'
  },
  {
    id: 'A-04',
    name: 'Isabella Rossi',
    codename: 'Mirage',
    role: 'Undercover Spezialistin',
    base: 'Mobile Einheit NRW',
    division: 'undercover',
    specialties: ['Cover-Aufbau', 'Human Intelligence'],
    status: 'Verdeckt',
    image: detectiveMockImage,
    note: 'Archiv führt fünf bestätigte Identitäten. Kein Kontakt nach 23:00 Uhr.'
  },
  {
    id: 'A-05',
    name: 'Jonas Richter',
    codename: 'Cipher',
    role: 'Threat Analyst',
    base: 'Signals Lab München',
    division: 'digital',
    specialties: ['Signalaufklärung', 'Pattern Mining'],
    status: 'Analyse',
    image: detectiveMockImage,
    note: 'Ersetzt Whiteboards durch Post-Quantum-Notizen. Immer mit Funkkopfhörer.'
  },
  {
    id: 'A-06',
    name: 'Lina Petrovic',
    codename: 'Ghostline',
    role: 'Tarnidentität-Expertin',
    base: 'Backchannel Prag',
    division: 'undercover',
    specialties: ['Legendenbau', 'Psychologie'],
    status: 'Standby',
    image: detectiveMockImage,
    note: 'Verhandelt nur über handschriftliche Notizen. Lacht selten, erinnert alles.'
  }
];

export const getTeamMemberCount = (): number => teamMembers.length;