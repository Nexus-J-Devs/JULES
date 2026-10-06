// 13. Beauty Products
import { getImage } from './images.js';

export default {
  id: 'beauty-products',
  name: 'Beauty & Skincare',
  pitchKeywords: 'beauty skincare serum cream oil botanical organic face hair glow moisture cleanser cosmetics',
  defaultName: 'Sola Pure Skincare',
  tagline: 'Clean botanical skincare formulation enriched with West African shea and baobab oils.',
  voice: 'clean, scientific, nurturing',
  accentColor: '#5E3A2E',
  defaultCity: 'Lekki Phase 1, Lagos',
  phone: '+234 814 567 8901',
  wa: '2348145678901',
  ig: 'solarskincare.ng',

  nav: [
    { label: 'Bestsellers', href: '#bestsellers' },
    { label: 'Shop All', href: '#shop' },
    { label: 'Ingredients', href: '#ingredients' },
    { label: 'Bundle Builder', href: '#bundle' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'High-performance botanical serums for radiant tropical skin.',
    subtitle: 'Dermatologist-tested, non-comedogenic formulas crafted to restore skin barrier health in warm climates.',
    image: getImage('beauty-products', 0)
  },

  concerns: ['All', 'Hyperpigmentation', 'Hydration', 'Barrier Repair'],

  products: [
    { id: 'bp1', category: 'Hyperpigmentation', name: 'Niacinamide 10% + Baobab Brightening Essence', price: 18500, ingredients: 'Baobab Extract, Niacinamide, Alpha Arbutin, Licorice Root', desc: 'Fades dark spots and balances uneven skin tone in 28 days.', image: getImage('beauty-products', 1) },
    { id: 'bp2', category: 'Hydration', name: 'Hydra-Plump Hyaluronic Cloud Cream', price: 22000, ingredients: 'Multi-molecular Hyaluronic Acid, Organic Shea Butter, Ceramides', desc: 'Lightweight gel-cream providing 72 hours of uninterrupted moisture.', image: getImage('beauty-products', 2) },
    { id: 'bp3', category: 'Barrier Repair', name: 'Cold-Pressed Wild Marula Barrier Oil', price: 26000, ingredients: '100% Unrefined Marula Kernel Oil, Vitamin E', desc: 'Nourishing facial oil that seals in moisture and protects against urban pollution.', image: getImage('beauty-products', 3) }
  ],

  faqs: [
    { q: 'Are Sola Skincare products suitable for sensitive skin?', a: 'Yes. All products are fragrance-free, paraben-free, and patch-tested on sensitive African skin types.' }
  ],

  hours: 'Mon to Sat: 9:00 AM - 6:00 PM'
};
