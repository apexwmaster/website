export interface RightOfWayService {
  number: number;
  title: string;
  variant: 'dark' | 'primary';
}

export const rightOfWayServices: RightOfWayService[] = [
  {
    number: 1,
    title: 'Parcel plats',
    variant: 'dark',
  },
  {
    number: 2,
    title: 'Property legal description',
    variant: 'primary',
  },
  {
    number: 3,
    title: 'Right of way staking',
    variant: 'dark',
  },
];
