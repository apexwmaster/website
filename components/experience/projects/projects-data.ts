export interface Project {
  desNo: string;
  description: string;
}

export interface ProjectCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: 'indot' | 'lpa' | 'local';
  projects: Project[];
  summary?: string;
}

export const projectCategories: ProjectCategory[] = [
  {
    id: 'indot',
    title: 'INDOT Projects',
    subtitle: 'Notable Field Survey for INDOT Projects',
    icon: 'indot',
    summary:
      'Apex completed field survey for nearly 100 projects for INDOT throughout the State of Indiana.',
    projects: [
      {
        desNo: 'Des Nos. 2300952, 2300957, 2301051',
        description:
          'INDOT Fort Wayne District, Multiple Small Structures in various locations.',
      },
      {
        desNo: 'Des Nos. 2200030, 22000640, 2200642',
        description:
          'INDOT Fort Wayne District, SR 37 Rehabilitation from I-469 to Town of Harlan, Allen County.',
      },
      {
        desNo: 'Des No. 2200639',
        description:
          'INDOT Fort Wayne District, Small structure at Shrock Creek under U.S. 24.',
      },
      {
        desNo: 'Des No. 2200641',
        description:
          'INDOT Fort Wayne District, Small structure at Little Pipe Creek under SR 19.',
      },
      {
        desNo: 'Des No. 2200947',
        description: 'INDOT LaPorte District, Bridge deck overlay on S.R 16.',
      },
      {
        desNo: 'Des No. 2200826',
        description:
          'INDOT Laporte District, SR 39 Cold In-place Recycling from N Junction US 24 to S Junction of SR 16.',
      },
      {
        desNo: 'Des No. 2100822',
        description:
          'INDOT Fort Wayne District, SR 14 small structure over UNT Sugar Creek.',
      },
      {
        desNo: 'Des No. 2202031',
        description:
          'INDOT Fort Wayne District, US 33 Added Auxiliary Lanes, Allen County.',
      },
      {
        desNo: 'INDOT Central Office',
        description:
          'On-Call Subsurface Utility Engineering (SUE) Services, RFP 2102, Item ID 10718, RFP 2022 Item ID 14677 and, RFP 2023 Item ID 17143.',
      },
    ],
  },
  {
    id: 'lpa',
    title: 'LPA Projects',
    subtitle: 'Notable Field Survey for Federal Funded Local Public Agency (LPA) Projects',
    icon: 'lpa',
    projects: [
      {
        desNo: 'Des No. 2301660',
        description: 'Elkhart County – Bridge No. 385 Replacement.',
      },
      {
        desNo: 'Des No. 2201281',
        description:
          'City of Fort Wayne – Transportation Engineering, Tillman Road Bridge Replacement (Bridge No. 550).',
      },
      {
        desNo: 'Des No. 2201659',
        description:
          'City of Huntington, West Park Drive from Victory Noll Dr. to Diamond St.',
      },
      {
        desNo: 'Des No. 2200138',
        description: 'Elkhart County Bridge No. 385 Replacement.',
      },
      {
        desNo: 'Des No. 2100822',
        description: 'Elkhart County, Bridge No. 335 Replacement.',
      },
      {
        desNo: 'Des No. 2101773',
        description: 'Noble County, Riley Road Roundabout.',
      },
      {
        desNo: 'Des No. 2101771',
        description: 'Town of Middlebury, Bristol Avenue Reconstruction.',
      },
      {
        desNo: 'Des No. 2101761',
        description: 'Allen County, Van Zile Road Bridge No. 32.',
      },
      {
        desNo: 'Des No. 2101768',
        description: 'Allen County, Hamilton Road Bridge No. 242.',
      },
      {
        desNo: 'Des No. 2101300',
        description: 'Town of Bourbon, Sidewalks at various locations.',
      },
      {
        desNo: 'Des No. 1901273',
        description:
          'City of Fort Wayne North Clinton Street Widening, from Auburn Road to Mayhew Rd.',
      },
      {
        desNo: 'Des No. 1902825',
        description: 'Allen County Bridge No. 226 (Amber Road over Little River).',
      },
      {
        desNo: 'Des No. 1801426',
        description: 'Town of Leo-Cedarville, Amstutz Road Improvements.',
      },
      {
        desNo: 'Des No. 1801749',
        description: 'Town of Huntertown, Carroll Road Improvements.',
      },
      {
        desNo: 'Des No. 1702850',
        description: 'City of Warsaw, Lincoln Neighborhood Sidewalk Improvements.',
      },
      {
        desNo: 'Des No. 1297651',
        description: 'City of Warsaw, Husky Trail Improvements.',
      },
    ],
  },
  {
    id: 'local',
    title: 'Local & CCMG Projects',
    subtitle: 'Notable Field Survey and Engineering for Locally Funded & CCMG Projects',
    icon: 'local',
    projects: [
      {
        desNo: 'City of Fort Wayne',
        description:
          'City Utility Engineering, Zulu Sanitary Sewer Task: Topographic Surveying.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'City Utility Engineering, Bullerman Drain Green Design Task: Topographic Surveying and R/W engineering.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Broadway - Taylor Street and Broadway Roundabout Task: Topographic surveying.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Transportation Engineering, Trier Road Sidewalks Topographic Surveying and R/W engineering.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Greenway – Northeast Trail Phase 1 Topographic Survey and R/W Engineering.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Grele-Creek Trail Phase 1 Task: Topographic Survey, Right-of-way Engineering.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Transportation Engineering – Hassen Cassel Task: Topographic Surveying, Engineering Design.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Transportation Engineering – Goeglein Road Sidewalk Improvement Project Task: Topographic Survey and Location Control Route Survey.',
      },
      {
        desNo: 'City of Fort Wayne',
        description:
          'Transportation Engineering – West Jefferson Sidewalk Project Task: Topographic Surveying.',
      },
      {
        desNo: 'Town of North Manchester',
        description: 'Chester Heights Trail Task: Topographic surveying.',
      },
      {
        desNo: 'City of Garrett',
        description:
          'Des Nos. 2101409 & 2101410 - Multiple Roadway Improvement projects and ADA curb ramp reconstruction (CCMG) Task: Topographic surveying.',
      },
      {
        desNo: 'Town of North Manchester',
        description:
          'Des Nos. 1901016, 1901196, & 1901300 – Roadway and ADA curb ramps Improvement (CCMG). Task: Topographic surveying, plan preparation and design.',
      },
    ],
  },
];
