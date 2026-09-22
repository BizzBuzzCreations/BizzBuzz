import { sanitizeInlineRich } from "@/lib/sanitizeInlineRich";

// The Tailwind bit that makes a link/bold inside dashboard-edited text
// actually look like one — shared between this component and any place
// that can't use <RichText> directly (a framer-motion <motion.p>, say,
// which needs dangerouslySetInnerHTML applied to itself to keep its own
// animation props, rather than being wrapped by another element).
export const RICH_TEXT_CLASS =
  "[&_a]:text-[#40A2D8] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#40A2D8]/40 [&_a:hover]:decoration-[#40A2D8] [&_b]:font-bold [&_strong]:font-bold";

// Small deterministic hash (djb2 variant) — same input string always
// produces the same output, on the server render and the client hydration
// alike, with no React hook and no risk of a server/client mismatch.
function hashForScope(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = (h * 33) ^ str.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

// A field's saved value only needs (and gets) a scope class when it
// actually contains a <style> block — i.e. it was written through the
// "raw HTML" mode of components/ui/inlineRichEditor.js — so the fast path
// (the vast majority of fields: plain text, or a stray <b>/<a>) never pays
// for the hash. The class is applied to the SAME element that receives the
// field's HTML (see <RichText> below), so `${scopeClass} selector` in the
// field's own <style> block only ever matches inside that one element.
export function richTextScopeClass(text) {
  if (typeof text !== "string" || !/<style[\s>]/i.test(text)) return "";
  return `rt-${hashForScope(text)}`;
}

// Same sanitize-and-wrap-in-a-dangerouslySetInnerHTML-prop step this
// component does internally, exposed for exactly that framer-motion case
// above: `<motion.p className={\`... ${richTextScopeClass(text)}\`}
// dangerouslySetInnerHTML={richTextHTML(text)} />` — the scope class has
// to be added to that element's own className for a <style> block in the
// text to be contained correctly.
export function richTextHTML(text, options) {
  return { __html: sanitizeInlineRich(text, { ...options, scopeClass: richTextScopeClass(text) }) };
}

// Drop-in replacement for `{text}` wherever a dashboard-editable
// text/textarea field is rendered — plain strings (every existing saved
// value, and every hardcoded default already in the codebase) render
// exactly as before; a value saved with bold/a link from
// components/ui/inlineRichEditor.js now actually shows as bold text or a
// working link instead of literal "<b>" tags. `as` picks the wrapping
// tag (defaults to a fragment-friendly span) so this can sit inside a
// <p>, <h2>, etc. without producing invalid nested block elements.
// `noLink` — pass true when this renders inside something that's already
// a <Link>/<a> itself (an entire card that navigates on click): keeps
// bold support but drops any embedded link, since a real <a> nested
// inside another <a> is invalid HTML that breaks the outer one.
export default function RichText({ text, as: Tag = "span", className, noLink, ...rest }) {
  const scopeClass = richTextScopeClass(text);
  const html = sanitizeInlineRich(text, { noLink, scopeClass });
  if (!html) return null;

  return (
    <Tag
      className={`${RICH_TEXT_CLASS}${scopeClass ? ` ${scopeClass}` : ""} ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
