// Feature Module: Bakery Custom Cake Builder
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderBakery(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Cake Studio</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#custom" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Order Custom Cake</a>
        </div>
      </section>

      <!-- Signature Cakes -->
      <section id="signature" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Signature Bakes</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));">
          ${data.signatureCakes.map(c => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${c.image}" alt="${c.name}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <span class="mono-num" style="font-weight: 600; font-size: 15px;">${formatNaira(c.price)}</span>
                <h3 style="font-size: 20px; font-family: var(--font-display);">${c.name}</h3>
                <p style="font-size: 14px; opacity: 0.8;">${c.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Working Interactive Feature: Custom Cake Order Builder -->
      <section id="custom" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Configurator</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Build Your Custom Cake</h2>

          <form id="bakery-custom-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="bk-size">Select Cake Size & Tier</label>
              <select id="bk-size" required style="padding: 12px;">
                ${data.sizes.map(s => `<option value="${s.name}" data-price="${s.price}">${s.name} - ${formatNaira(s.price)}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="bk-flavor">Sponge Flavor</label>
              <select id="bk-flavor" required style="padding: 12px;">
                ${data.flavors.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="bk-filling">Layer Filling</label>
              <select id="bk-filling" required style="padding: 12px;">
                ${data.fillings.map(f => `<option value="${f}">${f}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="bk-msg">Message on Cake Board / Plaque</label>
              <input type="text" id="bk-msg" placeholder="e.g. Happy 30th Birthday Chimi!" style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="bk-date">Delivery Date (Min. 48 Hours Notice)</label>
              <input type="date" id="bk-date" required style="padding: 12px;">
            </div>

            <div style="padding: 16px; border: 1px solid var(--ink); background-color: var(--bg); display: flex; justify-content: space-between; align-items: center;">
              <span class="label-sm">Estimated Total:</span>
              <span id="bk-total" class="mono-num" style="font-size: 22px; font-weight: 700; color: var(--accent);">₦35,000</span>
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Send Custom Order to WhatsApp</button>
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

export function initBakeryEvents(data, params) {
  const sizeSelect = document.getElementById('bk-size');
  const totalEl = document.getElementById('bk-total');
  const dateInput = document.getElementById('bk-date');
  const form = document.getElementById('bakery-custom-form');

  // Enforce min 48 hours notice
  if (dateInput) {
    const minDate = new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
  }

  function updatePrice() {
    if (!sizeSelect) return;
    const price = Number(sizeSelect.options[sizeSelect.selectedIndex].dataset.price);
    if (totalEl) totalEl.textContent = formatNaira(price);
    return price;
  }

  if (sizeSelect) sizeSelect.addEventListener('change', updatePrice);

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const size = sizeSelect.value;
      const flavor = document.getElementById('bk-flavor').value;
      const filling = document.getElementById('bk-filling').value;
      const msg = document.getElementById('bk-msg').value;
      const date = dateInput.value;
      const price = formatNaira(updatePrice());

      const text = `Hello ${name}, I would like to order a custom cake:\n- Size: ${size}\n- Flavor: ${flavor}\n- Filling: ${filling}\n- Custom Message: ${msg || 'None'}\n- Delivery Date: ${date}\n- Estimated Price: ${price}`;
      openWhatsApp(waNum, text);
    });
  }
}
