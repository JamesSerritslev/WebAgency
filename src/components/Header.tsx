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
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-ink/8 bg-chalk/90 backdrop-blur-md">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 transition-[padding] duration-300 ease-out motion-reduce:transition-none sm:gap-4 lg:px-8 ${
          shrunk ? "py-2 md:py-2.5" : "py-3 sm:py-4 lg:py-5"
        }`}
      >
        <Logo
          size={shrunk ? "headerCompact" : "header"}
          theme="light"
          className="min-w-0"
        />
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Start a project</Button>
        </nav>
        <button
          type="button"
          className={`menu-toggle inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border lg:hidden ${
            open ? "is-open" : ""
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="menu-toggle-bars" aria-hidden="true">
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
            <span className="menu-toggle-bar" />
          </span>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`mobile-nav lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="mobile-nav-inner">
          <ul className="flex flex-col gap-3 px-5 py-4 text-base font-medium">
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
        </div>
      </nav>
    </header>
  );
}
