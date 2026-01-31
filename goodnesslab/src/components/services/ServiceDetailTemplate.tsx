import React from 'react';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaCheckCircle } from 'react-icons/fa';
import { Service } from '@/lib/services-data';
import { Card, CardContent, CardHeader, CardTitle, Accordion, AccordionItem } from '@/components/ui';

interface ServiceDetailTemplateProps {
  service: Service;
}

export const ServiceDetailTemplate: React.FC<ServiceDetailTemplateProps> = ({ service }) => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-neutral-100 py-4">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-neutral-600 hover:text-primary-500 transition-colors flex items-center gap-1">
              <FaHome className="h-4 w-4" />
              Home
            </Link>
            <FaChevronRight className="h-3 w-3 text-neutral-400" />
            <Link href="/services" className="text-neutral-600 hover:text-primary-500 transition-colors">
              Services
            </Link>
            <FaChevronRight className="h-3 w-3 text-neutral-400" />
            <span className="text-primary-500 font-medium">{service.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{service.excerpt}</p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">Service Overview</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Standards Compliance */}
            {service.standards && service.standards.length > 0 && (
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-primary-900 mb-3 flex items-center gap-2">
                  <FaCheckCircle className="h-5 w-5 text-primary-500" />
                  Standards & Compliance
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.standards.map((standard, index) => (
                    <span
                      key={index}
                      className="bg-white px-3 py-1 rounded-full text-sm text-neutral-700 border border-neutral-200"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      {service.equipment && service.equipment.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Testing Equipment</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.equipment.map((equipment, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{equipment.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {equipment.manufacturer && (
                        <p className="text-sm text-neutral-600 mb-2">
                          <strong>Manufacturer:</strong> {equipment.manufacturer}
                        </p>
                      )}
                      {equipment.model && (
                        <p className="text-sm text-neutral-600 mb-2">
                          <strong>Model:</strong> {equipment.model}
                        </p>
                      )}
                      {equipment.capacity && (
                        <p className="text-sm text-neutral-600 mb-2">
                          <strong>Capacity:</strong> {equipment.capacity}
                        </p>
                      )}
                      {equipment.features && equipment.features.length > 0 && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold text-neutral-700 mb-2">Features:</p>
                          <ul className="text-sm text-neutral-600 space-y-1">
                            {equipment.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <FaCheckCircle className="h-3 w-3 text-accent-green mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tests Performed Section */}
      {service.tests && service.tests.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Tests Performed</h2>
              <Accordion>
                {service.tests.map((testCategory, index) => (
                  <AccordionItem
                    key={index}
                    title={testCategory.category}
                    defaultOpen={index === 0}
                  >
                    <ul className="space-y-2">
                      {testCategory.items.map((test, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <FaCheckCircle className="h-4 w-4 text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-neutral-700">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Sections */}
      {service.detailedSections && service.detailedSections.length > 0 && (
        <section className="section-padding bg-neutral-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Detailed Information</h2>
              <div className="space-y-6">
                {service.detailedSections.map((section, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        {section.description}
                      </p>
                      {section.standards && section.standards.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                          <span className="text-sm font-semibold text-neutral-700">Standards:</span>
                          {section.standards.map((standard, idx) => (
                            <span
                              key={idx}
                              className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                            >
                              {standard}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Request a Quote for {service.title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your testing requirements and receive a detailed quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-lg px-8 py-4"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
