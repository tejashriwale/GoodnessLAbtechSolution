'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors"
      >
        <span className="text-lg font-semibold text-primary-900">{title}</span>
        <FaChevronDown
          className={cn(
            'h-5 w-5 text-primary-500 transition-transform duration-300',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-screen' : 'max-h-0'
        )}
      >
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ children, className }) => {
  return <div className={cn('w-full', className)}>{children}</div>;
};
