// Accordion Component (<details>)
export function renderAccordion(faqs = []) {
  if (!faqs || faqs.length === 0) return '';

  return `
    <div class="accordion-group">
      ${faqs.map(faq => `
        <details class="accordion-item">
          <summary>
            <span>${faq.q}</span>
            <span class="accordion-icon">+</span>
          </summary>
          <div class="accordion-content">
            <p>${faq.a}</p>
          </div>
        </details>
      `).join('')}
    </div>
  `;
}
