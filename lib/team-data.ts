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


export const teamMembers: TeamMember[] = [
  {
    id: 'A-01',
    name: 'Fabian Radlow',
    codename: 'Ghostreader',
    role: 'Leitender Ermittler',
    base: 'Cyber Command Köln',
    division: 'digital',
    specialties: ['OSINT', 'Cyber-Ermittlungen', 'Wirtschaftsspionage'],
    status: 'Aktiv',
    image: '/fabian.png',
    note: 'Findet deine LinkedIn-Aktivität schneller als du "Datenschutz" sagen kannst. Behauptet, der Algorithmus sei sein bester Freund.'
  },
  {
    id: 'A-02',
    name: 'Patrick Wenk',
    codename: 'Profiler',
    role: 'Leitender Ermittler',
    base: 'Forensik Hub München',
    division: 'digital',
    specialties: ['Criminal Profiling', 'Cyber-Ermittlungen', 'Digitale Forensik'],
    status: 'Aktiv',
    image: '/patrick.png',
    note: 'Analysiert Täterprofile während andere noch Kaffee kochen. Warnung: Stellt unbequeme Fragen beim Smalltalk.'
  },
  {
    id: 'A-03',
    name: 'Moritz Brandes',
    codename: 'Networker',
    role: 'Field Investigator',
    base: 'Operations Hamburg',
    division: 'field',
    specialties: ['Verdeckte Ermittlung', 'Observation', 'Informantennetzwerk'],
    status: 'Im Einsatz',
    image: '/moritz.png',
    note: 'Kennt jemanden, der jemanden kennt. Hat in drei Städten gleichzeitig Stammtisch-Status.'
  },
  {
    id: 'A-04',
    name: 'Timo',
    codename: 'Sentinel',
    role: 'Cyber-Ermittler',
    base: 'Sicherheitszentrale Berlin',
    division: 'digital',
    specialties: ['Netzwerk-Forensik', 'Incident Response', 'Threat Intelligence'],
    status: 'Aktiv',
    image: '/timo.png',
    note: 'Sieht Sicherheitslücken, bevor sie entstehen. Schläft angeblich mit offenen Firewalls.'
  },
  {
    id: 'A-05',
    name: 'Alex Camu',
    codename: 'Phantom',
    role: 'Undercover-Spezialist',
    base: 'Außenstelle Frankfurt',
    division: 'undercover',
    specialties: ['Verdeckte Operationen', 'Social Engineering', 'Identitätsanalyse'],
    status: 'Aktiv',
    image: '/alex.png',
    note: 'Wechselt Identitäten wie andere Hemden. Selbst sein Friseur weiß nicht, wer er wirklich ist.'
  }
];

export const getTeamMemberCount = (): number => teamMembers.length;