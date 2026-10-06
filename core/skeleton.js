// Skeleton Placeholder Helper

export function createSkeletonBlock(aspectRatio = '4/5', customClass = '') {
  return `<div class="skeleton ${customClass}" style="aspect-ratio: ${aspectRatio}; width: 100%;"></div>`;
}

export function attachSkeletonImageLoaders(container = document) {
  const images = container.querySelectorAll('img[data-src], img');
  images.forEach(img => {
    if (img.complete) {
      img.classList.remove('skeleton');
    } else {
      img.classList.add('skeleton');
      img.addEventListener('load', () => img.classList.remove('skeleton'), { once: true });
      img.addEventListener('error', () => {
        img.classList.remove('skeleton');
        img.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%221000%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23222220%22%2F%3E%3C%2Fsvg%3E';
      }, { once: true });
    }
  });
}
