import Image from 'next/image';
import { SurveyingBenefit } from './surveying-data';

interface BenefitCardProps {
  benefit: SurveyingBenefit;
}

function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
      <Image
        src={benefit.image}
        alt={benefit.title}
        fill
        className="object-cover"
      />
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/60" /> */}
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-center text-center">
        <h3 className="text-white font-semibold text-lg mb-2">
          {benefit.title}
        </h3>
        <p className="text-white/80 text-sm">{benefit.description}</p>
      </div>
    </div>
  );
}

export default BenefitCard;
