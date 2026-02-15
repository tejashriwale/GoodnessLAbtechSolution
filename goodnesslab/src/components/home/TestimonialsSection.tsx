'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPlay, FaPause } from 'react-icons/fa';
import { testimonials, Testimonial } from '@/lib/testimonials-data';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [userReviews, setUserReviews] = useState<Testimonial[]>([]);

  // Load user reviews from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('goodnesslab-reviews');
    if (saved) {
      try { setUserReviews(JSON.parse(saved)); } catch { /* ignore */ }
    }

    // Listen for new reviews added from WriteReviewSection
    const handleStorage = () => {
      const updated = localStorage.getItem('goodnesslab-reviews');
      if (updated) {
        try { setUserReviews(JSON.parse(updated)); } catch { /* ignore */ }
      }
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('reviewAdded', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('reviewAdded', handleStorage);
    };
  }, []);

  // Merge static testimonials + user reviews into one list
  const allReviews = useMemo(() => {
    return [...testimonials, ...userReviews];
  }, [userReviews]);

  useEffect(() => {
    if (!isAutoPlay || isPaused || allReviews.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allReviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, allReviews.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allReviews.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allReviews.length) % allReviews.length);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => setIsPaused(!isPaused);

  const getVisibleReviews = () => {
    if (allReviews.length === 0) return [];
    const count = Math.min(3, allReviews.length);
    const visible = [];
    for (let i = 0; i < count; i++) {
      const index = (currentIndex + i) % allReviews.length;
      visible.push({ ...allReviews[index], originalIndex: index });
    }
    return visible;
  };

  const visibleReviews = getVisibleReviews();
  const cardColors = [
    { border: 'border-primary-500', quote: 'text-primary-300', corner: 'from-primary-100', avatar: 'from-primary-400 to-primary-600', glow: 'bg-primary-400', company: 'text-primary-600' },
    { border: 'border-secondary-500', quote: 'text-secondary-300', corner: 'from-secondary-100', avatar: 'from-secondary-400 to-secondary-600', glow: 'bg-secondary-400', company: 'text-secondary-600' },
    { border: 'border-accent-gold', quote: 'text-accent-gold/40', corner: 'from-accent-gold/20', avatar: 'from-accent-gold to-primary-500', glow: 'bg-accent-gold', company: 'text-primary-600' },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,153,0,0.1) 35px, rgba(255,153,0,0.1) 70px)`
        }} />
      </div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-500/20 to-accent-gold/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-primary-500/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-accent-gold/20 backdrop-blur-sm border border-accent-gold/30 rounded-full mb-6">
            <span className="text-accent-gold text-xs font-bold tracking-widest uppercase">Reviews</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3 h-3 text-accent-gold" />
              ))}
            </div>
            {allReviews.length > testimonials.length && (
              <span className="text-accent-gold/70 text-xs font-semibold ml-1">
                ({allReviews.length})
              </span>
            )}
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-white">What Our </span>
            <span className="bg-gradient-to-r from-accent-gold via-yellow-400 to-primary-400 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-neutral-300 text-base md:text-lg max-w-2xl mx-auto font-light">
            Real feedback from industry leaders who trust our expertise
          </p>
        </div>

        {/* Review Cards */}
        <div className="max-w-7xl mx-auto relative fade-in-up">
          <div className={`grid gap-6 lg:gap-8 mb-8 ${
            visibleReviews.length === 1 ? 'max-w-lg mx-auto' :
            visibleReviews.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' :
            'md:grid-cols-3'
          }`}>
            {visibleReviews.map((review, idx) => {
              const color = cardColors[idx % cardColors.length];
              const isUserReview = idx + currentIndex >= testimonials.length || (currentIndex + idx) % allReviews.length >= testimonials.length;
              return (
                <div
                  key={`${review.originalIndex}-${review.id}`}
                  className={`group relative transition-all duration-500 ${
                    idx === 0 && visibleReviews.length === 3 ? 'md:scale-[1.02] z-10' : 'md:opacity-90'
                  } hover:scale-[1.03] hover:opacity-100 hover:z-20`}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div className={`relative h-full bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 border-t-4 ${color.border}`}>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${color.corner} to-transparent`} />

                    <div className="relative p-6 lg:p-8 flex flex-col h-full">
                      <FaQuoteLeft className={`h-10 w-10 mb-4 ${color.quote}`} />

                      <blockquote className="text-neutral-700 text-sm lg:text-base mb-6 leading-relaxed font-normal flex-1">
                        &ldquo;{review.quote}&rdquo;
                      </blockquote>

                      <div className="flex gap-1 mb-5">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="h-4 w-4 text-accent-gold drop-shadow-sm" />
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-5 border-t border-neutral-200">
                        <div className="relative">
                          <div className={`absolute inset-0 rounded-full blur-lg opacity-30 ${color.glow}`} />
                          <div className={`relative w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl bg-gradient-to-br ${color.avatar}`}>
                            {review.author.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-neutral-900 text-base">{review.author}</p>
                          {review.position && (
                            <p className="text-xs text-neutral-500">{review.position}</p>
                          )}
                          {review.company && (
                            <p className={`text-xs font-semibold mt-0.5 ${color.company}`}>{review.company}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1.5 backdrop-blur-sm text-white text-[10px] font-bold rounded-full flex items-center gap-1.5 shadow-lg ${
                      isUserReview ? 'bg-primary-500/90' : 'bg-accent-green/90'
                    }`}>
                      <span className="inline-block w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {isUserReview ? 'NEW' : 'VERIFIED'}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1.5">
              {allReviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-10 bg-gradient-to-r from-accent-gold to-primary-400'
                      : 'w-2 bg-neutral-600 hover:bg-neutral-500'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                >
                  {index === currentIndex && !isPaused && (
                    <div className="absolute top-0 left-0 h-full bg-white/40 animate-progress-bar rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="w-px h-6 bg-neutral-700" />

            <div className="flex gap-1.5">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm hover:bg-accent-gold/20 border border-neutral-600 hover:border-accent-gold/50 rounded-lg transition-all duration-300 group"
                aria-label="Previous"
              >
                <FaChevronLeft className="h-3.5 w-3.5 text-neutral-400 group-hover:text-accent-gold transition-colors" />
              </button>
              <button
                onClick={toggleAutoPlay}
                className="w-8 h-8 flex items-center justify-center bg-gradient-to-br from-accent-gold to-primary-500 hover:from-accent-gold hover:to-primary-400 rounded-lg transition-all duration-300 shadow-lg shadow-accent-gold/20"
                aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
              >
                {isPaused ? <FaPlay className="h-3 w-3 text-white ml-0.5" /> : <FaPause className="h-3 w-3 text-white" />}
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center bg-neutral-700/50 backdrop-blur-sm hover:bg-accent-gold/20 border border-neutral-600 hover:border-accent-gold/50 rounded-lg transition-all duration-300 group"
                aria-label="Next"
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
