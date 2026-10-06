// 4. Fashion
import { getImage } from './images.js';

export default {
  id: 'fashion',
  name: 'Fashion & Apparel',
  pitchKeywords: 'fashion clothing clothes dress wear tailored agbada luxury boutique brand style designer',
  defaultName: 'Ayo & Co. Atelier',
  tagline: 'Minimalist tailored womenswear and unisex structured garments.',
  voice: 'architectural, understated, refined',
  accentColor: '#8C7A5B',
  defaultCity: 'Ikoyi, Lagos',
  phone: '+234 805 678 9012',
  wa: '2348056789012',
  ig: 'ayoandco.ng',

  nav: [
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Shop All', href: '#shop' },
    { label: 'Sizing', href: '#sizing' },
    { label: 'Delivery', href: '#delivery' }
  ],

  hero: {
    title: 'Clean lines, sculptural drapes, and organic cottons.',
    subtitle: 'Limited edition seasonal capsule collections designed and stitched in our Ikoyi studio.',
    image: getImage('fashion', 0)
  },

  categories: ['All', 'Dresses', 'Tailoring', 'Sets'],

  products: [
    { id: 'f1', category: 'Dresses', name: 'The Ikoyi Wrap Dress in Sand', price: 68000, sizes: ['XS', 'S', 'M', 'L', 'XL'], colors: ['Sand', 'Olive'], desc: 'Fluid mid-length dress crafted from heavy linen with deep side pockets.', image: getImage('fashion', 1) },
    { id: 'f2', category: 'Tailoring', name: 'Structured Oversized Blazer', price: 95000, sizes: ['S', 'M', 'L'], colors: ['Charcoal', 'Oatmeal'], desc: 'Double-breasted blazer with padded shoulders and horn buttons.', image: getImage('fashion', 2) },
    { id: 'f3', category: 'Sets', name: 'Monochrome Linen Resort Set', price: 82000, sizes: ['S', 'M', 'L', 'XL'], colors: ['Cream', 'Black'], desc: 'Relaxed button-down shirt paired with wide-leg draw-string trousers.', image: getImage('fashion', 3) },
    { id: 'f4', category: 'Dresses', name: 'Asymmetric Silk Midi Slip', price: 74000, sizes: ['XS', 'S', 'M', 'L'], colors: ['Terracotta', 'Espresso'], desc: 'Bias-cut raw silk dress with delicate adjustable shoulder straps.', image: getImage('fashion', 4) }
  ],

  sizeGuide: [
    { size: 'XS', bust: '32"', waist: '25"', hip: '35"' },
    { size: 'S', bust: '34"', waist: '27"', hip: '37"' },
    { size: 'M', bust: '36"', waist: '29"', hip: '39"' },
    { size: 'L', bust: '39"', waist: '32"', hip: '42"' },
    { size: 'XL', bust: '42"', waist: '35"', hip: '45"' }
  ],

  faqs: [
    { q: 'How long does custom fitting take?', a: 'Bespoke tailoring takes 5 to 7 business days from measurement confirmation.' }
  ],

  hours: 'Mon to Sat: 10:00 AM - 6:00 PM'
};
