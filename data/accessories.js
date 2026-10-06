// 6. Accessories
import { getImage } from './images.js';

export default {
  id: 'accessories',
  name: 'Jewelry & Accessories',
  pitchKeywords: 'accessories jewelry gold silver leather bags watches rings necklaces sunglasses gift',
  defaultName: 'Omi Crafted Goods',
  tagline: 'Handcrafted solid brass, sterling silver, and vegetable-tanned leather goods.',
  voice: 'tactile, timeless, curated',
  accentColor: '#A3822F',
  defaultCity: 'Victoria Island, Lagos',
  phone: '+234 807 890 1234',
  wa: '2348078901234',
  ig: 'omicrafted.ng',

  nav: [
    { label: 'Collections', href: '#collections' },
    { label: 'Shop', href: '#shop' },
    { label: 'Care Guide', href: '#care' },
    { label: 'Gifting', href: '#gifting' }
  ],

  hero: {
    title: 'Sculptural metalwork and artisan leather articles.',
    subtitle: 'Small-batch accessories built to develop a rich patina over decades of daily wear.',
    image: getImage('accessories', 0)
  },

  materials: ['All', 'Solid Brass', 'Sterling Silver', 'Real Leather'],

  products: [
    { id: 'ac1', material: 'Solid Brass', name: 'The Lekki Heavy Signet Ring', price: 28000, desc: 'Hand-cast recycled brass ring with raw brushed finish.', image: getImage('accessories', 1) },
    { id: 'ac2', material: 'Sterling Silver', name: 'Hammered Silver Cuff Bracelet', price: 45000, desc: '925 sterling silver cuff adjustable to fit wrist contour.', image: getImage('accessories', 2) },
    { id: 'ac3', material: 'Real Leather', name: 'Minimalist Card Holder in Espresso', price: 22000, desc: 'Full-grain Italian calfskin with hand-waxed linen stitching.', image: getImage('accessories', 3) },
    { id: 'ac4', material: 'Solid Brass', name: 'Tiered Brass Pendant Necklace', price: 34000, desc: 'Geometrical brass pendant on fine 24-inch chain.', image: getImage('accessories', 4) }
  ],

  careGuide: 'Clean brass items with a soft microfiber cloth and lemon juice paste. Store sterling silver in dry velvet pouches to avoid tarnishing.',

  faqs: [
    { q: 'Is gift packaging included?', a: 'Yes. Every order arrives wrapped in our recycled foil-stamped box with a personalized card option.' }
  ],

  hours: 'Mon to Sat: 9:00 AM - 6:00 PM'
};
