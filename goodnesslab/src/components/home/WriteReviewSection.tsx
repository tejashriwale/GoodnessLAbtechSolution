'use client';

import React, { useState, useEffect } from 'react';
import { FaStar, FaRegStar, FaPaperPlane, FaPen, FaQuoteLeft } from 'react-icons/fa';

interface UserReview {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
  date: string;
}

export const WriteReviewSection: React.FC = () => {
  const [userReviews, setUserReviews] = useState<UserReview[]>([]);
  const [formData, setFormData] = useState({ name: '', position: '', company: '', message: '', rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('goodnesslab-reviews');
    if (saved) {
      try { setUserReviews(JSON.parse(saved)); } catch { /* ignore */ }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const newReview: UserReview = {
      id: Date.now().toString(),
      quote: formData.message,
      author: formData.name,
      position: formData.position,
      company: formData.company,
      rating: formData.rating,
      date: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }),
    };

    const updated = [newReview, ...userReviews];
    setUserReviews(updated);
    localStorage.setItem('goodnesslab-reviews', JSON.stringify(updated));
    window.dispatchEvent(new Event('reviewAdded'));
    setFormData({ name: '', position: '', company: '', message: '', rating: 5 });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full mb-5">
            <FaPen className="w-3 h-3 text-primary-500" />
            <span className="text-primary-600 text-xs font-bold tracking-widest uppercase">Share Your Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-4">
            Write a{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-gold bg-clip-text text-transparent">
              Review
            </span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto">
            Your feedback helps us improve and serve you better
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Review Form - Left Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
              {submitted ? (
                <div className="p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-50 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Thank You!</h3>
                  <p className="text-neutral-500 text-sm">Your review has been submitted successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5">
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">Your Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-0.5 transition-transform hover:scale-110 active:scale-95"
                        >
                          {star <= formData.rating ? (
                            <FaStar className="h-8 w-8 sm:h-7 sm:w-7 text-accent-gold" />
                          ) : (
                            <FaRegStar className="h-8 w-8 sm:h-7 sm:w-7 text-neutral-300 hover:text-accent-gold/50" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 sm:py-2.5 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-neutral-50 focus:bg-white"
                    />
                  </div>

                  {/* Position & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Position</label>
                      <input
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder="e.g. Director"
                        className="w-full px-4 py-3 sm:py-2.5 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-1.5">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-4 py-3 sm:py-2.5 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-neutral-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Review */}
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-1.5">
                      Your Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your experience..."
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none bg-neutral-50 focus:bg-white"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3.5 sm:py-3 rounded-xl text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg active:scale-[0.98]"
                  >
                    <FaPaperPlane className="h-3.5 w-3.5" />
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Submitted Reviews - Right Side */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                Customer Reviews
                {userReviews.length > 0 && (
                  <span className="ml-2 text-sm font-semibold text-primary-500">({userReviews.length})</span>
                )}
              </h3>
            </div>

            {userReviews.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-neutral-200 p-10 sm:p-14 text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-neutral-100 flex items-center justify-center">
                  <FaQuoteLeft className="h-6 w-6 text-neutral-300" />
                </div>
                <h4 className="text-lg font-bold text-neutral-800 mb-2">No reviews yet</h4>
                <p className="text-neutral-400 text-sm max-w-xs mx-auto">
                  Be the first to share your experience with Goodness Labtech!
                </p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1 scrollbar-thin">
                {userReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl p-5 sm:p-6 shadow-sm border border-neutral-100 hover:shadow-md hover:border-primary-100 transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {review.author.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-neutral-900 text-sm">{review.author}</p>
                          {(review.position || review.company) && (
                            <p className="text-xs text-neutral-500">
                              {review.position}{review.position && review.company ? ' at ' : ''}{review.company}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={`h-3.5 w-3.5 ${i < review.rating ? 'text-accent-gold' : 'text-neutral-200'}`} />
                          ))}
                        </div>
                        <span className="text-[11px] text-neutral-400">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
