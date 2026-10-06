// 2. Salon
import { getImage } from './images.js';

export default {
  id: 'salon',
  name: 'Salon & Hair Studio',
  pitchKeywords: 'salon barber hair braids wigs nails makeup beauty grooming haircut styling',
  defaultName: 'Noir Hair & Beauty Atelier',
  tagline: 'Precision cutting, custom color, and protective styling designed for modern textures.',
  voice: 'bold, sleek, expressive',
  accentColor: '#9A4A3A',
  defaultCity: 'Victoria Island, Lagos',
  phone: '+234 803 456 7890',
  wa: '2348034567890',
  ig: 'noiratelier.ng',

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Stylists', href: '#stylists' },
    { label: 'Book Session', href: '#booking' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Architectural hair design and silk press perfection.',
    subtitle: 'Elevated hair care, bespoke wig customisation, and flawless barbering in a private studio environment.',
    image: getImage('salon', 0)
  },

  serviceGroups: [
    {
      category: 'Hair Styling & Extensions',
      items: [
        { id: 's1', name: 'Silk Press & Deep Conditioning', price: 25000 },
        { id: 's2', name: 'Knotless Braids (Medium Back-length)', price: 40000 },
        { id: 's3', name: 'Frontal Wig Installation & Customisation', price: 35000 },
        { id: 's4', name: 'Loc Maintenance & Interlocking', price: 28000 }
      ]
    },
    {
      category: 'Barbering & Grooming',
      items: [
        { id: 's5', name: 'Executive Cut & Beard Sculpting', price: 15000 },
        { id: 's6', name: 'Hot Towel Scalp Treatment & Lineup', price: 18000 }
      ]
    },
    {
      category: 'Nails & Aesthetics',
      items: [
        { id: 's7', name: 'Gel Sculpting & Custom Nail Art', price: 22000 },
        { id: 's8', name: 'Luxury Pedicure with Paraffin Dip', price: 20000 }
      ]
    }
  ],

  stylists: [
    { name: 'Kemi Adebayo', title: 'Senior Colorist & Silk Press Lead' },
    { name: 'Emeka Vance', title: 'Master Barber & Precision Cutter' },
    { name: 'Bisi Thorne', title: 'Wig Specialist & Braider' }
  ],

  lookbook: [
    getImage('salon', 1),
    getImage('salon', 2),
    getImage('salon', 3),
    getImage('salon', 4)
  ],

  faqs: [
    { q: 'Do I need to bring my own hair extensions?', a: 'You may bring your own or purchase premium raw hair directly from our salon stock.' },
    { q: 'How long does a frontal installation take?', a: 'Customisation and installation take approximately 2.5 hours.' }
  ],

  hours: 'Tue to Sat: 8:30 AM - 7:30 PM | Sun: 1:00 PM - 6:00 PM'
};
