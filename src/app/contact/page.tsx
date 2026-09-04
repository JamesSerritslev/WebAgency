import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
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
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8 lg:py-20">
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber">
                  Home
                </Link>
              </li>
              <li className="flex min-w-0 items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link href="/contact" className="hover:text-amber">
                  Contact
                </Link>
              </li>
            </ol>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            Contact
          </p>
          <h1 className="mt-4 font-display text-[2rem] leading-[1.1] sm:text-4xl lg:text-5xl">
            Let's Create Something Great.
          </h1>
          <p className="mt-5 leading-relaxed text-slate">
            A short form. No twelve-field sales maze. It reaches me directly,
            you get a confirmation, and I reply with next steps.
          </p>
          <h2 className="mt-10 font-display text-3xl">What to expect</h2>
          <p className="mt-5 leading-relaxed text-slate">
            Once you submit this form I will get back to you shortly.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            We can schedule a call to go over what you want in your site, and
            what I'll need from you to start building.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            And that's it, I'll take it from there and get you your website.
          </p>
          <p className="mt-8 text-sm text-slate">
            Prefer email? Write to me at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-cobalt">
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
