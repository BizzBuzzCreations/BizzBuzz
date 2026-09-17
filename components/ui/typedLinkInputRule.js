import { Extension, InputRule } from "@tiptap/core";

// Lets someone type a literal `<a href="...">text</a>` straight into
// either rich text editor (instead of selecting text and using the
// toolbar's link button) and have it become a real, formatted link the
// instant they finish typing it — the typed tag characters never stay
// visible, in the editor or on the live page, either route to adding a
// link ends up identical. Standard Tiptap input rule: after every
// keystroke, checked against the plain text immediately before the
// cursor; the moment that text matches, `handler` swaps it for the
// captured link text with a real link mark applied, in one transaction.
const TYPED_LINK_TAG_RE = /<a\s+href="([^"<>]+)">([^<>]+)<\/a>$/;

const TypedLinkInputRule = Extension.create({
  name: "typedLinkInputRule",
  addInputRules() {
    return [
      new InputRule({
        find: TYPED_LINK_TAG_RE,
        handler: ({ state, range, match }) => {
          const [, href, text] = match;
          if (!href || !text) return;
          const linkMark = state.schema.marks.link;
          if (!linkMark) return;
          state.tr
            .delete(range.from, range.to)
            .insertText(text, range.from)
            .addMark(range.from, range.from + text.length, linkMark.create({ href }));
        },
      }),
    ];
  },
});

export default TypedLinkInputRule;
