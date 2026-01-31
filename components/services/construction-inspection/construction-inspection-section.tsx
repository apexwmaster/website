import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

const inspectionImages = [
  {
    src: '/services/construction1.png',
    alt: 'Construction site with equipment',
  },
  {
    src: '/services/construction2.png',
    alt: 'Curb construction inspection',
  },
];

function ConstructionInspectionSection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        <SectionHeader
          highlightedWord="Inspection"
          size="base"
          className="mb-1">
          Construction Inspection
        </SectionHeader>
        <p className="text-lg md:text-2xl italic font-medium mb-2">
          Ensuring Quality And Compliance With{' '}
          <span className="text-primary">
            Expert Construction Inspection
          </span>
        </p>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          We oversee the entire construction process, inspecting
          contractor activities to guarantee compliance with project
          specifications. Our team also prepares detailed daily
          on-site inspection reports and conducts on-site material
          testing, ensuring quality and accuracy at every stage. With
          APEX, you can trust that your project will be completed to
          the highest standards of safety and precision.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6">
          {inspectionImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ConstructionInspectionSection;
