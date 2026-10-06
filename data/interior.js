// 7. Interior
import { getImage } from './images.js';

export default {
  id: 'interior',
  name: 'Interior & Architecture',
  pitchKeywords: 'interior architecture design space decor furniture remodeling home office fitout',
  defaultName: 'Studio Koto Interiors',
  tagline: 'Warm minimalist residential architecture and bespoke interior staging.',
  voice: 'spatial, refined, serene',
  accentColor: '#7A5C45',
  defaultCity: 'Ikoyi, Lagos',
  phone: '+234 808 901 2345',
  wa: '2348089012345',
  ig: 'studiokoto.ng',

  nav: [
    { label: 'Projects', href: '#projects' },
    { label: 'Furniture Catalog', href: '#catalog' },
    { label: 'Process', href: '#process' },
    { label: 'Start Enquiry', href: '#enquiry' }
  ],

  hero: {
    title: 'Spaces defined by natural light, tactile timber, and calm proportions.',
    subtitle: 'Full-service interior architecture from concept drafting to bespoke joinery installation.',
    image: getImage('interior', 0)
  },

  projects: [
    { id: 'p1', title: 'Ikoyi Penthouse Duplex', scope: 'Full Renovation & Custom Furniture', location: 'Ikoyi', image: getImage('interior', 1) },
    { id: 'p2', title: 'Lekki Coastal Villa', scope: 'Living & Dining Spatial Design', location: 'Lekki Phase 1', image: getImage('interior', 2) },
    { id: 'p3', title: 'Victoria Island Creative HQ', scope: 'Commercial Workspace Fitout', location: 'Victoria Island', image: getImage('interior', 3) }
  ],

  furnitureCatalog: [
    { id: 'f1', name: 'Low Profile Oak Credenza', price: 420000, desc: 'Solid white oak credenza with recessed brass pull details.', image: getImage('interior', 4) },
    { id: 'f2', name: 'Bouclé Lounge Armchair', price: 290000, desc: 'Ergonomic swivel armchair upholstered in tactile cream bouclé.', image: getImage('interior', 5) },
    { id: 'f3', name: 'Travertine Coffee Table', price: 380000, desc: 'Honed Roman travertine slab on dual monolithic stone pillars.', image: getImage('interior', 6) }
  ],

  roomTypes: ['Living Room', 'Full Home', 'Master Bedroom', 'Executive Office', 'Kitchen & Dining'],
  styles: ['Warm Japandi', 'Modern African Minimalist', 'Mid-Century Modern', 'Industrial Loft', 'Contemporary Classic'],

  faqs: [
    { q: 'What is your typical project timeline?', a: 'Residential interior fitouts range from 6 to 12 weeks depending on custom millwork requirements.' }
  ],

  hours: 'Mon to Fri: 9:00 AM - 5:00 PM'
};
