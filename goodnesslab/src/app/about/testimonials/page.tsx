import React from 'react';
import Link from 'next/link';
import { FaQuoteLeft, FaStar, FaHome, FaChevronRight } from 'react-icons/fa';
import { testimonials } from '@/lib/testimonials-data';
import { Card, CardContent } from '@/components/ui';

export const metadata = {
  title: 'Client Testimonials - Goodness Labtech Solutions',
  description: 'Read what our satisfied clients have to say about our material testing services. Trusted by manufacturers and engineers across industries.',
};

export default function TestimonialsPage() {
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
            <span className="text-primary-500 font-medium">Testimonials</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonials from Our Clients
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Hear what our satisfied clients have to say about our testing services and commitment to excellence
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <FaQuoteLeft className="h-8 w-8 text-primary-200" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-accent-gold" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-neutral-700 mb-6 flex-1 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="pt-4 border-t border-neutral-200">
                    <p className="font-semibold text-primary-900">
                      {testimonial.author}
                    </p>
                    {testimonial.position && (
                      <p className="text-sm text-neutral-600">
                        {testimonial.position}
                        {testimonial.company && `, ${testimonial.company}`}
                      </p>
                    )}
                    {!testimonial.position && testimonial.company && (
                      <p className="text-sm text-neutral-600">{testimonial.company}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container-custom text-center">
          <h2 className="mb-12">Trusted by Industry Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">100%</div>
              <p className="text-neutral-700">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">24h</div>
              <p className="text-neutral-700">Average Turnaround</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">5★</div>
              <p className="text-neutral-700">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Join Our Satisfied Clients</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the same quality and reliability that our clients trust
          </p>
          <Link
            href="/contact"
            className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-lg px-8 py-4"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
