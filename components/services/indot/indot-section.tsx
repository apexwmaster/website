import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import IndotCard from './indot-card';
import { indotWorkTypes } from './indot-data';

function IndotSection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="INDOT"
          size="base"
          className="mb-1">
          INDOT Prequalification
        </SectionHeader>
        <p className="mb-4 md:text-xl">
          APEX received Indiana Department of Transportation (INDOT)
          prequalification for five primary work types:
        </p>

        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 mb-2 sm:mb-6">
          {indotWorkTypes.slice(0, 3).map((workType, index) => (
            <IndotCard key={index} workType={workType} />
          ))}
        </div>

        {/* Second row - 2 cards full width */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
          {indotWorkTypes.slice(3, 5).map((workType, index) => (
            <IndotCard key={index} workType={workType} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default IndotSection;
