import Link from 'next/link';
import Image from 'next/image';
import Container from './container';

function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#050505] text-zinc-300">
      <div className="py-10 md:py-14">
        <Container className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand + summary */}
          <div className="max-w-md space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="APEX Consulting & Surveying"
                width={140}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-zinc-400">
              APEX Consulting &amp; Surveying, Inc. provides precise,
              dependable surveying and engineering support for
              transportation, municipal, and site development projects
              across Indiana.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-sm min-w-[220px]">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
              Contact
            </h3>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Phone
              </div>
              <p className="mt-1 text-zinc-200">
                Fort Wayne:{' '}
                <a
                  href="tel:+12607555993"
                  className="hover:text-primary transition-colors">
                  (260) 755-5993
                </a>
              </p>
              <p className="mt-0.5 text-zinc-200">
                Indianapolis:{' '}
                <a
                  href="tel:+13179921644"
                  className="hover:text-primary transition-colors">
                  (317) 992-1644
                </a>
              </p>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Email
              </div>
              <p className="mt-1 text-zinc-200">
                <a
                  href="mailto:info@apexsurveying.net"
                  className="hover:text-primary transition-colors">
                  info@apexsurveying.net
                </a>
              </p>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Address
              </div>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=1313+Broadway+St,+Fort+Wayne,+IN+46802"
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-zinc-200 hover:text-primary transition-colors">
                1313 Broadway
                <span className="block">Fort Wayne, IN 46802</span>
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4 text-sm min-w-[180px]">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
              Quick links
            </h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-zinc-300 hover:text-primary transition-colors">
                Home
              </Link>
              <Link
                href="/about"
                className="block text-zinc-300 hover:text-primary transition-colors">
                About
              </Link>
              <Link
                href="/services"
                className="block text-zinc-300 hover:text-primary transition-colors">
                Services
              </Link>
              <Link
                href="/experience"
                className="block text-zinc-300 hover:text-primary transition-colors">
                Experience
              </Link>
              <Link
                href="/projects"
                className="block text-zinc-300 hover:text-primary transition-colors">
                Projects
              </Link>
              <Link
                href="/contact"
                className="block text-zinc-300 hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4 text-sm min-w-[220px]">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
              Office hours
            </h3>
            <p className="text-zinc-300">
              <span className="block">Monday – Friday</span>
              <span className="block">7:00am – 5:00pm</span>
            </p>
          </div>
        </Container>
      </div>

      <div className="border-t border-zinc-800">
        <Container className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} APEX Consulting &amp;
            Surveying. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            DBE/MBE/EBE Certified
          </p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
