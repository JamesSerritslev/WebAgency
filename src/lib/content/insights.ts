export const articles = [
  {
    slug: "custom-website-vs-wordpress-for-local-businesses",
    title: "Why a custom website beats WordPress for a local business",
    datePublished: "2026-08-01",
    description:
      "WordPress is common. For restaurants, trades, shops, and online stores, a custom site is usually faster, cleaner in search, and easier to own.",
    keywords: [
      "custom website vs WordPress",
      "WordPress alternatives for small business",
      "fast website for local business",
    ],
    body: [
      "Plenty of local businesses start on WordPress because a cousin, a plugin pack, or a cheap theme made it feel easy. A year later the site is slow, the homepage looks like five other companies in town, and every small change needs another plugin.",
      "Search engines reward pages that load quickly, state a clear offer, and do not hide the real content behind extra scripts. Custom sites are written for those jobs. You ship only the code your restaurant, trade, shop, or store needs.",
      "Ownership is the other gap. A page builder license, a fragile theme update, and a security plugin are not a foundation. When I build a site, the code is yours. Hosting and a small maintenance fee keep it online. You are not renting a template.",
      "That does not mean you cannot edit anything. Hours, services, events, and products can be set up for easy updates. The difference is that the design system and the SEO structure stay intact instead of drifting every time a plugin fights another plugin.",
      "If you book jobs, take reservations, or sell online, your site is a working tool. It should feel like the business, rank for the phrases customers type, and stay fast on a phone. That is the case for custom.",
    ],
  },
  {
    slug: "local-seo-for-small-shops",
    title: "Local SEO for restaurants, trades, and stores that want more calls",
    datePublished: "2026-08-08",
    description:
      "Local SEO is more than a Google Business Profile. Citations, on-page keywords, and a crawlable site help nearby customers find you.",
    keywords: [
      "local SEO for small business",
      "SEO for contractors",
      "SEO for restaurants",
      "local citations",
    ],
    body: [
      "When someone searches for a plumber nearby, a contractor for a remodel, a restaurant for tonight, or a store that ships, they want a name, hours, and a reason to call or visit. They are not reading a national blog.",
      "Local SEO starts with a site Google and maps tools can trust. That means consistent name and address details, pages for the services you actually offer, and photos that match the business. A custom site makes those pages easy to keep accurate.",
      "Citations matter. Directories, city listings, and industry sites should repeat the same facts. Mismatched hours or old phone numbers train search systems to doubt you. Monthly SEO includes checking and fixing those listings, not only writing blog posts.",
      "Keywords should sound like customers, not agencies. People search for emergency plumber, kitchen contractor, or restaurant near them. Each of those phrases deserves a page or a section that answers it, plus internal links to contact, services, or the shop. Growth and Full-Scale SEO also put Google Reviews on the website so visitors see proof before they call.",
      "Backlinks still help. A write-up from a local paper, a partnership with a nearby business, or a featured project page can send both people and ranking signals. That outreach is part of SEO work, not a one-week launch sprint.",
    ],
  },
  {
    slug: "what-is-ai-visibility-for-local-businesses",
    title: "What AI visibility means for a local business website",
    datePublished: "2026-08-15",
    description:
      "Customers ask AI tools who to hire, book, or buy from. AI visibility is the work of making your business easy to cite with the right facts.",
    keywords: [
      "AI visibility",
      "AI search for local business",
      "ChatGPT local recommendations",
      "schema markup",
    ],
    body: [
      "Search is no longer only ten blue links. People ask ChatGPT, Google AI Overviews, and similar tools for a restaurant, a plumber, a contractor, or a store that can ship.",
      "Those systems do not magically know your hours or your services. They read your site, your schema, and the public facts that match across the web. If your pages are vague, templated, or blocked by a slow builder, you are harder to recommend.",
      "AI visibility is practical. It means FAQ pages that answer real questions, service pages that name what you sell, and structured data that states you are a restaurant, a trade, a clinic, or a shop. It also means keeping NAP details consistent so the model is not choosing between three different addresses.",
      "This sits on top of classic SEO, it does not replace it. Rankings, citations, and backlinks still matter. The extra layer is writing like a source: clear claims, current details, and pages that a language model can quote without guessing.",
      "I build an SEO foundation into custom sites from the start, then keep up the SEO and AI visibility work myself so the business stays easy to find and easy to recommend.",
    ],
  },
] as const;

export type Article = (typeof articles)[number];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
