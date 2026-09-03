"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/content/nav";
import { Button } from "@/components/Button";

export function Header() {
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const onScroll = () => setShrunk(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-ink/8 bg-chalk/90 backdrop-blur-md">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 transition-[padding] duration-300 ease-out motion-reduce:transition-none md:px-8 ${
          shrunk ? "py-2 md:py-2.5" : "py-4 md:py-5"
        }`}
      >
        <Logo size={shrunk ? "headerCompact" : "header"} theme="light" />
        <nav className="hidden items-center gap-7 text-sm font-medium text-ink-soft md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Start a project</Button>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>
      {open ? (
        <nav className="border-t border-ink/8 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Start a project
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
