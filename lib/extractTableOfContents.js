import he from "he";

function slugify(text, usedSlugs) {
  let base = text
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!base) base = "section";

  let slug = base;
  let count = 2;
  while (usedSlugs.has(slug)) {
    slug = `${base}-${count}`;
    count++;
  }
  usedSlugs.add(slug);
  return slug;
}

// Finds h2/h3 headings in the WP post HTML, injects an id on each one,
// and returns both the updated HTML and a flat list for a table of contents.
export function extractTableOfContents(html) {
  if (!html) return { html, toc: [] };

  const usedSlugs = new Set();
  const toc = [];

  const updatedHtml = html.replace(
    /<h([23])((?:(?!>)[\s\S])*)>([\s\S]*?)<\/h\1>/gi,
    (match, level, attrs, inner) => {
      const text = he.decode(inner.replace(/<[^>]+>/g, "")).trim();
      if (!text) return match;

      const id = slugify(text, usedSlugs);
      toc.push({ id, text, level: Number(level) });

      const cleanedAttrs = attrs.replace(/\sid="[^"]*"/gi, "");
      return `<h${level}${cleanedAttrs} id="${id}">${inner}</h${level}>`;
    },
  );

  return { html: updatedHtml, toc };
}
