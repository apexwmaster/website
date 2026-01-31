export interface SurveyingBenefit {
  title: string;
  description: string;
  image: string;
}

export const surveyingBenefits: SurveyingBenefit[] = [
  {
    title: 'Time and cost savings',
    description:
      'The LiDAR Drone is typically less cost of operation than the conventional survey.',
    image: '/services/savings.png',
  },
  {
    title: 'Safety',
    description:
      'Survey crew will avoid collision with operating traffic, where the roads have a high traffic volume and high-speed.',
    image: '/services/safety.png',
  },
  {
    title: '3D Model',
    description:
      'Make 3D model for design and evaluation, and presentation.',
    image: '/services/3d.png',
  },
];
