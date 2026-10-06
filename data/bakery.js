// 12. Bakery
import { getImage } from './images.js';

export default {
  id: 'bakery',
  name: 'Bakery & Cake Studio',
  pitchKeywords: 'bakery cake pastry bread dessert birthday wedding custom cake bakery sweet treats baking',
  defaultName: 'Crumb & Co. Artisan Bakery',
  tagline: 'Artisanal sourdough breads, custom celebration cakes, and French butter pastries.',
  voice: 'warm, artisanal, delectable',
  accentColor: '#B8642B',
  defaultCity: 'Ikeja, Lagos',
  phone: '+234 813 456 7890',
  wa: '2348134567890',
  ig: 'crumbbakery.ng',

  nav: [
    { label: 'Signature Cakes', href: '#signature' },
    { label: 'Custom Order', href: '#custom' },
    { label: 'Daily Bakes', href: '#daily' },
    { label: 'Delivery Info', href: '#delivery' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Baked fresh every morning with pure butter and Madagascar vanilla.',
    subtitle: 'Hand-crafted celebration cakes and flaky viennoiserie delivered across Lagos mainland and island.',
    image: getImage('bakery', 0)
  },

  signatureCakes: [
    { id: 'b1', name: 'Salted Caramel Dark Chocolate Velvet', price: 38000, desc: '6-inch triple layer dark chocolate sponge, house salted caramel drizzle, swiss buttercream.', image: getImage('bakery', 1) },
    { id: 'b2', name: 'Vanilla Bean & Fresh Strawberry Layer', price: 35000, desc: 'Fluffy vanilla sponge layered with fresh sliced Lagos strawberries and chantilly cream.', image: getImage('bakery', 2) },
    { id: 'b3', name: 'Red Velvet with Whipped Cream Cheese', price: 32000, desc: 'Traditional cocoa red velvet with silky light cream cheese frosting.', image: getImage('bakery', 3) }
  ],

  flavors: ['Vanilla Bean', 'Dark Chocolate Fudge', 'Red Velvet', 'Lemon Blueberry', 'Caramel Biscoff'],
  fillings: ['Salted Caramel', 'Fresh Strawberry Compote', 'Swiss Buttercream', 'Nutella Cream', 'Passionfruit Curd'],
  sizes: [
    { name: '6-inch (Feeds 8-10)', price: 35000 },
    { name: '8-inch (Feeds 15-20)', price: 50000 },
    { name: '10-inch 2-Tier (Feeds 30-35)', price: 85000 }
  ],

  faqs: [
    { q: 'What is the minimum notice period for custom cakes?', a: 'Custom cake orders require at least 48 hours notice. Same-day pickup is available for signature bakes.' }
  ],

  hours: 'Mon to Sat: 7:00 AM - 7:00 PM | Sun: 8:00 AM - 4:00 PM'
};
