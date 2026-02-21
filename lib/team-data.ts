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
    codename: 'Architect',
    role: 'Senior Tech Analyst',
    base: 'Tech Hub Oldenburg',
    division: 'digital',
    specialties: ['System Architecture', 'Backend Engineering', 'Security Analysis'],
    status: 'Im Einsatz',
    image: '/moritz.jpg',
    note: 'Debuggt Systeme, bevor sie merken, dass sie kaputt sind. Hat mehr offene Tabs als die meisten Menschen Gedanken haben.'
  },
  {
    id: 'A-04',
    name: 'Alex Camu',
    codename: 'Catalyst',
    role: 'Digital Operative',
    base: 'Field Base Hamburg',
    division: 'digital',
    specialties: ['Full Stack Development', 'Social Engineering', 'Open Source Intel'],
    status: 'Aktiv',
    image: '/alex.png',
    note: 'Schreibt sauberen Code und macht trotzdem jede Party lebendig. Hat auf jedem Kontinent mindestens einen Kontakt, der "das regeln kann" – Details werden diskret übergangen.'
  },
  {
    id: 'A-05',
    name: 'Timo',
    codename: 'Broadcast',
    role: 'Informationsoperator',
    base: 'Media Center Bremen',
    division: 'digital',
    specialties: ['Content Intelligence', 'Narrative Analyse', 'Medienoperationen'],
    status: 'Aktiv',
    image: '/timo.png',
    note: 'Dreht Videobeweis-Sequenzen, die viral gehen, bevor der Täter verhaftet ist. Kann jede Geschichte in 8 Minuten erzählen – oder 3 Stunden, wenn nötig.'
  }
];

export const getTeamMemberCount = (): number => teamMembers.length;