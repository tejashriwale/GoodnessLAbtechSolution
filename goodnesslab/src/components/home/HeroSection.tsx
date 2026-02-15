'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaAward, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';

const HERO_IMAGES = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.png',
  '/images/hero-4.avif',
  '/images/hero-5.jpg',
];

export const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = useCallback(() => {
    setIsTransitioning(true);
    setNextImage((currentImage + 1) % HERO_IMAGES.length);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
      setIsTransitioning(false);
    }, 1000);
  }, [currentImage]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
      {/* Background Images with crossfade */}
      <div className="absolute inset-0">
        {/* Current image */}
        <div className="absolute inset-0">
          <Image
            src={HERO_IMAGES[currentImage]}
            alt="Goodness Labtech Laboratory"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Next image fading in */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}>
          <Image
            src={HERO_IMAGES[nextImage]}
            alt="Goodness Labtech Laboratory"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/80 via-neutral-900/50 to-neutral-900/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/60" />
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setNextImage(index);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentImage
                ? 'w-8 bg-accent-gold'
                : 'w-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* NABL Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-gold/90 backdrop-blur-md border-2 border-accent-gold text-primary-900 px-5 py-2.5 rounded-full font-bold text-sm mb-6 shadow-2xl">
            <FaAward className="h-5 w-5 text-primary-900" />
            <span>NABL Accredited Laboratory</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{
            textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.5)'
          }}>
            {COMPANY_INFO.fullTitle}
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-white mb-4 font-bold bg-primary-900/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
          }}>
            {COMPANY_INFO.tagline}
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-white mb-8 max-w-2xl leading-relaxed bg-primary-900/40 backdrop-blur-sm px-4 py-3 rounded-lg" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
          }}>
            NABL-accredited material testing laboratory dedicated to providing the highest degree of accuracy, fast turnaround time, and customer satisfaction.
          </p>

          {/* ISO Certification Badge */}
          <div className="flex items-center gap-3 mb-8 bg-white/90 backdrop-blur-md rounded-lg px-5 py-3 w-fit border-2 border-white shadow-xl">
            <FaCheckCircle className="text-accent-green h-5 w-5 flex-shrink-0" />
            <span className="text-base font-bold text-primary-900">ISO 17025:2017 Certified</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 font-bold text-base lg:text-lg px-8 py-4 rounded shadow-xl hover:shadow-2xl text-center transition-all inline-flex items-center justify-center transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white hover:border-white text-white font-semibold text-base lg:text-lg px-8 py-4 rounded text-center transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              View Services
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">24h*</div>
              <div className="text-sm text-white drop-shadow-md">Fast Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">100%</div>
              <div className="text-sm text-white drop-shadow-md">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">ISO</div>
              <div className="text-sm text-white drop-shadow-md">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-gold to-primary-500 shadow-lg"></div>
    </section>
  );
};
