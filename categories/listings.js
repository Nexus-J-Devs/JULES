// Feature Module: Real Estate & Properties
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderRealestate(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Real Estate</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#listings" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">View Listings</a>
        </div>
      </section>

      <!-- Property Listings -->
      <section id="listings" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Featured Property Portfolio</h2>
          <span class="mono-num label-sm">${data.listings.length} Active Listings</span>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px;">
          ${data.listings.map(item => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${item.image}" alt="${item.title}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span class="label-sm">${item.area} • ${item.beds} Bed</span>
                  <span class="mono-num" style="font-weight: 700; font-size: 16px; color: var(--accent);">${formatNaira(item.price)}${item.type === 'rent' ? '/yr' : ''}</span>
                </div>
                <h3 style="font-size: 20px; font-family: var(--font-display);">${item.title}</h3>
                <p style="font-size: 14px; opacity: 0.8; flex-grow: 1;">${item.desc}</p>

                <button type="button" class="btn-primary schedule-viewing-btn" data-title="${item.title}" data-area="${item.area}" data-price="${item.price}" style="margin-top: 16px; padding: 10px; font-size: 11px;">
                  Schedule Viewing
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Affordability Calculator -->
      <section id="calculator" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Finance Tool</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Property Affordability Calculator</h2>

          <form id="re-calc-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="re-price">Target Property Price (₦)</label>
              <input type="number" id="re-price" value="150000000" step="5000000" style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="re-deposit">Initial Down Deposit (%): <span id="re-dep-percent" class="mono-num">30%</span></label>
              <input type="range" id="re-deposit" min="10" max="70" value="30" style="padding: 0;">
            </div>

            <div style="padding: 20px; border: 1px solid var(--ink); background-color: var(--bg); display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; justify-content: space-between;">
                <span class="label-sm">Down Payment Required:</span>
                <span id="re-calc-deposit" class="mono-num" style="font-weight: 700;">₦45,000,000</span>
              </div>
              <div style="display: flex; justify-content: space-between;">
                <span class="label-sm">Est. Monthly (3-yr Mortgage/Lease):</span>
                <span id="re-calc-monthly" class="mono-num" style="font-weight: 700; color: var(--accent);">₦3,500,000</span>
              </div>
            </div>

            <button type="button" id="re-calc-wa-btn" class="btn-primary" style="padding: 14px 28px;">Consult Real Estate Advisory on WhatsApp</button>
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

export function initRealestateEvents(data, params) {
  const priceInput = document.getElementById('re-price');
  const depositRange = document.getElementById('re-deposit');
  const depPercentEl = document.getElementById('re-dep-percent');
  const depAmountEl = document.getElementById('re-calc-deposit');
  const monthlyEl = document.getElementById('re-calc-monthly');

  function calculateFinance() {
    if (!priceInput || !depositRange) return;
    const price = Number(priceInput.value) || 0;
    const pct = Number(depositRange.value);
    const depositAmt = (price * pct) / 100;
    const loanAmt = price - depositAmt;
    const monthlyAmt = loanAmt / 36; // 3 year estimate

    if (depPercentEl) depPercentEl.textContent = `${pct}%`;
    if (depAmountEl) depAmountEl.textContent = formatNaira(depositAmt);
    if (monthlyEl) monthlyEl.textContent = formatNaira(Math.round(monthlyAmt));
  }

  if (priceInput) priceInput.addEventListener('input', calculateFinance);
  if (depositRange) depositRange.addEventListener('input', calculateFinance);

  document.querySelectorAll('.schedule-viewing-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const title = btn.dataset.title;
      const area = btn.dataset.area;
      const price = formatNaira(btn.dataset.price);

      const text = `Hello ${name}, I would like to schedule a viewing for the property listing:\n- Title: ${title}\n- Area: ${area}\n- Price: ${price}`;
      openWhatsApp(waNum, text);
    });
  });

  const calcWaBtn = document.getElementById('re-calc-wa-btn');
  if (calcWaBtn) {
    calcWaBtn.addEventListener('click', () => {
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const price = formatNaira(priceInput.value);
      const depPct = depositRange.value;

      const text = `Hello ${name}, I used your affordability calculator for a property worth ${price} with a ${depPct}% deposit down payment. I would like to speak with a property advisor.`;
      openWhatsApp(waNum, text);
    });
  }
}
