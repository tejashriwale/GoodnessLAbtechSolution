'use client';

import React from 'react';
import Link from 'next/link';
import { FaCog, FaFlask, FaMicroscope, FaShieldAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import { SERVICES_OVERVIEW } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCog,
  FaFlask,
  FaMicroscope,
  FaShieldAlt,
  FaSearch,
};

export const ServicesOverview: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-gold/10 rounded-full opacity-20 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-accent-gold/20 text-accent-red rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="mb-4 text-primary-900">Our Testing Services</h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive material testing solutions with NABL accreditation and ISO 17025:2017 certification.
            We provide accurate, reliable results for all your testing needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_OVERVIEW.map((service, index) => {
            const Icon = iconMap[service.icon || 'FaCog'];
            return (
              <div
                key={service.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card hover className="group h-full hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary-300 bg-white">
                  <CardHeader className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>

                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        {Icon && <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary-600 group-hover:text-primary-700 transition-colors" />}
                      </div>
                      <div className="bg-accent-gold/10 px-3 py-1 rounded-full">
                        <span className="text-xs font-semibold text-primary-700">NABL</span>
                      </div>
                    </div>

                    <CardTitle className="group-hover:text-primary-600 transition-colors text-lg sm:text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm sm:text-base text-neutral-700 mb-6 leading-relaxed min-h-[60px]">{service.excerpt}</p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-all group/link"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover/link:w-full transition-all duration-300"></span>
                      </span>
                      <FaArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 fade-in-up">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">5</div>
            <p className="text-sm sm:text-base text-neutral-600 font-medium">Testing Services</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">100+</div>
            <p className="text-sm sm:text-base text-neutral-600 font-medium">Test Methods</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">24h</div>
            <p className="text-sm sm:text-base text-neutral-600 font-medium">Turnaround Time</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-300">
            <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-2">ISO</div>
            <p className="text-sm sm:text-base text-neutral-600 font-medium">17025:2017</p>
          </div>
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Link
            href="/services"
            className="btn-primary text-base sm:text-lg px-6 sm:px-10 py-3 sm:py-4 shadow-xl hover:shadow-2xl"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};
