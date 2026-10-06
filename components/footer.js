// Footer Component
import { getWhatsAppUrl } from '../core/whatsapp.js';
import { formatPhone } from '../core/format.js';

export function renderFooter(data, params) {
  const name = params.name || data.defaultName;
  const phone = params.phone || data.phone;
  const wa = params.wa || data.wa;
  const city = params.city || data.defaultCity;
  const ig = params.ig || data.ig;

  return `
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="footer-top">
          <div style="max-width: 400px;">
            <div class="brand-wordmark" style="font-size: 32px; margin-bottom: 16px;">${name}</div>
            <p style="font-size: 15px; opacity: 0.8; margin-bottom: 24px;">${data.tagline}</p>
            <div class="label-sm" style="margin-bottom: 8px;">Hours</div>
            <div style="font-size: 14px; opacity: 0.85;">${data.hours || 'Mon to Sat: 9:00 AM - 6:00 PM'}</div>
          </div>

          <div style="display: flex; gap: 48px; flex-wrap: wrap;">
            <div>
              <div class="label-sm" style="margin-bottom: 12px;">Location</div>
              <p style="font-size: 14px; opacity: 0.85; margin-bottom: 12px;">${city}</p>
              <a href="https://maps.google.com/?q=${encodeURIComponent(name + ' ' + city)}" target="_blank" rel="noopener" class="btn-secondary" style="padding: 6px 12px; font-size: 11px; text-decoration: none;">
                Open in Maps
              </a>
            </div>

            <div>
              <div class="label-sm" style="margin-bottom: 12px;">Contact</div>
              <p style="font-size: 14px; opacity: 0.85; margin-bottom: 6px;">${formatPhone(phone)}</p>
              <p style="font-size: 14px; opacity: 0.85; margin-bottom: 12px;">Instagram: @${ig}</p>
              <a href="${getWhatsAppUrl(wa, `Hello ${name}, I would like to make an enquiry.`)}" target="_blank" rel="noopener" class="btn-primary" style="padding: 6px 12px; font-size: 11px; text-decoration: none;">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            <a href="/terms?name=${encodeURIComponent(name)}" style="margin-right: 24px;">Terms</a>
            <a href="/privacy?name=${encodeURIComponent(name)}">Privacy</a>
          </div>
          <div>
            ${name} © ${new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  `;
}
