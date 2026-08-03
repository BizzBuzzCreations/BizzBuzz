"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ImageExtension from "@tiptap/extension-image";
import { uploadBlogImage } from "@/actions/blogActions";
import { sanitizeBlogContent } from "@/lib/sanitizeBlogContent";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Code2,
} from "lucide-react";

function ToolbarButton({ active, onClick, children, title }) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={`rounded-md p-2 transition ${
        active ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {children}
    </button>
  );
}

export default function RichTextEditor({ content, onChange }) {
  // "visual" = normal WYSIWYG toolbar editor. "html" = paste/edit raw HTML
  // directly, with a live preview rendered in the exact same "article" CSS
  // used on the real published post — no lossy round-trip through TipTap's
  // (deliberately restricted) schema.
  const [mode, setMode] = useState("visual");

  const editor = useEditor({
    // Prevents a client/server markup mismatch — TipTap only renders its
    // content after mount, matching how this component is client-only anyway.
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false },
      }),
      ImageExtension,
    ],
    content: content || "",
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "article min-h-[320px] focus:outline-none px-4 py-3",
      },
    },
  });

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file || !editor) return;

    const formData = new FormData();
    formData.append("file", file);
    const res = await uploadBlogImage(formData);

    if (res?.success) {
      editor.chain().focus().setImage({ src: res.url }).run();
    } else {
      alert(res?.message || "Image upload failed.");
    }
  };

  const setLink = () => {
    const url = window.prompt("Link URL");
    if (url) editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const toggleMode = () => {
    if (mode === "html") {
      // Load whatever raw HTML was typed/pasted back into the visual editor.
      // Tags TipTap's schema doesn't support (custom divs, inline styles,
      // etc.) get simplified — that's an inherent WYSIWYG-editor tradeoff,
      // not a bug. Staying in HTML mode avoids that entirely.
      editor?.commands.setContent(content || "");
      setMode("visual");
    } else {
      setMode("html");
    }
  };

  if (!editor) return null;

  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 p-2">
        <ToolbarButton
          title="Bold"
          active={editor.isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Italic"
          active={editor.isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Heading 2"
          active={editor.isActive("heading", { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Heading2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Heading 3"
          active={editor.isActive("heading", { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Heading3 size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Bullet list"
          active={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          title="Numbered list"
          active={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <ListOrdered size={16} />
        </ToolbarButton>
        <ToolbarButton title="Link" active={editor.isActive("link")} onClick={setLink}>
          <LinkIcon size={16} />
        </ToolbarButton>
        <label
          title="Insert image"
          className="cursor-pointer rounded-md p-2 text-slate-600 hover:bg-slate-100"
        >
          <ImageIcon size={16} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>
        <ToolbarButton title="Undo" onClick={() => editor.chain().focus().undo().run()}>
          <Undo size={16} />
        </ToolbarButton>
        <ToolbarButton title="Redo" onClick={() => editor.chain().focus().redo().run()}>
          <Redo size={16} />
        </ToolbarButton>

        <div className="ml-auto">
          <ToolbarButton
            title={mode === "html" ? "Back to visual editor" : "Paste / edit raw HTML"}
            active={mode === "html"}
            onClick={toggleMode}
          >
            <Code2 size={16} />
          </ToolbarButton>
        </div>
      </div>

      {mode === "html" ? (
        <>
          <p className="border-b border-amber-100 bg-amber-50 px-4 py-2 text-xs text-amber-700">
            This preview is exactly what will show on the published post —
            unscoped &lt;style&gt;/&lt;script&gt; tags are stripped here too
            (they could otherwise break the rest of the site's design), so
            nothing will look different after you publish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-slate-200">
            <div className="flex flex-col">
              <p className="border-b border-slate-100 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                HTML source
              </p>
              <textarea
                value={content || ""}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Paste your HTML here..."
                spellCheck={false}
                className="h-[600px] resize-none overflow-y-auto p-4 font-mono text-xs text-slate-700 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <p className="border-b border-slate-100 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Preview (exactly as it will publish)
              </p>
              <div
                className="article h-[600px] overflow-y-auto px-4 py-3"
                dangerouslySetInnerHTML={{
                  __html: sanitizeBlogContent(content || ""),
                }}
              />
            </div>
          </div>
        </>
      ) : (
        <EditorContent editor={editor} />
      )}
    </div>
  );
}
