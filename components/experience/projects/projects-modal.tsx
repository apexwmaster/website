'use client';

import { useEffect } from 'react';
import { ProjectCategory } from './projects-data';
import ProjectItem from './project-item';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: ProjectCategory;
}

function ProjectsModal({ isOpen, onClose, category }: ProjectsModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden shadow-xl">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-200 flex items-start justify-between gap-4 shrink-0">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary text-xl font-bold">
                {category.icon === 'indot' && 'IN'}
                {category.icon === 'lpa' && 'LP'}
                {category.icon === 'local' && 'LC'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900">
                {category.title}
              </h3>
              <p className="text-gray-500 text-sm">{category.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors shrink-0"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Summary if exists */}
        {category.summary && (
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
            <p className="text-primary font-medium text-sm">
              {category.summary}
            </p>
          </div>
        )}

        {/* Projects List - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-2">
          {category.projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 shrink-0">
          <p className="text-sm text-gray-500 text-center">
            Showing all {category.projects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsModal;
