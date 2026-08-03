// Strips <style>/<script>/<link> from blog HTML before rendering it on the
// page. Unscoped <style> blocks (common in content copy-pasted from page
// builders like Elementor) can leak global CSS selectors and break the rest
// of the site's design, and <script>/<link> are an XSS/injection risk — so
// this runs both on the real published post AND on the editor's HTML-mode
// preview, so what you see in preview is exactly what goes live.
export function sanitizeBlogContent(html) {
  if (!html) return html;
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]*>/gi, "");
}
