import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

const bulletPoints = [
  'APEX Made Another Important Expansion In 2016 By Adding Engineering Services To Our Current Services. Our Engineering Services Include Transportation And Infrastructure Design, To Serve The Indiana Department Of Transportation (INDOT) And Municipality Public Works.',
  'With Over 150 Years Of Combined Experience And Knowledge Of Our Staff, The APEX Team Will Be Able To Provide A Unique Combination Of Field And Office Experience To Any Services And Clients.',
  'Our Service Goal To All Clients Is To Provide Reliable, Flexible, And Reasonable Costs For Any Project.',
];

function LegacySection() {
  return (
    <section className="mt-16 md:mt-24">
      <Container>
        {/* Heading */}
        <SectionHeader
          highlightedWord="Legacy Of Excellence"
          size="base"
          className="mb-2 max-w-4xl">
          Building On A Legacy Of Excellence In Surveying And
          Engineering
        </SectionHeader>

        {/* Introduction Paragraph */}
        <p className="text-base md:text-lg leading-relaxed">
          Apex Consulting And Surveying, Inc. (APEX) Was Founded In
          2004 Under The Name Of McCrea Land Surveying, Inc., Which Is
          Already Known For Providing Excellent Topographical And
          Boundary Surveying Services In The Northeastern Part Of The
          State. Apex Expanded Its Range Of Services In 2009 By Adding
          A Partner With Expertise And Fluency In Using Different
          Industry Software. This Expansion Enables APEX To Offer A
          More Expedited Variety Of Surveying Services, Including
          Right-Of-Way Engineering, Railroad, And Cell Towers, And
          Topographic And Boundary Surveys.
        </p>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-10 lg:gap-16 items-start mt-3 md:mt-12">
          {/* Bullet Points */}
          <div className="flex-1">
            <ul className="space-y-2 md:space-y-6 list-disc pl-4">
              {bulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-base md:text-lg leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors mt-4">
              Learn More
              <span>→</span>
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1 w-full lg:w-auto">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
              <Image
                src="/about-legacy.png"
                alt="Surveying tripod equipment on construction site"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LegacySection;
