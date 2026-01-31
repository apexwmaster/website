'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  MapPin,
  Calendar,
  Building2,
  ArrowLeft,
} from 'lucide-react';
import Container from '@/components/shared/container';
import { Project } from './project-data';
import Lightbox from './lightbox';

interface ProjectDetailProps {
  project: Project;
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = project.gallery || [
    { src: project.image, alt: project.title },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section
        data-navbar-theme="dark"
        className="relative h-[50vh] md:h-[60vh] min-h-[400px]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20" />

        <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
          {/* Back Link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Location Badge */}
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">
              {project.location}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
            {project.title}
          </h1>
        </Container>
      </section>

      {/* Project Info Bar */}
      <section className="bg-linear-to-r from-[#313131] via-[#000000] to-[#222222] py-6">
        <Container>
          <div className="flex flex-wrap gap-8 md:gap-16">
            {project.client && (
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">
                    Client
                  </div>
                  <div className="text-white font-medium">
                    {project.client}
                  </div>
                </div>
              </div>
            )}
            {project.year && (
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-white/60 text-xs uppercase tracking-wide">
                    Year
                  </div>
                  <div className="text-white font-medium">
                    {project.year}
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-white/60 text-xs uppercase tracking-wide">
                  Location
                </div>
                <div className="text-white font-medium">
                  {project.location}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section data-navbar-theme="light" className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600">
                {(project.fullDescription || project.description)
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Highlights */}
              {project.highlights &&
                project.highlights.length > 0 && (
                  <div className="mt-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Project Highlights
                    </h3>
                    <ul className="space-y-4">
                      {project.highlights.map((highlight, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Right Column - Services */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-6 md:p-8 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  Services Provided
                </h3>
                <ul className="space-y-4">
                  {project.servicesCompleted.map((service, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-700 font-medium">
                        {service}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-primary text-white py-3 px-6 rounded-full font-medium hover:bg-primary/90 transition-colors">
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(index)}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Whether you need surveying, engineering, or construction
              inspection services, APEX is here to help bring your
              project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                Contact Us
                <span>→</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
                View More Projects
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        currentIndex={currentImageIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}

export default ProjectDetail;
