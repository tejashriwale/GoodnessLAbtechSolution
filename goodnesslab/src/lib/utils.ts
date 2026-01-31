import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhoneNumber(phone: string): string {
  // Format phone number for display
  return phone.replace(/(\+\d{2})(\d{10})/, '$1 $2');
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const baseUrl = 'https://wa.me/';
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  return `${baseUrl}${phone}${encodedMessage}`;
}
