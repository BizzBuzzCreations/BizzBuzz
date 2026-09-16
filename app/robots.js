export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // --- AI Crawlers (explicitly allowed for AI search / GEO visibility) ---

      // OpenAI - used for ChatGPT's live search/browsing
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // OpenAI - used to train GPT models
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // OpenAI - fires when a ChatGPT user asks it to fetch a page
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Anthropic - Claude's web search/browsing
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Anthropic - fires when a Claude user asks it to fetch a page
      {
        userAgent: "Claude-User",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Anthropic - used to train Claude models
      {
        userAgent: "anthropic-ai",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Perplexity AI - search & answer engine
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Perplexity - fires on user-triggered fetches
      {
        userAgent: "Perplexity-User",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Google - powers AI Overviews & Gemini grounding
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Microsoft/Bing - powers Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Meta AI
      {
        userAgent: "meta-externalagent",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Common Crawl - dataset many AI models train on
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
      // Apple - powers Siri/Spotlight AI answers
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://bizzbuzzcreations.com/sitemap.xml",
  };
}
