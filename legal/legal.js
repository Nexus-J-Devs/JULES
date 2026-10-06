// Legal Page renderer
import { getWhatsAppUrl } from '../core/whatsapp.js';

export function renderLegalPage(type, businessName, whatsappNum) {
  const isTerms = type === 'terms';
  const title = isTerms ? 'Terms of Service' : 'Privacy Policy';
  const name = businessName || 'Our Business';

  return `
    <div class="legal-banner" style="background-color: var(--panel); border-bottom: 1px solid var(--border); padding: 12px 24px; text-align: center; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">
      Sample text for demo purposes
    </div>

    <main class="container section-padding" style="max-width: 800px;">
      <a href="/" style="display: inline-block; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 32px; font-weight: 600;">Back to Hub</a>

      <h1 style="font-size: clamp(36px, 5vw, 64px); margin-bottom: 16px;">${title}</h1>
      <p class="label-sm" style="margin-bottom: 48px;">Effective Date: January 1, 2025 | Applicable to ${name}</p>

      <div style="display: flex; flex-direction: column; gap: 32px; line-height: 1.7;">
        ${isTerms ? `
          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">1. Service Overview & Booking Confirmation</h2>
            <p>All orders, reservations, and service enquiries submitted through this platform for ${name} are processed via direct communication on WhatsApp. A request submitted on this website constitutes an initial enquiry and does not guarantee booking until confirmed by our team.</p>
          </section>

          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">2. Pricing and Payment Terms</h2>
            <p>Prices listed on this site are displayed in Nigerian Naira (₦) and represent standard rates. Final quotes for custom services or event packages will be verified during the WhatsApp checkout process. Payment instructions will be provided directly by ${name}.</p>
          </section>

          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">3. Cancellations and Rescheduling</h2>
            <p>For appointment-based services or custom orders, cancellations must be communicated at least 24 to 48 hours in advance. Deposits paid for custom orders or reserved dates are subject to our specific refund policy communicated at the time of invoice issuance.</p>
          </section>
        ` : `
          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">1. Data Collection & Usage</h2>
            <p>${name} respects your privacy. We do not store personal financial information or tracking cookies on this website. Information submitted through our interactive features (such as your name, contact phone number, and service selections) is transferred directly into a prefilled WhatsApp message for fulfillment.</p>
          </section>

          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">2. Third-Party Services</h2>
            <p>Communications initiated through this website redirect to WhatsApp (Meta Platforms, Inc.). Your interactions on WhatsApp are governed by WhatsApp's privacy policy and terms of service.</p>
          </section>

          <section>
            <h2 style="font-size: 22px; margin-bottom: 12px;">3. Contact Us</h2>
            <p>If you have any questions regarding how ${name} handles customer data, please reach out directly via our official WhatsApp line.</p>
          </section>
        `}
      </div>

      <div style="margin-top: 64px; border-top: 1px solid var(--border); padding-top: 32px;">
        <a href="${getWhatsAppUrl(whatsappNum, `Hello ${name}, I have a legal enquiry.`)}" target="_blank" rel="noopener" class="btn-primary" style="padding: 12px 24px; text-decoration: none; display: inline-block;">
          Contact ${name} on WhatsApp
        </a>
      </div>
    </main>
  `;
}
