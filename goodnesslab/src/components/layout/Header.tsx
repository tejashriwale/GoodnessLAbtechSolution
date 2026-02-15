'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaAward, FaCertificate, FaChevronDown } from 'react-icons/fa';
import { COMPANY_INFO, NAVIGATION_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      {/* Top Bar */}
      <div className={cn(
        'bg-gradient-to-r from-secondary-600 via-secondary-500 to-secondary-600 text-white transition-all duration-300',
        isScrolled ? 'hidden' : 'block'
      )}>
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-11 text-xs sm:text-sm">
            {/* Contact */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="flex items-center gap-2 hover:text-primary-300 transition-colors group"
              >
                <span className="bg-white/15 p-1.5 rounded-full group-hover:bg-white/25 transition-colors">
                  <FaPhone className="h-2.5 w-2.5" />
                </span>
                <span className="font-semibold hidden sm:inline">+91 7058300308</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-primary-300 transition-colors group"
              >
                <span className="bg-white/15 p-1.5 rounded-full group-hover:bg-white/25 transition-colors">
                  <FaEnvelope className="h-2.5 w-2.5" />
                </span>
                <span className="font-semibold hidden sm:inline">info@goodnesslab.in</span>
              </a>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 bg-primary-500 px-3 sm:px-4 py-1 rounded-md text-xs font-bold shadow-sm">
                <FaAward className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="hidden sm:inline">NABL Accredited</span>
                <span className="sm:hidden">NABL</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 sm:px-4 py-1 rounded-md text-xs font-bold">
                <FaCertificate className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-primary-300" />
                <span className="hidden sm:inline">ISO 17025:2017</span>
                <span className="sm:hidden">ISO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          'sticky top-0 z-40 w-full transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        )}
      >
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex items-center justify-between h-[64px] sm:h-[68px] lg:h-[76px]">
            {/* Logo with proper margin */}
            <Link href="/" className="flex-shrink-0 group ml-1 sm:ml-2 md:ml-0">
              <div className={cn(
                "relative transition-all duration-300",
                isScrolled
                  ? "h-10 w-[150px] sm:h-11 sm:w-[180px] md:h-12 md:w-[200px] lg:h-[52px] lg:w-[230px]"
                  : "h-11 w-[170px] sm:h-12 sm:w-[200px] md:h-14 md:w-[230px] lg:h-[60px] lg:w-[260px]"
              )}>
                <Image
                  src="/logo.png"
                  alt="Goodness Labtech - Material Testing Laboratory"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="relative px-3 2xl:px-4 py-2.5 text-[13px] 2xl:text-sm font-medium text-neutral-700 hover:text-primary-600 transition-colors whitespace-nowrap group inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.submenu && (
                      <FaChevronDown className={cn(
                        "h-2.5 w-2.5 transition-transform duration-200",
                        activeDropdown === link.href && "rotate-180"
                      )} />
                    )}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4/5 transition-all duration-300 rounded-full" />
                  </Link>

                  {/* Dropdown */}
                  {link.submenu && (
                    <div className={cn(
                      "absolute left-0 top-full pt-2 transition-all duration-200 z-50",
                      activeDropdown === link.href
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 py-2 min-w-[240px] overflow-hidden">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.href}
                            href={sublink.href}
                            className="block px-5 py-2.5 text-sm text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-150 border-l-2 border-transparent hover:border-primary-500"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* CTA */}
              <Link
                href="/contact"
                className="ml-4 2xl:ml-6 bg-primary-500 hover:bg-primary-600 text-white px-5 2xl:px-6 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                Get a Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2.5 text-secondary-500 hover:text-primary-500 hover:bg-primary-50 rounded-xl transition-all mr-1 sm:mr-2 md:mr-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-5 w-5" />
              ) : (
                <FaBars className="h-5 w-5" />
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
