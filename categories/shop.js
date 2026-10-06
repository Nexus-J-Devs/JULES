// Enhanced Shop Category Module handling Fashion, Sneakers, Accessories, Beauty Products, Store
import { appState } from '../core/state.js';
import { formatNaira } from '../core/format.js';
import { openWhatsApp } from '../core/whatsapp.js';
import { renderAccordion } from '../components/accordion.js';

export function renderShopCategory(data, params) {
  const name = params.name || data.defaultName;
  const layout = params.layout || '1';

  return `
    <main class="container section-padding">
      <!-- Hero -->
      <section style="margin-bottom: 96px;" class="${layout === '2' ? 'hero-editorial' : ''}">
        ${layout === '2' ? `<img src="${data.hero.image}" alt="${name}" class="hero-editorial-img">` : ''}
        <div class="${layout === '2' ? 'hero-editorial-content' : ''}" style="max-width: 800px;">
          <span class="mono-num label-sm" style="display: block; margin-bottom: 16px;">01 / Catalog</span>
          <h1 style="margin-bottom: 24px;">${data.hero.title}</h1>
          <p style="margin-bottom: 32px; font-size: clamp(18px, 1.8vw, 22px); opacity: 0.85;">${data.hero.subtitle}</p>
          <a href="#shop" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">Shop Collection</a>
        </div>
      </section>

      <!-- Shop Grid Section with Filters & Search -->
      <section id="shop" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 16px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">02 / Store Catalog</h2>

          <div style="display: flex; gap: 16px; align-items: center;">
            ${data.id === 'store' ? `
              <input type="text" id="shop-search-input" placeholder="Search catalog..." style="padding: 6px 12px; font-size: 13px;">
            ` : ''}
            <button type="button" id="open-cart-drawer" class="btn-secondary" style="padding: 6px 14px; font-size: 12px;">
              Cart (<span id="cart-drawer-count">0</span>)
            </button>
          </div>
        </div>

        <!-- Filter Bar -->
        ${renderShopFilterBar(data)}

        <div class="card-grid" id="shop-product-grid">
          ${renderProductsList(data.products || [], data)}
        </div>
      </section>

      <!-- Category Specific Sections -->
      ${renderCategorySpecificSections(data)}

      <!-- Cart Drawer Overlay -->
      <div id="cart-drawer-backdrop" class="drawer-backdrop" style="display: none;">
        <div class="drawer-content">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 16px; margin-bottom: 24px;">
            <h3 style="font-size: 20px;">Shopping Cart</h3>
            <button type="button" id="close-cart-drawer" class="btn-secondary" style="padding: 4px 8px; font-size: 11px;">Close</button>
          </div>

          <div id="cart-drawer-items" style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 16px;">
            <!-- Cart items populated via JS -->
          </div>

          ${data.id === 'accessories' ? `
            <div class="form-group" style="margin-top: 16px;">
              <label for="cart-gift-note">Include Gift Note (Optional)</label>
              <textarea id="cart-gift-note" rows="2" placeholder="Write gift message..." style="padding: 8px; font-size: 13px;"></textarea>
            </div>
          ` : ''}

          <div style="border-top: 1px solid var(--border); padding-top: 20px; margin-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span class="label-sm">Subtotal:</span>
              <span id="cart-drawer-total" class="mono-num" style="font-size: 20px; font-weight: 700;">₦0</span>
            </div>
            <button type="button" id="cart-checkout-btn" class="btn-primary" style="width: 100%; padding: 14px;">Checkout via WhatsApp</button>
          </div>
        </div>
      </div>

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

function renderShopFilterBar(data) {
  let filters = [];
  if (data.id === 'fashion') filters = data.categories || [];
  if (data.id === 'sneakers') filters = data.brands || [];
  if (data.id === 'accessories') filters = data.materials || [];
  if (data.id === 'beauty-products') filters = data.concerns || [];
  if (data.id === 'store') filters = data.categories || [];

  if (filters.length === 0) return '';

  return `
    <div style="display: flex; gap: 12px; margin-bottom: 32px; overflow-x: auto; padding-bottom: 8px;">
      ${filters.map((f, idx) => `
        <button type="button" class="shop-filter-btn btn-secondary ${idx === 0 ? 'active' : ''}" data-filter="${f}" style="padding: 6px 14px; font-size: 12px;">${f}</button>
      `).join('')}
    </div>
  `;
}

function renderProductsList(products, data) {
  return products.map(p => `
    <div class="media-card" style="border: 1px solid var(--border);" data-cat="${p.category || p.brand || p.material || 'All'}" data-name="${p.name.toLowerCase()}">
      <img src="${p.image}" alt="${p.name}" class="media-card-img" style="aspect-ratio: 4/5;">
      <div class="media-card-body">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <span class="label-sm">${p.category || p.brand || p.material || 'Item'}</span>
          <span class="mono-num" style="font-weight: 600; font-size: 15px;">${formatNaira(p.price)}</span>
        </div>
        <h3 style="font-size: 18px; line-height: 1.2; font-family: var(--font-display);">${p.name}</h3>
        <p style="font-size: 13px; opacity: 0.8; flex-grow: 1;">${p.desc}</p>

        ${p.ingredients ? `<p style="font-size: 12px; opacity: 0.7; margin-top: 4px;"><strong>Ingredients:</strong> ${p.ingredients}</p>` : ''}

        ${p.sizes ? `
          <div style="margin-top: 8px;">
            <label style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px;">Size:</label>
            <select class="product-size-select" style="padding: 4px 8px; font-size: 12px; width: 100%;">
              ${p.sizes.map(s => `<option value="${s}">${s}</option>`).join('')}
            </select>
          </div>
        ` : ''}

        <button type="button" class="btn-primary add-to-cart-btn" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}" style="margin-top: 12px; padding: 10px; font-size: 11px;">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function renderCategorySpecificSections(data) {
  if (data.id === 'fashion') {
    return `
      <section id="sizing" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Size Guide Table</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Size</th><th>Bust</th><th>Waist</th><th>Hip</th>
            </tr>
          </thead>
          <tbody>
            ${data.sizeGuide.map(s => `
              <tr>
                <td style="font-weight: 600;">${s.size}</td><td>${s.bust}</td><td>${s.waist}</td><td>${s.hip}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    `;
  }

  if (data.id === 'sneakers') {
    return `
      <section id="policy" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 32px;">
        <h3 style="font-size: 20px; margin-bottom: 12px;">Authenticity Guarantee</h3>
        <p style="font-size: 15px; opacity: 0.85;">${data.authenticityPolicy}</p>
      </section>
    `;
  }

  if (data.id === 'accessories') {
    return `
      <section id="care" style="margin-bottom: 96px; background-color: var(--panel); border: 1px solid var(--border); padding: 32px;">
        <h3 style="font-size: 20px; margin-bottom: 12px;">Material & Care Guide</h3>
        <p style="font-size: 15px; opacity: 0.85;">${data.careGuide}</p>
      </section>
    `;
  }

  if (data.id === 'store') {
    return `
      <section id="delivery" style="margin-bottom: 96px;">
        <div style="border-bottom: 1px solid var(--ink); padding-bottom: 16px; margin-bottom: 32px;">
          <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Lagos Delivery Zones</h2>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Zone / Area</th><th>Estimated Delivery Fee</th><th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            ${data.deliveryZones.map(z => `
              <tr>
                <td style="font-weight: 500;">${z.zone}</td>
                <td class="mono-num" style="font-weight: 600;">${formatNaira(z.fee)}</td>
                <td>${z.time}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </section>
    `;
  }

  return '';
}

export function initShopEvents(data, params) {
  const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
  const openCartBtn = document.getElementById('open-cart-drawer');
  const closeCartBtn = document.getElementById('close-cart-drawer');
  const cartItemsEl = document.getElementById('cart-drawer-items');
  const cartTotalEl = document.getElementById('cart-drawer-total');
  const cartCountEl = document.getElementById('cart-drawer-count');
  const checkoutBtn = document.getElementById('cart-checkout-btn');

  // Filtering
  const filterBtns = document.querySelectorAll('.shop-filter-btn');
  const searchInput = document.getElementById('shop-search-input');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterProducts();
    });
  });

  if (searchInput) searchInput.addEventListener('input', filterProducts);

  function filterProducts() {
    const activeFilter = document.querySelector('.shop-filter-btn.active')?.dataset.filter || 'All';
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

    document.querySelectorAll('#shop-product-grid .media-card').forEach(card => {
      const cardCat = card.dataset.cat;
      const cardName = card.dataset.name;

      const matchesFilter = activeFilter === 'All' || cardCat === activeFilter;
      const matchesQuery = !query || cardName.includes(query);

      if (matchesFilter && matchesQuery) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function updateCartUI() {
    const items = appState.cart;
    let total = 0;
    let count = 0;

    if (items.length === 0) {
      if (cartItemsEl) cartItemsEl.innerHTML = `<p style="font-size: 14px; opacity: 0.6; padding: 20px 0;">Your cart is empty.</p>`;
    } else {
      if (cartItemsEl) {
        cartItemsEl.innerHTML = items.map((item, idx) => {
          total += item.price * item.quantity;
          count += item.quantity;
          return `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
              <div>
                <div style="font-weight: 600; font-size: 14px;">${item.name}${item.selectedSize ? ' (' + item.selectedSize + ')' : ''}</div>
                <div class="mono-num" style="font-size: 12px; opacity: 0.7;">${formatNaira(item.price)} x ${item.quantity}</div>
              </div>
              <button type="button" class="remove-cart-item" data-index="${idx}" style="border: none; background: transparent; cursor: pointer; font-size: 14px;">✕</button>
            </div>
          `;
        }).join('');
      }
    }

    if (cartTotalEl) cartTotalEl.textContent = formatNaira(total);
    if (cartCountEl) cartCountEl.textContent = count;

    document.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.addEventListener('click', () => {
        appState.removeFromCart(Number(btn.dataset.index));
      });
    });
  }

  appState.subscribe(updateCartUI);
  updateCartUI();

  if (openCartBtn && drawerBackdrop) {
    openCartBtn.addEventListener('click', () => drawerBackdrop.style.display = 'flex');
  }

  if (closeCartBtn && drawerBackdrop) {
    closeCartBtn.addEventListener('click', () => drawerBackdrop.style.display = 'none');
  }

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.media-card');
      const sizeSelect = card ? card.querySelector('.product-size-select') : null;
      const selectedSize = sizeSelect ? sizeSelect.value : null;

      appState.addToCart({
        id: btn.dataset.id,
        name: btn.dataset.name,
        price: Number(btn.dataset.price),
        selectedOption: selectedSize,
        selectedSize: selectedSize
      });
      if (drawerBackdrop) drawerBackdrop.style.display = 'flex';
    });
  });

  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (appState.cart.length === 0) {
        alert('Your cart is empty.');
        return;
      }

      const name = params.name || data.defaultName;
      const waNum = params.wa || data.wa;

      const giftNoteEl = document.getElementById('cart-gift-note');
      const giftNote = giftNoteEl ? giftNoteEl.value.trim() : '';

      let total = 0;
      const lines = appState.cart.map(i => {
        const lineTot = i.price * i.quantity;
        total += lineTot;
        return `${i.name}${i.selectedSize ? ' (' + i.selectedSize + ')' : ''} x${i.quantity} (${formatNaira(lineTot)})`;
      });

      const text = `Hello ${name}, I would like to place an order from your shop:\n- Items:\n  * ${lines.join('\n  * ')}${giftNote ? '\n- Gift Note: ' + giftNote : ''}\n- Total: ${formatNaira(total)}`;
      openWhatsApp(waNum, text);
    });
  }
}
