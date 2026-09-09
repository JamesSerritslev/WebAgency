"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND_FULL, BRAND_NAME, BRAND_SUFFIX } from "@/lib/brand";

let navTaglineHasPlayed = false;

type LogoProps = {
  size?: "header" | "headerCompact" | "footer";
  theme?: "light" | "dark";
  showTagline?: boolean;
  showNavTagline?: boolean;
  navTaglineVisible?: boolean;
  showMobileSuffix?: boolean;
  asLink?: boolean;
  className?: string;
};

const sizes = {
  header: {
    image: "h-9 md:h-11",
    suffix: "text-[0.6rem] tracking-[0.28em] md:text-[0.78rem] md:tracking-[0.3em]",
    tagline: "text-[0.62rem] tracking-[0.22em]",
    gap: "gap-0.5",
  },
  headerCompact: {
    image: "h-7 md:h-8",
    suffix: "text-[0.55rem] tracking-[0.26em] md:text-[0.6rem]",
    tagline: "text-[0.55rem] tracking-[0.2em]",
    gap: "gap-0.5",
  },
  footer: {
    image: "h-14 md:h-16",
    suffix: "text-[0.68rem] tracking-[0.3em] md:text-xs",
    tagline: "mt-4 text-sm tracking-[0.14em]",
    gap: "gap-1",
  },
} as const;

export function NavTagline({
  className = "",
  visible = true,
}: {
  className?: string;
  visible?: boolean;
}) {
  const [canStagger] = useState(() => {
    if (navTaglineHasPlayed) return false;
    navTaglineHasPlayed = true;
    return true;
  });
  const [staggerUsed, setStaggerUsed] = useState(false);

  useEffect(() => {
    if (!visible) {
      setStaggerUsed(true);
    }
  }, [visible]);

  const mode = !visible
    ? "is-out"
    : canStagger && !staggerUsed
      ? "nav-tagline--in"
      : "nav-tagline--ready";

  return (
    <span
      className={`nav-tagline ${mode} flex font-display text-[0.68rem] leading-none text-ink sm:text-[0.85rem] ${className}`.trim()}
    >
      <span className="nav-word">
        Create<span className="text-amber">.</span>
      </span>
      <span className="nav-word">
        Optimize<span className="text-amber">.</span>
      </span>
      <span className="nav-word">
        Rank<span className="text-amber">.</span>
      </span>
    </span>
  );
}

export function Logo({
  size = "header",
  theme = "light",
  showTagline = false,
  showNavTagline = false,
  navTaglineVisible = true,
  showMobileSuffix = false,
  asLink = true,
  className = "",
}: LogoProps) {
  const scale = sizes[size];
  const suffixColor = theme === "dark" ? "text-chalk/70" : "text-ink-soft";
  const isHeader = size === "header" || size === "headerCompact";
  const logoSrc = isHeader ? "/brand/cor-logo.png" : "/brand/cor-logo-dark.png";

  const content = (
    <span className={`inline-flex flex-col ${scale.gap} ${className}`.trim()}>
      <span className={`inline-flex items-end gap-2 md:gap-3 ${isHeader ? "min-w-0" : "flex-wrap"}`}>
        <Image
          src={logoSrc}
          alt={BRAND_NAME}
          width={671}
          height={298}
          priority={isHeader}
          className={`w-auto max-w-[38vw] sm:max-w-none transition-[height] duration-300 ease-out motion-reduce:transition-none ${scale.image} ${isHeader ? "origin-center scale-[1.1]" : ""}`}
        />
        <span
          className={`pb-1 font-sans font-semibold uppercase transition-[font-size,letter-spacing] duration-300 ease-out motion-reduce:transition-none md:pb-1.5 ${isHeader ? "hidden xl:inline" : ""} ${scale.suffix} ${suffixColor}`}
        >
          {BRAND_SUFFIX}
        </span>
      </span>
      {isHeader ? (
        <span
          className={`nav-suffix font-sans font-semibold uppercase lg:hidden ${
            showMobileSuffix ? "is-in" : "is-out"
          } ${scale.suffix} ${suffixColor}`}
        >
          <span>{BRAND_SUFFIX}</span>
        </span>
      ) : null}
      {showNavTagline ? (
        <NavTagline
          visible={navTaglineVisible}
          className="nav-tagline--below hidden lg:flex"
        />
      ) : null}
      {showTagline ? (
        <span
          className={`font-sans font-semibold uppercase text-amber ${scale.tagline}`}
        >
          {BRAND_FULL}
        </span>
      ) : null}
    </span>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link href="/" scroll={false} className="group inline-block min-w-0" aria-label={BRAND_NAME}>
      {content}
    </Link>
  );
}
