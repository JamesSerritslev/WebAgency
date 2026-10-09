export type PricingTier = {
  name: string;
  price: string;
  minPrice: number;
  maxPrice: number;
  cadence: "one-time" | "monthly";
  summary: string;
  includes: string[];
  featured?: boolean;
  timeline?: string;
};

/** Hosting and maintenance for business website builds (not Personal / Small). */
export const HOSTING_MONTHLY = 42;

export const personalTier: PricingTier = {
  name: "Personal / Small",
  price: "$250",
  minPrice: 250,
  maxPrice: 250,
  cadence: "one-time",
  timeline: "1 to 2 days",
  summary:
    "A single custom page for a resume or personal site, with one inquiry form and email automation.",
  includes: [
    "One custom-coded page",
    "1 inquiry form with email automation (you get the message, they get a confirmation)",
    "Mobile responsive, optimized for load speed",
    "Basic on-page SEO (title, meta description, sitemap)",
    "1 round of revisions",
    "30 days of post-launch bug fixes",
  ],
};

export const buildTiers: PricingTier[] = [
  {
    name: "Foundation",
    price: "$200 - $450",
    minPrice: 200,
    maxPrice: 450,
    cadence: "one-time",
    timeline: "1 to 2 weeks",
    summary:
      "A fast, clean custom site for a business that needs to exist online and be found locally.",
    includes: [
      "Up to 4 custom-coded pages (Home, About, Services, Contact)",
      "Fully custom layout",
      "Mobile responsive, optimized for load speed",
      "Basic on-page SEO setup (titles, meta descriptions, schema, sitemap)",
      "1 custom form with email automation",
      "1 round of revisions",
      "30 days of post-launch bug fixes",
      `$${HOSTING_MONTHLY}/mo hosting, maintenance, and domain (I register and renew it; you stay the legal owner)`,
    ],
  },
  {
    name: "Growth",
    price: "$1,000 - $1,400",
    minPrice: 1000,
    maxPrice: 1400,
    cadence: "one-time",
    featured: true,
    timeline: "2 to 3 weeks",
    summary:
      "For a business that wants the site to actively work for them: speed, SEO, and a design built around their brand.",
    includes: [
      "Up to 8 custom-coded pages",
      "Custom interactions and animations (lightweight)",
      "Full on-page SEO plus Google Business Profile setup and optimization",
      "Custom-build content sections",
      "Performance benchmark target (page speed score)",
      "2 custom forms with email automation",
      "2 rounds of revisions",
      "30 days of post-launch bug fixes",
      `$${HOSTING_MONTHLY}/mo hosting, maintenance, and domain (I register and renew it; you stay the legal owner)`,
    ],
  },
  {
    name: "Scale",
    price: "$2,700 - $3,700",
    minPrice: 2700,
    maxPrice: 3700,
    cadence: "one-time",
    timeline: "4 to 5 weeks",
    summary:
      "For a business where the site needs to do real work: an integrated store, scheduling, event posting, and other integrations.",
    includes: [
      "Up to 15+ custom-coded pages",
      "Integrated store",
      "Scheduling",
      "Event posting",
      "Lightweight custom admin panel if you need to self-edit content",
      "Full technical SEO pass plus first-month ranking support",
      "Unlimited custom forms with email automation",
      "3 rounds of revisions",
      "30 days of post-launch bug fixes",
      `$${HOSTING_MONTHLY}/mo hosting, maintenance, and domain (I register and renew it; you stay the legal owner)`,
    ],
  },
];

export const seoTiers: PricingTier[] = [
  {
    name: "SEO Starter",
    price: "$750 - $950",
    minPrice: 750,
    maxPrice: 950,
    cadence: "monthly",
    summary: "Foundational local SEO to get found and stay found.",
    includes: [
      "Keyword tracking (up to about 15 target terms)",
      "Google Business Profile management: weekly posts, review monitoring",
      "Basic monthly reporting (rankings, traffic, review activity)",
      "On-page SEO maintenance (meta tags, schema, site health checks)",
      "Light content: 1 blog or update post per month",
      "Quarterly backlink outreach (light touch)",
    ],
  },
  {
    name: "SEO Growth",
    price: "$1,500 - $1,900",
    minPrice: 1500,
    maxPrice: 1900,
    cadence: "monthly",
    featured: true,
    summary: "Active ranking, content, and AI visibility across more search intent.",
    includes: [
      "Keyword tracking (up to about 40 target terms, split by cluster and intent)",
      "Full review management: respond to every review across Google, Yelp, and similar platforms",
      "Google Reviews website integration: star rating and recent reviews on the site, plus review schema",
      "Google Business Profile posting and optimization (events, offers, photos)",
      "Monthly reporting with week-to-week comparison and competitor benchmarking",
      "Content: 2 to 4 blog or landing pages per month, built around search clusters",
      "Active backlink outreach (press, directories, local partners)",
      "AI visibility: schema and clear facts so ChatGPT and Google AI Overviews can cite the business, plus monthly citation checks",
    ],
  },
  {
    name: "SEO Full-Scale",
    price: "$2,400 - $2,850",
    minPrice: 2400,
    maxPrice: 2850,
    cadence: "monthly",
    summary:
      "Comprehensive SEO, content, and AI visibility for businesses that want to dominate their category.",
    includes: [
      "Full keyword tracking across all clusters, with ongoing expansion as new terms emerge",
      "Complete review and reputation management across all platforms",
      "Google Reviews website integration on key pages: review section, write-a-review prompts, and schema that stays current as new reviews land",
      "Google Business Profile and local citation management across directories",
      "Weekly or bi-weekly reporting with a full analytics dashboard",
      "Content: dedicated landing pages, seasonal campaigns, and a blog cadence of 4 or more posts per month",
      "Aggressive backlink and PR outreach (press pitches, partnerships, guest content)",
      "Full AI visibility: schema, entity-clear content, citation tracking, and optimization so ChatGPT and Google AI Overviews recommend the business (Semrush or an equivalent tool included)",
      "Priority support and a direct point of contact for strategy changes",
    ],
  },
];

export const buildNotes = [
  `On business builds, the $${HOSTING_MONTHLY}/mo fee covers hosting, maintenance, and the domain. I register and renew it under my COR Web Solutions account, with you listed as the legal owner on WHOIS. You can request the transfer or auth code anytime.`,
  `Personal / Small does not include the $${HOSTING_MONTHLY}/mo fee. Changes after the 30-day bug-fix window are billed hourly at $40/hr, or bundled into a monthly SEO tier.`,
];
