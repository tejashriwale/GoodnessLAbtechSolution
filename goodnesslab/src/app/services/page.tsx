import React from 'react';
import Link from 'next/link';
import { FaCog, FaFlask, FaMicroscope, FaShieldAlt, FaSearch, FaArrowRight } from 'react-icons/fa';
import { allServices } from '@/lib/services-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaCog,
  FaFlask,
  FaMicroscope,
  FaShieldAlt,
  FaSearch,
};

export const metadata = {
  title: 'Testing Services - Goodness Labtech Solutions',
  description: 'Comprehensive material testing services including Mechanical, Chemical, Metallography, Corrosion Testing, and Failure Analysis. NABL accredited, ISO 17025:2017.',
};

export default function ServicesPage() {
  const getIcon = (title: string) => {
    if (title.includes('Mechanical')) return 'FaCog';
    if (title.includes('Chemical')) return 'FaFlask';
    if (title.includes('Metallurg')) return 'FaMicroscope';
    if (title.includes('Corrosion')) return 'FaShieldAlt';
    if (title.includes('Failure')) return 'FaSearch';
    return 'FaCog';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Testing Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive material testing solutions with NABL accreditation and ISO 17025:2017 certification.
            We provide accurate, reliable results for all your testing needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service) => {
              const Icon = iconMap[getIcon(service.title)];
              return (
                <Card key={service.id} hover className="group h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary-100 p-4 rounded-lg group-hover:bg-primary-500 transition-colors">
                        {Icon && <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors" />}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-neutral-700 mb-4 flex-1">{service.excerpt}</p>

                    {/* Quick Info */}
                    <div className="mb-4 pt-4 border-t border-neutral-200">
                      <div className="text-sm text-neutral-600">
                        <strong>{service.equipment.length}+</strong> Equipment
                        {service.tests && (
                          <>
                            {' • '}
                            <strong>{service.tests.length}+</strong> Test Categories
                          </>
                        )}
                      </div>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-medium transition-colors"
                    >
                      View Details
                      <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Why Choose Our Testing Services?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">NABL Accredited</h3>
                <p className="text-neutral-700">
                  All our testing services are performed under NABL accreditation (ISO 17025:2017), ensuring the highest quality standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Fast Turnaround</h3>
                <p className="text-neutral-700">
                  We deliver test results within 24 hours for most standard tests without compromising accuracy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Expert Team</h3>
                <p className="text-neutral-700">
                  Our experienced metallurgists and technicians ensure precise testing and expert interpretation of results.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Comprehensive Reports</h3>
                <p className="text-neutral-700">
                  Detailed test reports with clear documentation and compliance with international standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Need Testing Services?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your testing requirements and get a quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-lg px-8 py-4"
            >
              Get a Quote
            </Link>
            <Link
              href="/about"
              className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4"
            >
              About Our Lab
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
