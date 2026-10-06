// 3. Restaurant
import { getImage } from './images.js';

export default {
  id: 'restaurant',
  name: 'Restaurant & Dining',
  pitchKeywords: 'restaurant food dining chef grill kitchen mama tayo buka cafe bistro lounge jollof',
  defaultName: 'Maison Lagos Kitchen',
  tagline: 'Modern West African woodfire cuisine and craft cocktail pairing.',
  voice: 'rich, hospitable, culinary',
  accentColor: '#A23B1E',
  defaultCity: 'Victoria Island, Lagos',
  phone: '+234 804 567 8901',
  wa: '2348045678901',
  ig: 'maisonlagos.ng',

  nav: [
    { label: 'Menu', href: '#menu' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Atmosphere', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Smoked meats, slow-simmered stews, and coastal ocean bounty.',
    subtitle: 'Celebrating local produce through slow fire cooking and contemporary plating techniques.',
    image: getImage('restaurant', 0)
  },

  menuCategories: ['Starters', 'Mains', 'Woodfire Grill', 'Drinks & Desserts'],

  menuItems: [
    { id: 'r1', category: 'Starters', name: 'Charred Suya Beef Carpaccio', price: 12000, desc: 'Paper-thin aged beef, toasted yaji spice, shaved pickled red onions.' },
    { id: 'r2', category: 'Starters', name: 'Smoked Pepper Soup Shooter & Snapper', price: 9500, desc: 'Wild snapper tail, aromatic habanero broth, scented leaf oil.' },
    { id: 'r3', category: 'Mains', name: 'Smoked Asun Short Rib Jollof', price: 28000, desc: '8-hour braised beef short rib, firewood rice, plantain crisp.' },
    { id: 'r4', category: 'Mains', name: 'Seafood Okra Pot with Tiger Prawns', price: 32000, desc: 'Fresh calamari, jumbo prawns, blue crab, pounded yam or amala.' },
    { id: 'r5', category: 'Woodfire Grill', name: 'Whole Grilled Tilapia in Pepper Sauce', price: 24000, desc: 'Charcoal roasted fish, fried yam chips, spicy tartar sauce.' },
    { id: 'r6', category: 'Drinks & Desserts', name: 'Zobo Hibiscus Cardamom Spritz', price: 6500, desc: 'Sparkling hibiscus extract, ginger beer, fresh mint.' }
  ],

  gallery: [
    getImage('restaurant', 1),
    getImage('restaurant', 2),
    getImage('restaurant', 3),
    getImage('restaurant', 4)
  ],

  faqs: [
    { q: 'Do you accept walk-ins for dinner?', a: 'Walk-ins are welcome at our bar counter, but main dining room tables require reservation.' },
    { q: 'Is there a private dining space available?', a: 'Yes, our mezzanine level seats up to 16 guests for private group dining.' }
  ],

  hours: 'Tue to Sun: 12:00 PM - 11:00 PM | Mon: Closed'
};
