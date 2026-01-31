import LegacySection from '@/components/about/legacy-section';
import { LocationsSection } from '@/components/about/locations';
import { TeamSection, TeamSectionAlt } from '@/components/about/team';
import PageHero from '@/components/shared/page-hero';
import { getTeamMembers, getOfficeLocations } from '@/sanity/lib/data';

async function AboutPage() {
  const [teamMembers, officeLocations] = await Promise.all([
    getTeamMembers(),
    getOfficeLocations(),
  ]);

  return (
    <main>
      <PageHero
        title="About Us"
        description="Founded in 2004, Aex Consulting & Surveying, Inc. has over 20 years of experience delivering topographical, boundary, and right-of-way surveying services. Expanding its expertise in 2009 and adding engineering services in 2016, Apex now serves transportation and infrastructure projects across Indiana."
      />
      <LegacySection />
      <TeamSection members={teamMembers} />
      <TeamSectionAlt members={teamMembers} />
      <LocationsSection locations={officeLocations} />
    </main>
  );
}

export default AboutPage;
