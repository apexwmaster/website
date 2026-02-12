export interface Project {
  slug: string;
  location: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
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
  // Featured projects (with images)
  {
    slug: 'cr-15-roadway-reconstruction',
    location: 'Garrett, Indiana',
    title: 'CR 15 Roadway Reconstruction',
    description:
      'This project consisted of a complete reconstruction and widening of the existing road from SR 8 to the city limits in Garrett, IN. This stretch of CR 15 is used by semi-trucks to access the Wal-Mart distribution center. The existing asphalt had deteriorated badly due to the heavy truck traffic and as a result, complete reconstruction was needed.',
    image: '/projects/cr15.webp',
    featured: true,
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
    featured: true,
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
    featured: true,
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

  {
    slug: 'hessen-cassel-storm-sidewalk',
    location: 'Fort Wayne, Indiana',
    title: 'Hessen Cassel Storm & Sidewalk',
    description:
      'This project involved the design of new sidewalks, ADA-compliant curb ramps, pedestrian signal improvements, and stormwater and drive approach improvements for the City of Fort Wayne. Drainage improvements included grassed swales, storm utility piping, drainage structures such as inlets and manholes, ditch clearing and grubbing, and erosion control measures. New storm drainage infrastructure was designed to capture stormwater within the project limits and convey it to the nearby Trier Ditch. Construction of this project has been successfully completed. Apex provided field surveying, engineering design of sidewalks and driveways, and plan preparation services for the City Utility Engineering Department.',
    image: '/projects/proj1.jpg',
    featured: true,
    servicesCompleted: [
      'Field Surveying',
      'Engineering Design',
      'Plan Preparation',
    ],
    client: 'City of Fort Wayne',
  },
  {
    slug: 'trier-road-sidewalk-improvements',
    location: 'Fort Wayne, Indiana',
    title: 'Trier Road Sidewalk Improvements',
    description:
      'This project involves the construction of new sidewalks and replacement of existing sidewalks along the north side of Trier Road between Reed Road and Maplecrest Road. Additional improvements include ADA-compliant curb ramps and storm drainage enhancements. The project closes a critical gap in pedestrian connectivity, linking surrounding neighborhoods to nearby schools, trails, and businesses along the Trier Road corridor. Apex provided topographic surveying, engineering design, plan development, and right-of-way engineering services for the Transportation Engineering Department. Construction is anticipated to be completed in 2026.',
    image: '',
    servicesCompleted: [
      'Topographic Surveying',
      'Engineering Design',
      'Plan Development',
      'Right-of-Way Engineering',
    ],
    client: 'City of Fort Wayne',
    year: '2026',
  },
  {
    slug: 'william-street-trail',
    location: 'Angola, Indiana',
    title: 'William Street (SR 827) Trail',
    description:
      'This trail extension project is located along the east side of William Street and connects two existing subdivisions between Harry-Kelley Boulevard and Henney Street. The project includes construction of a new 8-foot-wide concrete trail with ADA-compliant curb ramps and adjacent roadside drainage improvements. Apex provided field surveying, engineering design, plan preparation, and contract document services for this project. Construction is anticipated to be completed in 2026.',
    image: '',
    servicesCompleted: [
      'Field Surveying',
      'Engineering Design',
      'Plan Preparation',
      'Contract Documents',
    ],
    client: 'City of Angola',
    year: '2026',
  },
  {
    slug: 'ccmg-projects',
    location: 'Northeast Indiana',
    title: 'Community Crossing Matching Grant (CCMG) Projects',
    description:
      'Apex has helped numerous Northeast Indiana communities successfully secure funding through the Community Crossings Matching Grant (CCMG) program. Our team provides planning, application assistance, engineering and design, bidding support, and construction oversight to help keep projects on schedule and within budget. These projects have allowed municipalities to extend their local funds and improve their transportation and pedestrian facilities throughout their communities.',
    image: '/projects/proj4.jpg',
    featured: true,
    servicesCompleted: [
      'Planning',
      'Application Assistance',
      'Engineering & Design',
      'Bidding Support',
      'Construction Oversight',
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
