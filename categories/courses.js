// Feature Module: Education & Training Academy
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderEducation(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Academy</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#courses" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Explore Bootcamps</a>
        </div>
      </section>

      <!-- Course Catalog -->
      <section id="courses" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Available Programs</h2>
          <span class="mono-num label-sm">${data.courses.length} Bootcamps</span>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px;">
          ${data.courses.map(c => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <img src="${c.image}" alt="${c.title}" class="media-card-img" style="aspect-ratio: 4/5;">
              <div class="media-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span class="label-sm">${c.level} • ${c.format}</span>
                  <span class="mono-num" style="font-weight: 700; font-size: 16px; color: var(--accent);">${formatNaira(c.fee)}</span>
                </div>
                <h3 style="font-size: 20px; font-family: var(--font-display);">${c.title}</h3>
                <p style="font-size: 14px; opacity: 0.8; flex-grow: 1;">${c.desc}</p>
                <div style="font-size: 13px; font-weight: 600; margin-top: 8px;">Duration: ${c.duration}</div>

                <button type="button" class="btn-primary enrol-course-btn" data-title="${c.title}" data-fee="${c.fee}" style="margin-top: 16px; padding: 10px; font-size: 11px;">
                  Apply & Enrol
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FAQ -->
      <section id="faq" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">03 / FAQ</h2>
        </div>
        ${renderAccordion(data.faqs)}
      </section>
    </main>
  `;
}

export function initEducationEvents(data, params) {
  document.querySelectorAll('.enrol-course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const title = btn.dataset.title;
      const fee = formatNaira(btn.dataset.fee);

      const text = `Hello ${name}, I am interested in enrolling in the bootcamp program:\n- Course: ${title}\n- Tuition Fee: ${fee}`;
      openWhatsApp(waNum, text);
    });
  });
}
