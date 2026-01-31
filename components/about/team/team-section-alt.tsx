import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import Image from 'next/image';
import { TeamMember } from './team-data';

interface TeamSectionAltProps {
  members: TeamMember[];
}

function TeamSectionAlt({ members }: TeamSectionAltProps) {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="Our Team"
          size="base"
          className="mb-1">
          Meet Our Team (Alternate)
        </SectionHeader>
        <p className="mb-8 md:text-lg leading-relaxed max-w-4xl">
          The APEX Consulting & Surveying Team Brings Extensive
          Experience Serving Clients In The Fort Wayne Area. They Take
          Pride In Their Ability To Swiftly Resolve Challenges While
          Consistently Exceeding Client Expectations, All At A
          Reasonable Cost. Leveraging Their Experience, Training, And
          Collective Creativity, The APEX Team Has Successfully
          Completed Numerous Projects, Always Driven By Their
          Commitment To Their Core Goal: &quot;Peak Performance Is Our
          Target.&quot;
        </p>

        {/* Mobile layout - horizontal cards */}
        <div className="sm:hidden grid grid-cols-1 gap-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gray-50 rounded-xl p-3">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tablet and Desktop layout - vertical cards */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSectionAlt;
