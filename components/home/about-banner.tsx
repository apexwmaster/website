import Image from 'next/image';
import Link from 'next/link';
import Container from '../shared/container';
import SectionHeader from '../shared/section-header';

const highlights = [
  { value: 'INDOT', label: 'Prequalified' },
  { value: '100+', label: 'Projects Completed' },
  { value: 'DBE/MBE/EBE', label: 'Certified Firm' },
];

function AboutBanner() {
  return (
    <section
      data-navbar-theme="light"
      className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="flex-1 w-full relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/home-about.png"
                  alt="APEX team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Accent Card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold">20+</div>
                <div className="text-sm text-white/80">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <span className="inline-block text-primary font-medium mb-1">
              About Us
            </span>
            <SectionHeader
              highlightedWord="Engineering Solutions"
              size="base"
              className="mb-2">
              Your Trusted Partner for Expert Surveying & Engineering
              Solutions
            </SectionHeader>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              At APEX Consulting & Surveying, Inc., we provide the
              expert guidance you need to ensure your construction
              project runs smoothly from start to finish. Whether
              it&apos;s topographical surveys to form the foundation
              of your design, right-of-way plans for land acquisition,
              or construction staking to keep everything on track,
              APEX delivers reliable and precise solutions.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold text-base">
                      {item.value}
                    </span>
                    <span className="text-gray-700 text-sm">
                      {item.label}
                    </span>
                  </div>
                  {index < highlights.length - 1 && (
                    <div className="hidden md:block w-px h-6 bg-gray-300" />
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
              Learn More About Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutBanner;
