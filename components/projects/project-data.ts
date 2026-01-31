export interface Project {
  slug: string;
  location: string;
  title: string;
  description: string;
  image: string;
  servicesCompleted: string[];
  // Optional detail page fields
  client?: string;
  year?: string;
  duration?: string;
  fullDescription?: string;
  highlights?: string[];
  gallery?: { src: string; alt: string }[];
}

export const projects: Project[] = [
  {
    slug: 'cr-15-roadway-reconstruction',
    location: 'Garrett, Indiana',
    title: 'CR 15 Roadway Reconstruction',
    description:
      'This project consisted of a complete reconstruction and widening of the existing road from SR 8 to the city limits in Garrett, IN. This stretch of CR 15 is used by semi-trucks to access the Wal-Mart distribution center. The existing asphalt had deteriorated badly due to the heavy truck traffic and as a result, complete reconstruction was needed.',
    image: '/projects/cr15.webp',
    servicesCompleted: [
      'Topographic Survey',
      'Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
    client: 'DeKalb County',
    year: '2022',
    fullDescription:
      'This project consisted of a complete reconstruction and widening of the existing road from SR 8 to the city limits in Garrett, IN. This stretch of CR 15 is used by semi-trucks to access the Wal-Mart distribution center. The existing asphalt had deteriorated badly due to the heavy truck traffic and as a result, complete reconstruction was needed.\n\nAPEX provided comprehensive surveying and engineering services including topographic surveys, roadway design, and construction inspection. The project was completed on time and within budget, significantly improving the infrastructure for commercial traffic in the area.',
    highlights: [
      'Complete roadway reconstruction from SR 8 to city limits',
      'Heavy-duty pavement design for commercial truck traffic',
      'Improved drainage and stormwater management',
      'Enhanced safety features and signage',
    ],
    gallery: [
      { src: '/projects/cr15.webp', alt: 'CR 15 reconstruction overview' },
    ],
  },
  {
    slug: 'market-street-reconstruction',
    location: 'North Manchester, Indiana',
    title: 'Market Street Reconstruction',
    description:
      'Full depth asphalt pavement reconstruction of Market Street from Main Street to 2nd Street. This project consisted of improvements to the roadway subgrade, new full depth asphalt pavement replacement, ADA pedestrian facility upgrades, and on-street parking improvements.',
    image: '/projects/market-street.webp',
    servicesCompleted: [
      'Topographic Survey',
      'Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
    client: 'Town of North Manchester',
    year: '2021',
    fullDescription:
      'Full depth asphalt pavement reconstruction of Market Street from Main Street to 2nd Street. This project consisted of improvements to the roadway subgrade, new full depth asphalt pavement replacement, ADA pedestrian facility upgrades, and on-street parking improvements.\n\nThe project enhanced pedestrian accessibility throughout the downtown area while improving the overall roadway condition and parking facilities for local businesses.',
    highlights: [
      'Full depth asphalt pavement replacement',
      'ADA-compliant pedestrian facility upgrades',
      'Improved on-street parking design',
      'Enhanced downtown streetscape',
    ],
    gallery: [
      { src: '/projects/market-street.webp', alt: 'Market Street reconstruction' },
    ],
  },
  {
    slug: 'chester-heights-trail',
    location: 'North Manchester, Indiana',
    title: 'Chester Heights Trail',
    description:
      'A 1.6-mile, 8 ft. wide, asphalt trail located in the northwest section of the Town. The trail was designed to follow along a section of Clear Creek and adjacent to the existing railroad corridor. The project also included a trail head parking lot, ADA ramps, and other incidental improvements.',
    image: '/projects/chester-heights.png',
    servicesCompleted: [
      'Topographic Survey',
      'Trail Design & Engineering',
      'Bidding',
      'Construction Inspection',
    ],
    client: 'Town of North Manchester',
    year: '2020',
    fullDescription:
      'A 1.6-mile, 8 ft. wide, asphalt trail located in the northwest section of the Town. The trail was designed to follow along a section of Clear Creek and adjacent to the existing railroad corridor. The project also included a trail head parking lot, ADA ramps, and other incidental improvements.\n\nThis scenic trail provides residents with a safe, accessible path for walking, jogging, and cycling while connecting neighborhoods to natural areas along Clear Creek.',
    highlights: [
      '1.6-mile asphalt multi-use trail',
      'Scenic route along Clear Creek',
      'Trail head with parking facilities',
      'Full ADA accessibility compliance',
    ],
    gallery: [
      { src: '/projects/chester-heights.png', alt: 'Chester Heights Trail' },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
