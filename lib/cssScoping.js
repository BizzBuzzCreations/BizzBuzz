// Shared CSS-scoping helper: rewrites every selector inside a pasted
// <style> block so it can only ever match inside one specific container
// (given as `scopeSelectorPrefix` — e.g. ".article" for a blog post body,
// or a per-field ".rt-xxxxx" class for a dashboard text/HTML field).
// Without this, a rule as generic as `a { color: green }` or
// `div { margin-top: 40px }` inside a pasted <style> block would leak out
// and restyle the rest of the page (navbar, footer, other sections...).
// Used by lib/sanitizeBlogContent.js (blog post body) and
// lib/sanitizeInlineRich.js (every other dashboard text/HTML field).

function scopeSelector(selector, scopeSelectorPrefix) {
  const trimmed = selector.trim();
  if (!trimmed) return trimmed;
  // Custom properties / page-level resets are meant to apply to the whole
  // scoped block itself — anchor them to the container directly instead of
  // nesting them (`.scope :root` would never match anything).
  if (/^(:root|html|body)$/i.test(trimmed)) {
    return scopeSelectorPrefix;
  }
  if (trimmed === scopeSelectorPrefix || trimmed.startsWith(`${scopeSelectorPrefix} `)) {
    return trimmed;
  }
  return `${scopeSelectorPrefix} ${trimmed}`;
}

function scopeSelectorList(selectorList, scopeSelectorPrefix) {
  return selectorList
    .split(",")
    .map((s) => scopeSelector(s, scopeSelectorPrefix))
    .join(", ");
}

// Small hand-rolled scanner (not a regex) so nested braces inside @media
// blocks are handled correctly. Walks the CSS text rule by rule.
function scopeCssRules(css, scopeSelectorPrefix) {
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
        result += `${header} {${scopeCssRules(blockContent, scopeSelectorPrefix)}}`;
      } else {
        result += css.slice(i, j);
      }
    } else {
      const scopedSelector = header ? scopeSelectorList(header, scopeSelectorPrefix) : header;
      result += `${scopedSelector} {${blockContent}}`;
    }

    i = j;
  }

  return result;
}

export function scopeStyleBlocks(html, scopeSelectorPrefix) {
  return html.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (match, attrs, css) => {
    try {
      return `<style${attrs}>${scopeCssRules(css, scopeSelectorPrefix)}</style>`;
    } catch {
      // If anything about the pasted CSS can't be parsed, drop it rather
      // than risk leaking unscoped rules onto the rest of the page.
      return "";
    }
  });
}
