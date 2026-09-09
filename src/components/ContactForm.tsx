"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { PlanSelect } from "@/components/PlanSelect";
import { submitContact, type ContactState } from "@/app/actions/contact";
import {
  clearContactDraft,
  contactReturnPath,
  emptyContactDraft,
  readContactDraft,
  saveContactDraft,
  type ContactDraft,
} from "@/lib/contact-draft";
import {
  isSeoPlan,
  isWebsitePlan,
  seoPlanOptions,
  websitePlanOptions,
} from "@/lib/content/plans";

const initialState: ContactState = {
  status: "idle",
  message: "",
};

const fieldClass =
  "mt-2 w-full min-w-0 max-w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-ink outline-none transition focus:border-amber focus:ring-2 focus:ring-amber/30";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );
  const [draft, setDraft] = useState<ContactDraft>(emptyContactDraft);

  useEffect(() => {
    const saved = readContactDraft();
    const next = saved ?? emptyContactDraft();
    const params = new URLSearchParams(window.location.search);
    const website = params.get("website") ?? "";
    const seo = params.get("seo") ?? "";

    if (isWebsitePlan(website)) next.websiteTier = website;
    if (isSeoPlan(seo)) next.seoTier = seo;
    next.returnPath = contactReturnPath();

    setDraft(next);
    saveContactDraft(next);

    if (website || seo || window.location.hash === "#contact-form") {
      document.getElementById("contact-form")?.scrollIntoView({
        block: "start",
      });
    }
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      clearContactDraft();
    }
  }, [state.status]);

  function updateDraft<K extends keyof ContactDraft>(
    key: K,
    value: ContactDraft[K],
  ) {
    setDraft((current) => {
      const next = { ...current, [key]: value, returnPath: contactReturnPath() };
      saveContactDraft(next);
      return next;
    });
  }

  function persistDraft() {
    saveContactDraft({ ...draft, returnPath: contactReturnPath() });
  }

  if (state.status === "success") {
    return (
      <div className="rounded-3xl border border-ink/10 bg-paper p-6 sm:p-8 md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
          Message sent
        </p>
        <h2 className="mt-3 font-display text-3xl text-ink">You are in the queue.</h2>
        <p className="mt-4 leading-relaxed text-slate">{state.message}</p>
        <p className="mt-4 text-sm text-slate">
          While you wait, you can look at{" "}
          <Link href="/work" className="font-medium text-cobalt underline">
            recent work
          </Link>{" "}
          or the{" "}
          <Link href="/process" className="font-medium text-cobalt underline">
            process
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      action={formAction}
      className={`relative min-w-0 scroll-mt-28 rounded-3xl border border-ink/10 bg-paper p-5 sm:p-6 md:p-8 ${pending ? "form-busy" : ""}`}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            value={draft.name}
            onChange={(event) => updateDraft("name", event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0 text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={draft.email}
            onChange={(event) => updateDraft("email", event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0 text-sm font-medium">
          Phone <span className="font-normal text-slate">(optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            value={draft.phone}
            onChange={(event) => updateDraft("phone", event.target.value)}
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0 text-sm font-medium">
          Business name
          <input
            name="businessName"
            autoComplete="organization"
            required
            minLength={2}
            value={draft.businessName}
            onChange={(event) => updateDraft("businessName", event.target.value)}
            className={fieldClass}
          />
        </label>
      </div>
      <div className="mt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold">Which plans interest you?</p>
          </div>
          <Button
            href="/pricing"
            variant="quiet"
            onClick={persistDraft}
            className="w-full shrink-0 sm:w-auto"
          >
            View plans
          </Button>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <PlanSelect
            name="websiteTier"
            label="Website build tier"
            value={draft.websiteTier}
            required
            placeholder="Choose a website tier"
            options={websitePlanOptions}
            disabled={pending}
            onChange={(value) => updateDraft("websiteTier", value)}
          />
          <PlanSelect
            name="seoTier"
            label="SEO tier"
            hint="(optional)"
            value={draft.seoTier}
            placeholder="Choose an SEO tier"
            options={seoPlanOptions}
            disabled={pending}
            onChange={(value) => updateDraft("seoTier", value)}
          />
        </div>
      </div>
      <label className="mt-5 block min-w-0 text-sm font-medium">
        What do you need?
        <textarea
          name="message"
          required
          minLength={12}
          rows={6}
          value={draft.message}
          onChange={(event) => updateDraft("message", event.target.value)}
          className={fieldClass}
          placeholder="Provide a short description of your business."
        />
      </label>
      <div
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Company website
          <input
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>
      {state.status === "error" ? (
        <p className="mt-4 text-sm text-amber-deep" role="alert">
          {state.message}
        </p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" loading={pending} className="w-full sm:w-auto">
          Send the note
        </Button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-slate">
        Your details are used to reply about this project. Read the{" "}
        <Link href="/privacy" className="underline">
          privacy note
        </Link>
        .
      </p>
    </form>
  );
}
