import Image from 'next/image';
import Link from 'next/link';
import { Project } from './project-data';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12">
      {/* Image */}
      <div className="lg:w-1/2">
        <Link
          href={`/projects/${project.slug}`}
          className="block group">
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        {/* Location */}
        <div className="flex items-center gap-2 md:mb-3">
          <span className="w-6 h-1 bg-primary" />
          <span className="text-primary font-bold uppercase text-xs sm:text-sm tracking-wide">
            {project.location}
          </span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-4 hover:text-primary transition-colors">
            {project.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-3 md:mb-6">
          {project.description}
        </p>

        {/* Services Completed */}
        <div className="bg-gray-100 rounded-xl p-6 mb-2 md:mb-6">
          <h4 className="font-semibold text-gray-900 uppercase text-sm tracking-wide mb-4">
            Services Completed
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.servicesCompleted.map((service, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* View Details Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
          View Project Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
