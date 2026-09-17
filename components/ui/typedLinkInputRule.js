import { Extension, InputRule, PasteRule } from "@tiptap/core";

// Lets someone add a literal `<a href="...">text</a>` straight into
// either rich text editor (instead of selecting text and using the
// toolbar's link button) and have it become a real, formatted link —
// the typed/pasted tag characters never stay visible, in the editor or
// on the live page. Two separate mechanisms, since Tiptap treats typing
// and pasting as entirely different code paths:
//  - InputRule: fires as each keystroke lands, checked against the text
//    immediately before the cursor — covers typing the tag out by hand.
//  - PasteRule: fires on the whole block of text dropped in by a paste —
//    covers copying the tag from somewhere and pasting it in, which
//    never triggers an InputRule at all (this was the gap: typing it
//    worked, pasting it left the raw tag text sitting there untouched).
function applyTypedLink({ state, range, match }) {
  const [, href, text] = match;
  if (!href || !text) return;
  const linkMark = state.schema.marks.link;
  if (!linkMark) return;
  state.tr
    .delete(range.from, range.to)
    .insertText(text, range.from)
    .addMark(range.from, range.from + text.length, linkMark.create({ href }));
}

const TypedLinkInputRule = Extension.create({
  name: "typedLinkInputRule",
  addInputRules() {
    return [
      new InputRule({
        // Anchored to the end — an input rule only ever evaluates the
        // text immediately before the cursor as each character lands.
        find: /<a\s+href="([^"<>]+)">([^<>]+)<\/a>$/,
        handler: applyTypedLink,
      }),
    ];
  },
  addPasteRules() {
    return [
      new PasteRule({
        // Global, unanchored — a paste rule scans the whole pasted
        // block in one pass, which can contain more than one match.
        find: /<a\s+href="([^"<>]+)">([^<>]+)<\/a>/g,
        handler: applyTypedLink,
      }),
    ];
  },
});

export default TypedLinkInputRule;
