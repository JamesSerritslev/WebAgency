import Link from "next/link";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-3xl flex-1 flex-col justify-center px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber">
        404
      </p>
      <h1 className="mt-4 font-display text-[2rem] sm:text-4xl">That page is not here.</h1>
      <p className="mt-4 text-slate">
        Try the{" "}
        <Link href="/work" className="text-cobalt">
          work
        </Link>
        ,{" "}
        <Link href="/services" className="text-cobalt">
          services
        </Link>
        , or send a note.
      </p>
      <div className="mt-8">
        <Button href="/contact">Contact</Button>
      </div>
    </main>
  );
}
