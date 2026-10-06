// Hub Page Renderer & Interactive Logic
import { CATEGORY_LIST } from '../data/index.js';
import { getWhatsAppUrl } from '../core/whatsapp.js';

export function renderHubPage(nexusWa = '2348012345678') {
  return `
    <header class="site-header">
      <div class="container header-inner">
        <div class="brand-wordmark">Demo Hub</div>
        <a href="${getWhatsAppUrl(nexusWa, 'Hello Nexus, I want to discuss a custom website build for my business.')}" target="_blank" rel="noopener" class="btn-primary" style="padding: 10px 18px; font-size: 12px; text-decoration: none;">Message Nexus</a>
      </div>
    </header>

    <main class="container section-padding">
      <!-- Top Title & Search -->
      <section style="margin-bottom: 80px;">
        <h1 style="font-size: clamp(40px, 6vw, 88px); margin-bottom: 16px;">Demo Hub</h1>
        <p style="font-size: clamp(18px, 1.8vw, 22px); opacity: 0.8; max-width: 58ch; margin-bottom: 40px;">
          Bespoke digital studio website templates built for Nigerian small businesses. Choose your category to preview live.
        </p>

        <div class="form-group" style="max-width: 540px;">
          <label for="hub-search" class="label-sm">Search business type or keyword</label>
          <input type="text" id="hub-search" placeholder="Type barber, spa, gym, plumber, restaurant..." style="font-size: 16px; padding: 14px 18px;">
        </div>
      </section>

      <!-- Section 1: Choose Your Business Type -->
      <section style="margin-bottom: 110px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 24px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">01 / Choose Your Business Type</h2>
          <span class="mono-num" style="font-size: 13px; opacity: 0.7;">16 Templates</span>
        </div>

        <div id="category-index-list">
          ${renderCategoryIndexRows(CATEGORY_LIST)}
        </div>
      </section>

      <!-- Section 2: Templates Gallery with Scaled Iframe Previews -->
      <section style="margin-bottom: 110px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Layout Gallery</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 40px;">
          ${CATEGORY_LIST.map((cat, idx) => `
            <div class="media-card" style="border: 1px solid var(--border);">
              <div style="position: relative; width: 100%; height: 260px; background: var(--panel); overflow: hidden;">
                <div class="skeleton" style="position: absolute; inset: 0; z-index: 1;"></div>
                <iframe src="/${cat.id}?layout=1&demo=0" loading="lazy" style="width: 1280px; height: 1024px; border: none; transform: scale(0.25); transform-origin: 0 0; position: absolute; top: 0; left: 0; pointer-events: none;" onload="this.previousElementSibling.style.display='none'"></iframe>
              </div>
              <div class="media-card-body">
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                  <span class="mono-num label-sm">${(idx + 1).toString().padStart(2, '0')}</span>
                  <span class="label-sm" style="color: ${cat.accentColor};">${cat.name}</span>
                </div>
                <h3 style="font-size: 20px; line-height: 1.2;">${cat.defaultName}</h3>
                <div style="display: flex; gap: 12px; margin-top: 12px;">
                  <a href="/${cat.id}?layout=1" class="btn-secondary" style="flex: 1; padding: 8px 12px; font-size: 11px; text-align: center;">Classic (L1)</a>
                  <a href="/${cat.id}?layout=2" class="btn-primary" style="flex: 1; padding: 8px 12px; font-size: 11px; text-align: center;">Editorial (L2)</a>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Section 3: Make It Yours Link Generator -->
      <section style="margin-bottom: 110px; background-color: var(--panel); border: 1px solid var(--border); padding: 48px 32px;">
        <div style="max-width: 680px;">
          <h2 style="font-size: 32px; margin-bottom: 12px;">Make It Yours</h2>
          <p style="margin-bottom: 32px; opacity: 0.85;">
            Generate a personalized live preview link for any business in seconds. Enter their details below:
          </p>

          <form id="link-gen-form" style="display: flex; flex-direction: column; gap: 20px;">
            <div class="form-group">
              <label for="gen-category">Select Business Category</label>
              <select id="gen-category" required style="padding: 12px; font-size: 15px;">
                ${CATEGORY_LIST.map(c => `<option value="${c.id}">${c.name} (${c.defaultName})</option>`).join('')}
              </select>
            </div>

            <div class="form-group">
              <label for="gen-name">Business Name</label>
              <input type="text" id="gen-name" placeholder="e.g. Lekki Glow Spa" required style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="gen-city">City / Area</label>
              <input type="text" id="gen-city" placeholder="e.g. Victoria Island, Lagos" style="padding: 12px;">
            </div>

            <div class="form-group">
              <label for="gen-wa">WhatsApp Phone Number</label>
              <input type="text" id="gen-wa" placeholder="e.g. 2348012345678" style="padding: 12px;">
            </div>

            <div class="form-group">
              <label>Accent Swatch</label>
              <div class="swatch-group">
                <button type="button" class="swatch-btn selected" data-color="#5F7360" style="background-color: #5F7360;"></button>
                <button type="button" class="swatch-btn" data-color="#9A4A3A" style="background-color: #9A4A3A;"></button>
                <button type="button" class="swatch-btn" data-color="#A23B1E" style="background-color: #A23B1E;"></button>
                <button type="button" class="swatch-btn" data-color="#8C7A5B" style="background-color: #8C7A5B;"></button>
                <button type="button" class="swatch-btn" data-color="#D9480F" style="background-color: #D9480F;"></button>
                <button type="button" class="swatch-btn" data-color="#7A5C45" style="background-color: #7A5C45;"></button>
                <button type="button" class="swatch-btn" data-color="#1F4E79" style="background-color: #1F4E79;"></button>
                <button type="button" class="swatch-btn" data-color="#1E5A4A" style="background-color: #1E5A4A;"></button>
              </div>
            </div>

            <div class="form-group">
              <label for="gen-result">Shareable Link</label>
              <input type="text" id="gen-result" readonly style="background-color: var(--bg); font-family: monospace; font-size: 13px;">
            </div>

            <div style="display: flex; gap: 16px; margin-top: 12px;">
              <button type="button" id="copy-link-btn" class="btn-primary" style="flex: 1;">Copy Link</button>
              <a id="open-link-btn" href="#" target="_blank" class="btn-secondary" style="flex: 1; text-align: center; display: inline-flex; align-items: center; justify-content: center; text-decoration: none;">Open Preview</a>
            </div>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-bottom">
        <div>
          <a href="/terms" style="margin-right: 24px;">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>
        <div>
          Built by Nexus | <a href="${getWhatsAppUrl(nexusWa, 'Hello Nexus, I am reaching out from Demo Hub.')}" target="_blank" rel="noopener">Message on WhatsApp</a>
        </div>
      </div>
    </footer>
  `;
}

function renderCategoryIndexRows(list) {
  if (list.length === 0) {
    return `<div style="padding: 40px 0; text-align: center; opacity: 0.7;">Nothing matches. Clear filters</div>`;
  }

  return list.map((cat, idx) => `
    <a href="/${cat.id}?layout=1" class="category-index-row">
      <div class="category-index-main">
        <span class="category-index-num mono-num">${(idx + 1).toString().padStart(2, '0')}</span>
        <div>
          <span class="category-index-title">${cat.name}</span>
          <div class="category-index-sub">${cat.tagline}</div>
        </div>
      </div>
      <span class="label-sm" style="color: ${cat.accentColor}; opacity: 0.8; white-space: nowrap;">${cat.defaultName}</span>
    </a>
  `).join('');
}

export function initHubEvents() {
  const searchInput = document.getElementById('hub-search');
  const indexContainer = document.getElementById('category-index-list');

  if (searchInput && indexContainer) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = CATEGORY_LIST.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.defaultName.toLowerCase().includes(q) ||
        c.pitchKeywords.toLowerCase().includes(q)
      );
      indexContainer.innerHTML = renderCategoryIndexRows(filtered);
    });
  }

  // Link Generator logic
  const genCat = document.getElementById('gen-category');
  const genName = document.getElementById('gen-name');
  const genCity = document.getElementById('gen-city');
  const genWa = document.getElementById('gen-wa');
  const genResult = document.getElementById('gen-result');
  const copyBtn = document.getElementById('copy-link-btn');
  const openBtn = document.getElementById('open-link-btn');
  const swatchBtns = document.querySelectorAll('.swatch-btn');

  let selectedAccent = '#5F7360';

  swatchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      swatchBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedAccent = btn.dataset.color;
      updateGeneratedUrl();
    });
  });

  function updateGeneratedUrl() {
    if (!genCat || !genResult) return;
    const cat = genCat.value;
    const name = genName.value.trim();
    const city = genCity.value.trim();
    const wa = genWa.value.trim();

    const params = new URLSearchParams();
    if (name) params.set('name', name);
    if (city) params.set('city', city);
    if (wa) params.set('wa', wa);
    if (selectedAccent) params.set('accent', selectedAccent);

    const str = params.toString();
    const url = `${window.location.origin}/${cat}${str ? '?' + str : ''}`;
    genResult.value = url;
    if (openBtn) openBtn.href = url;
  }

  [genCat, genName, genCity, genWa].forEach(el => {
    if (el) el.addEventListener('input', updateGeneratedUrl);
  });

  if (copyBtn && genResult) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(genResult.value).then(() => {
        const orig = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        setTimeout(() => copyBtn.textContent = orig, 2000);
      });
    });
  }

  updateGeneratedUrl();
}
