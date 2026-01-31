import Image from 'next/image';
import { TeamMember } from './team-data';

interface TeamMemberCardProps {
  member: TeamMember;
}

function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <div className="relative aspect-square w-full rounded-full overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="font-semibold text-gray-900">{member.name}</h3>
      <p className="text-gray-500 text-sm">{member.role}</p>
    </div>
  );
}

export default TeamMemberCard;
