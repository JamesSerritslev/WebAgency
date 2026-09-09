export const services = [
  {
    slug: "custom-websites",
    title: "Custom websites",
    navLabel: "Custom websites",
    eyebrow: "Build",
    summary:
      "Fully custom-built sites for local businesses. Unique to your brand, built to be found.",
    description:
      "Quality custom-coded websites that will outperform cheap templatized websites when it comes to security, speed, and visibility.",
    metaDescription:
      "Custom website design for restaurants, trades, shops, and stores. Hand-built, no WordPress, fast on a phone, with SEO so customers can find you.",
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
      "SEO (Search Engine Optimization) helps your website show up on Google closer to the top of the results, or even in AI Overviews. This is a tactic proven effective for bringing more traffic and sales to your business.",
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
      "Your site and Google Business Profile ahead of other businesses",
      "Press and directory citations that build trust and authority",
      "More reviews coming in",
      "Pages mapped to the searches customers actually type",
      "More traffic, calls, and sales from search",
      "AI visibility on Growth and Full-Scale so ChatGPT and Google AI Overviews can cite you",
      "A monthly report on how the site is performing",
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
      "AI changed the game of SEO, and many businesses are not taking advantage of this. Ranking on AI Overviews obtains almost all of the traffic in modern searches.",
    metaDescription:
      "AI visibility for local businesses: schema and clear facts so ChatGPT and Google AI Overviews can cite restaurants, trades, shops, and services.",
    keywords: [
      "AI visibility",
      "AI search optimization",
      "GEO generative engine optimization",
      "ChatGPT business visibility",
      "schema markup for local business",
    ],
    outcomes: [
      "Consistent facts across the site and citations",
      "Clear answers to questions buyers ask AI tools",
      "A content layer built for both classic SEO and AI results",
      "Your business mentioned by AI tools and Overviews",
    ],
  },
] as const;

export type Service = (typeof services)[number];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
