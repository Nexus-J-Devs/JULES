// WhatsApp Deep Link Generator

import { cleanPhoneForWa } from './format.js';

export function getWhatsAppUrl(phone, text) {
  const cleanNum = cleanPhoneForWa(phone);
  const encodedMsg = encodeURIComponent(text);
  return `https://wa.me/${cleanNum}?text=${encodedMsg}`;
}

export function openWhatsApp(phone, text) {
  const url = getWhatsAppUrl(phone, text);
  window.open(url, '_blank', 'noopener,noreferrer');
}
