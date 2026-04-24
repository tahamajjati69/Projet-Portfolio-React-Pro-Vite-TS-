import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — MAJJATI MOHAMED TAHA</title>
        <meta name="description" content="Projets de développement de NOUHAYLA SABIQ." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border border-border/50 rounded-xl p-4 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
          >
            <h3 className="font-semibold text-sm leading-snug">{p.title}</h3>
            {p.period && (
              <p className="text-xs text-muted-foreground mt-0.5">{p.period}</p>
            )}
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.summary}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-secondary border border-border/40 text-secondary-foreground px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3 mt-3 text-xs">
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="text-violet-600 hover:underline">
                  Demo ↗
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="text-violet-600 hover:underline">
                  Code ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
