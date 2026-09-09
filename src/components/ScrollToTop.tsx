"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { holdNavState, navScrollTop, trackAppPath } from "@/lib/content/nav";

function scrollToY(top: number) {
  window.scrollTo({ top, left: 0, behavior: "instant" });
}

function holdScroll(top: number) {
  scrollToY(top);
  requestAnimationFrame(() => scrollToY(top));
  window.setTimeout(() => scrollToY(top), 50);
  window.setTimeout(() => scrollToY(top), 160);
  window.setTimeout(() => scrollToY(top), 320);
}

function isInternalPageLink(link: HTMLAnchorElement) {
  if (link.target === "_blank" || link.hasAttribute("download")) return false;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return false;
  }
  return true;
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;
      if (!isInternalPageLink(link)) return;
      holdNavState();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useLayoutEffect(() => {
    const hash = window.location.hash.slice(1);
    const kind = trackAppPath(pathname);

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    if (kind === "changed") {
      holdNavState();
      holdScroll(navScrollTop());
      return;
    }

    if (kind === "initial") {
      holdScroll(0);
    }
  }, [pathname]);

  return null;
}
