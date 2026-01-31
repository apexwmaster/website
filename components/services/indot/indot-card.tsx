import Image from 'next/image';
import { IndotWorkType } from './indot-data';

interface IndotCardProps {
  workType: IndotWorkType;
}

function IndotCard({ workType }: IndotCardProps) {
  return (
    <div className="relative aspect-video w-full rounded-2xl overflow-hidden group">
      <Image
        src={workType.image}
        alt={workType.title}
        fill
        className="object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
      {/* Content */}
      <div className="absolute inset-0 px-5 py-6 flex flex-col justify-between">
        <span className="text-white font-semibold text-lg">
          {workType.code}
        </span>
        <h3 className="text-white text-xl">{workType.title}</h3>
      </div>
    </div>
  );
}

export default IndotCard;
