import Container from '@/components/shared/container';
import ProjectCard from './project-card';
import { Project } from './project-data';

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProjectsSection;
