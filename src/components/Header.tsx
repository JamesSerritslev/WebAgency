"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo, NavTagline } from "@/components/Logo";
import {
  NAV_EXPAND_BELOW,
  NAV_SHRINK_AFTER,
  getNavShrunk,
  isNavHeld,
  navLinks,
  setNavShrunk,
} from "@/lib/content/nav";
import { Button } from "@/components/Button";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shrunk, setShrunk] = useState(getNavShrunk);
  const [desktop, setDesktop] = useState(false);
  const [mobileTaglineMounted, setMobileTaglineMounted] = useState(getNavShrunk);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const onScroll = () => {
      const y = window.scrollY;
      if (isNavHeld()) {
        setShrunk(getNavShrunk());
        return;
      }
      setShrunk((current) => {
        const next = current ? y > NAV_EXPAND_BELOW : y > NAV_SHRINK_AFTER;
        setNavShrunk(next);
        return next;
      });
    };
    const onResize = () => {
      setDesktop(desktopQuery.matches);
      if (desktopQuery.matches) {
        setOpen(false);
      }
    };
    onScroll();
    onResize();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    desktopQuery.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      desktopQuery.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (navRef.current?.contains(target) || toggleRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  useEffect(() => {
    if (shrunk && !desktop) {
      setMobileTaglineMounted(true);
    }
  }, [shrunk, desktop]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-ink/8 bg-chalk/90 backdrop-blur-md">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 transition-[padding] duration-300 ease-out motion-reduce:transition-none sm:gap-4 lg:px-8 ${
          shrunk ? "py-2 md:py-2.5" : "py-3 sm:py-4 lg:py-5"
        }`}
      >
        <Logo
          size={shrunk ? "headerCompact" : "header"}
          theme="light"
          showNavTagline={desktop}
          navTaglineVisible={!shrunk && desktop}
          showMobileSuffix={!shrunk && !desktop}
          className="relative z-10 min-w-0"
        />
        {mobileTaglineMounted ? (
          <span className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
            <NavTagline visible={shrunk} className="whitespace-nowrap" />
          </span>
        ) : null}
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft xl:gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={false}
              className="whitespace-nowrap transition-colors hover:text-amber"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact">Start a project</Button>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          className={`menu-toggle relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border lg:hidden ${
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
        ref={navRef}
        id="mobile-nav"
        className={`mobile-nav lg:hidden ${open ? "is-open" : ""}`}
        aria-hidden={!open}
        inert={!open || undefined}
      >
        <div className="mobile-nav-inner">
          <ul className="flex flex-col py-2 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={false}
                  className="block w-full px-5 py-3"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-5 pt-2 pb-4">
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Open the form
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
