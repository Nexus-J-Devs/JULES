// Clean 404 Error Renderer
export function render404Page() {
  return `
    <main class="container section-padding" style="min-height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
      <span class="mono-num label-sm" style="margin-bottom: 16px;">404 Error</span>
      <h1 style="font-size: clamp(40px, 6vw, 88px); margin-bottom: 24px;">Page Not Found</h1>
      <p style="font-size: 18px; max-width: 50ch; margin-bottom: 40px; opacity: 0.85;">
        The template or route you are looking for does not exist or has been moved.
      </p>
      <a href="/" class="btn-primary" style="padding: 14px 28px; text-decoration: none;">
        Return to Hub
      </a>
    </main>
  `;
}
