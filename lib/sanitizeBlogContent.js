// Strips <script>/<link> from blog HTML before rendering it — those load
// remote resources or execute code, which is a real injection risk.
// <style> blocks are kept: content pasted from page builders (Elementor
// exports, etc.) relies on them for the custom colors/boxes/design. But
// they're rewritten so every selector is scoped under ".article" — without
// this, a rule as generic as `a { color: green }` or `div { margin-top: 40px }`
// inside the post's own <style> block leaks out and restyles the whole page
// (table of contents links, footer, spacing around the featured image, etc).
// This same function runs on the real published post AND on the editor's
// HTML-mode preview, so what you see in preview is exactly what goes live.

const SCOPE_CLASS = ".article";

function scopeSelector(selector) {
  const trimmed = selector.trim();
  if (!trimmed) return trimmed;
  // Custom properties / page-level resets are meant to apply to the whole
  // post design — anchor them to the article container itself instead of
  // nesting them (`.article :root` would never match anything).
  if (/^(:root|html|body)$/i.test(trimmed)) {
    return SCOPE_CLASS;
  }
  if (trimmed.startsWith(SCOPE_CLASS)) {
    return trimmed;
  }
  return `${SCOPE_CLASS} ${trimmed}`;
}

function scopeSelectorList(selectorList) {
  return selectorList.split(",").map(scopeSelector).join(", ");
}

// Small hand-rolled scanner (not a regex) so nested braces inside @media
// blocks are handled correctly. Walks the CSS text rule by rule.
function scopeCssRules(css) {
  let result = "";
  let i = 0;

  while (i < css.length) {
    const braceIndex = css.indexOf("{", i);
    if (braceIndex === -1) {
      result += css.slice(i);
      break;
    }

    const header = css.slice(i, braceIndex).trim();

    let depth = 1;
    let j = braceIndex + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    const blockContent = css.slice(braceIndex + 1, j - 1);

    if (header.startsWith("@")) {
      const atName = header.split(/[\s(]/)[0].toLowerCase();
      if (/^@(keyframes|-webkit-keyframes|-moz-keyframes|font-face|page)/i.test(atName)) {
        // Animation/font definitions are global by nature — leave untouched.
        result += css.slice(i, j);
      } else if (/^@(media|supports|document|layer)/i.test(atName)) {
        result += `${header} {${scopeCssRules(blockContent)}}`;
      } else {
        result += css.slice(i, j);
      }
    } else {
      const scopedSelector = header ? scopeSelectorList(header) : header;
      result += `${scopedSelector} {${blockContent}}`;
    }

    i = j;
  }

  return result;
}

function scopeStyleBlocks(html) {
  return html.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (match, attrs, css) => {
    try {
      return `<style${attrs}>${scopeCssRules(css)}</style>`;
    } catch {
      // If anything about the pasted CSS can't be parsed, drop it rather
      // than risk leaking unscoped rules onto the rest of the page.
      return "";
    }
  });
}

export function sanitizeBlogContent(html) {
  if (!html) return html;
  const withoutScriptsAndLinks = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<link[^>]*>/gi, "");

  return scopeStyleBlocks(withoutScriptsAndLinks);
}
