"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localBusinessSchema } from "@/lib/siteSchema";

export default function AllScripts() {
  const pathname = usePathname();
  // Google Analytics is ~190KB and was the single biggest main-thread cost
  // on mobile (Total Blocking Time). Load it on the visitor's first
  // interaction, or after 10s if they never interact, instead of competing
  // with the page's own startup work.
  const [loadGA, setLoadGA] = useState(false);
  useEffect(() => {
    const events = ["scroll", "pointerdown", "keydown", "touchstart"];
    const start = () => {
      events.forEach((e) => window.removeEventListener(e, start));
      window.clearTimeout(timer);
      setLoadGA(true);
    };
    const timer = window.setTimeout(start, 10000);
    events.forEach((e) =>
      window.addEventListener(e, start, { once: true, passive: true }),
    );
    return () => {
      events.forEach((e) => window.removeEventListener(e, start));
      window.clearTimeout(timer);
    };
  }, []);
  // A page whose dashboard SEO panel has its own enabled schema replaces
  // this site-wide default (PageSeoScripts marks its script tag).
  const [pageHasCustomSchema, setPageHasCustomSchema] = useState(false);
  useEffect(() => {
    // Deferred a tick (not set synchronously in the effect body).
    const t = setTimeout(
      () =>
        setPageHasCustomSchema(
          !!document.querySelector('script[data-custom-schema="true"]'),
        ),
      0,
    );
    return () => clearTimeout(t);
  }, [pathname]);
  // The UK landing page ships its own schema (lib/ukPageSchema.js); this
  // India LocalBusiness block would be a conflicting duplicate there.
  const skipLocalBusiness = pathname?.startsWith(
    "/en-uk/digital-marketing-services-in-uk",
  );

  return (
    <>
      {loadGA && (
        <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Z0B5EJDR4C"
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z0B5EJDR4C');
        `}
      </Script>
        </>
      )}

      {!skipLocalBusiness && !pageHasCustomSchema && (
        <Script id="local-business-schema" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
      )}
    </>
  );
}
