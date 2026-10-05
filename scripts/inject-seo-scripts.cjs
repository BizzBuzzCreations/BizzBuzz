// One-off codemod: adds <PageSeoScripts pageKey="..." /> (JSON-LD schema +
// image alt text from the dashboard's SEO panel) to every dashboard-editable
// page under app/(main). Safe to re-run — pages that already have it are
// skipped. Pass --dry to only report. Handles CRLF files (Windows checkout).
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "app", "(main)");
const dry = process.argv.includes("--dry");
const CRLF = "\r\n";
const LF = "\n";
const IMPORT_ANCHOR = 'import { buildPageMetadata } from "@/lib/pageMetadata";';
const miss = [];
let done = 0;

function patch(src, key) {
  const start = src.indexOf("export default");
  if (start < 0 || !src.includes(IMPORT_ANCHOR)) return null;

  let out;
  const frag = /return\s*\(\s*\n(\s*)<>/g;
  frag.lastIndex = start;
  const f = frag.exec(src);
  if (f) {
    // Page already returns a fragment: drop the scripts in as its first child.
    const at = f.index + f[0].length;
    out =
      src.slice(0, at) +
      `\n${f[1]}  <PageSeoScripts pageKey="${key}" />` +
      src.slice(at);
  } else {
    // Single-root page (<div>, <Component />): wrap the JSX in a fragment.
    const open = /return\s*\(\n/g;
    open.lastIndex = start;
    const o = open.exec(src);
    const close = /\n  \);\s*\n\}\s*$/.exec(src);
    if (!o || !close || close.index < o.index) return null;
    const bodyStart = o.index + o[0].length;
    out =
      src.slice(0, bodyStart) +
      `    <>\n      <PageSeoScripts pageKey="${key}" />\n` +
      src.slice(bodyStart, close.index) +
      "\n    </>" +
      src.slice(close.index);
  }
  return out.replace(
    IMPORT_ANCHOR,
    IMPORT_ANCHOR +
      '\nimport PageSeoScripts from "@/components/sections/pageSeoScripts";',
  );
}

(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
      continue;
    }
    if (e.name !== "page.js") continue;
    const raw = fs.readFileSync(p, "utf8");
    const crlf = raw.includes(CRLF);
    const src = raw.split(CRLF).join(LF);
    const m = src.match(/buildPageMetadata\(\s*"([^"]+)"/);
    if (!m || src.includes("PageSeoScripts")) continue;
    const out = patch(src, m[1]);
    if (!out) {
      miss.push(path.relative(root, p));
      continue;
    }
    if (!dry) fs.writeFileSync(p, crlf ? out.split(LF).join(CRLF) : out);
    done++;
  }
})(root);

console.log(dry ? "would patch" : "patched", done, "| could not patch:", miss);
