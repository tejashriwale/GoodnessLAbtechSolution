'use client';

import React from 'react';
import Link from 'next/link';
import { FaAward, FaCheckCircle } from 'react-icons/fa';
import { COMPANY_INFO } from '@/lib/constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Material Testing Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80), url(/images/hero/lab-background.jpg)`,
            backgroundColor: '#3b82f6',
          }}
        >
          {/* Light overlay to let image show through */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-blue-700/40"></div>
        </div>

        {/* Strong gradient overlay for text highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/60 to-primary-700/40"></div>

        {/* Additional bottom gradient for text separation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-900/50"></div>
      </div>

      <div className="container-custom relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* NABL Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-gold/90 backdrop-blur-md border-2 border-accent-gold text-primary-900 px-5 py-2.5 rounded-full font-bold text-sm mb-6 shadow-2xl">
            <FaAward className="h-5 w-5 text-primary-900" />
            <span>NABL Accredited Laboratory</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight" style={{
            textShadow: '3px 3px 10px rgba(0,0,0,0.8), 0px 0px 30px rgba(0,0,0,0.5)'
          }}>
            {COMPANY_INFO.fullTitle}
          </h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl text-white mb-4 font-bold bg-primary-900/60 backdrop-blur-sm px-4 py-2 rounded-lg inline-block" style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.8)'
          }}>
            {COMPANY_INFO.tagline}
          </p>

          {/* Description */}
          <p className="text-base lg:text-lg text-white mb-8 max-w-2xl leading-relaxed bg-primary-900/40 backdrop-blur-sm px-4 py-3 rounded-lg" style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
          }}>
            NABL-accredited material testing laboratory dedicated to providing the highest degree of accuracy, fast turnaround time, and customer satisfaction.
          </p>

          {/* ISO Certification Badge */}
          <div className="flex items-center gap-3 mb-8 bg-white/90 backdrop-blur-md rounded-lg px-5 py-3 w-fit border-2 border-white shadow-xl">
            <FaCheckCircle className="text-accent-green h-5 w-5 flex-shrink-0" />
            <span className="text-base font-bold text-primary-900">ISO 17025:2017 Certified</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/contact"
              className="bg-accent-gold hover:bg-accent-gold/90 text-primary-900 font-bold text-base lg:text-lg px-8 py-4 rounded shadow-xl hover:shadow-2xl text-center transition-all inline-flex items-center justify-center transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white hover:border-white text-white font-semibold text-base lg:text-lg px-8 py-4 rounded text-center transition-all inline-flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              View Services
            </Link>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">24h*</div>
              <div className="text-sm text-white drop-shadow-md">Fast Turnaround</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">100%</div>
              <div className="text-sm text-white drop-shadow-md">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-gold mb-1 drop-shadow-md">ISO</div>
              <div className="text-sm text-white drop-shadow-md">Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 via-accent-gold to-primary-500 shadow-lg"></div>
    </section>
  );
};
