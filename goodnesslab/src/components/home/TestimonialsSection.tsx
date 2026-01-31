'use client';

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { testimonials } from '@/lib/testimonials-data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
  };

  // Get visible testimonials for multi-card display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], originalIndex: index });
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 relative overflow-hidden">
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,153,0,0.1) 35px, rgba(255,153,0,0.1) 70px)`
        }}></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-accent-gold/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-primary-500/20 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="container-custom relative z-10">
        {/* Header - Single line */}
        <div className="text-center mb-10 md:mb-12 fade-in-up">
          {/* Compact badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase">Testimonials</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3 h-3 text-accent-gold" />
              ))}
            </div>
          </div>

          {/* Single-line heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-accent-gold via-yellow-400 to-primary-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          {/* Simple subtitle */}
          <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Real feedback from industry leaders who trust our expertise
          </p>
        </div>

        {/* Testimonial cards - White with theme accents */}
        <div className="max-w-7xl mx-auto relative fade-in-up">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial, idx) => (
              <div
                key={testimonial.originalIndex}
                className={`group relative transition-all duration-500 ${
                  idx === 0 ? 'md:scale-105 z-10' : 'md:scale-95 md:opacity-90'
                } hover:scale-105 hover:opacity-100 hover:z-20`}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* White card with theme color accents */}
                <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 border-t-4 border-primary-500">
                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${
                    idx === 0 ? 'bg-gradient-to-bl from-primary-100 to-transparent' :
                    idx === 1 ? 'bg-gradient-to-bl from-secondary-100 to-transparent' :
                    'bg-gradient-to-bl from-accent-gold/20 to-transparent'
                  }`}></div>

                  <div className="relative p-8">
                    {/* Quote icon - large with theme color */}
                    <div className="mb-6">
                      <FaQuoteLeft className={`h-12 w-12 ${
                        idx === 0 ? 'text-primary-300' :
                        idx === 1 ? 'text-secondary-300' :
                        'text-accent-gold/40'
                      }`} />
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-neutral-700 text-base mb-8 leading-relaxed line-clamp-5 font-normal min-h-[120px]">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Star rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="h-5 w-5 text-accent-gold drop-shadow-sm"
                        />
                      ))}
                    </div>

                    {/* Author section */}
                    <div className="flex items-center gap-4 pt-6 border-t border-neutral-200">
                      {/* Avatar with theme color */}
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-full blur-lg opacity-30 ${
                          idx === 0 ? 'bg-primary-400' :
                          idx === 1 ? 'bg-secondary-400' :
                          'bg-accent-gold'
                        }`}></div>
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl ${
                          idx === 0 ? 'bg-gradient-to-br from-primary-400 to-primary-600' :
                          idx === 1 ? 'bg-gradient-to-br from-secondary-400 to-secondary-600' :
                          'bg-gradient-to-br from-accent-gold to-primary-500'
                        }`}>
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-neutral-900 text-lg mb-1">
                          {testimonial.author}
                        </p>
                        {testimonial.position && (
                          <p className="text-sm text-neutral-600 leading-tight">
                            {testimonial.position}
                          </p>
                        )}
                        {testimonial.company && (
                          <p className={`text-sm font-semibold mt-1 ${
                            idx === 0 ? 'text-primary-600' :
                            idx === 1 ? 'text-secondary-600' :
                            'text-primary-600'
                          }`}>
                            {testimonial.company}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Verified badge - top right */}
                  <div className="absolute top-6 right-6 px-4 py-2 bg-accent-green/90 backdrop-blur-sm text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-lg">
                    <span className="inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    VERIFIED
                  </div>

                  {/* Hover glow effect with theme color */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    idx === 0 ? 'bg-gradient-to-br from-primary-50/50 via-transparent to-transparent' :
                    idx === 1 ? 'bg-gradient-to-br from-secondary-50/50 via-transparent to-transparent' :
                    'bg-gradient-to-br from-accent-gold/10 via-transparent to-transparent'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Compact */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {/* Progress dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-gradient-to-r from-accent-gold to-primary-400'
                      : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  {index === currentIndex && !isPaused && (
                    <div className="absolute top-0 left-0 h-full bg-white/40 animate-progress-bar rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-neutral-700"></div>

            {/* Control buttons */}
            <div className="flex gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm hover:bg-accent-gold/20 border border-neutral-600 hover:border-accent-gold/50 rounded-lg transition-all duration-300 group"
                aria-label="Previous testimonials"
              >
                <FaChevronLeft className="h-3.5 w-3.5 text-neutral-400 group-hover:text-accent-gold transition-colors" />
              </button>

              <button
                onClick={toggleAutoPlay}
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-accent-gold to-primary-500 hover:from-accent-gold hover:to-primary-400 rounded-lg transition-all duration-300 shadow-lg shadow-accent-gold/20 hover:shadow-accent-gold/40"
                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isPaused ? (
                  <FaPlay className="h-3 w-3 text-white ml-0.5" />
                ) : (
                  <FaPause className="h-3 w-3 text-white" />
                )}
              </button>

              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm hover:bg-accent-gold/20 border border-neutral-600 hover:border-accent-gold/50 rounded-lg transition-all duration-300 group"
                aria-label="Next testimonials"
              >
                <FaChevronRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-accent-gold transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
