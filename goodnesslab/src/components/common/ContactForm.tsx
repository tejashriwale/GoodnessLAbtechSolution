'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Textarea, Button } from '@/components/ui';
import { SERVICES_OVERVIEW } from '@/lib/constants';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Implement actual form submission to API route
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          {...register('name', { required: 'Name is required' })}
          error={errors.name?.message}
          placeholder="John Doe"
          required
        />

        <Input
          label="Email Address"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.email?.message}
          placeholder="john@example.com"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Phone Number"
          type="tel"
          {...register('phone', { required: 'Phone number is required' })}
          error={errors.phone?.message}
          placeholder="+91 98765 43210"
          required
        />

        <Input
          label="Company/Organization"
          {...register('company')}
          placeholder="Your Company Name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-neutral-700 mb-2">
          Service Interested In <span className="text-accent-red">*</span>
        </label>
        <select
          {...register('service', { required: 'Please select a service' })}
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        >
          <option value="">Select a service...</option>
          {SERVICES_OVERVIEW.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
          <option value="general">General Inquiry</option>
        </select>
        {errors.service && (
          <p className="mt-1 text-sm text-accent-red">{errors.service.message}</p>
        )}
      </div>

      <Textarea
        label="Message"
        {...register('message', { required: 'Message is required' })}
        error={errors.message?.message}
        placeholder="Please describe your testing requirements..."
        rows={5}
        required
      />

      {/* Privacy Notice */}
      <div className="bg-neutral-50 p-4 rounded-lg text-sm text-neutral-600">
        By submitting this form, you agree to our privacy policy. We will use your information only to respond to your inquiry.
      </div>

      {/* Submit Button */}
      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto"
          size="lg"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="bg-accent-green/10 border border-accent-green text-accent-green px-4 py-3 rounded-lg">
          Thank you! We've received your message and will contact you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-accent-red/10 border border-accent-red text-accent-red px-4 py-3 rounded-lg">
          Something went wrong. Please try again or contact us directly at the phone number above.
        </div>
      )}
    </form>
  );
};
