"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { PlanOption } from "@/lib/content/plans";

type PlanSelectProps = {
  name: string;
  label: string;
  hint?: string;
  value: string;
  required?: boolean;
  placeholder: string;
  options: PlanOption[];
  disabled?: boolean;
  onChange: (value: string) => void;
};

export function PlanSelect({
  name,
  label,
  hint,
  value,
  required = false,
  placeholder,
  options,
  disabled = false,
  onChange,
}: PlanSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const listId = useId();
  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative min-w-0">
      <p id={labelId} className="text-sm font-medium">
        {label}
        {hint ? <span className="font-normal text-slate"> {hint}</span> : null}
      </p>
      <select
        name={name}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={labelId}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        className={`plan-select-trigger mt-2 flex h-12 w-full min-w-0 items-center justify-between gap-3 rounded-xl border bg-paper px-4 text-left outline-none transition ${
          open
            ? "border-amber ring-2 ring-amber/30"
            : "border-ink/15 focus-visible:border-amber focus-visible:ring-2 focus-visible:ring-amber/30"
        }`}
      >
        <span className={`min-w-0 truncate ${selected ? "text-ink" : "text-slate"}`}>
          {selected?.label ?? placeholder}
        </span>
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-ink/60 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        >
          <path
            fill="currentColor"
            d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.58l3.3-3.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.42Z"
          />
        </svg>
      </button>
      {open ? (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-30 mt-2 w-full overflow-hidden rounded-2xl border border-ink/10 bg-paper py-2 shadow-[0_18px_40px_-20px_rgba(15,23,42,0.45)]"
        >
          {options.map((option) => {
            const active = option.value === value;
            return (
              <li key={option.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`plan-select-option w-full px-4 py-2.5 text-left font-medium text-ink transition ${
                    active ? "bg-amber/10" : ""
                  }`}
                >
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
