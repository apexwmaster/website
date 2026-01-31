import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import Link from 'next/link';

function ExperienceSection() {
  return (
    <section data-navbar-theme="light" className="mt-16 md:mt-24">
      <Container>
        {/* Text Content */}
        <div className="flex-1">
          <span className="text-primary font-medium">
            Our Experience
          </span>
          <SectionHeader
            highlightedWord="Decades Of Successful Projects"
            size="base"
            className="mt-2 mb-2 max-w-3xl">
            Trusted Expertise Backed By Decades Of Successful Projects
          </SectionHeader>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="w-full md:w-1/2">
              <p className="text-base md:text-lg md:leading-relaxed mb-4">
                With over 20 years of experience, APEX Consulting &
                Surveying, Inc. has successfully completed a wide
                range of projects for clients such as the Indiana
                Department of Transportation (INDOT), Local Public
                Agencies (LPA), and numerous A/E consulting firms. Our
                extensive portfolio showcases our ability to handle
                diverse surveying and engineering needs, from
                transportation infrastructure to public works
                projects. Backed by a team with over 150 years of
                combined expertise, APEX consistently delivers
                high-quality, reliable services that meet the unique
                requirements of each client.
              </p>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Learn More
                <span className="text-xl">→</span>
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden">
                <Image
                  src="/home-experience.png"
                  alt="Construction site aerial view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ExperienceSection;
