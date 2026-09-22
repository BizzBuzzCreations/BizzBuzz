"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Bold, Link as LinkIcon, Unlink, Code2 } from "lucide-react";
import TypedLinkInputRule from "@/components/ui/typedLinkInputRule";
import RichText from "@/components/ui/richText";

// A deliberately small sibling of components/ui/richTextEditor.js — that
// one is for the blog post body (headings, lists, images, the works).
// This one is for the hundreds of short text/textarea fields across the
// dashboard (Website Content, Industries/Services/Sub-Service/Outside
// Location Pages, and a couple of blog fields). Day to day it just needs
// two things: bold text and an internal link that actually works on the
// live page — so StarterKit's headings/lists/blockquotes/italics etc. are
// turned off, same as before, to stop a stray keyboard shortcut from
// smuggling formatting into what's meant to stay plain prose.
//
// The `</>` button below is the same idea as the blog editor's HTML mode:
// switching a field to raw HTML/CSS, with a live preview rendered through
// the exact same <RichText> component (and sanitizer) the live page uses,
// so what's shown here is what actually goes out.
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
  // "visual" = normal bold/link toolbar editor. "html" = paste/edit raw
  // HTML + an internal <style> block directly, with a live preview —
  // exactly the blog editor's two modes, scaled down for a single field.
  const [mode, setMode] = useState("visual");

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
        // autolink off — it was auto-converting just the bare URL
        // substring inside a typed `href="..."` as you typed it, before
        // TypedLinkInputRule below got a chance to handle the whole tag,
        // leaving a half-converted mess. Typing/pasting a real bare URL
        // on its own still works fine via the toolbar's link button.
        link: {
          openOnClick: false,
          autolink: false,
          HTMLAttributes: { rel: null, target: null },
        },
      }),
      TypedLinkInputRule,
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

  const toggleMode = () => {
    if (mode === "html") {
      // Load whatever raw HTML was typed/pasted back into the visual
      // editor. Tags outside its restricted schema (custom divs, a
      // <style> block, etc.) get simplified — an inherent WYSIWYG-editor
      // tradeoff, not a bug. Staying in HTML mode avoids that entirely.
      editor?.commands.setContent(value || "");
      setMode("visual");
    } else {
      setMode("html");
    }
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
        <div className="ml-auto">
          <ToolbarButton
            title={mode === "html" ? "Back to visual editor" : "Paste / edit raw HTML + CSS"}
            active={mode === "html"}
            onClick={toggleMode}
          >
            <Code2 size={14} />
          </ToolbarButton>
        </div>
      </div>

      {mode === "html" ? (
        <>
          <p className="border-b border-amber-100 bg-amber-50 px-3 py-1.5 text-[11px] text-amber-700">
            Write HTML here, with a &lt;style&gt; block for any custom CSS —
            it&apos;s scoped to this field only, so it can&apos;t affect the
            rest of the page. The preview shows your markup/CSS as written; the
            final look also depends on where this field sits on the page
            (heading, paragraph, card...).
          </p>
          <textarea
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste your HTML here..."
            spellCheck={false}
            className="h-40 w-full resize-y overflow-y-auto p-3 font-mono text-xs text-slate-700 outline-none"
          />
          <p className="border-y border-slate-100 bg-slate-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
            Preview
          </p>
          <div className="min-h-[60px] px-3 py-2 text-sm text-slate-700">
            <RichText as="div" text={value} />
          </div>
        </>
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
}
