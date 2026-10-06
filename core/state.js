// App State Management

class State {
  constructor() {
    this.route = '/';
    this.category = null;
    this.queryParams = {};
    this.cart = this.loadCart();
    this.listeners = [];
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('demohub_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('demohub_cart', JSON.stringify(this.cart));
    } catch (e) {
      // ignore quota or private mode errors
    }
  }

  addToCart(item) {
    const existing = this.cart.find(i => i.id === item.id && i.selectedOption === item.selectedOption);
    if (existing) {
      existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
    } else {
      this.cart.push({ ...item, quantity: item.quantity || 1 });
    }
    this.saveCart();
    this.notify();
  }

  removeFromCart(index) {
    this.cart.splice(index, 1);
    this.saveCart();
    this.notify();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  notify() {
    this.listeners.forEach(l => l(this));
  }
}

export const appState = new State();
