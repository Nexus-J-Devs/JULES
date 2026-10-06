// 5. Sneakers
import { getImage } from './images.js';

export default {
  id: 'sneakers',
  name: 'Sneakers & Kicks',
  pitchKeywords: 'sneakers kicks shoes footwear deadstock original retro jordan nike adidas drops streetwear',
  defaultName: 'Stride Vault',
  tagline: 'Authenticated limited edition kicks and archival footwear.',
  voice: 'direct, urban, precise',
  accentColor: '#D9480F',
  defaultCity: 'Yaba, Lagos',
  phone: '+234 806 789 0123',
  wa: '2348067890123',
  ig: 'stridevault.ng',

  nav: [
    { label: 'Latest Drops', href: '#drops' },
    { label: 'Shop Catalog', href: '#shop' },
    { label: 'Size Chart', href: '#sizes' },
    { label: 'Authenticity', href: '#policy' }
  ],

  hero: {
    title: 'Verified authentic deadstock footwear.',
    subtitle: 'Zero fakes. Every pair undergoes multi-point physical verification before dispatch.',
    image: getImage('sneakers', 0)
  },

  brands: ['All', 'Jordan', 'Nike', 'Yeezy', 'New Balance'],

  products: [
    { id: 'sn1', brand: 'Jordan', name: 'Air Jordan 1 Retro High OG Chicago', price: 210000, sizes: ['39', '40', '41', '42', '43', '44', '45'], desc: 'Iconic varsity red, white, and black colorway in pristine deadstock condition.', image: getImage('sneakers', 1) },
    { id: 'sn2', brand: 'Nike', name: 'Nike Dunk Low Retro White Black Panda', price: 125000, sizes: ['38', '39', '40', '41', '42', '43', '44'], desc: 'Versatile low-profile leather construct with classic contrast overlay.', image: getImage('sneakers', 2) },
    { id: 'sn3', brand: 'New Balance', name: 'New Balance 2002R Protection Pack Rain Cloud', price: 165000, sizes: ['40', '41', '42', '43', '44', '45'], desc: 'Deconstructed suede overlays with premium ABZORB cushioning.', image: getImage('sneakers', 3) },
    { id: 'sn4', brand: 'Yeezy', name: 'Yeezy Boost 350 V2 Bone', price: 180000, sizes: ['41', '42', '43', '44', '45'], desc: 'Triple-white re-engineered Primeknit upper with semi-translucent midsole.', image: getImage('sneakers', 4) }
  ],

  authenticityPolicy: 'Every sneaker sold by Stride Vault is inspected by hand for stitching density, material smell, glow-UV tags, and box label typography.',

  faqs: [
    { q: 'Do you offer same-day delivery in Lagos?', a: 'Yes, orders placed before 1:00 PM are delivered same-day across Lagos island and mainland.' }
  ],

  hours: 'Mon to Sat: 9:00 AM - 7:00 PM'
};
