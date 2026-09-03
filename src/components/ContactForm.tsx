"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/Button";
import { submitContact, type ContactState } from "@/app/actions/contact";

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
      action={formAction}
      className={`relative min-w-0 rounded-3xl border border-ink/10 bg-paper p-5 sm:p-6 md:p-8 ${pending ? "form-busy" : ""}`}
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block min-w-0 text-sm font-medium">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
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
            className={fieldClass}
          />
        </label>
        <label className="block min-w-0 text-sm font-medium">
          Phone <span className="font-normal text-slate">(optional)</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
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
            className={fieldClass}
          />
        </label>
      </div>
      <label className="mt-5 block min-w-0 text-sm font-medium">
        What do you need?
        <textarea
          name="message"
          required
          minLength={12}
          rows={6}
          className={fieldClass}
          placeholder="Tell me what you sell, what the current site is missing, and what a win looks like."
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" tabIndex={-1} autoComplete="off" />
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
