import Container from '@/components/shared/container';

const FORT_WAYNE_TEL = 'tel:+12607555993';

function FenceCtaBanner() {
  return (
    <section
      data-navbar-theme="light"
      className="bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 border-t border-primary/15 py-4 md:py-5">
      <Container className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
            <span className="text-xl" aria-hidden="true">
              📐
            </span>
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Fence Survey Services
              </p>
              <p className="mt-1 text-sm leading-relaxed text-gray-900 md:text-base">
                <span className="font-semibold">
                  Need a new fence?
                </span>{' '}
                Know your property lines first. Apex provides reliable
                land surveys to ensure your fence is built in the
                right place – call us to get scheduled.
              </p>
            </div>
            <a
              href={FORT_WAYNE_TEL}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 w-fit">
              Call us now
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FenceCtaBanner;
