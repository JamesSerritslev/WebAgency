import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content/work";

export function WorkCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className="group flex h-full min-w-0">
      <article className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper">
        <div className="overflow-hidden">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1440}
            height={900}
            className="h-52 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-56 lg:h-64"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="line-clamp-1 text-sm text-slate">{project.category}</p>
          <h3 className="mt-1 line-clamp-2 min-h-[3.5rem] font-display text-2xl leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 line-clamp-3 min-h-[4.25rem] text-sm leading-relaxed text-slate">
            {project.summary}
          </p>
        </div>
      </article>
    </Link>
  );
}
