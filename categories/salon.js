// Feature Module: Salon & Hair Studio
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderSalon(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Atelier</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#booking" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Book Appointment</a>
        </div>
      </section>

      <!-- Services Price List by Group -->
      <section id="services" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Service Menu</h2>
        </div>

        <div style="display: flex; flex-direction: column; gap: 48px;">
          ${data.serviceGroups.map(group => `
            <div>
              <h3 style="font-size: 22px; margin-bottom: 16px; color: var(--accent);">${group.category}</h3>
              <table class="data-table">
                <tbody>
                  ${group.items.map(item => `
                    <tr>
                      <td style="font-family: var(--font-display); font-size: 18px; font-weight: 500;">${item.name}</td>
                      <td style="text-align: right; font-weight: 600;" class="mono-num">${formatNaira(item.price)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Interactive Multi-Select Salon Booking -->
      <section id="booking" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Configurator</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Select Services & Stylist</h2>

          <form id="salon-booking-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="salon-stylist">Select Senior Stylist / Barber</label>
              <select id="salon-stylist" required style="padding: 12px;">
                <option value="First Available Senior Stylist">First Available Senior Stylist</option>
                ${data.stylists.map(st => `<option value="${st.name} (${st.title})">${st.name} - ${st.title}</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label>Select Services (Multi-select with running total):</label>
              <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 8px;">
                ${data.serviceGroups.flatMap(g => g.items).map(item => `
                  <label style="display: flex; align-items: center; justify-content: space-between; padding: 12px; border: 1px solid var(--border); background-color: var(--bg); cursor: pointer;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <input type="checkbox" class="salon-service-check" data-name="${item.name}" data-price="${item.price}" style="width: 18px; height: 18px;">
                      <span style="font-size: 15px;">${item.name}</span>
                    </div>
                    <span class="mono-num" style="font-weight: 600; font-size: 14px;">${formatNaira(item.price)}</span>
                  </label>
                `).join('')}
              </div>
            </div>

            <div style="padding: 16px; border: 1px solid var(--ink); background-color: var(--bg); display: flex; justify-content: space-between; align-items: center;">
              <span class="label-sm">Estimated Total:</span>
              <span id="salon-running-total" class="mono-num" style="font-size: 24px; font-weight: 700;">₦0</span>
            </div>

            <div class="form-group">
              <label for="salon-date">Preferred Date & Time</label>
              <input type="text" id="salon-date" placeholder="e.g. Friday Nov 15, 2:00 PM" required style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="salon-client-name">Your Full Name</label>
              <input type="text" id="salon-client-name" placeholder="Enter name" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Request Booking via WhatsApp</button>
          </form>
        </div>
      </section>

      <!-- Lookbook -->
      <section id="lookbook" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">04 / Lookbook Gallery</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
          ${data.lookbook.map(img => `
            <div class="media-card">
              <img src="${img}" alt="Salon lookbook" class="media-card-img" style="aspect-ratio: 4/5;">
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

export function initSalonEvents(data, params) {
  const checks = document.querySelectorAll('.salon-service-check');
  const totalEl = document.getElementById('salon-running-total');
  const form = document.getElementById('salon-booking-form');

  function calculateTotal() {
    let total = 0;
    checks.forEach(c => {
      if (c.checked) {
        total += Number(c.dataset.price);
      }
    });
    if (totalEl) totalEl.textContent = formatNaira(total);
    return total;
  }

  checks.forEach(c => c.addEventListener('change', calculateTotal));

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const stylist = document.getElementById('salon-stylist').value;
      const date = document.getElementById('salon-date').value;
      const clientName = document.getElementById('salon-client-name').value;

      const selectedServices = [];
      checks.forEach(c => {
        if (c.checked) selectedServices.push(`${c.dataset.name} (${formatNaira(c.dataset.price)})`);
      });

      if (selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
      }

      const total = calculateTotal();

      const text = `Hello ${name}, I would like to book a salon session:\n- Stylist: ${stylist}\n- Date/Time: ${date}\n- Services:\n  * ${selectedServices.join('\n  * ')}\n- Estimated Total: ${formatNaira(total)}\n- Name: ${clientName}`;
      openWhatsApp(waNum, text);
    });
  }
}
