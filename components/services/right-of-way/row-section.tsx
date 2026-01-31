import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import RowServiceCard from './row-service-card';
import { rightOfWayServices } from './row-data';

function RightOfWaySection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="Right-Of-Way"
          size="base"
          className="mb-1">
          Right-Of-Way Engineering
        </SectionHeader>
        <p className="text-lg md:text-2xl italic font-medium mb-2">
          Proven Right-Of-Way Engineering For{' '}
          <span className="text-primary">
            State And Local Projects
          </span>
        </p>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          With a strong track record, APEX has completed numerous
          right-of-way projects for the Indiana Department of
          Transportation (INDOT) and various local public agencies.
          Our expertise allows us to navigate the complexities of
          these projects, ensuring precision and compliance at every
          stage. Whether working on large-scale state initiatives or
          local public works, APEX brings exceptional skill and
          dedication to each project. Our Right-of-Way-Engineering
          services include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {rightOfWayServices.map((service, index) => (
            <RowServiceCard key={index} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default RightOfWaySection;
