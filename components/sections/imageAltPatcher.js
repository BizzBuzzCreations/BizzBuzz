"use client";

import { useEffect } from "react";

// Applies the dashboard's per-image alt text to the images already on the
// page. `alts` maps an image URL (as saved in the page's content) to its
// alt text. Next's <Image> serves a resized copy whose src contains the
// original URL encoded in a `url=` parameter, so match on both forms.
// Runs after hydration and again shortly after, for carousels that mount
// their slides late.
export default function ImageAltPatcher({ alts }) {
  useEffect(() => {
    const entries = Object.entries(alts || {}).filter(([, alt]) => alt);
    if (!entries.length) return;

    const apply = () => {
      document.querySelectorAll("img").forEach((img) => {
        const src = img.getAttribute("src") || "";
        for (const [url, alt] of entries) {
          if (src === url || src.includes(encodeURIComponent(url))) {
            if (img.getAttribute("alt") !== alt) img.setAttribute("alt", alt);
            break;
          }
        }
      });
    };

    apply();
    const timers = [setTimeout(apply, 800), setTimeout(apply, 2500)];
    return () => timers.forEach(clearTimeout);
  }, [alts]);

  return null;
}
