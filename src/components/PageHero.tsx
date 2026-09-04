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
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {crumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate sm:mb-8">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-amber">
                  Home
                </Link>
              </li>
              {crumbs.map((item) => (
                <li key={item.href} className="flex min-w-0 items-center gap-2">
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
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] leading-[1.1] text-ink sm:text-4xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate sm:mt-6 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Tell me what you need",
  body = "Share your business, your site problems, and what you want customers to do. It comes straight to me, and you get a reply with next steps.",
  href = "/contact",
  buttonLabel = "Start a project",
}: {
  title?: string;
  body?: string;
  href?: string;
  buttonLabel?: string;
}) {
  return (
    <section className="bg-ink text-chalk">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-6 px-5 py-12 sm:items-start sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-2xl min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
          <p className="mt-3 text-chalk/75">{body}</p>
        </div>
        <Button href={href} variant="primary" className="w-full shrink-0 sm:w-auto">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
