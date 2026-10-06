// Main Renderer for Category Pages

import { getCategoryData } from '../data/index.js';
import { renderHeader, initHeaderEvents } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderDemoBar, initDemoBarEvents } from '../components/demoBar.js';
import { getWhatsAppUrl } from '../core/whatsapp.js';

// Import feature view renderers
import { renderSpa, initSpaEvents } from '../categories/booking.js';
import { renderSalon, initSalonEvents } from '../categories/salon.js';
import { renderRestaurant, initRestaurantEvents } from '../categories/menu.js';
import { renderShopCategory, initShopEvents } from '../categories/shop.js';
import { renderInterior, initInteriorEvents } from '../categories/interior.js';
import { renderRealestate, initRealestateEvents } from '../categories/listings.js';
import { renderCreative, initCreativeEvents } from '../categories/portfolio.js';
import { renderFitness, initFitnessEvents } from '../categories/configurator.js';
import { renderEvents, initEventsEvents } from '../categories/quote.js';
import { renderBakery, initBakeryEvents } from '../categories/request.js';
import { renderHomeServices, initHomeServicesEvents } from '../categories/services.js';
import { renderEducation, initEducationEvents } from '../categories/courses.js';

export function renderCategoryPage(categoryId, params) {
  const data = getCategoryData(categoryId);
  if (!data) return null;

  // Set html data attributes
  document.documentElement.setAttribute('data-category', categoryId);
  document.documentElement.setAttribute('data-layout', params.layout || '1');
  if (params.accent) {
    document.documentElement.style.setProperty('--accent', params.accent);
  }

  const name = params.name || data.defaultName;
  const wa = params.wa || data.wa;

  let mainHtml = '';
  switch (categoryId) {
    case 'spa': mainHtml = renderSpa(data, params); break;
    case 'salon': mainHtml = renderSalon(data, params); break;
    case 'restaurant': mainHtml = renderRestaurant(data, params); break;
    case 'fashion':
    case 'sneakers':
    case 'accessories':
    case 'beauty-products':
    case 'store':
      mainHtml = renderShopCategory(data, params); break;
    case 'interior': mainHtml = renderInterior(data, params); break;
    case 'realestate': mainHtml = renderRealestate(data, params); break;
    case 'creative': mainHtml = renderCreative(data, params); break;
    case 'fitness': mainHtml = renderFitness(data, params); break;
    case 'events': mainHtml = renderEvents(data, params); break;
    case 'bakery': mainHtml = renderBakery(data, params); break;
    case 'home-services': mainHtml = renderHomeServices(data, params); break;
    case 'education': mainHtml = renderEducation(data, params); break;
    default: mainHtml = renderSpa(data, params); break;
  }

  const floatWaMsg = `Hello ${name}, I am visiting your website and would like to make an enquiry.`;

  return `
    ${renderHeader(data, params)}
    ${mainHtml}
    <a href="${getWhatsAppUrl(wa, floatWaMsg)}" target="_blank" rel="noopener" class="whatsapp-float-btn">
      WhatsApp
    </a>
    ${renderFooter(data, params)}
    ${renderDemoBar(data, params)}
  `;
}

export function initCategoryEvents(categoryId, data, params) {
  initHeaderEvents();
  initDemoBarEvents(params);

  switch (categoryId) {
    case 'spa': initSpaEvents(data, params); break;
    case 'salon': initSalonEvents(data, params); break;
    case 'restaurant': initRestaurantEvents(data, params); break;
    case 'fashion':
    case 'sneakers':
    case 'accessories':
    case 'beauty-products':
    case 'store':
      initShopEvents(data, params); break;
    case 'interior': initInteriorEvents(data, params); break;
    case 'realestate': initRealestateEvents(data, params); break;
    case 'creative': initCreativeEvents(data, params); break;
    case 'fitness': initFitnessEvents(data, params); break;
    case 'events': initEventsEvents(data, params); break;
    case 'bakery': initBakeryEvents(data, params); break;
    case 'home-services': initHomeServicesEvents(data, params); break;
    case 'education': initEducationEvents(data, params); break;
  }
}
