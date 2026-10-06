// Feature Module: Spa Booking
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderSpa(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Sanctuary</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#booking" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Reserve Treatment</a>
        </div>
      </section>

      <!-- Treatments List with Prices -->
      <section id="treatments" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Treatments</h2>
          <span class="mono-num label-sm">${data.treatments.length} Options</span>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Treatment</th>
              <th>Duration</th>
              <th>Description</th>
              <th style="text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${data.treatments.map(t => `
              <tr>
                <td style="font-family: var(--font-display); font-size: 20px; font-weight: 500;">${t.name}</td>
                <td style="font-size: 14px; opacity: 0.8;">${t.duration}</td>
                <td style="font-size: 14px; opacity: 0.85; max-width: 400px;">${t.desc}</td>
                <td style="text-align: right; font-weight: 600;" class="mono-num">${formatNaira(t.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <!-- Working Interactive Feature: Spa Booking Form -->
      <section id="booking" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Reservations</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Book Your Spa Session</h2>

          <form id="spa-booking-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="spa-treatment">Select Treatment</label>
              <select id="spa-treatment" required style="padding: 12px;">
                ${data.treatments.map(t => `<option value="${t.name} (${formatNaira(t.price)})">${t.name} - ${formatNaira(t.price)}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="spa-date">Preferred Date</label>
              <input type="date" id="spa-date" required style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="spa-slot">Time Slot</label>
              <select id="spa-slot" required style="padding: 12px;">
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="03:00 PM (Booked)" disabled style="opacity: 0.4;">03:00 PM (Unavailable)</option>
                <option value="05:30 PM">05:30 PM</option>
              </select>
            </div>

            <div class="form-group">
              <label for="spa-therapist">Therapist (Optional)</label>
              <select id="spa-therapist" style="padding: 12px;">
                <option value="First Available">First Available Specialist</option>
                ${data.therapists.map(th => `<option value="${th}">${th}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="spa-guest-name">Your Full Name</label>
              <input type="text" id="spa-guest-name" placeholder="Enter name" required style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="spa-guest-phone">Phone / WhatsApp</label>
              <input type="tel" id="spa-guest-phone" placeholder="+234 800 000 0000" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px; margin-top: 12px;">Confirm & Book via WhatsApp</button>
          </form>
        </div>
      </section>

      <!-- Rituals Table -->
      <section id="rituals" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">04 / Multi-Treatment Rituals</h2>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Included Therapies</th>
              <th>Time Required</th>
              <th style="text-align: right;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${data.rituals.map(r => `
              <tr>
                <td style="font-family: var(--font-display); font-size: 18px; font-weight: 500;">${r.name}</td>
                <td style="font-size: 14px; opacity: 0.85;">${r.includes}</td>
                <td style="font-size: 14px; opacity: 0.8;">${r.duration}</td>
                <td style="text-align: right; font-weight: 600;" class="mono-num">${formatNaira(r.price)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <!-- Gallery -->
      <section id="gallery" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">05 / The Sanctuary Space</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
          ${data.gallery.map(img => `
            <div class="media-card">
              <img src="${img}" alt="Sanctuary atmosphere" class="media-card-img" style="aspect-ratio: 4/5;">
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">06 / Frequently Asked Questions</h2>
        </div>
        ${renderAccordion(data.faqs)}
      </section>
    </main>
  `;
}

export function initSpaEvents(data, params) {
  const form = document.getElementById('spa-booking-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const treatment = document.getElementById('spa-treatment').value;
      const date = document.getElementById('spa-date').value;
      const slot = document.getElementById('spa-slot').value;
      const therapist = document.getElementById('spa-therapist').value;
      const guestName = document.getElementById('spa-guest-name').value;
      const guestPhone = document.getElementById('spa-guest-phone').value;

      const text = `Hello ${name}, I would like to book a spa session:\n- Treatment: ${treatment}\n- Date: ${date}\n- Time Slot: ${slot}\n- Preferred Specialist: ${therapist}\n- Name: ${guestName}\n- Contact: ${guestPhone}`;
      openWhatsApp(waNum, text);
    });
  }
}
