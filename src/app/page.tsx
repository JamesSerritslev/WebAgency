import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { BRAND_FULL, OWNER_FIRST_NAME } from "@/lib/brand";
import { homepageFaqs } from "@/lib/content/faq";
import { services } from "@/lib/content/services";
import { projects } from "@/lib/content/work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Custom websites, SEO, and AI visibility",
  description:
    "Hey, I am James Serritslev. I build custom sites for restaurants, trades, shops, online stores, resumes, and pretty much anything you can think of. One person, start to finish. My SEO work helps people find you when they search.",
  path: "/",
  keywords: [
    "custom website design",
    "small business web design",
    "local SEO",
    "AI visibility",
    "contractor website",
    "restaurant website",
    "plumber website",
  ],
});

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-svh items-center overflow-hidden bg-ink text-chalk">
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-amber lg:block" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber">
              {BRAND_FULL}
            </p>
            <h1 className="mt-5 font-display text-[2rem] leading-[1.05] sm:text-4xl lg:text-6xl">
              Custom websites for local businesses that want to be found.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-chalk/75 sm:mt-6 sm:text-lg">
              Hey, I am {OWNER_FIRST_NAME}, and I build custom sites for
              restaurants, trades, shops, online stores, resumes, and pretty
              much anything you can think of. One person, start to finish. No
              corporate waiting to approve. It is simple and straightforward.
              My SEO (search engine optimization) work helps people find you
              when they search for your business or related searches.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" className="w-full sm:w-auto">
                Start a project
              </Button>
              <Button href="/work" variant="ghost" className="w-full sm:w-auto">
                See the work
              </Button>
            </div>
          </div>
          <ul className="relative z-10 grid content-center gap-4 self-center rounded-3xl bg-ink-soft p-5 sm:p-6 lg:p-8">
            {[
              "Custom-built by me, not a template",
              "SEO that helps people find you",
              "Built for search, maps, and AI answers",
              "You work with the builder directly",
            ].map((item) => (
              <li
                key={item}
                className="border-b border-white/10 pb-4 text-base last:border-none last:pb-0 sm:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
          Built for
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl">
          Restaurants, trades, shops, and stores that live on search and referrals.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-slate">
          That includes restaurants, bars, wineries, cafes, online stores,
          plumbers, contractors, electricians, HVAC companies, landscapers,
          auto shops, salons, gyms, clinics, and similar local businesses. A
          custom site can carry the brand and the keywords without looking
          like everyone else.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-3xl border border-ink/10 bg-paper p-7 transition hover:-translate-y-0.5 hover:border-amber/40"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                {service.eyebrow}
              </p>
              <h3 className="mt-3 font-display text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist/60">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="flex items-end justify-between gap-6">
            <div className="min-w-0">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
                Sites already live.
              </h2>
            </div>
            <div className="hidden shrink-0 lg:block">
              <Button href="/work" variant="secondary">
                All work
              </Button>
            </div>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="group min-w-0">
                <div className="overflow-hidden rounded-3xl border border-ink/10 bg-paper">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1440}
                    height={900}
                    className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-64 lg:h-80"
                  />
                  <div className="p-6">
                    <p className="text-sm text-slate">{project.category}</p>
                    <h3 className="mt-1 font-display text-2xl">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 lg:hidden">
            <Button href="/work" variant="secondary" className="w-full sm:w-auto">
              All work
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
            Why custom
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl">
            Fast, unique, and built for your business.
          </h2>
          <p className="mt-5 leading-relaxed text-slate">
            A custom site will impress customers and partners while
            outperforming competitor websites on search engines.
          </p>
          <p className="mt-4 leading-relaxed text-slate">
            Template sites often look like the company next door and load
            slowly. I build every site around your services, your catalog, and
            the searches your customers actually type.
          </p>
          <div className="mt-8">
            <Button href="/process" variant="secondary" className="w-full sm:w-auto">
              How the work runs
            </Button>
          </div>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
            Quick answers
          </p>
          <h2 className="mt-3 font-display text-3xl">Common questions</h2>
          <dl className="mt-6 space-y-5">
            {homepageFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-semibold">{faq.question}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-slate">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
          <Link href="/faq" className="mt-6 inline-block text-sm font-semibold text-cobalt">
            Read the full FAQ
          </Link>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div className="min-w-0">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">
              Tell me about the business.
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Name, email, business, and what you need. The note comes straight
              to my inbox, and you get a confirmation.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
