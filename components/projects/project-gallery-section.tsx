'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';
import SectionHeader from '@/components/shared/section-header';
import Lightbox from './lightbox';

interface GalleryItem {
  src: string;
  alt: string;
  label?: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: '/projects/cr15.webp',
    alt: 'CR 15 Roadway Reconstruction in Garrett, Indiana',
    label: 'CR 15 Roadway Reconstruction',
    location: 'Garrett, Indiana',
  },
  {
    src: '/projects/market-street.webp',
    alt: 'Market Street pedestrian and roadway improvements in North Manchester',
    label: 'Market Street Improvements',
    location: 'North Manchester, Indiana',
  },
  {
    src: '/projects/chester-heights.png',
    alt: 'Chester Heights Trail with ADA-compliant path',
    label: 'Chester Heights Trail',
    location: 'Trail & ADA Improvements',
  },
  {
    src: '/gallery/1.webp',
    alt: '',
  },
  {
    src: '/gallery/2.webp',
    alt: '',
  },
  {
    src: '/gallery/3.webp',
    alt: '',
  },
  {
    src: '/gallery/4.webp',
    alt: '',
  },
  {
    src: '/gallery/5.webp',
    alt: '',
  },
  {
    src: '/gallery/6.webp',
    alt: '',
  },
  {
    src: '/gallery/7.webp',
    alt: '',
  },
  {
    src: '/gallery/8.webp',
    alt: '',
  },
  {
    src: '/gallery/9.webp',
    alt: '',
  },
  {
    src: '/gallery/10.webp',
    alt: '',
  },
  {
    src: '/gallery/11.webp',
    alt: '',
  },
];

function ProjectGallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <section className="bg-zinc-50 py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between mb-4">
            <div className="max-w-4xl">
              <SectionHeader
                size="base"
                highlightedWord="Gallery"
                className="mb-1">
                Our Gallery
              </SectionHeader>
              <p className="text-lg leading-relaxed">
                A closer look at a few of the roadway, streetscape,
                and trail projects APEX has supported across Indiana.
                From reconstruction and safety upgrades to
                ADA-compliant pedestrian connections.
              </p>
            </div>
          </div>

          <div className="grid gap-1 md:grid-cols-3">
            {galleryItems.map((item, index) => (
              <figure
                key={item.src}
                className="group relative overflow-hidden rounded-xl bg-black cursor-pointer"
                onClick={() => openLightbox(index)}>
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <svg
                        className="w-5 h-5 text-white"
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
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div className="text-sm font-semibold text-white">
                    {item.label}
                  </div>
                  <div className="text-xs text-zinc-200 mt-1">
                    {item.location}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryItems}
        currentIndex={currentIndex}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}

export default ProjectGallerySection;
