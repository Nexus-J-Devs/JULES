// Feature Module: Creative & Design Portfolio
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderCreative(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Portfolio</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#work" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Selected Work</a>
        </div>
      </section>

      <!-- Portfolio Grid -->
      <section id="work" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Client Case Studies</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px;">
          ${data.projects.map(p => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${p.image}" alt="${p.title}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span class="label-sm">${p.discipline}</span>
                  <span class="mono-num label-sm" style="color: var(--ink);">${p.year}</span>
                </div>
                <h3 style="font-size: 22px; font-family: var(--font-display);">${p.title}</h3>
                <p style="font-size: 14px; opacity: 0.8;">${p.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Rate Card Table -->
      <section id="rates" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">03 / Service Rate Card</h2>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Service Scope</th>
              <th>Deliverables Included</th>
              <th style="text-align: right;">Standard Rate</th>
            </tr>
          </thead>
          <tbody>
            ${data.rates.map(r => `
              <tr>
                <td style="font-family: var(--font-display); font-size: 18px; font-weight: 500;">${r.service}</td>
                <td style="font-size: 14px; opacity: 0.85; max-width: 440px;">${r.deliverable}</td>
                <td style="text-align: right; font-weight: 600;" class="mono-num">${formatNaira(r.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <!-- Interactive Project Inquiry Form -->
      <section id="contact" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">04 / Commission</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Commission a Studio Project</h2>

          <form id="creative-inquiry-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="cr-scope">Primary Project Discipline</label>
              <select id="cr-scope" style="padding: 12px;">
                ${data.rates.map(r => `<option value="${r.service}">${r.service} - (${formatNaira(r.price)})</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="cr-brand">Brand / Business Name</label>
              <input type="text" id="cr-brand" placeholder="e.g. Lagos Craft Co." required style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="cr-desc">Project Overview & Deliverables Needed</label>
              <textarea id="cr-desc" rows="4" placeholder="Describe goals, target audience, and preferred completion timeline..." required style="padding: 12px;"></textarea>
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Send Inquiry via WhatsApp</button>
          </form>
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

export function initCreativeEvents(data, params) {
  const form = document.getElementById('creative-inquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const scope = document.getElementById('cr-scope').value;
      const brand = document.getElementById('cr-brand').value;
      const desc = document.getElementById('cr-desc').value;

      const text = `Hello ${name}, I would like to commission a studio project:\n- Scope: ${scope}\n- Brand Name: ${brand}\n- Overview: ${desc}`;
      openWhatsApp(waNum, text);
    });
  }
}
