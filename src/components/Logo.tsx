import Link from "next/link";
import { BRAND_FULL, BRAND_MARK, BRAND_NAME, BRAND_SUFFIX } from "@/lib/brand";

type LogoProps = {
  size?: "header" | "headerCompact" | "footer";
  theme?: "light" | "dark";
  showTagline?: boolean;
  asLink?: boolean;
  className?: string;
};

const sizes = {
  header: {
    mark: "text-[2.2rem] leading-none md:text-[3.1rem]",
    suffix: "text-[0.6rem] tracking-[0.28em] md:text-[0.78rem] md:tracking-[0.3em]",
    tagline: "text-[0.62rem] tracking-[0.22em]",
    gap: "gap-0.5",
  },
  headerCompact: {
    mark: "text-[1.6rem] leading-none md:text-[1.8rem]",
    suffix: "text-[0.55rem] tracking-[0.26em] md:text-[0.6rem]",
    tagline: "text-[0.55rem] tracking-[0.2em]",
    gap: "gap-0.5",
  },
  footer: {
    mark: "text-4xl leading-none md:text-5xl",
    suffix: "text-[0.68rem] tracking-[0.3em] md:text-xs",
    tagline: "mt-4 text-sm tracking-[0.14em]",
    gap: "gap-1",
  },
} as const;

const letterColors = {
  light: ["text-ink", "text-ink", "text-amber"],
  dark: ["text-chalk", "text-chalk", "text-amber"],
} as const;

export function Logo({
  size = "header",
  theme = "light",
  showTagline = false,
  asLink = true,
  className = "",
}: LogoProps) {
  const scale = sizes[size];
  const suffixColor = theme === "dark" ? "text-chalk/70" : "text-ink-soft";
  const colors = letterColors[theme];
  const isHeader = size === "header" || size === "headerCompact";

  const mark = isHeader ? (
    <span
      className={`font-wordmark tracking-[-0.01em] transition-[font-size] duration-300 ease-out motion-reduce:transition-none ${scale.mark}`}
      aria-hidden="true"
    >
      {BRAND_MARK.split("").map((letter, index) => (
        <span key={`${letter}-${index}`} className={colors[index] ?? colors[0]}>
          {letter}
        </span>
      ))}
    </span>
  ) : (
    <span
      className={`font-wordmark tracking-[-0.01em] ${scale.mark} ${
        theme === "dark"
          ? "wordmark-gradient wordmark-gradient-dark"
          : "wordmark-gradient"
      }`}
    >
      {BRAND_MARK}
    </span>
  );

  const content = (
    <span className={`inline-flex flex-col ${scale.gap} ${className}`.trim()}>
      <span className="inline-flex items-end gap-2 md:gap-3">
        {mark}
        <span
          className={`pb-1 font-sans font-semibold uppercase transition-[font-size,letter-spacing] duration-300 ease-out motion-reduce:transition-none md:pb-1.5 ${scale.suffix} ${suffixColor}`}
        >
          {BRAND_SUFFIX}
        </span>
      </span>
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
    <Link href="/" className="group inline-block" aria-label={BRAND_NAME}>
      {content}
    </Link>
  );
}
