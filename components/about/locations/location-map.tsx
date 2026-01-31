import { OfficeLocation } from './locations-data';

interface LocationMapProps {
  location: OfficeLocation;
}

function LocationMap({ location }: LocationMapProps) {
  return (
    <div className="w-full">
      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-gray-100">
        {location.mapEmbed ? (
          <iframe
            src={location.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={location.name}
            className="absolute inset-0"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            Map embed placeholder
          </div>
        )}
      </div>
      {location.address && (
        <p className="mt-3 text-sm md:text-base text-zinc-700 font-medium text-center">
          {location.address}
        </p>
      )}
    </div>
  );
}

export default LocationMap;
