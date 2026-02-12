import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

function CivilEngineeringSection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="Civil Engineering"
          size="base"
          className="mb-1">
          Civil Engineering
        </SectionHeader>
        <p className="text-lg md:text-2xl italic font-medium mb-2">
          Reliable Civil Engineering Services For{' '}
          <span className="text-primary not-italic">Your Community</span>
        </p>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          Apex Consulting and Surveying provides comprehensive civil
          engineering services to support transportation, public works,
          and site development projects throughout Northeast Indiana. Our
          team works closely with clients and communities to deliver
          practical, cost-effective solutions from planning through
          construction.
        </p>
        <p className="text-base md:text-xl leading-relaxed">
          Our civil engineering services include roadway and pedestrian
          facility designs, stormwater management, water and sanitary
          sewer design, site grading and drainage, permitting and agency
          coordination, and construction phase services.
        </p>
      </Container>
    </section>
  );
}

export default CivilEngineeringSection;
