import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/section-header';
import Container from '../shared/container';

function ProjectsBanner() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative py-16 md:py-24 lg:py-36 mt-16 md:mt-24">
      {/* Background Image */}
      <Image
        src="/home-projects.png"
        alt="Surveyor at work"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/70" /> */}

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-5xl">
          <span className="text-white/80 uppercase tracking-wide text-sm font-medium">
            Our Projects
          </span>
          <SectionHeader
            highlightedWord="Indiana's Infrastructure"
            size="base"
            className="text-white mt-1 mb-2">
            Delivering Excellence Across Indiana&apos;s Infrastructure
          </SectionHeader>
          <p className="text-white md:text-lg mb-4">
            APEX Consulting & Surveying, Inc. works with a variety of
            clients to deliver top-quality engineering and surveying
            services. From the CR 15 Roadway Reconstruction in
            Garrett, Indiana, to the Market Street improvements in
            North Manchester, we&apos;ve helped rebuild vital roads
            and enhance pedestrian access. We also played a key role
            in creating the Chester Heights Trail, adding a scenic,
            ADA-compliant path through town. No matter the project,
            APEX brings expertise and dedication to ensure successful
            outcomes for our clients.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
            View Projects
            <span>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsBanner;
