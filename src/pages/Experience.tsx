import { Helmet } from "react-helmet-async";

export default function Experience() {
  const items = [
  {
    period: "2022 — Présent",
    title: "Licence — Clé Informatique",
    org: "École Normale Supérieure de Marrakech",
    desc: "Dernière année de licence en informatique. Formation alliant sciences informatiques et pédagogie.",
    tags: ["Informatique", "ENS Marrakech", "Licence"],
  },
  {
    period: "2021 — 2022",
    title: "Baccalauréat Scientifique — Sciences Physiques",
    org: "Lycée · Maroc",
    desc: "Baccalauréat scientifique spécialité physique obtenu avec mention Bien.",
    tags: ["Bac Scientifique", "Physique", "Mention Bien"],
  },
  
  
];

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Parcours — MAJJATI MOHAMED TAHA</title>
        <meta name="description" content="Parcours professionnel de MAJJATI MOHAMED TAHA." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Parcours</h2>
      <ol className="relative border-l border-border/50 pl-6 space-y-8">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <div className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-background" />
            <p className="text-xs text-muted-foreground">{item.period}</p>
            <h3 className="font-semibold mt-0.5">{item.title}</h3>
            <p className="text-sm text-violet-600 dark:text-violet-400">{item.org}</p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
            <div className="flex flex-wrap gap-1 mt-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-secondary border border-border/40 text-secondary-foreground px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
