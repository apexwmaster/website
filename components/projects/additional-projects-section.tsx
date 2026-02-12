import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import { Project } from './project-data';
import { CheckCircle, MapPin } from 'lucide-react';

interface AdditionalProjectsSectionProps {
  projects: Project[];
}

function AdditionalProjectsSection({
  projects,
}: AdditionalProjectsSectionProps) {
  const additional = projects.filter((p) => !p.featured);

  if (additional.length === 0) return null;

  return (
    <section className="pb-16 md:pb-24">
      <Container>
        <SectionHeader
          highlightedWord="Projects"
          size="base"
          className="mb-8">
          Additional Projects
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additional.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 md:p-8 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold uppercase text-xs tracking-wide">
                  {project.location}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              {project.client && (
                <p className="text-sm text-gray-500 mb-3">
                  Client: {project.client}
                  {project.year && ` | ${project.year}`}
                </p>
              )}

              <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="bg-white rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 uppercase text-xs tracking-wide mb-3">
                  Services Provided
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.servicesCompleted.map((service, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AdditionalProjectsSection;
