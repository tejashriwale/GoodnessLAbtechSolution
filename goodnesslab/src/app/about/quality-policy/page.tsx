import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaHome, FaChevronRight, FaAward, FaCertificate } from 'react-icons/fa';
import { COMPANY_INFO, QUALITY_POLICY_POINTS } from '@/lib/constants';
import { Card, CardContent } from '@/components/ui';

export const metadata = {
  title: 'Quality Policy - Goodness Labtech Solutions',
  description: 'Our commitment to quality, accuracy, and excellence. NABL accredited laboratory following ISO 17025:2017 standards.',
};

export default function QualityPolicyPage() {
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
            <span className="text-primary-500 font-medium">Quality Policy</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Quality Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Commitment to Excellence in Material Testing Services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Trust Statement */}
            <div className="bg-gradient-to-r from-accent-gold/20 to-yellow-100 border-l-4 border-accent-gold p-8 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-accent-gold p-4 rounded-lg">
                  <FaAward className="h-8 w-8 text-primary-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 mb-3">
                    You Can Trust Goodness Lab
                  </h2>
                  <p className="text-neutral-700 text-lg">
                    Our testing processes are backed by our accreditation from{' '}
                    <strong>NABL (National Accreditation Board for Testing and Calibration Laboratories)</strong>,
                    A Constituent Board of the Quality Council of India, Government of India, as per{' '}
                    <strong>ISO 17025:2017</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Quality Policy Points */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
                Our Quality Commitments
              </h2>
              <div className="space-y-4">
                {QUALITY_POLICY_POINTS.map((point, index) => (
                  <Card key={index}>
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="bg-primary-100 p-2 rounded-full flex-shrink-0 mt-1">
                        <FaCheckCircle className="h-5 w-5 text-primary-500" />
                      </div>
                      <p className="text-lg text-neutral-700 leading-relaxed">{point}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="bg-primary-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Continuous Improvement
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our effort is to continuously upgrade technologies, machines, and provide regular training to staff to achieve continuous improvement of quality. We invest in the latest testing equipment and methodologies to ensure that our services meet the evolving needs of our clients and comply with international standards.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
                Our Core Values
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                      <FaCheckCircle className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Integrity</h3>
                    <p className="text-neutral-700">
                      Honest and transparent in all our operations and reporting
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                      <FaAward className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Accuracy</h3>
                    <p className="text-neutral-700">
                      Precision and reliability in every test we perform
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                      <FaCertificate className="h-8 w-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">Reliability</h3>
                    <p className="text-neutral-700">
                      Consistent quality and timely delivery of results
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Our Certifications</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Accredited and certified to deliver world-class testing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/certificates"
              className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-lg px-8 py-4"
            >
              View Certificates
            </Link>
            <Link
              href="/contact"
              className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
