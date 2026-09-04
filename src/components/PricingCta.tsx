"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { readContactDraft } from "@/lib/contact-draft";

type PricingCtaProps = {
  kind: "website" | "seo";
  slug: string;
  name: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export function PricingCta({
  kind,
  slug,
  name,
  variant = "secondary",
  className = "w-full",
}: PricingCtaProps) {
  const [href, setHref] = useState(
    `/contact?${kind}=${encodeURIComponent(slug)}#contact-form`,
  );

  useEffect(() => {
    const draft = readContactDraft();
    const base = draft?.returnPath === "/" ? "/" : "/contact";
    setHref(`${base}?${kind}=${encodeURIComponent(slug)}#contact-form`);
  }, [kind, slug]);

  return (
    <Button href={href} variant={variant} className={className}>
      Start with {name}
    </Button>
  );
}
