"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { PAGE_TOP_SCROLL, trackAppPath } from "@/lib/content/nav";

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

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
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
      holdScroll(PAGE_TOP_SCROLL);
      return;
    }

    if (kind === "initial") {
      holdScroll(0);
    }
  }, [pathname]);

  return null;
}
