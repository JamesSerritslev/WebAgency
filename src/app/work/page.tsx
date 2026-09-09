import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { WorkCard } from "@/components/WorkCard";
import { projects } from "@/lib/content/work";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Website design work for local businesses",
  description:
    "Custom sites I built: Analogue Room, Standing Sun Wines, a personal portfolio, and BandScope. Fast, search-ready builds and larger custom apps.",
  path: "/work",
  keywords: [
    "web design portfolio",
    "custom website case studies",
    "small business website examples",
  ],
});

export default function WorkPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "Work", path: "/work" }])} />
      <PageHero
        eyebrow="Work"
        title="Custom sites already serving real businesses."
        description="Live projects I built myself: local business sites, a personal portfolio for showing work, and BandScope, a full music networking app."
        crumbs={[{ href: "/work", label: "Work" }]}
      />
      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose-page mx-auto mb-12 max-w-3xl">
          <h2 className="font-display text-3xl">What you will see here</h2>
          <p className="mt-4 text-slate">
            These are live sites I built myself. Some are local hospitality
            businesses that needed a fast, searchable site. One is a personal
            portfolio for showing work to clients or recruiters. BandScope is
            a full music networking app, which sits outside the published
            pricing tiers and shows what a larger custom build can be.
          </p>
          <p className="text-slate">
            Each case study covers the challenge, the approach, and what
            launched. I keep them short on purpose, but they should still tell
            you whether the kind of work you need is something I already do:
            a vinyl lounge and wine bar, a winery with events and custom
            crush, a personal site, or a custom web application.
          </p>
          <p className="text-slate">
            If you want a similar site, the{" "}
            <Link href="/contact" className="font-semibold text-cobalt">
              contact form
            </Link>{" "}
            is the start. For ranges, see{" "}
            <Link href="/pricing" className="font-semibold text-cobalt">
              pricing
            </Link>
            .
          </p>
        </div>
        <div className="grid items-stretch gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <WorkCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      <CtaBand title="Want the next case study to be yours?" />
    </main>
  );
}
