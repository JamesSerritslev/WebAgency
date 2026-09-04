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

export const personalTier: PricingTier = {
  name: "Personal / Small",
  price: "$350 - $450",
  minPrice: 350,
  maxPrice: 450,
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
    "Domain registration and management: $40/yr (registration, renewal handling, DNS management)",
  ],
};

export const buildTiers: PricingTier[] = [
  {
    name: "Foundation",
    price: "$700 - $950",
    minPrice: 700,
    maxPrice: 950,
    cadence: "one-time",
    timeline: "2 to 3 days",
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
      "Domain registration and management: $40/yr (registration, renewal handling, DNS management)",
    ],
  },
  {
    name: "Growth",
    price: "$1,500 - $1,900",
    minPrice: 1500,
    maxPrice: 1900,
    cadence: "one-time",
    featured: true,
    timeline: "5 to 8 days",
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
      "Domain registration and management: $40/yr (registration, renewal handling, DNS management)",
    ],
  },
  {
    name: "Scale",
    price: "$3,200 - $4,200",
    minPrice: 3200,
    maxPrice: 4200,
    cadence: "one-time",
    timeline: "10 to 15 days",
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
      "Domain registration and management: $40/yr (registration, renewal handling, DNS management)",
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
    summary: "Active ranking and content push across more search intent.",
    includes: [
      "Keyword tracking (up to about 40 target terms, split by cluster and intent)",
      "Full review management: respond to every review across Google, Yelp, and similar platforms",
      "Google Reviews website integration: star rating and recent reviews on the site, plus review schema",
      "Google Business Profile posting and optimization (events, offers, photos)",
      "Monthly reporting with week-to-week comparison and competitor benchmarking",
      "Content: 2 to 4 blog or landing pages per month, built around search clusters",
      "Active backlink outreach (press, directories, local partners)",
      "Basic AI and LLM visibility monitoring (what is showing up in ChatGPT and AI search results)",
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
      "Full AI and LLM visibility tracking and optimization (Semrush or an equivalent tool included)",
      "Priority support and a direct point of contact for strategy changes",
    ],
  },
];

export const buildNotes = [
  "I register the domain under my COR Web Solutions account, with you listed as the legal owner (registrant) on WHOIS. You can request the transfer or auth code anytime.",
  "I bill the $40/yr domain fee annually ahead of the renewal date, invoiced separately from the build.",
  "Changes after the 30-day bug-fix window are billed hourly at $40/hr, or bundled into a monthly SEO tier.",
];
