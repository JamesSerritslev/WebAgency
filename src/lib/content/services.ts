export const services = [
  {
    slug: "custom-websites",
    title: "Custom websites",
    navLabel: "Custom websites",
    eyebrow: "Build",
    summary:
      "Fully custom-built sites for local businesses. Unique to your brand, built to be found.",
    description:
      "Custom website design and development for local businesses that need a fast, unique site built to be found in search.",
    metaDescription:
      "Custom website design for local businesses: restaurants, trades, shops, and stores. Hand-built sites with no WordPress, fast load times, and SEO that helps customers find you.",
    keywords: [
      "custom website design",
      "custom websites for small business",
      "restaurant website design",
      "contractor website",
      "plumber website",
      "no WordPress web design",
    ],
    outcomes: [
      "A site that looks like your business, not a theme",
      "Core Web Vitals that support rankings and paid traffic",
      "Pages structured for maps, search, and AI answers",
      "A site you own, built to grow with the business",
    ],
  },
  {
    slug: "seo",
    title: "SEO for local businesses",
    navLabel: "SEO",
    eyebrow: "Grow",
    summary:
      "SEO work that helps people find you: keyword research, citations, backlinks, technical checks, and content.",
    description:
      "SEO for custom-built sites, covering keyword research, local citations, backlinks, technical analysis, and on-page work so customers can find you in search.",
    metaDescription:
      "Local SEO for small businesses. Keyword research, citations, backlinks, technical SEO, and reporting that help people find your business when they search.",
    keywords: [
      "local SEO",
      "SEO for small business",
      "SEO for contractors",
      "citation building",
      "Google reviews on website",
      "backlink outreach",
      "keyword research",
    ],
    outcomes: [
      "Keyword map tied to how customers actually search",
      "Local citations that match your name, address, and hours",
      "Google Reviews on the website for Growth and Full-Scale SEO",
      "Backlinks from relevant local and industry sites",
      "Monthly analysis instead of a forgotten audit PDF",
    ],
  },
  {
    slug: "ai-visibility",
    title: "AI visibility",
    navLabel: "AI visibility",
    eyebrow: "Be cited",
    summary:
      "Make your business easy for ChatGPT, AI Overviews, and answer engines to recommend with accurate facts.",
    description:
      "AI visibility work so local businesses show up when people ask AI tools who to visit, book, or buy from.",
    metaDescription:
      "AI visibility for local businesses. Schema, entity-clear content, and structure so ChatGPT and Google AI Overviews can cite restaurants, trades, shops, and service companies.",
    keywords: [
      "AI visibility",
      "AI search optimization",
      "GEO generative engine optimization",
      "ChatGPT business visibility",
      "schema markup for local business",
    ],
    outcomes: [
      "Schema and entity data search systems can parse",
      "Clear answers to the questions buyers ask AI tools",
      "Consistent facts across the site, maps, and citations",
      "A content layer built for both classic SEO and AI results",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
