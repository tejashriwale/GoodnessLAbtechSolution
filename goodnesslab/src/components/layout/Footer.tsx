'use client';

import React from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaFacebook, FaAward } from 'react-icons/fa';
import { COMPANY_INFO, NAVIGATION_LINKS, SERVICES_OVERVIEW } from '@/lib/constants';
import { getWhatsAppLink } from '@/lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold rounded-full opacity-5 blur-3xl"></div>

      {/* Main Footer */}
      <div className="container-custom py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">{COMPANY_INFO.name}</h3>
            <p className="text-neutral-400 text-sm sm:text-base mb-6 leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex gap-3">
              <a
                href={getWhatsAppLink(COMPANY_INFO.contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-green hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-green-500/50"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-5 w-5" />
              </a>
              {COMPANY_INFO.social.linkedin && (
                <a
                  href={COMPANY_INFO.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary-500/50"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
              )}
              {COMPANY_INFO.social.facebook && (
                <a
                  href={COMPANY_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-500 hover:bg-primary-600 p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary-500/50"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {NAVIGATION_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {SERVICES_OVERVIEW.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-neutral-400 hover:text-white transition-colors text-sm sm:text-base hover:translate-x-1 inline-block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-accent-gold">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-5 w-5 text-accent-gold mt-1 flex-shrink-0" />
                <span className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                  {COMPANY_INFO.address.formatted}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.contact.phone}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm sm:text-base group"
                >
                  <FaPhone className="h-4 w-4 text-accent-gold group-hover:scale-110 transition-transform" />
                  <span>{COMPANY_INFO.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors text-sm sm:text-base group"
                >
                  <FaEnvelope className="h-4 w-4 text-accent-gold group-hover:scale-110 transition-transform" />
                  <span className="break-all">{COMPANY_INFO.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-neutral-800 relative z-10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-accent-gold/10 px-3 py-1.5 rounded-full">
                <FaAward className="h-3 w-3 sm:h-4 sm:w-4 text-accent-gold" />
                <span className="text-accent-gold font-bold">
                  NABL Accredited
                </span>
              </div>
              <span className="text-neutral-600 hidden sm:inline">|</span>
              <span className="text-neutral-400 font-medium">ISO 17025:2017</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
