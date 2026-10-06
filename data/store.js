// 14. Store
import { getImage } from './images.js';

export default {
  id: 'store',
  name: 'General Store & Mart',
  pitchKeywords: 'store shop mart supermarket electronics home goods general store order delivery lagos items',
  defaultName: 'Mercantile Provisions Mart',
  tagline: 'Curated home essentials, organic pantry items, and everyday design goods.',
  voice: 'utilitarian, efficient, reliable',
  accentColor: '#2F5D3A',
  defaultCity: 'Yaba, Lagos',
  phone: '+234 815 678 9012',
  wa: '2348156789012',
  ig: 'mercantilemart.ng',

  nav: [
    { label: 'Categories', href: '#categories' },
    { label: 'Shop Products', href: '#shop' },
    { label: 'Delivery Zones', href: '#delivery' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],

  hero: {
    title: 'Essential everyday goods delivered straight to your doorstep.',
    subtitle: 'From artisanal pantry staples to durable kitchenware, sourced directly from trusted producers.',
    image: getImage('store', 0)
  },

  categories: ['All', 'Home & Living', 'Pantry', 'Personal Care'],

  products: [
    { id: 'st1', category: 'Home & Living', name: 'Cast Iron Dutch Oven 4.5L', price: 48000, desc: 'Heavyweight enameled cast iron pot for slow cooking and sourdough baking.', image: getImage('store', 1) },
    { id: 'st2', category: 'Pantry', name: 'Cold-Pressed Raw Wildflower Honey 500g', price: 9500, desc: 'Unfiltered 100% natural honey harvested from local beehives.', image: getImage('store', 2) },
    { id: 'st3', category: 'Home & Living', name: 'Hand-Woven Sisal Laundry Basket', price: 24000, desc: 'Durable woven storage basket made with natural vegetable dyes.', image: getImage('store', 3) },
    { id: 'st4', category: 'Personal Care', name: 'Organic Cold Processed Black Soap Paste', price: 6500, desc: 'Enriched with cocoa pod ash and unrefined palm kernel oil.', image: getImage('store', 4) }
  ],

  deliveryZones: [
    { zone: 'Lagos Island (Lekki, VI, Ikoyi)', fee: 2500, time: 'Same Day (if ordered before 2 PM)' },
    { zone: 'Lagos Mainland (Yaba, Ikeja, Surulere)', fee: 3500, time: 'Same Day (if ordered before 12 PM)' },
    { zone: 'Outskirts (Ajah, Sangotedo, Ikorodu)', fee: 5000, time: 'Next Day Delivery' }
  ],

  faqs: [
    { q: 'Can I pay on delivery?', a: 'To ensure swift logistics dispatch, all orders are confirmed upon WhatsApp checkout.' }
  ],

  hours: 'Mon to Sat: 8:00 AM - 8:00 PM'
};
