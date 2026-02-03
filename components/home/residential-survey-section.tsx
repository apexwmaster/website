import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';

function ResidentialSurveySection() {
  const services = [
    { icon: '📍', label: 'Boundary Surveys' },
    { icon: '🏗️', label: 'Lot Staking' },
    { icon: '🏠', label: 'Home Improvement' },
    { icon: '🔨', label: 'Fence Projects' },
  ];

  return (
    <section
      data-navbar-theme="light"
      className="relative py-16 md:py-24 bg-linear-to-b from-primary/8 via-primary/3 to-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-40 -top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block text-primary font-medium mb-3 px-3 py-1 bg-primary/10 rounded-full text-sm">
            Services
          </span>
          <SectionHeader
            highlightedWord="Residential Survey"
            size="base"
            className="mb-6">
            We Do Residential Survey
          </SectionHeader>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            APEX Consulting & Surveying provides residential surveying
            services. Whether you need a boundary survey, lot staking, or
            support for a home improvement or fence project, our team
            delivers accurate, reliable results for homeowners across
            Indiana.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.label}
                className="p-4 rounded-lg bg-white border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all">
                <div className="text-3xl mb-2">{service.icon}</div>
                <p className="text-sm font-medium text-gray-900 leading-tight">
                  {service.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ResidentialSurveySection;
