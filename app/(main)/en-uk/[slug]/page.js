import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/pageMetadata";
import { getOutsidePageBySlug } from "@/actions/outsidePageActions";
import OutsideLocationPage from "@/components/sections/outsideLocationPage";

// Pages created from the dashboard's "Outside Location Page" section.
// Same layout as the UK page (shared component); content, SEO and the
// section on/off switches are saved under pageKey "outside-location-<slug>".
// The built-in UK page has its own folder next to this one and wins over it.
// Cached (ISR) like the rest of the site; creating, editing or deleting a
// page revalidates it straight away.
export const revalidate = 60;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getOutsidePageBySlug(slug);
  if (!page) return { title: "Page Not Found" };

  return buildPageMetadata(page.pageKey, {
    title: `${page.label} | BizzBuzz Creations`,
    description:
      "BizzBuzz Creations offers full digital marketing services — SEO, Google Ads, social media & web development.",
    alternates: {
      canonical: `https://bizzbuzzcreations.com/en-uk/${page.slug}`,
    },
    robots: { index: true, follow: true },
  });
}

export default async function OutsideLocationCreatedPage({ params }) {
  const { slug } = await params;
  const page = await getOutsidePageBySlug(slug);
  if (!page) notFound();

  return <OutsideLocationPage pageKey={page.pageKey} />;
}
