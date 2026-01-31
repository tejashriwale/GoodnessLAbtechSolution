'use client';

import React from 'react';
import Link from 'next/link';
import { FaAward, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';

export const AccreditationBanner: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full opacity-20 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-white shadow-2xl overflow-hidden relative">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            }} />
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="fade-in-up">
              <div className="inline-flex items-center gap-2 bg-accent-gold text-primary-900 px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-glow animate-pulse-slow">
                <FaAward className="h-4 w-4" />
                <span>Certified & Accredited</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                NABL Accredited Laboratory
              </h2>

              <p className="text-blue-100 text-base sm:text-lg mb-4 sm:mb-6 font-medium">
                {COMPANY_INFO.accreditation.nablTitle}
              </p>

              <p className="text-sm sm:text-base text-blue-200 mb-6 sm:mb-8 leading-relaxed">
                {COMPANY_INFO.accreditation.description}
              </p>

              <Link
                href="/certificates"
                className="btn bg-white text-primary-900 hover:bg-neutral-100 inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
              >
                <FaCertificate className="h-4 w-4" />
                View Certificates
              </Link>
            </div>

            {/* Right Content - Certifications */}
            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-white/20 hover:bg-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-gold p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaAward className="h-5 w-5 sm:h-6 sm:w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">NABL Accreditation</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      National Accreditation Board for Testing and Calibration Laboratories
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-white/20 hover:bg-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-gold p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaCheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">ISO 17025:2017</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      International standard for testing and calibration laboratories
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-white/20 hover:bg-white/20 hover:border-accent-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-gold p-3 sm:p-4 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <FaCertificate className="h-5 w-5 sm:h-6 sm:w-6 text-primary-900" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2">Quality Assured</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      Commitment to excellence in all testing operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
