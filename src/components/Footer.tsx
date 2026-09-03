import Link from "next/link";
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/brand";
import { Logo } from "@/components/Logo";
import { footerLinks } from "@/lib/content/nav";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-ink text-chalk">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr] md:px-8">
        <div>
          <Logo size="footer" theme="dark" showTagline asLink={false} />
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-chalk/70">
            One person building custom websites and doing the SEO for local
            businesses that want to be found when people search.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-6 inline-block text-amber hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chalk/50">
            Explore
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-amber">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-chalk/50 md:px-8">
          © {new Date().getFullYear()} {BRAND_NAME}. Custom-built. No WordPress.
        </p>
      </div>
    </footer>
  );
}
