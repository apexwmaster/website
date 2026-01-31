import { Project } from './projects-data';

interface ProjectItemProps {
  project: Project;
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="shrink-0">
        <span className="inline-flex items-center justify-center w-2 h-2 mt-2 rounded-full bg-primary" />
      </div>
      <div>
        <span className="font-medium text-gray-900 text-sm">{project.desNo}</span>
        <p className="text-gray-600 text-sm mt-1">{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
