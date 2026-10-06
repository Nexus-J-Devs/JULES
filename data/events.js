// 11. Events
import { getImage } from './images.js';

export default {
  id: 'events',
  name: 'Events & Catering',
  pitchKeywords: 'events wedding party catering decor venue sound dj mc celebration birthday corporate planner',
  defaultName: 'Aura Event Architecture',
  tagline: 'Bespoke event planning, spatial floral design, and luxury banquet catering.',
  voice: 'celebratory, organized, grand',
  accentColor: '#7B2D3B',
  defaultCity: 'Victoria Island, Lagos',
  phone: '+234 812 345 6789',
  wa: '2348123456789',
  ig: 'auraevents.ng',

  nav: [
    { label: 'Past Events', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'Instant Quote', href: '#quote' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Transforming empty spaces into unforgettable sensory experiences.',
    subtitle: 'Full-scope event curation from grand wedding receptions to private milestone dinners across Nigeria.',
    image: getImage('events', 0)
  },

  pastEvents: [
    { title: 'The Eko Atlantic Gala', venue: 'Eko Hotel Convention Center', guests: '450 Guests', image: getImage('events', 1) },
    { title: 'Lekki Coastal Wedding', venue: 'Private Beachfront Estate', guests: '250 Guests', image: getImage('events', 2) },
    { title: 'Tech Founder 40th Soirée', venue: 'Ikoyi Private Residence', guests: '80 Guests', image: getImage('events', 3) }
  ],

  addOns: [
    { id: 'a1', name: 'Bespoke Floral Sculptures & Entrance', unitPrice: 350000 },
    { id: 'a2', name: 'Intelligent Lighting & Stage Production', unitPrice: 500000 },
    { id: 'a3', name: '3-Course Plated Gourmet Banquet (per head)', unitPrice: 18000 },
    { id: 'a4', name: 'Premium Craft Cocktail Bar & Mixologists', unitPrice: 280000 },
    { id: 'a5', name: 'Live Acoustic Band & Sound Rig', unitPrice: 450000 }
  ],

  faqs: [
    { q: 'How early should we book an event planner?', a: 'For major weddings and corporate galas, we recommend booking 3 to 6 months prior.' }
  ],

  hours: 'Mon to Sat: 9:00 AM - 6:00 PM'
};
