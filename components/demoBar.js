// Demo Bar Component
import { getWhatsAppUrl } from '../core/whatsapp.js';

export function renderDemoBar(data, params, nexusWa = '2348012345678') {
  if (params.demo === '0') {
    document.body.classList.add('no-demo-bar');
    return '';
  }

  document.body.classList.remove('no-demo-bar');

  const currentLayout = params.layout || '1';
  const name = params.name || data.defaultName;

  return `
    <div id="demo-bar-element" class="demo-bar">
      <div class="demo-bar-content">
        <div style="display: flex; align-items: center; gap: 12px;">
          <label for="demo-bar-name" style="font-size: 11px;">Preview as:</label>
          <input type="text" id="demo-bar-name" value="${name}" style="width: 160px;" placeholder="Business name">
        </div>

        <div class="demo-bar-actions">
          <div style="display: flex; gap: 4px; align-items: center;">
            <span style="font-size: 11px; margin-right: 4px;">Layout:</span>
            <button type="button" id="demo-bar-l1" class="${currentLayout === '1' ? 'btn-accent' : ''}" style="padding: 2px 8px; font-size: 10px;">L1</button>
            <button type="button" id="demo-bar-l2" class="${currentLayout === '2' ? 'btn-accent' : ''}" style="padding: 2px 8px; font-size: 10px;">L2</button>
          </div>

          <a href="/" class="btn-secondary" style="text-decoration: none; display: inline-flex; align-items: center; height: 32px; padding: 0 12px; font-size: 11px;">Back to Hub</a>

          <a href="${getWhatsAppUrl(nexusWa, `Hello Nexus, I want to get a website like ${name} (${data.name}).`)}" target="_blank" rel="noopener" class="btn-accent" style="text-decoration: none; display: inline-flex; align-items: center; height: 32px; padding: 0 12px; font-size: 11px;">
            Get this site: message Nexus
          </a>

          <button type="button" id="demo-bar-toggle" style="padding: 2px 8px; font-size: 10px;">Hide</button>
        </div>
      </div>
    </div>
  `;
}

export function initDemoBarEvents(currentParams) {
  const nameInput = document.getElementById('demo-bar-name');
  const l1Btn = document.getElementById('demo-bar-l1');
  const l2Btn = document.getElementById('demo-bar-l2');
  const toggleBtn = document.getElementById('demo-bar-toggle');
  const bar = document.getElementById('demo-bar-element');

  if (nameInput) {
    nameInput.addEventListener('change', (e) => {
      const url = new URL(window.location.href);
      url.searchParams.set('name', e.target.value.trim());
      window.location.href = url.toString();
    });
  }

  if (l1Btn) {
    l1Btn.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('layout', '1');
      window.location.href = url.toString();
    });
  }

  if (l2Btn) {
    l2Btn.addEventListener('click', () => {
      const url = new URL(window.location.href);
      url.searchParams.set('layout', '2');
      window.location.href = url.toString();
    });
  }

  if (toggleBtn && bar) {
    let collapsed = false;
    toggleBtn.addEventListener('click', () => {
      collapsed = !collapsed;
      if (collapsed) {
        bar.classList.add('demo-bar-collapsed');
        bar.querySelector('.demo-bar-content').style.display = 'none';
        toggleBtn.style.display = 'block';
        toggleBtn.textContent = 'Demo Bar';
        bar.appendChild(toggleBtn);
      } else {
        bar.classList.remove('demo-bar-collapsed');
        bar.querySelector('.demo-bar-content').style.display = 'flex';
        toggleBtn.textContent = 'Hide';
      }
    });
  }
}
