export const teamCategories = [
  'Owners',
  'Business Development',
  'Survey Team',
  'Engineering Team',
  'Inspection Team',
  'Admin',
] as const;

export type TeamCategory = (typeof teamCategories)[number];

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  category: TeamCategory;
}

export const teamMembers: TeamMember[] = [
  // Owners
  {
    name: 'Nana Opoku, PS',
    role: 'President / Partner',
    image: '/team-pics/Nana.Opoku.jpg',
    category: 'Owners',
  },
  {
    name: 'Andrew Scheribel, PE',
    role: 'Vice President / Partner',
    image: '/team-pics/Andrew.Scheribel.jpg',
    category: 'Owners',
  },

  // Business Development
  {
    name: 'Chanchai Hocharoen',
    role: 'Sr. Business Development Coordinator',
    image: '/team-pics/Chancahai.Hocharoen.jpg',
    category: 'Business Development',
  },

  // Survey Team
  {
    name: 'Parker Zurbuch, SI',
    role: 'Survey Manager',
    image: '/team-pics/Parker.Zurbuch.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Joshua Schaffer',
    role: 'Survey Crew Chief Manager',
    image: '/team-pics/Josh.Schaffer.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Esmaeel Andusa',
    role: 'Survey Crew Chief',
    image: '/team-pics/Esmaeel.Andusa.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Mo Idris',
    role: 'Survey Crew Chief',
    image: '/team-pics/Mo.Idris.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Troy Arnett',
    role: 'Survey Crew Chief',
    image: '/team-pics/Troy.Arnett.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Nathan Anthony',
    role: 'Survey Team',
    image: '/team-pics/Nathan.Anthony.jpg',
    category: 'Survey Team',
  },
  {
    name: 'Nelva',
    role: 'Survey Team',
    image: '',
    category: 'Survey Team',
  },
  {
    name: 'Rob',
    role: 'Survey Team',
    image: '',
    category: 'Survey Team',
  },
  {
    name: 'Aries',
    role: 'Survey Team',
    image: '',
    category: 'Survey Team',
  },
  {
    name: 'Bashir',
    role: 'Survey Team',
    image: '',
    category: 'Survey Team',
  },
  {
    name: 'Pavan',
    role: 'Survey Team',
    image: '',
    category: 'Survey Team',
  },

  // Engineering Team
  {
    name: 'Frank McCutcheon, PE',
    role: 'Project Manager',
    image: '/team-pics/Frank.McCutcheon.jpg',
    category: 'Engineering Team',
  },
  {
    name: 'Conner Dodd',
    role: 'Engineering Team',
    image: '/team-pics/Conner.Dodd.JPG',
    category: 'Engineering Team',
  },

  // Inspection Team
  {
    name: 'Cody Hepler',
    role: 'Construction Inspection Manager',
    image: '/team-pics/Cody.Hepler.jpg',
    category: 'Inspection Team',
  },
  {
    name: 'Dave Schoeff',
    role: 'Inspection Team',
    image: '/team-pics/Dave.Schoeff.JPG',
    category: 'Inspection Team',
  },
  {
    name: 'Taylor Willoughby, CESSWI',
    role: 'Stormwater Quality Project Manager',
    image: '/team-pics/Taylor.Willoughby.jpg',
    category: 'Inspection Team',
  },
  {
    name: 'Herb Berg',
    role: 'Inspection Team',
    image: '/team-pics/Herb Berg.jpg',
    category: 'Inspection Team',
  },

  // Admin
  {
    name: 'Toni Paulson',
    role: 'Administrative Assistant',
    image: '/team-pics/Toni.Paulson.jpg',
    category: 'Admin',
  },
  {
    name: 'Conner L.',
    role: 'Admin',
    image: '',
    category: 'Admin',
  },
];
