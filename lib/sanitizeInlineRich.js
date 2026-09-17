// Sanitizer for the short "inline rich text" fields edited via
// components/ui/inlineRichEditor.js — deliberately much stricter than
// lib/sanitizeBlogContent.js (which allows a full article's worth of
// tags). These fields only ever need bold and a link, so anything else
// is stripped rather than trusted, regardless of what produced it.
const ALLOWED_TAGS = new Set(["B", "STRONG", "A", "P", "BR"]);

// `noLink: true` additionally unwraps <a> tags (keeping their text, same
// as any other disallowed tag) — for the handful of spots where the
// content renders inside something that's already a <Link>/<a> itself
// (a whole card that navigates somewhere on click). Nesting a real <a>
// inside another <a> is invalid HTML that every browser's parser breaks
// by force-closing the outer one, so those specific spots keep bold
// support but can't also render a clickable link.
// Someone typing (or pasting as plain text) a literal `<a href="...">text</a>`
// straight into the editor, instead of selecting text and using the
// toolbar's link button, never becomes a real link mark — the editor
// treats "<"/">" as ordinary characters it types out, and when it saves,
// those get escaped to "&lt;"/"&gt;" like any other text (exactly as they
// must be, so the tag doesn't get misread as real markup while editing).
// Recognize that one specific escaped pattern and turn it back into a
// real anchor before the rest of this sanitizer runs, so it comes out the
// same as if the link button had been used — supports both routes to the
// same result. Runs on every render, so it also fixes anything already
// saved this way before this existed.
const TYPED_LINK_TAG_RE =
  /&lt;a\s+href=(?:"([^"&]*)"|&quot;([^&]*)&quot;|'([^'&]*)')[^&]*&gt;([\s\S]*?)&lt;\/a&gt;/gi;

function reviveTypedLinkTags(html) {
  return html.replace(TYPED_LINK_TAG_RE, (match, dq, dqEntity, sq, text) => {
    const href = (dq ?? dqEntity ?? sq ?? "").trim();
    if (!href) return match;
    return `<a href="${href.replace(/"/g, "&quot;")}">${text}</a>`;
  });
}

export function sanitizeInlineRich(html, { noLink = false } = {}) {
  if (!html || typeof html !== "string") return "";
  if (html.includes("&lt;a ") || html.includes("&lt;a&gt;")) {
    html = reviveTypedLinkTags(html);
  }
  // Plain text saved before this feature existed (or typed with no
  // formatting) has no tags at all — nothing to sanitize, return as-is
  // so the caller can render it as plain text directly.
  if (!/[<>]/.test(html)) return html;

  if (typeof window === "undefined" || typeof DOMParser === "undefined") {
    // Server-side render: strip anything that isn't on the allow-list
    // via regex rather than pulling in a DOM-parsing dependency just for
    // this. Tags are re-validated again on the client on hydration via
    // the same sanitizer, so a malformed edge case here is not a
    // lasting XSS risk — it only ever came from an authenticated admin's
    // own saved content in the first place.
    let out = html
      .replace(/<(?!\/?(?:b|strong|a|p|br)\b)[^>]*>/gi, "")
      .replace(/<a\b(?![^>]*\bhref=)[^>]*>/gi, "<a>")
      .replace(/\son\w+="[^"]*"/gi, "")
      .replace(/\son\w+='[^']*'/gi, "")
      .replace(/href="javascript:[^"]*"/gi, 'href="#"');
    if (noLink) out = out.replace(/<\/?a\b[^>]*>/gi, "");
    return out;
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const walk = (node) => {
    for (const child of Array.from(node.childNodes)) {
      if (child.nodeType === 1) {
        if (!ALLOWED_TAGS.has(child.tagName) || (noLink && child.tagName === "A")) {
          // Unwrap: keep the text/children, drop the tag itself.
          while (child.firstChild) node.insertBefore(child.firstChild, child);
          node.removeChild(child);
          continue;
        }
        // Strip every attribute except a safe href on <a>.
        const href = child.tagName === "A" ? child.getAttribute("href") : null;
        for (const attr of Array.from(child.attributes)) child.removeAttribute(attr.name);
        if (child.tagName === "A") {
          const safeHref = href && !/^\s*javascript:/i.test(href) ? href : "#";
          child.setAttribute("href", safeHref);
          // Internal links (starting with "/") stay same-tab; anything
          // else (an external https:// URL) opens in a new tab so it
          // never navigates a visitor away from the site outright.
          if (!safeHref.startsWith("/")) {
            child.setAttribute("target", "_blank");
            child.setAttribute("rel", "noopener noreferrer");
          }
        }
        walk(child);
      }
    }
  };
  walk(doc.body);
  return doc.body.innerHTML;
}
