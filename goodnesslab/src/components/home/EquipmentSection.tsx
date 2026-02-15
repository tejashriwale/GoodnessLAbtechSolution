'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight, FaMicroscope } from 'react-icons/fa';

const INSTRUMENTS = [
  {
    id: 1,
    name: 'Vickers Hardness Tester',
    description: 'Digital micro Vickers hardness testing machine with computerized analysis for precise surface hardness measurement.',
    image: '/images/instrument-1.jpg',
  },
  {
    id: 2,
    name: 'Rockwell Hardness Tester',
    description: 'Twin model Rockwell hardness tester for quick and accurate hardness measurement of metals and alloys.',
    image: '/images/instrument-2.jpg',
  },
  {
    id: 3,
    name: 'Universal Testing Machine',
    description: 'Hydraulic UTM for tensile, compression, bend, and shear testing of materials with digital readout.',
    image: '/images/instrument-3.jpg',
  },
  {
    id: 4,
    name: 'Impact Testing Machine',
    description: 'Charpy and Izod impact testing machine for determining the toughness and impact resistance of materials.',
    image: '/images/instrument-4.jpg',
  },
  {
    id: 5,
    name: 'Brinell Hardness Tester',
    description: 'B-3000 optical Brinell hardness tester for heavy-duty hardness testing of castings and forgings.',
    image: '/images/instrument-5.jpg',
  },
  {
    id: 6,
    name: 'Spectrometer (SPECTROMAXx)',
    description: 'Advanced OES spectrometer for complete chemical composition analysis of metals with high accuracy.',
    image: '/images/instrument-6.jpg',
  },
];

export const EquipmentSection: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + INSTRUMENTS.length) % INSTRUMENTS.length : null));
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % INSTRUMENTS.length : null));

  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #64748b 1px, transparent 0)`,
        backgroundSize: '32px 32px',
      }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-50 border border-secondary-100 rounded-full mb-5">
            <FaMicroscope className="w-3.5 h-3.5 text-secondary-500" />
            <span className="text-secondary-600 text-xs font-bold tracking-widest uppercase">Our Laboratory</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">
            Testing{' '}
            <span className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
              Equipment
            </span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">
            State-of-the-art instruments ensuring precise and reliable test results
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INSTRUMENTS.map((instrument, index) => (
            <div
              key={instrument.id}
              className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-52 lg:h-56 bg-neutral-50 overflow-hidden">
                <Image
                  src={instrument.image}
                  alt={instrument.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-secondary-500/0 group-hover:bg-secondary-500/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-secondary-600 text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    View Details
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-bold text-neutral-900 text-base mb-1.5 group-hover:text-primary-600 transition-colors">
                  {instrument.name}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2">
                  {instrument.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={closeLightbox} />

          <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm hover:bg-neutral-100 rounded-full transition-colors shadow-md"
            >
              <FaTimes className="h-4 w-4 text-neutral-600" />
            </button>

            {/* Image */}
            <div className="relative h-[50vh] sm:h-[55vh] bg-neutral-50">
              <Image
                src={INSTRUMENTS[lightbox].image}
                alt={INSTRUMENTS[lightbox].name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 768px) 100vw, 768px"
              />

              {/* Prev / Next */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <FaChevronLeft className="h-4 w-4 text-neutral-700" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-colors"
              >
                <FaChevronRight className="h-4 w-4 text-neutral-700" />
              </button>
            </div>

            {/* Info */}
            <div className="p-6 border-t border-neutral-100">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {INSTRUMENTS[lightbox].name}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {INSTRUMENTS[lightbox].description}
                  </p>
                </div>
                <span className="text-xs text-neutral-400 whitespace-nowrap flex-shrink-0">
                  {lightbox + 1} / {INSTRUMENTS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
