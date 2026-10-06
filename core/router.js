// Client router export wrapper
export function navigateTo(url) {
  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('popstate'));
}
