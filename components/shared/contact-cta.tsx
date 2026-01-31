import Image from 'next/image';
import Link from 'next/link';
import Container from './container';
import SectionHeader from './section-header';
import looperImg from '@/public/LooperGroup.svg';

import { Icon } from '@/components/ui/icon';

function ContactCTA() {
  return (
    <section
      data-navbar-theme="dark"
      className="relative overflow-hidden bg-linear-to-r from-[#313131] via-[#000000] to-[#222222] text-white py-12 md:py-20 lg:py-24">
      {/* Background graphic */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={looperImg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover lg:object-contain object-right opacity-40 md:opacity-60"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          {/* Left column: message */}
          <div className="w-full lg:w-1/2">
            <span className="text-white/70 uppercase tracking-wide text-xs md:text-sm font-semibold">
              Contact APEX
            </span>
            <SectionHeader
              size="base"
              className="text-white mt-1 mb-3 max-w-3xl">
              Partner with APEX for precise, dependable project
              delivery.
            </SectionHeader>
            <p className="text-white/80 text-base lg:text-lg md:leading-relaxed max-w-3xl">
              Whether you&apos;re planning a roadway improvement, site
              development, or complex infrastructure upgrade, our team
              brings field-tested surveying and engineering expertise
              to every phase of the project. Share your goals with us
              and we&apos;ll help you find the most efficient,
              cost-conscious path to completion.
            </p>

            <div className="mt-3 grid gap-4 text-sm md:text-base sm:grid-cols-2">
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Typical response time
                </div>
                <div className="mt-1 text-sm md:text-base">
                  Within 2–4 business days
                </div>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-primary">
                  Ideal for
                </div>
                <div className="mt-1 text-sm md:text-base">
                  Municipal, transportation, and site development
                  projects
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors mt-6">
              Get in Touch
              <span className="text-xl">→</span>
            </Link>
          </div>

          {/* Right column: quick contact options */}
          <div className="rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm p-4 md:p-6 lg:p-7 w-full lg:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold">
              How we can help
            </h3>
            <p className="mt-2 text-sm text-white/75">
              Share a brief overview of your project and we&apos;ll
              connect you with the right APEX team members.
            </p>

            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="Check" className="h-4 w-4" />
                </dt>
                <dd>
                  <div className="font-medium">
                    Surveying & construction staking
                  </div>
                  <div className="text-xs md:text-sm text-white/90">
                    Topographic surveys, right-of-way, and
                    construction layout for transportation and site
                    work.
                  </div>
                </dd>
              </div>

              <div className="flex gap-3">
                <dt className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="Check" className="h-4 w-4" />
                </dt>
                <dd>
                  <div className="font-medium">
                    Roadway & site design support
                  </div>
                  <div className="text-xs md:text-sm text-white/90">
                    Align survey data, design intent, and
                    constructability to keep your schedule on track.
                  </div>
                </dd>
              </div>

              <div className="flex gap-3">
                <dt className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Icon name="Check" className="h-4 w-4" />
                </dt>
                <dd>
                  <div className="font-medium">
                    INDOT & municipal projects
                  </div>
                  <div className="text-xs md:text-sm text-white/90">
                    Experienced with state and local standards,
                    documentation, and coordination.
                  </div>
                </dd>
              </div>
            </dl>

            {/* <div className="mt-6 border-t border-white/10 pt-4 text-xs md:text-sm text-white/75">
              Looking for something specific? Use the contact form to
              describe your scope, and we&apos;ll confirm next steps
              and availability.
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Get in Touch
                <span className="text-xl">→</span>
              </Link>
            </div> */}
            <div className="flex flex-col gap-1 mt-6 border-t border-white/10 pt-4 text-xs md:text-sm text-white/75">
              <span>Prefer to talk through the details?</span>
              <span className="font-medium text-white">
                Call our office or include your timeline and budget in
                the contact form.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactCTA;
