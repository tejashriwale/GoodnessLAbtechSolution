'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';

export const ContactCTA: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-gold rounded-full opacity-10 blur-3xl"></div>

      <div className="container-custom text-center relative z-10">
        <div className="fade-in-up">
          <div className="inline-block px-4 py-2 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-semibold mb-6">
            Contact Us
          </div>

          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Get in Touch with Goodness Lab Team</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 max-w-3xl mx-auto text-neutral-300 leading-relaxed">
            We'd love to hear from you! Whether you have a question, need support, or want to discuss how we can collaborate, our team is here to help.
          </p>
        </div>

        {/* 24-Hour Hotline Banner */}
        <div className="mb-8 sm:mb-10 fade-in-up">
          <div className="inline-flex items-center gap-3 bg-accent-red/20 border-2 border-accent-red/30 px-6 py-3 rounded-full animate-pulse-slow">
            <FaClock className="h-5 w-5 text-accent-red" />
            <span className="text-sm sm:text-base font-bold text-white">24-Hour Hotline: {COMPANY_INFO.contact.phoneDisplay}</span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-center items-stretch mb-10 sm:mb-12 max-w-5xl mx-auto fade-in-up">
          <a
            href={`tel:${COMPANY_INFO.contact.phone}`}
            className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 px-6 py-5 rounded-xl transition-all duration-300 backdrop-blur-sm border-2 border-white/10 hover:border-accent-gold/50 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="bg-accent-gold/20 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <FaPhone className="h-6 w-6 text-accent-gold" />
            </div>
            <div className="text-left">
              <div className="text-xs text-neutral-400 mb-1">Call Us</div>
              <div className="font-bold text-base sm:text-lg">{COMPANY_INFO.contact.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="flex items-center justify-center gap-4 bg-white/10 hover:bg-white/20 px-6 py-5 rounded-xl transition-all duration-300 backdrop-blur-sm border-2 border-white/10 hover:border-accent-gold/50 hover:scale-105 hover:shadow-2xl group"
          >
            <div className="bg-accent-gold/20 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <FaEnvelope className="h-6 w-6 text-accent-gold" />
            </div>
            <div className="text-left">
              <div className="text-xs text-neutral-400 mb-1">Email Us</div>
              <div className="font-bold text-sm sm:text-base break-all">{COMPANY_INFO.contact.email}</div>
            </div>
          </a>

          <a
            href={getWhatsAppLink(
              COMPANY_INFO.contact.whatsapp,
              'Hello, I would like to know more about your testing services.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-6 py-5 rounded-xl transition-all duration-300 border-2 border-green-500/30 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 group sm:col-span-2 lg:col-span-1"
          >
            <div className="bg-white/20 p-4 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <FaWhatsapp className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="text-xs text-green-100 mb-1">WhatsApp Us</div>
              <div className="font-bold text-base sm:text-lg">Chat Now</div>
            </div>
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center fade-in-up">
          <Link
            href="/contact"
            className="btn bg-accent-gold text-primary-900 hover:bg-yellow-500 text-base sm:text-lg px-8 py-4 shadow-2xl hover:shadow-accent-gold/30 font-bold"
          >
            Send Us a Message
          </Link>
          <Link
            href="/services"
            className="btn bg-white/10 text-white hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-base sm:text-lg px-8 py-4 font-bold"
          >
            Explore Our Services
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 fade-in-up">
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            For all enquiries and communication, please call our 24-hour hotline or fill out the contact form. Our team is ready to assist you with your material testing needs.
          </p>
        </div>
      </div>
    </section>
  );
};
