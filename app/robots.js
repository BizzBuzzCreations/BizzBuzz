export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/admin/",
      },
      // --- AI Crawlers (explicitly allowed for AI search / GEO visibility) ---

      // OpenAI - used for ChatGPT's live search/browsing
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: "/admin/",
      },
      // OpenAI - used to train GPT models
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: "/admin/",
      },
      // OpenAI - fires when a ChatGPT user asks it to fetch a page
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: "/admin/",
      },
      // Anthropic - Claude's web search/browsing
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: "/admin/",
      },
      // Anthropic - fires when a Claude user asks it to fetch a page
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: "/admin/",
      },
      // Anthropic - used to train Claude models
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: "/admin/",
      },
      // Perplexity AI - search & answer engine
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: "/admin/",
      },
      // Perplexity - fires on user-triggered fetches
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: "/admin/",
      },
      // Google - powers AI Overviews & Gemini grounding
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: "/admin/",
      },
      // Microsoft/Bing - powers Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: "/admin/",
      },
      // Meta AI
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: "/admin/",
      },
      // Common Crawl - dataset many AI models train on
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: "/admin/",
      },
      // Apple - powers Siri/Spotlight AI answers
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: "/admin/",
      },
    ],
    sitemap: "https://bizzbuzzcreations.com/sitemap.xml",
  };
}
