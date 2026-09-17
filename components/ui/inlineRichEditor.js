"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Link as LinkIcon, Unlink } from "lucide-react";

// A deliberately small sibling of components/ui/richTextEditor.js — that
// one is for the blog post body (headings, lists, images, the works).
// This one is for the hundreds of short text/textarea fields across the
// dashboard (Website Content, Industries/Services/Sub-Service Pages, and
// a couple of blog fields) that just needed two things: bold text and an
// internal link that actually works on the live page. Everything else
// StarterKit brings (headings, lists, blockquotes, italics...) is turned
// off so a stray keyboard shortcut can't smuggle formatting into a field
// that's meant to stay one or two lines of plain prose.
function ToolbarButton({ active, onClick, children, title }) {
  return (
    <button
      type="button"
      title={title}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`rounded-md p-1.5 transition ${
        active ? "bg-slate-900 text-white" : "text-slate-500 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}

export default function InlineRichEditor({ value, onChange, rows = 3 }) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        listItem: false,
        blockquote: false,
        codeBlock: false,
        horizontalRule: false,
        italic: false,
        strike: false,
        code: false,
        link: { openOnClick: false, HTMLAttributes: { rel: null, target: null } },
      }),
    ],
    content: value || "",
    onUpdate: ({ editor }) => {
      // Stored as plain text when there's no bold/link at all, so
      // existing saved values (and the hardcoded site defaults, which
      // are just plain strings) keep working unchanged either way — the
      // frontend's <RichText> renderer treats both forms identically.
      const html = editor.getHTML();
      onChange(html === "<p></p>" ? "" : html);
    },
    editorProps: {
      attributes: {
        class: "prose-sm px-3 py-2 text-sm text-slate-700 focus:outline-none",
        style: `min-height: ${rows * 1.5}rem`,
      },
    },
  });

  const setLink = () => {
    if (!editor) return;
    const previous = editor.getAttributes("link").href;
    const url = window.prompt("Link URL (internal, e.g. /contact, or full https:// URL)", previous || "");
    if (url === null) return; // cancelled
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // With no text selected, Tiptap's setLink just applies an invisible
    // "stored mark" (it only affects the next character typed, same as
    // clicking Bold with nothing selected) — nothing visibly changes, so
    // clicking this button with the cursor just parked in the text felt
    // completely broken. Insert the URL itself as real, visible link
    // text at the cursor instead, so something always happens.
    if (editor.state.selection.empty) {
      editor
        .chain()
        .focus()
        .insertContent({
          type: "text",
          text: url,
          marks: [{ type: "link", attrs: { href: url } }],
        })
        .run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white focus-within:border-slate-400">
      <div className="flex items-center gap-0.5 border-b border-slate-100 px-1.5 py-1">
        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={14} />
        </ToolbarButton>
        <ToolbarButton title="Add/edit link" active={editor.isActive("link")} onClick={setLink}>
          <LinkIcon size={14} />
        </ToolbarButton>
        {editor.isActive("link") && (
          <ToolbarButton
            title="Remove link"
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            <Unlink size={14} />
          </ToolbarButton>
        )}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
