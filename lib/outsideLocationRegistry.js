// Re-exported under its own name for readability at the call sites
// (dashboard component + the hidden page route) — actually defined in
// pageContentRegistry.js itself, right next to PAGE_CONTENT_REGISTRY, to
// avoid a circular import (it reuses the homepage's own sections array).
export { OUTSIDE_LOCATION_REGISTRY } from "./pageContentRegistry";
