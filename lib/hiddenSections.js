// "Remove section" — a page's sections switched off from the dashboard are
// listed (by section key) in its saved `hiddenSections` field. The content
// of a removed section is kept, so it can be restored any time.

export function removedSections(values) {
  return Array.isArray(values?.hiddenSections) ? values.hiddenSections : [];
}

export function isSectionRemoved(values, key) {
  return removedSections(values).includes(key);
}

// Returns the new hiddenSections array with `key` toggled.
export function toggleSectionRemoved(values, key) {
  const list = removedSections(values);
  return list.includes(key) ? list.filter((k) => k !== key) : [...list, key];
}

// Sections that can be removed: everything except the SEO block, and only
// on pages that have more than one real section (removing the only one
// would just leave a blank page).
export function canRemoveSection(page, sectionKey) {
  if (sectionKey === "seo") return false;
  const real = (page?.sections || []).filter((s) => s.key !== "seo");
  return real.length > 1;
}
