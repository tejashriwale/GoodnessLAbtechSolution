import React from 'react';
import Link from 'next/link';
import { FaAward, FaCertificate, FaCogs, FaUsers, FaArrowRight } from 'react-icons/fa';
import { COMPANY_INFO, WHY_CHOOSE_US } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata = {
  title: 'About Us - Goodness Labtech Solutions',
  description: 'NABL-accredited material testing laboratory in Pune, Maharashtra. Specialists in mechanical, chemical, and metallurgical testing with ISO 17025:2017 certification.',
};

export default function AboutPage() {
  const subPages = [
    {
      title: 'Testimonials',
      description: 'Read what our clients say about our services',
      href: '/about/testimonials',
      icon: FaUsers,
    },
    {
      title: 'Quality Policy',
      description: 'Our commitment to excellence and quality standards',
      href: '/about/quality-policy',
      icon: FaAward,
    },
    {
      title: 'Instruments',
      description: 'State-of-the-art testing equipment and capabilities',
      href: '/about/instruments',
      icon: FaCogs,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1920&q=80), url(/images/about/facility.jpg)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-800/75 via-primary-700/65 to-primary-600/55"></div>

        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{
            textShadow: '3px 3px 10px rgba(0,0,0,0.9), 0px 0px 30px rgba(0,0,0,0.6)'
          }}>About Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto font-semibold bg-primary-900/50 backdrop-blur-sm px-6 py-3 rounded-lg inline-block" style={{
            textShadow: '2px 2px 6px rgba(0,0,0,0.8)'
          }}>
            Your Trusted Partner in Metallurgical Material Testing Solutions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Welcome to {COMPANY_INFO.name}
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  At Goodness Labtech Solutions LLP, Bhosari MIDC, Pune, Maharashtra, we specialize in providing high-quality, accurate and reliable metallurgical material testing services to support industries that rely on the strength, durability, and performance of metals.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed mb-4">
                  With a focus on both raw materials and finished components, we help manufacturers, researchers, and engineers ensure the highest standards of material quality and performance.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Our state-of-the-art facility is equipped with the latest testing technologies and operated by a team of highly skilled professionals. We are committed to delivering precise, fast, and cost-effective solutions for all your metallurgical testing needs, ensuring that your materials perform optimally in their intended applications.
                </p>
              </div>
            </div>

            {/* NABL Accreditation Banner */}
            <div className="bg-gradient-to-r from-accent-gold/20 to-yellow-100 border-l-4 border-accent-gold p-8 rounded-r-lg mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-accent-gold p-4 rounded-lg">
                  <FaCertificate className="h-8 w-8 text-primary-900" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">NABL Accredited Laboratory</h3>
                  <p className="text-neutral-700 mb-2">
                    Accredited by NABL (National Accreditation Board for Testing and Calibration Laboratories), A Constituent Board of the Quality Council of India, Government of India, as per ISO 17025:2017.
                  </p>
                  <Link
                    href="/certificates"
                    className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-700 font-medium transition-colors mt-2"
                  >
                    View Our Certificates
                    <FaArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
                Why Choose Goodness Lab?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {WHY_CHOOSE_US.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-700">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Laboratory Facility Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our State-of-the-Art Facility</h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Equipped with cutting-edge testing equipment and maintained to the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Facility Image 1 - Material Testing */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div
                className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80), url(/images/about/lab-facility-1.jpg)' }}
              >
                <div className="absolute inset-0 bg-primary-900/50 group-hover:bg-primary-900/70 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-lg font-bold drop-shadow-lg">Material Testing</h3>
                  <p className="text-sm text-blue-100 drop-shadow-md">Advanced testing equipment</p>
                </div>
              </div>
            </div>

            {/* Facility Image 2 - Mechanical Testing */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div
                className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80), url(/images/about/lab-facility-2.jpg)' }}
              >
                <div className="absolute inset-0 bg-primary-900/50 group-hover:bg-primary-900/70 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-lg font-bold drop-shadow-lg">Mechanical Testing</h3>
                  <p className="text-sm text-blue-100 drop-shadow-md">Precision and accuracy</p>
                </div>
              </div>
            </div>

            {/* Facility Image 3 - Quality Assurance */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <div
                className="aspect-[4/3] bg-gradient-to-br from-primary-200 to-primary-300 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80), url(/images/about/lab-facility-3.jpg)' }}
              >
                <div className="absolute inset-0 bg-primary-900/50 group-hover:bg-primary-900/70 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <h3 className="text-lg font-bold drop-shadow-lg">Quality Assurance</h3>
                  <p className="text-sm text-blue-100 drop-shadow-md">ISO certified processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Pages Navigation */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Learn More About Us</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore our commitment to quality, meet our satisfied clients, and discover our testing capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {subPages.map((page) => {
              const Icon = page.icon;
              return (
                <Link key={page.href} href={page.href}>
                  <Card hover className="h-full group">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="bg-primary-100 p-4 rounded-full group-hover:bg-primary-500 transition-colors">
                          <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <CardTitle className="text-center group-hover:text-primary-500 transition-colors">
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-neutral-700 mb-4">{page.description}</p>
                      <span className="inline-flex items-center gap-2 text-primary-500 font-medium group-hover:gap-3 transition-all">
                        Explore
                        <FaArrowRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your material testing requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-lg px-8 py-4"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 text-lg px-8 py-4"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
