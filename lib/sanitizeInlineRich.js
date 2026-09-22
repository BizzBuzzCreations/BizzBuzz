// Sanitizer for the text/HTML fields edited via
// components/ui/inlineRichEditor.js — every short text field across
// Website Content, Industries/Services/Sub-Service/Outside Location
// Pages (and a couple of blog fields). These fields cover two things:
// (1) the vast majority — plain text, or text with a bold word / a link,
// written through the visual toolbar — and (2) an opt-in "raw HTML" mode
// (the </> button, same idea as the blog post editor) where an admin
// writes/pastes real HTML with its own <style> block. Both forms are just
// strings in the same saved field, so this one function has to handle
// either: plain text passes through untouched; light toolbar-made HTML
// renders as simple formatting; anything else — divs, sections, images, a
// full <style> block — renders as real markup, the same way a blog post's
// HTML mode already works (see lib/sanitizeBlogContent.js).
//
// Real risk (script execution / remote resource loads) is stripped
// regardless of mode: <script>/<link> tags, inline on*="" handlers, and
// javascript: hrefs. Everything else is trusted — same trust boundary as
// blog content: this only ever comes from an authenticated dashboard
// admin's own saved content, never a site visitor.
import { scopeStyleBlocks } from "./cssScoping";

export function sanitizeInlineRich(html, { noLink = false, scopeClass } = {}) {
  if (!html || typeof html !== "string") return "";
  // Plain text (no formatting at all) has no tags — nothing to sanitize,
  // return as-is so the caller can render it as plain text directly.
  if (!/[<>]/.test(html)) return html;

  let out = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/href\s*=\s*"\s*javascript:[^"]*"/gi, 'href="#"')
    .replace(/href\s*=\s*'\s*javascript:[^']*'/gi, "href='#'");

  // A real <a> nested inside another <a> (this content rendering inside a
  // whole card/Link that's already clickable) is invalid HTML that breaks
  // the outer link — unwrap rather than drop the text.
  if (noLink) {
    out = out.replace(/<a\b[^>]*>/gi, "").replace(/<\/a>/gi, "");
  } else {
    // The visual toolbar only ever produces a bare `<a href="...">` (no
    // other attributes) — default those (and only those) to opening in a
    // new tab when the target isn't an internal path, matching how links
    // already behave elsewhere on the site. Raw HTML mode content that
    // sets its own attributes on the anchor (class, target, style...) is
    // left exactly as written.
    out = out
      .replace(/<a href="([^"]*)">/gi, (m, href) =>
        href.startsWith("/") || href.startsWith("#") || !href
          ? m
          : `<a href="${href}" target="_blank" rel="noopener noreferrer">`,
      )
      .replace(/<a href='([^']*)'>/gi, (m, href) =>
        href.startsWith("/") || href.startsWith("#") || !href
          ? m
          : `<a href='${href}' target="_blank" rel="noopener noreferrer">`,
      );
  }

  if (/<style[\s>]/i.test(out)) {
    // A <style> block only ever renders scoped to this one field's own
    // wrapper class (see components/ui/richText.js), never as a bare
    // global rule — otherwise a selector as generic as `a { color: red }`
    // typed into a single field would restyle the whole page. No scope
    // class available to contain it in (the caller couldn't provide one)
    // means this render site can't safely contain it — drop the block
    // rather than risk a page-wide leak.
    out = scopeClass
      ? scopeStyleBlocks(out, `.${scopeClass}`)
      : out.replace(/<style[\s\S]*?<\/style>/gi, "");
  }

  return out;
}
