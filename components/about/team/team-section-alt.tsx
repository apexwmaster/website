import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import Image from 'next/image';
import { TeamMember, teamCategories } from './team-data';

interface TeamSectionAltProps {
  members: TeamMember[];
}

function TeamSectionAlt({ members }: TeamSectionAltProps) {
  const membersByCategory = teamCategories
    .map((category) => ({
      category,
      members: members.filter((m) => m.category === category),
    }))
    .filter((group) => group.members.length > 0);

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

        <div className="space-y-12">
          {membersByCategory.map(({ category, members: categoryMembers }) => (
            <div key={category}>
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category}
              </h3>

              {/* Mobile layout - horizontal cards */}
              <div className="sm:hidden grid grid-cols-1 gap-4">
                {categoryMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-3">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-lg font-semibold text-gray-500">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        </div>
                      )}
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
                {categoryMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="relative aspect-3/4 w-full rounded-2xl overflow-hidden mb-4">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-3xl font-semibold text-gray-500">
                            {member.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TeamSectionAlt;
