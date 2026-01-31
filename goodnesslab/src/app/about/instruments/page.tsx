import React from 'react';
import Link from 'next/link';
import { FaHome, FaChevronRight, FaCog, FaCheckCircle } from 'react-icons/fa';
import {
  allEquipment,
  equipmentCategories,
  getEquipmentByCategory,
} from '@/lib/equipment-data';
import { Card, CardContent, CardHeader, CardTitle, Accordion, AccordionItem } from '@/components/ui';

export const metadata = {
  title: 'Testing Instruments & Equipment - Goodness Labtech Solutions',
  description: 'State-of-the-art material testing equipment including Universal Testing Machine, Hardness Testers, Impact Testers, and Spectrometers.',
};

export default function InstrumentsPage() {
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
            <Link href="/about" className="text-neutral-600 hover:text-primary-500 transition-colors">
              About Us
            </Link>
            <FaChevronRight className="h-3 w-3 text-neutral-400" />
            <span className="text-primary-500 font-medium">Instruments</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Capabilities & Instruments
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            State-of-the-art testing equipment operated by highly skilled professionals
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Our state-of-the-art facility is equipped with the latest testing technologies to ensure accurate and reliable results. We continuously upgrade our equipment and invest in staff training to provide world-class testing services.
            </p>
          </div>

          {/* Equipment Summary */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {allEquipment.length}+
                </div>
                <p className="text-neutral-700">Testing Equipment</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {equipmentCategories.length}
                </div>
                <p className="text-neutral-700">Equipment Categories</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
                <p className="text-neutral-700">Calibrated & Certified</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment by Category */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-12">Our Testing Equipment</h2>

            <Accordion>
              {equipmentCategories.map((category, index) => {
                const equipment = getEquipmentByCategory(category);
                if (equipment.length === 0) return null;

                return (
                  <AccordionItem
                    key={category}
                    title={`${category} (${equipment.length})`}
                    defaultOpen={index === 0}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {equipment.map((item) => (
                        <Card key={item.id}>
                          <CardHeader>
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            {item.manufacturer && (
                              <p className="text-sm text-neutral-600 mb-2">
                                <strong>Manufacturer:</strong> {item.manufacturer}
                              </p>
                            )}
                            {item.model && (
                              <p className="text-sm text-neutral-600 mb-2">
                                <strong>Model:</strong> {item.model}
                              </p>
                            )}
                            {item.capacity && (
                              <p className="text-sm text-neutral-600 mb-2">
                                <strong>Capacity:</strong> {item.capacity}
                              </p>
                            )}

                            {item.features && item.features.length > 0 && (
                              <div className="mt-3">
                                <p className="text-sm font-semibold text-neutral-700 mb-2">
                                  Features:
                                </p>
                                <ul className="space-y-1">
                                  {item.features.map((feature, idx) => (
                                    <li
                                      key={idx}
                                      className="text-sm text-neutral-600 flex items-start gap-2"
                                    >
                                      <FaCheckCircle className="h-3 w-3 text-accent-green mt-1 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {item.usedFor && item.usedFor.length > 0 && (
                              <div className="mt-3 pt-3 border-t border-neutral-200">
                                <p className="text-sm font-semibold text-neutral-700 mb-2">
                                  Used For:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {item.usedFor.map((use, idx) => (
                                    <span
                                      key={idx}
                                      className="bg-primary-50 text-primary-700 px-2 py-1 rounded text-xs"
                                    >
                                      {use}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Why Our Equipment Matters</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                    <FaCog className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    Latest Technology
                  </h3>
                  <p className="text-neutral-700">
                    We invest in cutting-edge testing equipment from leading manufacturers to ensure the highest accuracy and reliability in our results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                    <FaCheckCircle className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    Regular Calibration
                  </h3>
                  <p className="text-neutral-700">
                    All our equipment is regularly calibrated and maintained to meet international standards and ensure measurement accuracy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                    <FaCog className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    Skilled Operators
                  </h3>
                  <p className="text-neutral-700">
                    Our team of experienced technicians and metallurgists are trained to operate all equipment with precision and expertise.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="bg-primary-100 p-3 rounded-lg inline-block mb-4">
                    <FaCheckCircle className="h-6 w-6 text-primary-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    Continuous Upgrades
                  </h3>
                  <p className="text-neutral-700">
                    We continuously upgrade our technologies and machines to stay at the forefront of material testing capabilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Ready to Use Our Facilities?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss how our state-of-the-art equipment can meet your testing needs
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
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
