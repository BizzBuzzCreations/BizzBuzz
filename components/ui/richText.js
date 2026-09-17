import { sanitizeInlineRich } from "@/lib/sanitizeInlineRich";

// The Tailwind bit that makes a link/bold inside dashboard-edited text
// actually look like one — shared between this component and any place
// that can't use <RichText> directly (a framer-motion <motion.p>, say,
// which needs dangerouslySetInnerHTML applied to itself to keep its own
// animation props, rather than being wrapped by another element).
export const RICH_TEXT_CLASS =
  "[&_a]:text-[#40A2D8] [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-[#40A2D8]/40 [&_a:hover]:decoration-[#40A2D8] [&_b]:font-bold [&_strong]:font-bold";

// Same sanitize-and-wrap-in-a-dangerouslySetInnerHTML-prop step this
// component does internally, exposed for exactly that framer-motion case
// above: `<motion.p dangerouslySetInnerHTML={richTextHTML(text)} />`.
export function richTextHTML(text, options) {
  return { __html: sanitizeInlineRich(text, options) };
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
  const html = sanitizeInlineRich(text, { noLink });
  if (!html) return null;

  return (
    <Tag
      className={`${RICH_TEXT_CLASS} ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: html }}
      {...rest}
    />
  );
}
