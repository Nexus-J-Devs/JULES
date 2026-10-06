// Feature Module: Events & Catering Quote Builder
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderEvents(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Event Atelier</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#quote" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Build Event Quote</a>
        </div>
      </section>

      <!-- Past Events Gallery -->
      <section id="gallery" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Past Celebrations</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));">
          ${data.pastEvents.map(e => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${e.image}" alt="${e.title}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <span class="label-sm">${e.guests} • ${e.venue}</span>
                <h3 style="font-size: 22px; font-family: var(--font-display);">${e.title}</h3>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Working Interactive Feature: Event Quote Builder -->
      <section id="quote" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 680px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Configurator</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Instant Event Quote Builder</h2>

          <form id="events-quote-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="evt-type">Event Classification</label>
              <select id="evt-type" style="padding: 12px;">
                <option value="Wedding Reception">Wedding Reception</option>
                <option value="Corporate Gala & Dinner">Corporate Gala & Dinner</option>
                <option value="Milestone Birthday / Soirée">Milestone Birthday / Soirée</option>
                <option value="Private Dining Experience">Private Dining Experience</option>
              </select>
            </div>

            <div class="form-group">
              <label for="evt-guests">Guest Count: <span id="evt-guest-val" class="mono-num" style="font-weight: 700;">150 Guests</span></label>
              <input type="range" id="evt-guests" min="20" max="1000" step="10" value="150" style="padding: 0;">
            </div>

            <div class="form-group">
              <label>Select Production Add-ons:</label>
              <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 8px;">
                ${data.addOns.map(addon => `
                  <label style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid var(--border); background-color: var(--bg); cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <input type="checkbox" class="evt-addon-check" data-name="${addon.name}" data-price="${addon.unitPrice}" style="width: 18px; height: 18px;">
                      <span style="font-size: 14px;">${addon.name}</span>
                    </div>
                    <span class="mono-num" style="font-size: 13px; font-weight: 600;">${formatNaira(addon.unitPrice)}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div style="padding: 20px; border: 1px solid var(--ink); background-color: var(--bg); display: flex; justify-content: space-between; align-items: center;">
              <span class="label-sm">Estimated Budget Range:</span>
              <span id="evt-calc-range" class="mono-num" style="font-size: 22px; font-weight: 700; color: var(--accent);">₦2,500,000 - ₦3,800,000</span>
            </div>

            <div class="form-group">
              <label for="evt-date">Proposed Event Date & Venue City</label>
              <input type="text" id="evt-date" placeholder="e.g. Dec 20, 2025 in Lekki Phase 1" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Send Quote to WhatsApp</button>
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

export function initEventsEvents(data, params) {
  const guestInput = document.getElementById('evt-guests');
  const guestVal = document.getElementById('evt-guest-val');
  const addonChecks = document.querySelectorAll('.evt-addon-check');
  const calcRangeEl = document.getElementById('evt-calc-range');
  const form = document.getElementById('events-quote-form');

  function calculateQuote() {
    if (!guestInput) return;
    const count = Number(guestInput.value);
    if (guestVal) guestVal.textContent = `${count} Guests`;

    let basePerHead = 12000;
    let addonSum = 0;

    addonChecks.forEach(c => {
      if (c.checked) {
        const p = Number(c.dataset.price);
        // if per head
        if (c.dataset.name.includes('per head')) {
          addonSum += p * count;
        } else {
          addonSum += p;
        }
      }
    });

    const lowEst = (count * basePerHead) + addonSum;
    const highEst = Math.round(lowEst * 1.3);

    const textStr = `${formatNaira(lowEst)} - ${formatNaira(highEst)}`;
    if (calcRangeEl) calcRangeEl.textContent = textStr;
    return textStr;
  }

  if (guestInput) guestInput.addEventListener('input', calculateQuote);
  addonChecks.forEach(c => c.addEventListener('change', calculateQuote));
  calculateQuote();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const evtType = document.getElementById('evt-type').value;
      const guests = guestInput.value;
      const dateVenue = document.getElementById('evt-date').value;
      const range = calculateQuote();

      const selectedAddons = [];
      addonChecks.forEach(c => {
        if (c.checked) selectedAddons.push(c.dataset.name);
      });

      const text = `Hello ${name}, I built an event quote on your website:\n- Event Type: ${evtType}\n- Guest Count: ${guests}\n- Proposed Date/Venue: ${dateVenue}\n- Add-ons: ${selectedAddons.length ? selectedAddons.join(', ') : 'None'}\n- Estimated Range: ${range}`;
      openWhatsApp(waNum, text);
    });
  }
}
