'use client';

import { useState } from 'react';
import { ProjectCategory } from './projects-data';
import ProjectItem from './project-item';
import ProjectsModal from './projects-modal';

interface ProjectCategoryCardProps {
  category: ProjectCategory;
}

function ProjectCategoryCard({ category }: ProjectCategoryCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const displayedProjects = category.projects.slice(0, 4);

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:py-5 border-b border-gray-200">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary text-base sm:text-xl font-bold">
                {category.icon === 'indot' && 'IN'}
                {category.icon === 'lpa' && 'LP'}
                {category.icon === 'local' && 'LC'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">{category.subtitle}</p>
            </div>
          </div>
          {category.summary && (
            <p className="mt-4 text-primary font-medium text-sm bg-primary/5 px-4 py-2 rounded-lg">
              {category.summary}
            </p>
          )}
        </div>

        {/* Projects List - Preview */}
        <div className="px-4 sm:px-6 py-2">
          {displayedProjects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>

        {/* View All Button */}
        {category.projects.length > 4 && (
          <div className="px-4 sm:px-6 pb-4 sm:pb-5">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full py-3 text-center text-primary font-medium text-sm hover:bg-primary/5 rounded-lg transition-colors"
            >
              View All {category.projects.length} Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <ProjectsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={category}
      />
    </>
  );
}

export default ProjectCategoryCard;
