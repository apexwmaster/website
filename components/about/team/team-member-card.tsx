import Image from 'next/image';
import { TeamMember } from './team-data';

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="text-center">
      <div className="relative aspect-square w-full rounded-full overflow-hidden mb-4">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-2xl font-semibold text-gray-500">
              {initials}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-gray-900">{member.name}</h3>
      <p className="text-gray-500 text-sm">{member.role}</p>
    </div>
  );
}

export default TeamMemberCard;
