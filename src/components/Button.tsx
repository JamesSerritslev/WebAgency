import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost" | "quiet";
  loading?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "border-amber bg-amber text-white hover:border-amber-deep hover:bg-amber-deep",
  secondary: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  ghost: "border-white/35 bg-transparent text-white hover:border-amber hover:bg-amber",
  quiet: "btn-quiet border-ink/20 bg-transparent text-ink",
} as const;

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  loading = false,
  className = "",
  onClick,
}: ButtonProps) {
  const classes = `inline-flex min-h-12 max-w-full items-center justify-center rounded-full border-2 px-5 py-3 text-center text-[0.95rem] font-semibold leading-snug transition-colors sm:px-7 sm:leading-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt motion-reduce:transition-none ${variants[variant]} ${loading ? "pointer-events-none opacity-70" : ""} ${className}`.trim();

  const inner = (
    <>
      {loading ? "Sending" : children}
      {loading ? (
        <span
          className="ml-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
          aria-hidden="true"
        />
      ) : null}
    </>
  );

  if (href) {
      const isMailto = href.startsWith("mailto:");
    const isExternal = href.startsWith("http") || isMailto;

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          {...(isMailto
            ? {}
            : { target: "_blank", rel: "noopener noreferrer" })}
          onClick={onClick}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} scroll={false} className={classes} onClick={onClick}>
        {inner}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={loading}
      onClick={onClick}
    >
      {inner}
    </button>
  );
}
