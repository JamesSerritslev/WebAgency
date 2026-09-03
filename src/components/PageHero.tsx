import Link from "next/link";
import { Button } from "@/components/Button";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  crumbs?: { href: string; label: string }[];
}) {
  return (
    <section className="border-b border-ink/8 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber">
                  Home
                </Link>
              </li>
              {crumbs.map((item) => (
                <li key={item.href} className="flex items-center gap-2">
                  <span aria-hidden="true">/</span>
                  <Link href={item.href} className="hover:text-amber">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.1] text-ink md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Tell me what you need",
  body = "Share your business, your site problems, and what you want customers to do. It comes straight to me, and you get a reply with next steps.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-ink text-chalk">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-chalk/75">{body}</p>
        </div>
        <Button href="/contact" variant="primary">
          Start a project
        </Button>
      </div>
    </section>
  );
}
