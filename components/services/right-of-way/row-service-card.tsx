import { RightOfWayService } from './row-data';

interface RowServiceCardProps {
  service: RightOfWayService;
}

function RowServiceCard({ service }: RowServiceCardProps) {
  const bgClass =
    service.variant === 'primary' ? 'bg-primary' : 'bg-gray-900';

  return (
    <div
      className={`${bgClass} rounded-2xl p-4 sm:p-5 md:p-6 aspect-video flex flex-col justify-between text-white`}>
      <span className="text-3xl sm:text-4xl md:text-5xl font-light opacity-80">
        {service.number}
      </span>
      <h3 className="font-medium text-base sm:text-lg md:text-xl">{service.title}</h3>
    </div>
  );
}

export default RowServiceCard;
