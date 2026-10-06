// 8. Real Estate
import { getImage } from './images.js';

export default {
  id: 'realestate',
  name: 'Real Estate & Properties',
  pitchKeywords: 'realestate property house apartment land rent buy lease estate lekki ikoyi listing agent duplex',
  defaultName: 'Sovereign Haven Properties',
  tagline: 'Curated luxury residential properties and verified land holdings in Lagos.',
  voice: 'authoritative, discreet, high-value',
  accentColor: '#B08D57',
  defaultCity: 'Ikoyi, Lagos',
  phone: '+234 809 012 3456',
  wa: '2348090123456',
  ig: 'sovereignhaven.ng',

  nav: [
    { label: 'Properties', href: '#listings' },
    { label: 'Key Areas', href: '#areas' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'Buying Guide', href: '#guide' },
    { label: 'Contact', href: '#contact' }
  ],

  hero: {
    title: 'Architectural residences in prime Lagos locations.',
    subtitle: 'Direct developer listings with verified Certificate of Occupancy and Governor Consent documentation.',
    image: getImage('realestate', 0)
  },

  listings: [
    { id: 're1', type: 'buy', title: '5-Bed Detached Villa with Pool', price: 450000000, area: 'Ikoyi', beds: 5, baths: 6, desc: 'Automated smart home, infinity pool, double-volume living room, 2-room BQ.', image: getImage('realestate', 1) },
    { id: 're2', type: 'buy', title: '4-Bed Contemporary Terrace', price: 280000000, area: 'Lekki Phase 1', beds: 4, baths: 5, desc: 'Fully fitted kitchen, cinema room, private roof terrace with lagoon view.', image: getImage('realestate', 2) },
    { id: 're3', type: 'rent', title: 'Luxury 3-Bed Serviced Apartment', price: 18000000, area: 'Victoria Island', beds: 3, baths: 4, desc: '24/7 uninterrupted power, gym, concierge service, subterranean parking.', image: getImage('realestate', 3) },
    { id: 're4', type: 'buy', title: 'Waterfront Penthouse Suite', price: 620000000, area: 'Eko Atlantic', beds: 4, baths: 5, desc: '360-degree Atlantic Ocean view, private elevator access, marble flooring.', image: getImage('realestate', 4) }
  ],

  areas: ['Ikoyi', 'Lekki Phase 1', 'Victoria Island', 'Eko Atlantic', 'Banana Island'],

  faqs: [
    { q: 'Are all property titles verified?', a: 'Yes. Every property on our platform undergoes legal search at the Lagos State Lands Bureau.' }
  ],

  hours: 'Mon to Sat: 8:00 AM - 6:00 PM'
};
