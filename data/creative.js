// 9. Creative
import { getImage } from './images.js';

export default {
  id: 'creative',
  name: 'Creative & Design Studio',
  pitchKeywords: 'creative design agency portfolio video photography brand identity web design studio art direction',
  defaultName: 'Vanguard Creative Studio',
  tagline: 'Brand identity, digital products, and commercial photography for ambitious African brands.',
  voice: 'editorial, sharp, visionary',
  accentColor: '#1F4E79',
  defaultCity: 'Surulere, Lagos',
  phone: '+234 810 123 4567',
  wa: '2348101234567',
  ig: 'vanguardstudio.ng',

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Rates', href: '#rates' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],

  hero: {
    title: 'We build visual systems that clarify purpose and command attention.',
    subtitle: 'An independent design practice partnering with technology startups, hospitality groups, and fashion houses.',
    image: getImage('creative', 0)
  },

  disciplines: ['All', 'Brand Identity', 'Web Design', 'Art Direction'],

  projects: [
    { id: 'c1', discipline: 'Brand Identity', title: 'Nectar Botanicals Rebrand', client: 'Nectar Lagos', year: '2024', desc: 'Complete packaging system, brand guidelines, and retail identity.', image: getImage('creative', 1) },
    { id: 'c2', discipline: 'Web Design', title: 'Fintech Mobile Web Platform', client: 'PayLoom Africa', year: '2024', desc: 'Design system and high-conversion web interface for digital banking.', image: getImage('creative', 2) },
    { id: 'c3', discipline: 'Art Direction', title: 'Harmattan Fashion Campaign', client: 'Lagos Fashion Week', year: '2023', desc: 'Editorial lookbook photography direction and campaign film.', image: getImage('creative', 3) },
    { id: 'c4', discipline: 'Brand Identity', title: 'Kulture Coffee Packaging', client: 'Kulture Roasters', year: '2023', desc: 'Custom typography and tin vessel design for specialty West African coffee.', image: getImage('creative', 4) }
  ],

  rates: [
    { service: 'Brand Identity System', deliverable: 'Logo system, typography, color palette, brand guidelines book', price: 1200000 },
    { service: 'Custom Web Design & Build', deliverable: 'Responsive website, CMS integration, fast performance', price: 1800000 },
    { service: 'Art Direction & Campaign Shoot', deliverable: '1-day studio shoot, color grading, 25 retouched masters', price: 950000 }
  ],

  faqs: [
    { q: 'How long does a brand identity project take?', a: 'Brand identity projects typically take 4 to 6 weeks from strategy discovery to asset delivery.' }
  ],

  hours: 'Mon to Fri: 9:00 AM - 6:00 PM'
};
