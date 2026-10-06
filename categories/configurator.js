// Feature Module: Fitness Gym Configurator & Timetable
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderFitness(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Athletic Club</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#membership" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Join the Club</a>
        </div>
      </section>

      <!-- Class Timetable -->
      <section id="timetable" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Weekly Class Schedule</h2>
        </div>

        <table class="data-table">
          <thead>
            <tr>
              <th>Day & Time</th>
              <th>Class Name</th>
              <th>Disciplines</th>
              <th>Lead Trainer</th>
            </tr>
          </thead>
          <tbody>
            ${data.timetable.map(t => `
              <tr>
                <td style="font-size: 14px; font-weight: 600;" class="mono-num">${t.day} • ${t.time}</td>
                <td style="font-family: var(--font-display); font-size: 18px; font-weight: 500;">${t.name}</td>
                <td style="font-size: 13px; opacity: 0.85;"><span class="label-sm">${t.type}</span></td>
                <td style="font-size: 14px; opacity: 0.85;">${t.trainer}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>

      <!-- Working Interactive Feature: Membership Configurator -->
      <section id="membership" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 640px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 12px;">03 / Configurator</span>
          <h2 style="font-size: 32px; margin-bottom: 24px;">Configure Membership Plan</h2>

          <form id="fit-config-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="fit-plan">Select Membership Tier</label>
              <select id="fit-plan" required style="padding: 12px;">
                ${data.plans.map(p => `<option value="${p.id}" data-base="${p.baseMonthly}" data-name="${p.name}">${p.name} (${formatNaira(p.baseMonthly)}/mo base)</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="fit-duration">Commitment Term</label>
              <select id="fit-duration" required style="padding: 12px;">
                <option value="1" data-discount="1">1 Month (Standard Rate)</option>
                <option value="3" data-discount="0.9">3 Months (10% Savings)</option>
                <option value="6" data-discount="0.8">6 Months (20% Savings)</option>
                <option value="12" data-discount="0.7">12 Months (30% Savings)</option>
              </select>
            </div>

            <div style="padding: 20px; border: 1px solid var(--ink); background-color: var(--bg); display: flex; justify-content: space-between; align-items: center;">
              <span class="label-sm">Calculated Monthly Rate:</span>
              <span id="fit-calc-rate" class="mono-num" style="font-size: 24px; font-weight: 700; color: var(--accent);">₦45,000</span>
            </div>

            <div class="form-group">
              <label for="fit-member-name">Your Full Name & Phone</label>
              <input type="text" id="fit-member-name" placeholder="e.g. Segun Lawson, 08012345678" required style="padding: 12px;">
            </div>

            <button type="submit" class="btn-primary" style="padding: 14px 28px;">Request Membership via WhatsApp</button>
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

export function initFitnessEvents(data, params) {
  const planSelect = document.getElementById('fit-plan');
  const durSelect = document.getElementById('fit-duration');
  const rateEl = document.getElementById('fit-calc-rate');
  const form = document.getElementById('fit-config-form');

  function updatePrice() {
    if (!planSelect || !durSelect) return;
    const planOpt = planSelect.options[planSelect.selectedIndex];
    const durOpt = durSelect.options[durSelect.selectedIndex];

    const base = Number(planOpt.dataset.base);
    const discount = Number(durOpt.dataset.discount);
    const finalMonthly = Math.round(base * discount);

    if (rateEl) rateEl.textContent = `${formatNaira(finalMonthly)}/mo`;
    return { name: planOpt.dataset.name, duration: durOpt.text, monthly: formatNaira(finalMonthly) };
  }

  if (planSelect) planSelect.addEventListener('change', updatePrice);
  if (durSelect) durSelect.addEventListener('change', updatePrice);
  updatePrice();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const details = updatePrice();
      const member = document.getElementById('fit-member-name').value;

      const text = `Hello ${name}, I would like to join the athletic club:\n- Tier: ${details.name}\n- Commitment: ${details.duration}\n- Monthly Rate: ${details.monthly}\n- Member Details: ${member}`;
      openWhatsApp(waNum, text);
    });
  }
}
