// Aggregator index for all 16 category data files

import spa from './spa.js';
import salon from './salon.js';
import restaurant from './restaurant.js';
import fashion from './fashion.js';
import sneakers from './sneakers.js';
import accessories from './accessories.js';
import interior from './interior.js';
import realestate from './realestate.js';
import creative from './creative.js';
import fitness from './fitness.js';
import events from './events.js';
import bakery from './bakery.js';
import beautyProducts from './beauty-products.js';
import store from './store.js';
import homeServices from './home-services.js';
import education from './education.js';

export const CATEGORIES = {
  spa,
  salon,
  restaurant,
  fashion,
  sneakers,
  accessories,
  interior,
  realestate,
  creative,
  fitness,
  events,
  bakery,
  'beauty-products': beautyProducts,
  store,
  'home-services': homeServices,
  education
};

export const CATEGORY_LIST = [
  spa,
  salon,
  restaurant,
  fashion,
  sneakers,
  accessories,
  interior,
  realestate,
  creative,
  fitness,
  events,
  bakery,
  beautyProducts,
  store,
  homeServices,
  education
];

export function getCategoryData(categoryId) {
  return CATEGORIES[categoryId] || null;
}
