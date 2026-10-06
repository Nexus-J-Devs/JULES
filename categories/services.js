// Feature Module: Home Services Technician Dispatch Request
import { openWhatsApp } from '../core/whatsapp.js';
import { renderAccordion } from '../components/accordion.js';

export function renderHomeServices(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Dispatch</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#request" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Request Technician</a>
        </div>
      </section>

      <!-- Services Diagnostics Rate Table -->
      <section id="pricing" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Price Guide & Diagnostics</h2>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Service Category</th>
              <th>Work Scope & Diagnosis</th>
              <th style="text-align: right;">Estimated Range</th>
            </tr>
          </thead>
          <tbody>
            ${data.services.map(s => `
              <tr>
                <td style="font-family: var(--font-display); font-size: 18px; font-weight: 500;">${s.name}</td>
                <td style="font-size: 14px; opacity: 0.85; max-width: 440px;">${s.desc}</td>
                <td style="text-align: right; font-weight: 600;" class="mono-num">${s.estimate}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <!-- Working Request Technician Form -->
      <section id="request" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Dispatch Form</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Request Home Technician</h2>

          <form id="hs-request-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="hs-service">Required Service</label>
              <select id="hs-service" required style="padding: 12px;">
                ${data.services.map(s => `<option value="${s.name}">${s.name} (${s.estimate})</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="hs-area">Location / Coverage Area</label>
              <select id="hs-area" required style="padding: 12px;">
                ${data.coverageAreas.map(a => `<option value="${a}">${a}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="hs-issue">Problem Description</label>
              <textarea id="hs-issue" rows="3" placeholder="Describe issue (e.g. AC leaking water, generator not taking load...)" required style="padding: 12px;"></textarea>
            </div>

            <div class="form-group" style="flex-direction: row; align-items: center; gap: 10px;">
              <input type="checkbox" id="hs-emergency" style="width: 20px; height: 20px;">
              <label for="hs-emergency" style="font-size: 14px; text-transform: none;">Emergency Request (Priority dispatch within 30 mins)</label>
            </div>

            <div class="form-group">
              <label for="hs-client">Your Full Name & Address</label>
              <input type="text" id="hs-client" placeholder="e.g. Mr. Okafor, Block 3 Flat 2, Lekki Phase 1" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Dispatch Technician via WhatsApp</button>
          </form>
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">04 / FAQ</h2>
        </div>
        ${renderAccordion(data.faqs)}
      </section>
    </main>
  `;
}

export function initHomeServicesEvents(data, params) {
  const form = document.getElementById('hs-request-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const service = document.getElementById('hs-service').value;
      const area = document.getElementById('hs-area').value;
      const issue = document.getElementById('hs-issue').value;
      const emergency = document.getElementById('hs-emergency').checked ? 'YES (EMERGENCY)' : 'No';
      const client = document.getElementById('hs-client').value;

      const text = `Hello ${name}, I am requesting a home service technician:\n- Service: ${service}\n- Area: ${area}\n- Issue: ${issue}\n- Emergency: ${emergency}\n- Address/Client: ${client}`;
      openWhatsApp(waNum, text);
    });
  }
}
