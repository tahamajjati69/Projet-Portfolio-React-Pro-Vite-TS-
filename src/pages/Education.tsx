import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function EducationPage() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Formations — MAJJATI MOHAMED TAHA</title>
        <meta name="description" content="Formations et diplômes de MAJJATI MOHAMED TAHA." />
      </Helmet>
      <h2 className="text-2xl font-semibold">Formations</h2>
      <ol className="relative border-l border-border/50 pl-6 space-y-8">
        {education.map((e) => (
          <li key={e.school + e.start} className="relative">
            <div className="absolute -left-7 top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-background" />
            <p className="text-xs text-muted-foreground">
              {fmt(e.start)} — {fmt(e.end)}
              {e.location ? ` · ${e.location}` : ""}
            </p>
            <h3 className="font-semibold mt-0.5">
              {e.degree}
              {e.field ? ` — ${e.field}` : ""}
            </h3>
            <p className="text-sm text-violet-600 dark:text-violet-400">{e.school}</p>
            {e.gpa && (
              <p className="text-xs text-muted-foreground mt-1">GPA {e.gpa}</p>
            )}
            {e.courses && e.courses.length > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                Cours : {e.courses.slice(0, 5).join(", ")}
              </p>
            )}
            {e.highlights && e.highlights.length > 0 && (
              <ul className="list-disc list-inside mt-2 space-y-0.5">
                {e.highlights.map((h) => (
                  <li key={h} className="text-sm text-muted-foreground">
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
