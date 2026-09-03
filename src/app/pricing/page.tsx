import Link from "next/link";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand } from "@/components/PageHero";
import { buildNotes, buildTiers, personalTier, seoTiers, type PricingTier } from "@/lib/content/pricing";
import { breadcrumbSchema, offerCatalogSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website and SEO pricing",
  description:
    "COR Web Solutions website build tiers from $700 - $4,200 one-time, and monthly SEO from $750 - $2,850. Domain, revisions, and what each tier includes.",
  path: "/pricing",
  keywords: [
    "website design pricing",
    "custom website cost",
    "local SEO pricing",
    "small business website packages",
    "monthly SEO retainer",
  ],
});

function TierCard({ tier }: { tier: PricingTier }) {
  const featured = Boolean(tier.featured);

  return (
    <article
      className={`relative flex min-w-0 flex-col rounded-3xl p-6 sm:p-8 lg:p-9 ${
        featured
          ? "bg-ink text-chalk lg:-translate-y-3 lg:shadow-none"
          : "border border-ink/10 bg-paper text-ink"
      }`}
    >
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-amber">
        {tier.cadence === "monthly" ? "Monthly" : "One-time"}
      </p>
      <h3 className="font-display text-2xl sm:text-3xl">{tier.name}</h3>
      <p className={`mt-4 font-display text-3xl leading-none sm:text-4xl ${featured ? "text-amber" : "text-ink"}`}>
        {tier.price}
      </p>
      <p className={`mt-2 text-sm font-medium ${featured ? "text-chalk/65" : "text-slate"}`}>
        {tier.cadence === "monthly" ? "per month" : "one-time project"}
        {tier.timeline ? ` · ${tier.timeline}` : ""}
      </p>
      <p className={`mt-5 leading-relaxed ${featured ? "text-chalk/75" : "text-slate"}`}>
        {tier.summary}
      </p>
      <ol className="mt-7 flex-1 space-y-3">
        {tier.includes.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed">
            <span
              className={`mt-0.5 w-6 shrink-0 font-display text-sm ${featured ? "text-amber" : "text-amber"}`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className={featured ? "text-chalk/85" : "text-slate"}>{item}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8">
        <Button
          href="/contact"
          variant={featured ? "primary" : "secondary"}
          className="w-full"
        >
          Start with {tier.name}
        </Button>
      </div>
    </article>
  );
}

function TierGrid({ tiers }: { tiers: PricingTier[] }) {
  return (
    <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
      {tiers.map((tier) => (
        <TierCard key={tier.name} tier={tier} />
      ))}
    </div>
  );
}

export default function PricingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Pricing", path: "/pricing" }])} />
      <JsonLd
        data={offerCatalogSchema({
          name: "Website build tiers",
          description:
            "One-time custom website builds, from a one-page personal site to Foundation, Growth, and Scale.",
          path: "/pricing",
          tiers: [personalTier, ...buildTiers],
        })}
      />
      <JsonLd
        data={offerCatalogSchema({
          name: "SEO service tiers",
          description:
            "Monthly SEO retainers for local businesses, from Starter to Full-Scale.",
          path: "/pricing",
          tiers: seoTiers,
        })}
      />

      <section className="relative overflow-hidden bg-ink text-chalk">
        <div
          className="absolute inset-y-0 right-0 hidden w-1/4 bg-amber lg:block"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-chalk/55">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href="/pricing" className="hover:text-amber">
                  Pricing
                </Link>
              </li>
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Pricing
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[2rem] leading-[1.08] sm:text-4xl lg:text-6xl">
            Clear numbers for the build, and for the search work after.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-chalk/70">
            Website builds are a one-time project. SEO is a separate monthly
            service if you want rankings to keep moving. The exact quote lands
            after a short call.
          </p>
          <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-ink-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                Website
              </p>
              <p className="mt-2 font-display text-3xl">$700</p>
              <p className="mt-1 text-sm text-chalk/60">one-time</p>
            </div>
            <div className="rounded-2xl bg-ink-soft p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
                SEO
              </p>
              <p className="mt-2 font-display text-3xl">$750</p>
              <p className="mt-1 text-sm text-chalk/60">per month</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
          Website build
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
          One-time custom sites
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate">
          Three business build tiers, plus a one-page option for a resume or
          personal site. Every build is custom-coded and mobile responsive.
          Domain registration is $40 per year on top of the build.
        </p>
        <article className="mt-10 flex flex-col gap-6 rounded-3xl border border-ink/10 bg-paper p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-8">
          <div className="max-w-2xl min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">
              One page
            </p>
            <h3 className="mt-2 font-display text-3xl">{personalTier.name}</h3>
            <p className="mt-3 leading-relaxed text-slate">{personalTier.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate">
              <li>{personalTier.timeline}</li>
              <li>1 inquiry form</li>
              <li>Email automation</li>
              <li>Resume or personal</li>
            </ul>
          </div>
          <div className="min-w-0 shrink-0 lg:text-right">
            <p className="font-display text-3xl leading-none sm:text-4xl">{personalTier.price}</p>
            <p className="mt-2 text-sm font-medium text-slate">
              one-time project · {personalTier.timeline}
            </p>
            <div className="mt-5 lg:flex lg:justify-end">
              <Button href="/contact" variant="secondary" className="w-full sm:w-auto">
                Start with {personalTier.name}
              </Button>
            </div>
          </div>
        </article>
        <TierGrid tiers={buildTiers} />
      </section>

      <section className="border-y border-ink/8 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {buildNotes.map((note, index) => (
            <div key={note}>
              <p className="font-display text-3xl text-amber">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 leading-relaxed text-slate">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
          SEO
        </p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
          Monthly, ongoing
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate">
          SEO does not start automatically after launch. If you want keyword
          tracking, content, reviews, and AI visibility work, pick a monthly
          tier. You can add it at launch or later.
        </p>
        <TierGrid tiers={seoTiers} />
      </section>

      <CtaBand title="Not sure which tier fits?" />
    </main>
  );
}
