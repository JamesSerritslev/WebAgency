import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How I use contact form details and Google Analytics at COR Web Solutions. No sale of personal information.",
  path: "/privacy",
  keywords: ["privacy", "contact form privacy"],
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
        <p>
          I use your name, email, phone (if you add one), business name, and
          message to answer your inquiry. The message is emailed to me at{" "}
          {CONTACT_EMAIL}. A confirmation may be sent back to the address you
          provided. {BRAND_NAME} is one person, so no one else reads it.
        </p>
        <p>
          I do not sell or rent your details, and I do not add you to an
          unrelated mailing list.
          Hosting and email providers (such as Vercel and Resend) process the
          data only to deliver the site and the mail.
        </p>
        <p>
          This site uses Google Analytics to see which pages people visit. Google
          processes that data under its own terms. I do not use it to sell your
          information.
        </p>
        <p>
          Questions about this note can go to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </main>
  );
}
