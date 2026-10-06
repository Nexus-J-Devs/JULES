// 15. Home Services
import { getImage } from './images.js';

export default {
  id: 'home-services',
  name: 'Home & Professional Services',
  pitchKeywords: 'plumber electrician AC repair handyman home services technician solar generator maintenance cleaning',
  defaultName: 'Apex Home Technicians',
  tagline: 'Vetted electrical, plumbing, air conditioning, and solar installation experts in Lagos.',
  voice: 'dependable, swift, precise',
  accentColor: '#1F5F8B',
  defaultCity: 'Lekki & Mainland, Lagos',
  phone: '+234 816 789 0123',
  wa: '2348167890123',
  ig: 'apextechs.ng',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Price Guide', href: '#pricing' },
    { label: 'Request Tech', href: '#request' },
    { label: 'Coverage Areas', href: '#coverage' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Certified home technicians dispatched to your location within 60 minutes.',
    subtitle: 'Transparent diagnostic pricing, background-checked engineers, and a 30-day work warranty.',
    image: getImage('home-services', 0)
  },

  services: [
    { id: 'hs1', name: 'Air Conditioner Servicing & Gas Refill', estimate: '₦15,000 - ₦28,000', desc: 'Deep coil cleaning, pressure check, and R22/R410 gas top-up.' },
    { id: 'hs2', name: 'Inverter & Solar System Diagnostics', estimate: '₦25,000 - ₦45,000', desc: 'Battery bank balancing, charge controller check, and load rewiring.' },
    { id: 'hs3', name: 'Plumbing Leak Detection & Pipe Replacement', estimate: '₦18,000 - ₦35,000', desc: 'Pressure testing, high-pressure pipe clearing, and fixture replacement.' },
    { id: 'hs4', name: 'Distribution Board & DB Box Overhaul', estimate: '₦30,000 - ₦60,000', desc: 'Circuit breaker diagnosis, earth leakage protection, and surge arrestor setup.' }
  ],

  coverageAreas: ['Lekki Phase 1 & 2', 'Ikoyi', 'Victoria Island', 'Ikeja GRA', 'Surulere', 'Yaba', 'Magodo', 'Ajah'],

  faqs: [
    { q: 'Is there a diagnostic call-out fee?', a: 'A standard ₦5,000 call-out fee applies for inspection, which is deducted from your total bill if you proceed with repair.' }
  ],

  hours: '24/7 Emergency Dispatch Available | Regular Hours: 7:00 AM - 8:00 PM'
};
