export interface ClientCategory {
  id: string;
  title: string;
  icon: 'government' | 'engineering' | 'contractors';
  clients: string[];
}

export const clientCategories: ClientCategory[] = [
  {
    id: 'government',
    title: 'State and Local Agencies',
    icon: 'government',
    clients: [
      'Indiana Department of Transportation (INDOT)',
      'Allen County Highway Department (AHCD)',
      'City of Fort Wayne Utility Engineering (CUE)',
      'City of Fort Wayne Transportation Engineering',
      'City of Fort Wayne Greenway Department',
      'City of Fort Wayne Community Development',
      'City of Garrett Public Works',
      'City of Angola Public Works',
      'Town of North Manchester',
    ],
  },
  {
    id: 'engineering',
    title: 'Architecture/Engineering Consultants',
    icon: 'engineering',
    clients: [
      'American Structurepoint, Inc',
      'Butler, Fairman & Seufert, Inc',
      'Lochmueller Group',
      'DLZ, Indiana',
      'GAI Consultants',
      'Engineering Resource, Inc',
      'Kapur & Associates, Inc.',
      'Earth Source, Inc.',
      'Jones Petrie Rafinski, Inc.',
      'SJCA',
      'ARCADIS',
      'MSKTD',
      'Fishbeck, Inc',
      'Rise Engineering Solutions',
      'Inframap, Inc',
    ],
  },
  {
    id: 'contractors',
    title: 'Contractors and Developers',
    icon: 'contractors',
    clients: [
      'Brooks Construction',
      'E&B Paving',
      'Millstone Contractors',
      'Calumet Construction',
      'Pioneer Associates',
    ],
  },
];
