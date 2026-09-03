import Link from "next/link";
import { BRAND_FULL, BRAND_NAME, OWNER_NAME } from "@/lib/brand";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About COR Web Solutions",
  description:
    "COR Web Solutions is one person: James Serritslev. Custom web design and SEO for local businesses, hand-built without WordPress. COR stands for Create, Optimize, Rank.",
  path: "/about",
  keywords: [
    "about COR Web Solutions",
    "custom web designer",
    "SEO specialist for small business",
    "AI visibility consultant",
  ],
});

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: "About", path: "/about" },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="One person. Every line of your site."
        description={`I am ${OWNER_NAME}, and ${BRAND_NAME} is just me. I build custom websites and do the SEO for local businesses that cannot afford a slow, generic site.`}
        crumbs={[{ href: "/about", label: "About" }]}
      />
      <article className="prose-page mx-auto max-w-3xl px-5 py-16 md:px-8">
        <p>
          My name is {OWNER_NAME}, and {BRAND_NAME} is a one-person shop. I
          named it for how I work: {BRAND_FULL}. I create the site, optimize
          it, and keep working so your business ranks.
        </p>
        <p>
          When you hire me, you get me. There is no account manager passing
          notes to a designer, no junior handed your project after the sales
          call, and no offshore team you never meet. The person who answers
          your email is the person writing your code.
        </p>
        <p>
          I build for local businesses: restaurants, bars, wineries, cafes,
          online stores, plumbers, contractors, electricians, HVAC companies,
          landscapers, auto shops, salons, gyms, clinics, and similar trades or
          storefronts that live on search, calls, and word of mouth.
        </p>
        <p>
          I write every site as original code. No WordPress theme, no
          drag-and-drop builder, and no plugin stack waiting to break on update
          night. That is how I keep pages fast, unique, and easy to keep
          ranking.
        </p>
        <h2 className="mt-12 font-display text-3xl">How I work</h2>
        <p className="mt-4">
          First I build the site around how you actually sell: services,
          booking, a catalog, or a simple visit. Then I put the SEO foundation
          in: titles, descriptions, slugs, schema, internal links, and pages
          that match the phrases your customers type.
        </p>
        <p>
          After the site is live, I can keep going on search: keyword research,
          local citations, backlink outreach, technical analysis, and AI
          visibility so people find you when they look. I quote builds and
          monthly SEO in tiers on the{" "}
          <Link href="/pricing" className="text-cobalt">
            pricing page
          </Link>
          .
        </p>
        <h2 className="mt-12 font-display text-3xl">Who I work with</h2>
        <p className="mt-4">
          Owners who care how the business feels online. Anyone tired of a
          template that looks like the competitor down the street. People who
          want to own the code and want a site customers can actually find.
        </p>
        <p>
          If you need a mega-brand campaign with twelve stakeholders, I am not
          your person. If you want one builder who knows your site end to end,
          answers directly, and keeps it fast on a phone while it ranks for
          your town and your offer, I am.
        </p>
        <div className="mt-10">
          <Button href="/contact">Work with me</Button>
        </div>
      </article>
      <CtaBand />
    </main>
  );
}
