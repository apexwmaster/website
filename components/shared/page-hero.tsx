import Image from 'next/image';
import img from '@/public/LooperGroup.svg';
import Container from './container';

export interface Stat {
  value: string;
  label: string;
}

interface PageHeroProps {
  title: string;
  description: string;
  stats?: Stat[];
}

function PageHero({ title, description, stats }: PageHeroProps) {
  return (
    <section
      data-navbar-theme="dark"
      className="bg-linear-to-r from-[#313131] via-[#000000] to-[#222222] text-white relative overflow-hidden">
      <Container
        className={`py-28 ${
          stats && stats.length > 0
            ? 'md:py-20 lg:py-28 xl:py-36'
            : 'md:py-28 lg:py-36 xl:py-48'
        }`}>
        {/* Desktop version - original layout */}
        <div className="hidden md:block relative z-20">
          <div className="w-4/5">
            <div className="mt-6">
              <h2 className="sm:text-5xl lg:text-6xl font-bold">
                {title}
              </h2>
              <p className="mt-3 max-w-4xl text-lg">{description}</p>
            </div>
          </div>
        </div>

        {/* Mobile version - optimized layout */}
        <div className="md:hidden relative z-20 text-left">
          <div className="w-full">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-base sm:leading-relaxed text-white/90">
              {description}
            </p>
          </div>
        </div>

        {/* Stats - shown at bottom if provided */}
        {stats && stats.length > 0 && (
          <div className="relative z-20 mt-12 md:mt-16 pt-4 border-t border-white/20 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-light text-primary">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>

      {/* Background graphic */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={img}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover lg:object-contain object-right opacity-40 md:opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>
    </section>
  );
}

export default PageHero;
