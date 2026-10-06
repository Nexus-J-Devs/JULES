// Feature Module: Interior & Architecture Enquiry
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderInterior(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Architecture</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#enquiry" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Start Project Brief</a>
        </div>
      </section>

      <!-- Selected Projects -->
      <section id="projects" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Selected Works</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 32px;">
          ${data.projects.map(p => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${p.image}" alt="${p.title}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <span class="label-sm">${p.location}</span>
                <h3 style="font-size: 22px; font-family: var(--font-display);">${p.title}</h3>
                <p style="font-size: 14px; opacity: 0.8;">${p.scope}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Working Interactive Feature: Interior Project Enquiry Form -->
      <section id="enquiry" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 680px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Configurator</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Submit Space Design Brief</h2>

          <form id="interior-brief-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="int-room">Select Room / Space Type</label>
              <select id="int-room" required style="padding: 12px;">
                ${data.roomTypes.map(r => `<option value="${r}">${r}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="int-budget">Budget Range: <span id="budget-range-val" class="mono-num" style="font-weight: 700;">₦5,000,000</span></label>
              <input type="range" id="int-budget" min="1000000" max="50000000" step="1000000" value="5000000" style="padding: 0;">
            </div>

            <div class="form-group">
              <label for="int-style">Design Aesthetic</label>
              <select id="int-style" required style="padding: 12px;">
                ${data.styles.map(s => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="int-timeline">Desired Timeline</label>
              <select id="int-timeline" style="padding: 12px;">
                <option value="Immediate (1-2 Months)">Immediate (1-2 Months)</option>
                <option value="Standard (3-6 Months)">Standard (3-6 Months)</option>
                <option value="Planning Phase (6+ Months)">Planning Phase (6+ Months)</option>
              </select>
            </div>

            <div class="form-group">
              <label for="int-name">Your Full Name & Location</label>
              <input type="text" id="int-name" placeholder="e.g. Tunde & Family, Ikoyi" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Send Brief via WhatsApp</button>
          </form>
        </div>
      </section>

      <!-- Furniture Catalog -->
      <section id="catalog" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">04 / Custom Millwork & Furniture Catalog</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
          ${data.furnitureCatalog.map(f => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${f.image}" alt="${f.name}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <h3 style="font-size: 20px; font-family: var(--font-display);">${f.name}</h3>
                <p style="font-size: 14px; opacity: 0.8; flex-grow: 1;">${f.desc}</p>
                <span class="mono-num" style="font-weight: 600; font-size: 16px; margin-top: 8px;">${formatNaira(f.price)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">05 / FAQ</h2>
        </div>
        ${renderAccordion(data.faqs)}
      </section>
    </main>
  `;
}

export function initInteriorEvents(data, params) {
  const rangeInput = document.getElementById('int-budget');
  const rangeVal = document.getElementById('budget-range-val');
  const form = document.getElementById('interior-brief-form');

  if (rangeInput && rangeVal) {
    rangeInput.addEventListener('input', (e) => {
      rangeVal.textContent = formatNaira(e.target.value);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const room = document.getElementById('int-room').value;
      const budget = formatNaira(rangeInput.value);
      const style = document.getElementById('int-style').value;
      const timeline = document.getElementById('int-timeline').value;
      const client = document.getElementById('int-name').value;

      const text = `Hello ${name}, I would like to enquire about an interior project:\n- Room/Space: ${room}\n- Budget: ${budget}\n- Aesthetic: ${style}\n- Timeline: ${timeline}\n- Client Info: ${client}`;
      openWhatsApp(waNum, text);
    });
  }
}
