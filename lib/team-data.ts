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
    name: 'Fabian Radlow',
    codename: 'Ghostreader',
    role: 'Leitender Ermittler',
    base: 'Cyber Command Berlin',
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
    name: 'Franzi',
    codename: 'Cipher',
    role: 'Operative Analystin',
    base: 'Intel Center Frankfurt',
    division: 'digital',
    specialties: ['Datenanalyse', 'Pattern Recognition', 'Social Engineering'],
    status: 'Bereit',
    image: detectiveMockImage,
    note: 'Entschlüsselt verschlüsselte Kommunikation beim Frühstück. Mag Rätsel mehr als Menschen.'
  },
  {
    id: 'A-04',
    name: 'Moritz Brandes',
    codename: 'Networker',
    role: 'Field Investigator',
    base: 'Operations Hamburg',
    division: 'field',
    specialties: ['Verdeckte Ermittlung', 'Observation', 'Informantennetzwerk'],
    status: 'Im Einsatz',
    image: detectiveMockImage,
    note: 'Kennt jemanden, der jemanden kennt. Hat in drei Städten gleichzeitig Stammtisch-Status.'
  }
];

export const getTeamMemberCount = (): number => teamMembers.length;