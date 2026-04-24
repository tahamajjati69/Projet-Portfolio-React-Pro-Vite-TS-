import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? []), c.category ?? ""]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Certifications — MAJJATI MOHAMED TAHA</title>
        <meta
          name="description"
          content="Certifications professionnelles de MAJJATI MOAHAMED TAHA : Kotlin, PHP 7, Architecture Web."
        />
      </Helmet>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <div className="flex items-center gap-3">
          <input
            type="search"
            placeholder="Filtrer (ex: Kotlin, PHP, Web…)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="border border-border/50 rounded-lg px-3 py-2 text-sm w-64 bg-background focus:outline-none focus:border-violet-400"
            aria-label="Filtrer les certifications"
          />
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {list.length} résultat{list.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="text-center text-muted-foreground py-12">
          Aucune certification ne correspond à "{q}".
        </p>
      ) : (
        <div className="grid gap-4">
          {list.map((c) => (
            <CertificationCard key={c.title + c.issueDate} c={c} />
          ))}
        </div>
      )}
    </section>
  );
}
