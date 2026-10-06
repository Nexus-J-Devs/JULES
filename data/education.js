// 16. Education
import { getImage } from './images.js';

export default {
  id: 'education',
  name: 'Education & Training Academy',
  pitchKeywords: 'education course academy school training bootcamp coding business learn masterclass certification',
  defaultName: 'Nexus Tech & Design Institute',
  tagline: 'Practical intensive academies for software engineering, product design, and digital business.',
  voice: 'rigorous, inspiring, outcome-driven',
  accentColor: '#1E5A4A',
  defaultCity: 'Yaba Tech Hub, Lagos',
  phone: '+234 817 890 1234',
  wa: '2348178901234',
  ig: 'nexustechinst.ng',

  nav: [
    { label: 'Courses', href: '#courses' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'FAQ', href: '#faq' }
  ],

  hero: {
    title: 'Master high-income digital skills with industry-leading practitioners.',
    subtitle: 'Hands-on project-based bootcamps with guaranteed internship placements for top graduates.',
    image: getImage('education', 0)
  },

  levels: ['All', 'Beginner', 'Intermediate', 'Advanced'],

  courses: [
    { id: 'ed1', level: 'Beginner', subject: 'Product Design', format: 'Hybrid', title: 'Full-Stack UI/UX Design Masterclass', duration: '12 Weeks', fee: 250000, desc: 'Master Figma design systems, wireframing, user research, and interactive prototyping.', image: getImage('education', 1) },
    { id: 'ed2', level: 'Intermediate', subject: 'Software', format: 'In-Person', title: 'Modern Frontend Web Engineering', duration: '16 Weeks', fee: 350000, desc: 'Vanilla JS ES Modules, clean HTML5/CSS3 architecture, web APIs, and responsive design.', image: getImage('education', 2) },
    { id: 'ed3', level: 'Advanced', subject: 'Data', format: 'Online', title: 'Data Analytics & Business Intelligence', duration: '10 Weeks', fee: 220000, desc: 'SQL database queries, PowerBI dashboard creation, and Python data manipulation.', image: getImage('education', 3) }
  ],

  instructors: [
    { name: 'Dr. Femi Oladele', role: 'Lead Engineering Fellow (ex-Paystack)' },
    { name: 'Chinenye Egwu', role: 'Principal Designer & System Architect' }
  ],

  faqs: [
    { q: 'Do you offer installment payment plans?', a: 'Yes. Course fees can be paid in 2 equal installments across the duration of the program.' }
  ],

  hours: 'Mon to Sat: 8:30 AM - 6:00 PM'
};
