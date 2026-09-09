import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/brand";
import { Logo } from "@/components/Logo";
import { footerLinks } from "@/lib/content/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-chalk">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div className="min-w-0">
          <Logo size="footer" theme="dark" showTagline asLink={false} />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-chalk/70">
            One person building custom websites and doing the SEO for local
            businesses that want to be found when people search.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block break-all text-amber hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-chalk/70 hover:text-amber"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chalk/50">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm min-[380px]:grid-cols-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} scroll={false} className="hover:text-amber">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-chalk/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {BRAND_NAME}. Custom-built. No WordPress.
        </p>
      </div>
    </footer>
  );
}
