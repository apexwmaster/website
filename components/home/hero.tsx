import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/shared/section-header';
import Container from '../shared/container';

function Hero() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative min-h-[90vh] flex items-center">
      {/* Background Image (fallback) */}
      <Image
        src="/hero.png"
        alt="Aerial view of farmland and road"
        fill
        className="object-cover"
        priority
      />

      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero.png"
        aria-hidden="true">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <Container className="relative z-10 py-20 w-full">
        <SectionHeader
          highlightedWord="Apex Consulting"
          size="lg"
          className="text-white mb-6 lg:hidden">
          Apex Consulting & Surveying
        </SectionHeader>

        <SectionHeader
          highlightedWord="Apex Consulting"
          size="xl"
          className="text-white mb-6 hidden lg:block">
          Apex Consulting & Surveying
        </SectionHeader>
        <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide mb-8 md:max-w-3xl lg:max-w-4xl">
          Apex Consulting & Surveying, Inc. (APEX), is a DBE/MBE/EBE
          firm headquartered in Fort Wayne, Indiana that provides
          quality services in the areas of land surveying,
          transportation, public works, and site development projects.
          APEX is also well qualified to provide environmental
          surveys, right-of-way engineering (INDOT prequalified), and
          construction staking.
        </p>

        <Link
          href="/about"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
          Learn More
          <span className="text-xl">→</span>
        </Link>
      </Container>
    </section>
  );
}

export default Hero;
