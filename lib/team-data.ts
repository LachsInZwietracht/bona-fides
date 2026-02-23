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
    note: 'Weiß, was du letzten Sommer gepostet hast – und mit welchem Gerät. Während du noch dein Passwort zurücksetzt, hat er dein digitales Ich bereits kartografiert.'
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
    image: '/patrickv2.png',
    note: 'Liest Verhalten wie andere Beipackzettel – nur schneller und mit besseren Schlussfolgerungen.'
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
    note: 'Baut nachts APIs und morgens Vertrauen auf. Kennt in jeder Stadt jemanden – und diese Leute kennen jemanden der "das regeln kann".'
  },
  {
    id: 'A-05',
    name: 'Timo Woitzyk',
    codename: 'Broadcast',
    role: 'Informationsoperator',
    base: 'Media Center Bremen',
    division: 'digital',
    specialties: ['Content Intelligence', 'Narrative Analyse', 'Medienoperationen'],
    status: 'Aktiv',
    image: '/timov2.png',
    note: 'Filmt, schneidet, liefert – bevor die Gegenseite weiß, dass eine Kamera lief. Jedes Frame ist ein Beweisstück.'
  }
];

export const getTeamMemberCount = (): number => teamMembers.length;