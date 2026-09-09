import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { articles } from "@/lib/content/insights";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights on custom websites, SEO, and AI visibility",
  description:
    "Practical articles I write on custom sites versus WordPress, local SEO for trades and restaurants, and AI visibility for local businesses.",
  path: "/insights",
  keywords: [
    "small business SEO articles",
    "custom website vs WordPress",
    "local SEO tips",
    "AI visibility for local business",
  ],
});

export default function InsightsPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Insights", path: "/insights" }])}
      />
      <PageHero
        eyebrow="Insights"
        title="Notes on sites that rank, load, and get recommended."
        description="Short, practical pieces for owners who want search traffic without a template site."
        crumbs={[{ href: "/insights", label: "Insights" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose-page mx-auto mb-12 max-w-3xl">
          <h2 className="font-display text-3xl">What I write about</h2>
          <p className="mt-4 text-slate">
            These notes are for owners who want search traffic without a
            template site. I write about why a custom build beats WordPress
            for speed and rankings, how local SEO works for restaurants and
            trades, and what AI visibility means when people ask ChatGPT or
            Google AI Overviews for a recommendation.
          </p>
          <p className="text-slate">
            I keep the articles practical. No jargon for its own sake, and no
            filler to hit a word count. Each piece should help you decide
            whether to rebuild, add monthly SEO, or leave the current site
            alone. If you want the work done rather than another article, the{" "}
            <Link href="/contact" className="font-semibold text-cobalt">
              project form
            </Link>{" "}
            is the next step.
          </p>
          <p className="text-slate">
            New notes go here as I publish them. Topics stay close to the
            work: custom websites, local search for restaurants and trades,
            and getting cited in AI answers. Open a card for the full article.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <li key={article.slug} className="relative min-w-0 rounded-3xl border border-ink/10 bg-paper p-6 sm:p-7">
              <p className="text-sm text-slate">{article.datePublished}</p>
              <h2 className="mt-3 font-display text-2xl">{article.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {article.description}
              </p>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-cobalt after:absolute after:inset-0 after:z-10"
              >
                {article.linkLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand buttonLabel="Talk through a rebuild" />
    </main>
  );
}
