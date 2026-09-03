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
    "Answers about custom web design versus WordPress, timelines, cost, hosting and maintenance, monthly SEO as a separate service, AI visibility, ownership, ecommerce, and how to start a project with COR Web Solutions.",
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
      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">
        <FaqList items={faqs} />
        <p className="mt-8 text-slate">
          Full ranges and what each tier includes are on the{" "}
          <Link href="/pricing" className="font-semibold text-cobalt">
            pricing page
          </Link>
          .
        </p>
      </section>
      <CtaBand title="Still have a question?" />
    </main>
  );
}
