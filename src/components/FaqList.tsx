"use client";

import { useId, useState } from "react";
import type { Faq } from "@/lib/content/faq";

export function FaqList({ items }: { items: readonly Faq[] }) {
  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item) => (
        <FaqItem key={item.question} item={item} />
      ))}
    </div>
  );
}

function FaqItem({ item }: { item: Faq }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <h3>
        <button
          type="button"
          className="flex w-full items-start justify-between gap-6 py-5 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-lg font-semibold text-ink">{item.question}</span>
          <span aria-hidden="true" className="mt-1 text-amber">
            {open ? "–" : "+"}
          </span>
        </button>
      </h3>
      {open ? (
        <div id={panelId} className="pb-5 pr-10 leading-relaxed text-slate">
          <p>{item.answer}</p>
          {item.bullets ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
