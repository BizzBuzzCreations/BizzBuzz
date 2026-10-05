import { SITE_URL } from "@/lib/pagePaths";

// The robots.txt the site has always served (formerly app/robots.js):
// everyone may crawl everything except /admin/ and /api/, with the AI
// crawlers listed explicitly so search/GEO visibility is intentional.
const AI_AND_SEARCH_BOTS = [
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Bingbot",
  "meta-externalagent",
  "CCBot",
  "Applebot-Extended",
];

export function defaultRobotsText() {
  const rule = (agent) =>
    `User-Agent: ${agent}\nAllow: /\nDisallow: /admin/\nDisallow: /api/\n`;
  return (
    [rule("*"), ...AI_AND_SEARCH_BOTS.map(rule)].join("\n") +
    `\nSitemap: ${SITE_URL}/sitemap.xml\n`
  );
}
