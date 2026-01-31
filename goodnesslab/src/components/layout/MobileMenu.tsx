'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import { cn, getWhatsAppLink } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleSubmenu = (href: string) => {
    setExpandedMenu(expandedMenu === href ? null : href);
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 lg:hidden transition-all duration-300',
        isOpen ? 'visible' : 'invisible'
      )}
    >
      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 bg-black transition-opacity duration-300',
          isOpen ? 'opacity-50' : 'opacity-0'
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'absolute right-0 top-0 h-full w-full max-w-[85vw] sm:max-w-sm bg-white shadow-2xl transition-transform duration-300 overflow-y-auto',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-4 sm:p-6">
          {/* Header */}
          <div className="mb-6 pb-4 sm:pb-6 border-b-2 border-primary-200">
            <h2 className="text-lg sm:text-xl font-bold font-heading text-secondary-500 leading-tight">
              GOODNESS LABTECH
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1">Material Testing Laboratory</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 sm:space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <div key={link.href}>
                {link.submenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(link.href)}
                      className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 hover:text-primary-600 rounded-lg transition-all duration-200 font-medium group"
                    >
                      <span>{link.label}</span>
                      <FaChevronDown
                        className={cn(
                          'h-4 w-4 transition-all duration-300 text-primary-500',
                          expandedMenu === link.href && 'rotate-180 text-primary-600'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        expandedMenu === link.href ? 'max-h-96 mt-1' : 'max-h-0'
                      )}
                    >
                      <div className="space-y-1 ml-2 sm:ml-3 border-l-2 border-primary-200">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            onClick={onClose}
                            className="block pl-4 sm:pl-6 pr-3 sm:pr-4 py-2 text-xs sm:text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 rounded-r-lg transition-all duration-200 hover:border-l-2 hover:border-primary-500"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base text-neutral-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-blue-50 hover:text-primary-600 rounded-lg transition-all duration-200 font-medium"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="mt-6 sm:mt-8 pt-6 border-t-2 border-neutral-200 space-y-3">
            <div className="bg-primary-50 rounded-lg p-3 sm:p-4">
              <p className="text-xs text-primary-600 font-semibold mb-2">Contact Us</p>
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center gap-3 text-sm sm:text-base text-neutral-700 hover:text-primary-600 transition-colors mb-2 group"
              >
                <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <FaPhone className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
                </div>
                <span className="font-medium">{COMPANY_INFO.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-3 text-sm sm:text-base text-neutral-700 hover:text-primary-600 transition-colors group"
              >
                <div className="bg-primary-100 p-2 rounded-lg group-hover:bg-primary-200 transition-colors">
                  <FaEnvelope className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600" />
                </div>
                <span className="font-medium break-all">{COMPANY_INFO.contact.email}</span>
              </a>
            </div>

            <a
              href={getWhatsAppLink(
                COMPANY_INFO.contact.whatsapp,
                'Hello, I would like to know more about your testing services.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 py-3 rounded-lg transition-all duration-200 font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="mt-4 sm:mt-6">
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-primary w-full text-center text-sm sm:text-base py-3 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
