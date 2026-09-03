import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact COR Web Solutions",
  description:
    "Start a custom website, SEO, or AI visibility project. Send your name, email, business, and what you need. Messages come straight to me, and you get a confirmation.",
  path: "/contact",
  keywords: [
    "contact web designer",
    "hire custom web designer",
    "small business website quote",
    "SEO consultation",
  ],
});

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([{ name: "Contact", path: "/contact" }])}
      />
      <PageHero
        eyebrow="Contact"
        title="Tell me what the site needs to do."
        description="A short form. No twelve-field sales maze. It reaches me directly, you get a confirmation, and I reply with next steps."
        crumbs={[{ href: "/contact", label: "Contact" }]}
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <div>
          <h2 className="font-display text-3xl">What to include</h2>
          <ul className="mt-5 space-y-3 text-slate">
            <li>What you sell and where customers find you today</li>
            <li>Whether you need a new site, monthly SEO, or both, and any tier you already have in mind</li>
            <li>Any must-have features: booking, service areas, shop, or forms</li>
          </ul>
          <p className="mt-8 text-sm text-slate">
            Prefer email? Write to me at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-cobalt">
              {CONTACT_EMAIL}
            </a>
            . This form sends to the same inbox, from {BRAND_NAME}.
          </p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
