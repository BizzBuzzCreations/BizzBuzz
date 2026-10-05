import { NextResponse } from "next/server";
import { getRoutingRules } from "@/lib/routingRules";
import { normalizePath } from "@/lib/seo";

// Runs before every page request to apply what the dashboard saves:
//   1. Redirect Manager — enabled 301 redirects (old URL -> new URL)
//   2. URL Slug — a page whose slug was changed 301s from its old URL
//      to the new one, and the new URL is served by the original page
// Anything else passes straight through. If MongoDB is unreachable the
// rules come back empty and every request just passes through.
export async function proxy(request) {
  const { pathname, search } = request.nextUrl;
  const path = normalizePath(pathname);
  const rules = await getRoutingRules();

  const redirectTo = rules.redirects[path] || rules.slugRedirects[path];
  if (redirectTo) {
    const target = /^https?:\/\//i.test(redirectTo)
      ? new URL(redirectTo)
      : new URL(redirectTo, request.url);
    if (!target.search) target.search = search;
    // Never redirect a URL onto itself.
    if (target.origin !== request.nextUrl.origin || target.pathname !== pathname) {
      return NextResponse.redirect(target, 301);
    }
  }

  const rewriteTo = rules.rewrites[path];
  if (rewriteTo) {
    return NextResponse.rewrite(new URL(rewriteTo + search, request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next internals, the dashboard, API routes and anything with a
  // file extension (images, scripts, robots.txt, sitemap.xml, ...).
  matcher: ["/((?!_next/|admin|api/|.*\..*).*)"],
};
