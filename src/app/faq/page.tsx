import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/PageHero";
import { faqs } from "@/lib/content/faq";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ about custom websites, SEO, and AI visibility",
  description:
    "Answers on custom web design vs WordPress, cost, timelines, hosting, monthly SEO, AI visibility, ownership, and how to start with COR Web Solutions.",
  path: "/faq",
  keywords: [
    "custom website FAQ",
    "WordPress vs custom website",
    "how long does a website take",
    "local SEO questions",
    "AI visibility FAQ",
  ],
});

export default function FaqPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema([{ name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqSchema([...faqs])} />
      <PageHero
        eyebrow="FAQ"
        title="Straight answers before you send the form."
        description="Cost, timelines, WordPress, SEO, AI visibility, and who owns the code. Written so search engines can quote them too."
        crumbs={[{ href: "/faq", label: "FAQ" }]}
      />
      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="prose-page mb-12">
          <h2 className="font-display text-3xl">Before you send the form</h2>
          <p className="mt-4 text-slate">
            These are the questions people ask most before they hire me for a
            custom website or SEO. I write them in plain language so you can
            decide if the work fits, and so search engines can quote the same
            answers.
          </p>
          <p className="text-slate">
            Custom means I write the site as original code. It is not a
            WordPress theme and not a page builder. That is why the sites stay
            faster and easier to rank than a template with a plugin stack.
            Builds are quoted in tiers. Hosting and maintenance is a small
            monthly fee after launch. Monthly SEO is separate, and nothing
            extra starts unless you choose it.
          </p>
          <p className="text-slate">
            The list below covers businesses I build for, why not WordPress,
            timelines, cost, hosting, monthly SEO, AI visibility, ownership,
            ecommerce, and who you work with. Open a row for the short answer.
          </p>
          <p className="text-slate">
            Open a question below for the short version, or read the{" "}
            <Link href="/pricing" className="font-semibold text-cobalt">
              rate list
            </Link>{" "}
            if you want the numbers first. If your question is not here,{" "}
            <Link href="/contact" className="font-semibold text-cobalt">
              write me
            </Link>
            .
          </p>
        </div>
        <FaqList items={faqs} />
        <p className="mt-8 text-slate">
          Full ranges and what each tier includes are on the{" "}
          <Link href="/pricing" className="font-semibold text-cobalt">
            tier list
          </Link>
          .
        </p>
      </section>
      <CtaBand title="Still have a question?" buttonLabel="Ask me" />
    </main>
  );
}
