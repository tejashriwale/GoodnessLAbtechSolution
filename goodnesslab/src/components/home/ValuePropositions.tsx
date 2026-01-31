'use client';

import React from 'react';
import { FaCheckCircle, FaClock, FaSmile, FaDollarSign, FaBullseye, FaTruck } from 'react-icons/fa';
import { VALUE_PROPOSITIONS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCheckCircle,
  FaClock,
  FaSmile,
  FaDollarSign,
  FaBullseye,
  FaTruck,
};

export const ValuePropositions: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/10 rounded-full opacity-30 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="mb-4 text-primary-900">Why Choose Goodness Lab</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We are committed to providing world-class testing services with the highest standards of quality, accuracy, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {VALUE_PROPOSITIONS.map((prop, index) => {
            const Icon = iconMap[prop.icon];
            return (
              <div
                key={prop.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card hover className="text-center h-full group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex justify-center mb-6">
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-5 rounded-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        {Icon && <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-600 group-hover:text-primary-700 transition-colors" />}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary-900 group-hover:text-primary-700 transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 mb-2 leading-relaxed">{prop.description}</p>
                    {prop.highlight && (
                      <div className="mt-4 pt-4 border-t border-neutral-200">
                        <p className="text-accent-red font-bold text-xl sm:text-2xl animate-pulse-slow">
                          {prop.highlight}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 text-center fade-in-up">
          <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Experience Excellence?</h3>
            <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Goodness Lab for their material testing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-primary bg-accent-gold text-primary-900 hover:bg-accent-gold/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Contact Us Today
              </a>
              <a
                href="/services"
                className="btn bg-white text-primary-900 hover:bg-neutral-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
