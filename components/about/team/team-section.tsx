import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import TeamMemberCard from './team-member-card';
import { TeamMember } from './team-data';

interface TeamSectionProps {
  members: TeamMember[];
}

function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="Our Team"
          size="base"
          className="mb-1">
          Meet Our Team
        </SectionHeader>
        <p className="mb-4 md:text-lg leading-relaxed">
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {members.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSection;
