// 10. Fitness
import { getImage } from './images.js';

export default {
  id: 'fitness',
  name: 'Fitness & Gym',
  pitchKeywords: 'fitness gym workout boxing pilates crossfit trainer membership health body stretch',
  defaultName: 'Forge Athletic Club',
  tagline: 'High-performance strength conditioning, reformer pilates, and athletic recovery.',
  voice: 'energetic, structured, athletic',
  accentColor: '#8F1D21',
  defaultCity: 'Lekki Phase 1, Lagos',
  phone: '+234 811 234 5678',
  wa: '2348112345678',
  ig: 'forgeathletic.ng',

  nav: [
    { label: 'Timetable', href: '#timetable' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Membership', href: '#membership' },
    { label: 'Facility', href: '#facility' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Engineered training environments for measurable physical output.',
    subtitle: 'State-of-the-art strength rigs, indoor sprint tracks, and contrast recovery plunge tubs.',
    image: getImage('fitness', 0)
  },

  timetable: [
    { id: 'tt1', day: 'Monday', time: '06:30 AM', name: 'Metabolic HIIT Conditioning', trainer: 'Coach Tunde', type: 'HIIT' },
    { id: 'tt2', day: 'Monday', time: '05:30 PM', name: 'Reformer Pilates Sculpt', trainer: 'Sarah M.', type: 'Pilates' },
    { id: 'tt3', day: 'Wednesday', time: '07:00 AM', name: 'Barbell Strength & Power', trainer: 'Coach Tunde', type: 'Strength' },
    { id: 'tt4', day: 'Friday', time: '06:00 PM', name: 'Boxing Technical Sparring', trainer: 'Kafayat O.', type: 'Boxing' },
    { id: 'tt5', day: 'Saturday', time: '08:00 AM', name: 'Endurance Track Run', trainer: 'Sarah M.', type: 'Cardio' }
  ],

  trainers: [
    { name: 'Tunde Bakare', specialty: 'Olympic Weightlifting & Strength' },
    { name: 'Sarah Miller', specialty: 'Reformer Pilates & Mobility' },
    { name: 'Kafayat Ojo', specialty: 'Pro Boxing & Athletic Conditioning' }
  ],

  plans: [
    { id: 'p1', name: 'Open Gym Pass', baseMonthly: 45000, desc: 'Full access to weight floor, cardio arena, and locker rooms.' },
    { id: 'p2', name: 'Class All-Access', baseMonthly: 75000, desc: 'Unlimited group HIIT, boxing, strength, and pilates classes.' },
    { id: 'p3', name: 'Performance Executive', baseMonthly: 120000, desc: 'All-access plus 4 monthly 1-on-1 personal training sessions and recovery tub.' }
  ],

  faqs: [
    { q: 'Are shower and locker rooms available?', a: 'Yes, full shower facilities with complimentary towel service and hair dryers are provided.' }
  ],

  hours: 'Mon to Fri: 5:30 AM - 9:30 PM | Sat: 7:00 AM - 7:00 PM | Sun: 9:00 AM - 4:00 PM'
};
