'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaAward, FaCertificate } from 'react-icons/fa';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Brand Top Bar - Burgundy Background */}
      <div className="bg-secondary-500 text-white py-2.5 md:py-3 block">
        <div className="w-full px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-sm">
            {/* Contact Information - Left Side */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors font-medium"
              >
                <FaPhone className="h-4 w-4" />
                <span className="font-semibold">+91 7058300308</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-primary-400 transition-colors font-medium"
              >
                <FaEnvelope className="h-4 w-4" />
                <span className="font-semibold">info@goodnesslab.in</span>
              </a>
            </div>

            {/* Accreditation Badges - Right Side */}
            <div className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 bg-primary-500 px-4 py-1.5 rounded-md shadow-sm">
                <FaAward className="h-4 w-4 text-white" />
                <span className="font-bold text-white text-sm whitespace-nowrap">NABL Accredited</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1">
                <FaCertificate className="h-4 w-4" />
                <span className="font-bold text-sm whitespace-nowrap">ISO 17025:2017</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Professional Header */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-200 bg-white',
          isScrolled ? 'shadow-md border-b border-neutral-200' : 'border-b border-neutral-100'
        )}
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Brand Logo - With Left Margin */}
            <Link href="/" className="flex-shrink-0 group ml-2 sm:ml-4">
              <div className="flex items-center">
                {/* Logo Image - Full Goodness Labtech Logo */}
                <div className={cn(
                  "relative transition-all duration-200",
                  isScrolled
                    ? "h-10 w-40 sm:h-12 sm:w-48 lg:h-14 lg:w-56"
                    : "h-12 w-48 sm:h-14 sm:w-56 lg:h-16 lg:w-64"
                )}>
                  <Image
                    src="/logo.png"
                    alt="Goodness Labtech - Material Testing Laboratory"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-neutral-700 hover:text-primary-500 transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-primary-500"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white shadow-xl rounded-lg py-2 min-w-[240px] border border-neutral-200">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-500 transition-colors border-l-2 border-transparent hover:border-l-primary-500"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button - Brand Orange */}
            <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
              <Link
                href="/contact"
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-glow transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};
