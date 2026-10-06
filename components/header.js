// Header Component
export function renderHeader(data, params) {
  const name = params.name || data.defaultName;
  const navLinks = data.nav || [];

  return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="/${data.id}" class="brand-wordmark">${name}</a>

        <ul class="nav-links">
          ${navLinks.map(link => `
            <li><a href="${link.href}" class="nav-link">${link.label}</a></li>
          `).join('')}
        </ul>

        <a href="#contact" class="btn-primary" style="padding: 10px 18px; text-decoration: none;">Contact</a>

        <button type="button" class="mobile-menu-btn btn-secondary" id="open-mobile-menu" aria-label="Open Navigation Menu" style="padding: 6px 12px; font-size: 11px;">
          Menu
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <div id="mobile-nav-overlay" class="mobile-nav-overlay" style="display: none;">
      <div class="mobile-nav-header">
        <span class="brand-wordmark">${name}</span>
        <button type="button" id="close-mobile-menu" class="btn-secondary" style="padding: 6px 12px; font-size: 11px;">Close</button>
      </div>
      <ul class="mobile-nav-links">
        ${navLinks.map(link => `
          <li><a href="${link.href}" class="mobile-nav-link">${link.label}</a></li>
        `).join('')}
        <li style="margin-top: 24px;">
          <a href="#contact" class="btn-primary mobile-nav-link" style="display: block; text-align: center; font-size: 16px; padding: 14px;">Contact Us</a>
        </li>
      </ul>
    </div>
  `;
}

export function initHeaderEvents() {
  const openBtn = document.getElementById('open-mobile-menu');
  const closeBtn = document.getElementById('close-mobile-menu');
  const overlay = document.getElementById('mobile-nav-overlay');

  if (openBtn && closeBtn && overlay) {
    openBtn.addEventListener('click', () => overlay.style.display = 'flex');
    closeBtn.addEventListener('click', () => overlay.style.display = 'none');
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => overlay.style.display = 'none');
    });
  }
}
