export type Faq = {
  question: string;
  answer: string;
  bullets?: readonly string[];
};

export const faqs: readonly Faq[] = [
  {
    question: "What kinds of businesses do you build websites for?",
    answer:
      "I build for businesses of many kinds: restaurants, bars, wineries, cafes, online stores, plumbers, contractors, electricians, HVAC companies, landscapers, auto shops, salons, gyms, clinics, or even fully online stores. If customers find you by search, maps, or referral, I can build a custom site around how you actually get booked or make a sale.",
  },
  {
    question: "Why not use WordPress or a website builder?",
    answer:
      "Website builder tools like WordPress or Wix are: ",
    bullets: [
      "More expensive over time",
      "Slower than custom-coded websites",
      "Less secure",
      "Limited on design potential",
    ],
  },
  {
    question: "How long does a custom website take?",
    answer:
      "Typical build time by tier: Personal / Small 1 to 2 days, Foundation 2 to 3 days, Growth 5 to 8 days, and Scale 10 to 15 days. Timing depends on content, photos, and how fast I receive them. Content and photos come first, then design, build, SEO setup, and launch. Because I am one person, I take on a limited number of builds at a time so yours keeps moving.",
  },
  {
    question: "How much does a custom website cost?",
    answer:
      "Website builds are quoted as a one-page Personal / Small option at $350 - $450 for a resume, personal, or simple site, then three business tiers: Foundation $700 - $950, Growth $1,500 - $1,900, and Scale $3,200 - $4,200. The exact number depends on pages and integrations. After launch there is a small monthly hosting and maintenance fee. SEO is not bundled into that fee. It is a separate monthly charge if you want ongoing search work.",
  },
  {
    question: "What is the hosting and maintenance fee?",
    answer:
      "It covers keeping the site online, updates that keep the build healthy, and small content or bug fixes that are part of normal upkeep. It does not include monthly SEO, citation work, backlinks, or AI visibility. Those are a separate service.",
  },
  {
    question: "Does SEO continue automatically after the site launches?",
    answer:
      "No. The custom website ships with an SEO foundation: clean slugs, titles, descriptions, schema, and page structure. Rankings that keep moving take monthly work, and that work is a separate charge. You can add it at launch or later. Nothing extra starts unless you choose it.",
  },
  {
    question: "Do you only work with businesses in one city?",
    answer:
      "No. I work remotely with any business that wants a custom, searchable site. Local SEO tactics still apply wherever your customers search, from neighborhood maps queries to service-area searches.",
  },
  {
    question: "What is included in monthly SEO?",
    answer:
      "Monthly SEO is quoted in three tiers: Starter $750 - $950, Growth $1,500 - $1,900, and Full-Scale $2,400 - $2,850. Depending on the tier, the work covers keyword tracking, Google Business Profile, reviews, content, backlink outreach, reporting, and AI visibility. It is a separate monthly charge, not part of hosting and maintenance.",
  },
  {
    question: "What do you mean by AI visibility?",
    answer:
      "People now ask ChatGPT, Google AI Overviews, and similar tools for recommendations. AI visibility means structuring your site, schema, and content so those systems can cite your business clearly, with accurate services, location context, and proof. It is offered with monthly SEO, not as a default after launch.",
  },
  {
    question: "Will I be able to update the website myself?",
    answer:
      "Yes. Content that should change often, such as hours, services, events, or products, can be set up so you edit it without touching code. Deeper design and performance work stays in the custom build so the site does not drift into plugin clutter.",
  },
  {
    question: "Do you build online stores?",
    answer:
      "Yes. Local retailers and catalog businesses need fast product pages, clean filters, and checkout that does not fight SEO. Ecommerce is built into the custom stack instead of bolted onto a generic theme.",
  },
  {
    question: "Who owns the website after launch?",
    answer:
      "You do. The site, the code, and the content produced for your project are yours. Hosting and maintenance are billed as a small monthly fee so the site stays online. You are never locked into a page builder license.",
  },
  {
    question: "Can you improve a site that already exists?",
    answer:
      "Sometimes a rebuild is the faster path, especially if the current site is a slow WordPress theme. If the bones are strong, a technical SEO pass, content rewrite, and conversion work can come first. I make that call after reviewing your live site.",
  },
  {
    question: "Who will I actually be working with?",
    answer:
      "You will be working with James, the owner of COR Web Solutions. I quote the project, design it, write the code, set up the SEO, and answer your email afterward. Nothing gets handed to a junior or an outside team, and nothing gets lost between departments.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send a note through the contact form with your business name, what you sell, and what you would like your site to accomplish. It comes straight to my inbox and I will get back to you, usually the same day.",
  },
];

const homepageQuestions = [
  "What kinds of businesses do you build websites for?",
  "How long does a custom website take?",
  "Do you only work with businesses in one city?",
  "What do you mean by AI visibility?",
] as const;

export const homepageFaqs = homepageQuestions.map((question) => {
  const match = faqs.find((faq) => faq.question === question);
  if (!match) {
    throw new Error(`Missing homepage FAQ: ${question}`);
  }
  return match;
});
