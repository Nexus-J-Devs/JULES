// Feature Module: Restaurant Menu & Order System
import { openWhatsApp } from '../core/whatsapp.js';
import { formatNaira } from '../core/format.js';
import { renderAccordion } from '../components/accordion.js';

export function renderRestaurant(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Culinary</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#menu" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Explore Menu</a>
        </div>
      </section>

      <!-- Interactive Menu with Category Tabs & Cart -->
      <section id="menu" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: baseline;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Menu & Direct Order</h2>
          <span class="mono-num label-sm" id="rest-cart-count">0 Items Selected</span>
        </div>

        <!-- Tabs -->
        <div style="display: flex; gap: 12px; margin-bottom: 32px; overflow-x: auto; padding-bottom: 8px;">
          <button type="button" class="rest-tab-btn btn-secondary active" data-category="All" style="padding: 8px 16px; font-size: 12px;">All</button>
          ${data.menuCategories.map(cat => `
            <button type="button" class="rest-tab-btn btn-secondary" data-category="${cat}" style="padding: 8px 16px; font-size: 12px;">${cat}</button>
          `).join('')}
        </div>

        <div style="display: grid; grid-template-columns: 1fr 340px; gap: 40px;" class="rest-grid-wrap">
          <!-- Items List -->
          <div id="rest-item-list" style="display: flex; flex-direction: column; gap: 24px;">
            ${renderMenuItems(data.menuItems)}
          </div>

          <!-- Order Summary Panel -->
          <div style="border: 1px solid var(--ink); background-color: var(--panel); padding: 24px; position: sticky; top: 100px; height: fit-content;">
            <h3 style="font-size: 20px; margin-bottom: 16px; border-bottom: 1px solid var(--border); padding-bottom: 12px;">Your Order</h3>
            <div id="rest-order-items" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; min-height: 80px;">
              <p style="font-size: 14px; opacity: 0.6;">Your order is empty. Click Add on menu items.</p>
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label for="rest-order-type">Fulfillment Method</label>
              <select id="rest-order-type" style="padding: 8px; font-size: 13px;">
                <option value="Pickup">Pickup at Restaurant</option>
                <option value="Delivery">Delivery (Lagos Island / Mainland)</option>
              </select>
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label for="rest-address">Delivery Address / Special Notes</label>
              <input type="text" id="rest-address" placeholder="e.g. House 4, Admiralty Way, Lekki" style="padding: 8px; font-size: 13px;">
            </div>

            <div style="border-top: 1px solid var(--border); padding-top: 16px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
              <span class="label-sm">Total:</span>
              <span id="rest-order-total" class="mono-num" style="font-size: 22px; font-weight: 700;">₦0</span>
            </div>

            <button type="button" id="rest-checkout-btn" class="btn-primary" style="width: 100%; padding: 12px;">Send Order to WhatsApp</button>
          </div>
        </div>
      </section>

      <!-- Atmosphere Gallery -->
      <section id="gallery" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 40px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">03 / Atmosphere</h2>
        </div>

        <div class="card-grid" style="grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));">
          ${data.gallery.map(img => `
            <div class="media-card">
              <img src="${img}" alt="Dining atmosphere" class="media-card-img" style="aspect-ratio: 4/5;">
            </div>
          `).join('')}
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

function renderMenuItems(items) {
  return items.map(item => `
    <div style="border-bottom: 1px solid var(--border); padding-bottom: 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;">
      <div>
        <span class="label-sm" style="font-size: 11px; opacity: 0.7; display: block; margin-bottom: 4px;">${item.category}</span>
        <h4 style="font-family: var(--font-display); font-size: 20px; margin-bottom: 6px;">${item.name}</h4>
        <p style="font-size: 14px; opacity: 0.8; max-width: 480px;">${item.desc}</p>
      </div>
      <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end; gap: 10px;">
        <span class="mono-num" style="font-weight: 600; font-size: 16px;">${formatNaira(item.price)}</span>
        <button type="button" class="btn-secondary add-to-rest-order" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}" style="padding: 6px 12px; font-size: 11px;">
          Add
        </button>
      </div>
    </div>
  `).join('');
}

export function initRestaurantEvents(data, params) {
  let orderMap = {};

  const tabs = document.querySelectorAll('.rest-tab-btn');
  const itemList = document.getElementById('rest-item-list');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const cat = tab.dataset.category;
      const filtered = cat === 'All' ? data.menuItems : data.menuItems.filter(i => i.category === cat);
      if (itemList) itemList.innerHTML = renderMenuItems(filtered);
      attachAddListeners();
    });
  });

  function attachAddListeners() {
    document.querySelectorAll('.add-to-rest-order').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const name = btn.dataset.name;
        const price = Number(btn.dataset.price);

        if (orderMap[id]) {
          orderMap[id].qty += 1;
        } else {
          orderMap[id] = { id, name, price, qty: 1 };
        }
        updateOrderSummary();
      });
    });
  }

  function updateOrderSummary() {
    const summaryContainer = document.getElementById('rest-order-items');
    const totalEl = document.getElementById('rest-order-total');
    const countEl = document.getElementById('rest-cart-count');

    const items = Object.values(orderMap);
    let total = 0;
    let itemCount = 0;

    if (items.length === 0) {
      if (summaryContainer) summaryContainer.innerHTML = `<p style="font-size: 14px; opacity: 0.6;">Your order is empty. Click Add on menu items.</p>`;
    } else {
      if (summaryContainer) {
        summaryContainer.innerHTML = items.map(item => {
          total += item.price * item.qty;
          itemCount += item.qty;
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px;">
              <div>
                <span style="font-weight: 600;">${item.name}</span>
                <span class="mono-num" style="opacity: 0.7;"> x${item.qty}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px;">
                <span class="mono-num">${formatNaira(item.price * item.qty)}</span>
                <button type="button" class="remove-rest-item" data-id="${item.id}" style="border: none; background: transparent; padding: 0 4px; font-size: 14px; cursor: pointer;">✕</button>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    if (totalEl) totalEl.textContent = formatNaira(total);
    if (countEl) countEl.textContent = `${itemCount} Items Selected`;

    document.querySelectorAll('.remove-rest-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        delete orderMap[id];
        updateOrderSummary();
      });
    });
  }

  attachAddListeners();

  const checkoutBtn = document.getElementById('rest-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      const items = Object.values(orderMap);
      if (items.length === 0) {
        alert('Please add at least one item to your order.');
        return;
      }

      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;
      const method = document.getElementById('rest-order-type').value;
      const note = document.getElementById('rest-address').value;

      let total = 0;
      const lines = items.map(i => {
        const lineTot = i.price * i.qty;
        total += lineTot;
        return `${i.name} x${i.qty} (${formatNaira(lineTot)})`;
      });

      const text = `Hello ${name}, I would like to place an order:\n- Method: ${method}\n- Address/Notes: ${note || 'None'}\n- Items:\n  * ${lines.join('\n  * ')}\n- Total: ${formatNaira(total)}`;
      openWhatsApp(waNum, text);
    });
  }
}
