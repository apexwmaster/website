import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import ProjectCategoryCard from './project-category-card';
import { ProjectCategory } from './projects-data';

interface ProjectsSectionProps {
  categories: ProjectCategory[];
}

function ProjectsSection({ categories }: ProjectsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionHeader
          highlightedWord="Notable Projects"
          size="base"
          className="mb-1">
          Our Notable Projects
        </SectionHeader>
        <p className="text-base md:text-xl leading-relaxed mb-2 sm:mb-4">
          With decades of experience, APEX has successfully delivered
          projects across Indiana for state agencies, local
          governments, and private clients. Explore our comprehensive
          portfolio of surveying and engineering achievements.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
          {categories.map((category) => (
            <ProjectCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
