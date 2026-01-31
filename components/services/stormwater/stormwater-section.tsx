import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

function StormwaterSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeader
          highlightedWord="Quality Management"
          size="base"
          className="mb-1">
          Stormwater Quality Management
        </SectionHeader>
        <p className="text-lg md:text-2xl italic font-medium mb-2">
          Expert Stormwater Quality Management For{' '}
          <span className="text-primary not-italic">
            Compliance And Cost Efficiency
          </span>
        </p>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          Our stormwater quality service includes preparing stormwater
          pollution prevention plans (SWPPP) and inspecting stormwater
          quality measures to ensure that the placement of the erosion
          control units meets the plans and specifications. Apex has
          provided stormwater quality inspection (SWQI) services for
          utility and transportation projects to municipalities,
          developers, INDOT through a contract with general
          contractors during project construction, and design
          consulting engineering firms. Our staff holds INDOT and
          CPESC certifications.
        </p>

        <div className="relative aspect-21/9 w-full rounded-2xl overflow-hidden">
          <Image
            src="/services/stormwater.png"
            alt="Stormwater erosion control measures"
            fill
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default StormwaterSection;
