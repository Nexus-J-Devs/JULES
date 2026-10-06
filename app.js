// App Entry Point & Client Router

import { renderHubPage, initHubEvents } from './components/hub.js';
import { renderCategoryPage, initCategoryEvents } from './core/render.js';
import { renderLegalPage } from './legal/legal.js';
import { render404Page } from './components/404.js';
import { getCategoryData } from './data/index.js';
import { attachSkeletonImageLoaders } from './core/skeleton.js';

function parseRouteAndParams() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const urlParams = new URLSearchParams(window.location.search);
  const params = {};
  for (const [key, value] of urlParams.entries()) {
    params[key] = value;
  }
  return { path, params };
}

function router() {
  const { path, params } = parseRouteAndParams();
  const app = document.getElementById('app');

  // Check default-category meta tag fallback
  const metaDefault = document.querySelector('meta[name="default-category"]')?.getAttribute('content');

  let activeRoute = path;
  if (activeRoute === '/' && metaDefault) {
    activeRoute = `/${metaDefault}`;
  }

  const categoryId = activeRoute.substring(1);

  if (activeRoute === '/' || activeRoute === '') {
    document.title = 'Demo Hub - Studio Templates for Nigerian Businesses';
    document.documentElement.removeAttribute('data-category');
    document.documentElement.removeAttribute('data-layout');
    app.innerHTML = renderHubPage();
    initHubEvents();
  } else if (activeRoute === '/terms' || activeRoute === '/privacy') {
    const type = activeRoute.substring(1);
    document.title = type === 'terms' ? 'Terms of Service' : 'Privacy Policy';
    app.innerHTML = renderLegalPage(type, params.name, params.wa);
  } else if (getCategoryData(categoryId)) {
    const catData = getCategoryData(categoryId);
    const busName = params.name || catData.defaultName;
    document.title = `${busName} - ${catData.name}`;

    app.innerHTML = renderCategoryPage(categoryId, params);
    initCategoryEvents(categoryId, catData, params);
  } else {
    document.title = '404 - Page Not Found';
    app.innerHTML = render404Page();
  }

  attachSkeletonImageLoaders(document);
  window.scrollTo(0, 0);
}

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('popstate', router);
