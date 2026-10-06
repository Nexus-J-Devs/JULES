// 1. Spa
import { getImage } from './images.js';

export default {
  id: 'spa',
  name: 'Spa & Wellness',
  pitchKeywords: 'spa massage facial wellness relaxation sauna beauty skincare body treatment',
  defaultName: 'Aura Wellness & Spa',
  tagline: 'Quiet luxury and holistic body restoration in the heart of Lekki.',
  voice: 'serene, refined, precise',
  accentColor: '#5F7360',
  defaultCity: 'Lekki Phase 1, Lagos',
  phone: '+234 802 345 6789',
  wa: '2348023456789',
  ig: 'aurawellness.ng',

  nav: [
    { label: 'Treatments', href: '#treatments' },
    { label: 'Rituals', href: '#rituals' },
    { label: 'The Sanctuary', href: '#gallery' },
    { label: 'Booking', href: '#booking' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Restorative body therapies for the mindful individual.',
    subtitle: 'Tailored deep tissue, botanical facials, and traditional hydrotherapy delivered by licensed specialists.',
    image: getImage('spa', 0)
  },

  treatments: [
    { id: 't1', name: 'Signature Deep Tissue Release', duration: '90 mins', price: 45000, desc: 'Targeted pressure point therapy using heated botanical oil blends to dissolve chronic tension.' },
    { id: 't2', name: 'Radiance Botanical Facial', duration: '60 mins', price: 38000, desc: 'Deep cleansing facial incorporating Vitamin C antioxidants and cold quartz rolling.' },
    { id: 't3', name: 'Warm Basalt Stone Therapy', duration: '75 mins', price: 42000, desc: 'Volcanic basalt stones combined with rhythmic long strokes for nervous system reset.' },
    { id: 't4', name: 'Detoxifying Herbal Body Scrub', duration: '60 mins', price: 35000, desc: 'Exfoliating organic sea salt and local lemongrass infusion followed by intense hydration.' }
  ],

  rituals: [
    { name: 'Half-Day Sanctuary Escape', includes: 'Deep Tissue (90m) + Radiance Facial (60m) + Herbal Steam', duration: '3.5 Hours', price: 85000 },
    { name: 'Couples Evening Reset', includes: 'Side-by-side Warm Stone Therapy + Artisan Tea Service', duration: '2 Hours', price: 95000 },
    { name: 'Pre-Event Glow Package', includes: 'Botanical Facial + Hydrating Hand & Foot Polish', duration: '2.5 Hours', price: 62000 }
  ],

  therapists: ['Amina K.', 'David O.', 'Ngozi E.'],

  gallery: [
    getImage('spa', 1),
    getImage('spa', 2),
    getImage('spa', 3),
    getImage('spa', 4)
  ],

  faqs: [
    { q: 'How far in advance should I book?', a: 'We recommend booking 48 hours in advance for weekend slots. Same-day appointments depend on therapist availability.' },
    { q: 'What is your cancellation policy?', a: 'Cancellations made 24 hours prior incur no fee. Late cancellations will require a 50% deposit for future bookings.' },
    { q: 'Are private locker facilities provided?', a: 'Yes. Every booking includes full access to private locking space, organic robes, and bath amenities.' }
  ],

  hours: 'Mon to Sat: 9:00 AM - 8:00 PM | Sun: 12:00 PM - 6:00 PM'
};
