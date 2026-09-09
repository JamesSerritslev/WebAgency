import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy policy for the COR Web Solutions contact form",
  description:
    "How COR Web Solutions uses contact form details and Google Analytics. Details stay with James. No sale of personal information.",
  path: "/privacy",
  keywords: ["privacy", "contact form privacy", "COR Web Solutions privacy policy"],
});

export default function PrivacyPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Privacy", path: "/privacy" }])}
      />
      <PageHero
        eyebrow="Privacy"
        title="A short note on the contact form."
        description="Contact form details stay with me. Analytics only tells me which pages people visit."
        crumbs={[{ href: "/privacy", label: "Privacy" }]}
      />
      <article className="prose-page mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <h2 className="font-display text-3xl">What the form collects</h2>
        <p className="mt-4">
          I use your name, email, phone (if you add one), business name, plan
          interest, and message to answer your inquiry. The message is emailed
          to me at {CONTACT_EMAIL}. A confirmation may be sent back to the
          address you provided. {BRAND_NAME} is one person, so no one else
          reads it.
        </p>
        <p>
          You do not have to fill every optional field. Name, email, and a
          short note about what you need are enough for me to reply. Extra
          context (what you sell, whether you already have a site, and a
          timeline) helps me quote faster.
        </p>
        <h2 className="mt-12 font-display text-3xl">How the details are used</h2>
        <p className="mt-4">
          I do not sell or rent your details, and I do not add you to an
          unrelated mailing list. I keep the note long enough to reply, quote
          a project, and follow up if we start work. If you want it deleted
          after we are done talking, email me and I will remove it.
        </p>
        <p>
          Hosting and email providers (such as Vercel and Resend) process the
          data only to deliver the site and the mail. They are not using your
          inquiry to market other products.
        </p>
        <h2 className="mt-12 font-display text-3xl">Analytics</h2>
        <p className="mt-4">
          This site uses Google Analytics to see which pages people visit.
          Google processes that data under its own terms. I use it to
          understand which services and articles get read, not to sell your
          information or build advertising audiences.
        </p>
        <h2 className="mt-12 font-display text-3xl">Questions</h2>
        <p className="mt-4">
          Questions about this note can go to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. If you
          submitted the contact form and want a copy of what was sent, I can
          look that up from the same inbox.
        </p>
        <p>
          This policy is only for corwebsolutions.com. Linked client sites,
          such as a restaurant or winery I built, have their own pages and
          their own practices. I am not collecting payment details through
          this contact form.
        </p>
      </article>
    </main>
  );
}
