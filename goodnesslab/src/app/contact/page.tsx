import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';
import { ContactForm } from '@/components/common/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export const metadata = {
  title: 'Contact Us - Goodness Labtech Solutions',
  description: 'Get in touch with Goodness Labtech Solutions. Visit our lab in Pune or contact us for material testing services. Phone: +91-7058300308',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Goodness Lab Team
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, need support, or want to discuss how we can collaborate, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h2>
              </div>

              {/* Laboratory Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <FaMapMarkerAlt className="h-5 w-5 text-primary-500" />
                    Laboratory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-700 font-semibold mb-2">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {COMPANY_INFO.address.line1}<br />
                    {COMPANY_INFO.address.line2}<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}<br />
                    {COMPANY_INFO.address.country}
                  </p>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card>
                <CardContent className="flex items-start gap-3 p-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaPhone className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">24-Hour Hotline</p>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-lg font-semibold text-primary-900 hover:text-primary-500 transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card>
                <CardContent className="flex items-start gap-3 p-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaEnvelope className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">Email Us</p>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-lg font-semibold text-primary-900 hover:text-primary-500 transition-colors break-all"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp */}
              <Card>
                <CardContent className="flex items-start gap-3 p-6">
                  <div className="bg-accent-green p-3 rounded-lg">
                    <FaWhatsapp className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-1">WhatsApp</p>
                    <a
                      href={getWhatsAppLink(
                        COMPANY_INFO.contact.whatsapp,
                        'Hello, I would like to inquire about your testing services.'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-accent-green hover:text-green-600 transition-colors"
                    >
                      Chat with us
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardContent className="flex items-start gap-3 p-6">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <FaClock className="h-5 w-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Business Hours</p>
                    <p className="text-sm text-neutral-700">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-xs text-accent-green font-medium mt-2">
                      24/7 Hotline Available
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-neutral-600 mt-2">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="mb-2">Find Us on the Map</h2>
            <p className="text-neutral-600">
              Visit our state-of-the-art laboratory in Bhosari MIDC, Pune
            </p>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed - Update with actual coordinates */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6!2d73.8495!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM3JzQ3LjMiTiA3M8KwNTAnNTguMiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goodness Labtech Solutions Location"
            />
          </div>

          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bhosari+MIDC+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
