import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "ghost";
  loading?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "border-amber bg-amber text-white hover:border-amber-deep hover:bg-amber-deep",
  secondary: "border-ink bg-transparent text-ink hover:bg-ink hover:text-white",
  ghost: "border-white/35 bg-transparent text-white hover:border-amber hover:bg-amber",
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
  const classes = `inline-flex min-h-12 items-center justify-center rounded-full border-2 px-7 py-3 text-[0.95rem] font-semibold leading-none transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt motion-reduce:transition-none ${variants[variant]} ${loading ? "pointer-events-none opacity-70" : ""} ${className}`.trim();

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
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {inner}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
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
