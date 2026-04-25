import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";

export default function Home() {
  const avgScore = Math.round(
    certifications.reduce((sum, c) => sum + (c.score ?? 0), 0) / certifications.length
  );

  return (
    <section>
      <Helmet>
        <title>{profile.name} — Portfolio Développeur Full Stack</title>
        <meta
          name="description"
          content="Portfolio de MAJJATI MIHAMED TAHA — Développeur Full ."
        />
      </Helmet>

      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Disponible pour de nouvelles opportunités
          </span>
          <h1 className="text-5xl font-bold tracking-tight">
            MOHAMED TAHA{" "}
            <span className="text-violet-600 dark:text-violet-400">MAJJATI</span>
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">{profile.role}</p>
          <p className="mt-4 text-muted-foreground leading-relaxed">{profile.about}</p>

          <div className="flex flex-wrap gap-2 mt-5">
            {profile.skills.slice(0, 8).map((skill) => (
              <span
                key={skill}
                className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full border border-border/50"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm border border-border/50 px-4 py-2 rounded-lg hover:border-violet-400 hover:text-violet-600 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <Link
              to="/projects"
              className="bg-violet-600 hover:bg-violet-700 text-white text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Voir les projets →
            </Link>
            <Link
              to="/certifications"
              className="border border-border/50 text-sm px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
            >
              Mes certifications
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
  <img
    src="/profile.webp"
    alt="MAJJATI MOHAMED TAHA"
    className="w-56 h-56 rounded-2xl object-cover border-2 border-violet-200 dark:border-violet-800 shadow-lg"
  />
</div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        {[
          { num: certifications.length, label: "Certifications pro" },
          { num: "100%", label: "Labs complétés" },
          { num: `${avgScore}%`, label: "Score moyen" },
        ].map((s) => (
          <div key={s.label} className="bg-secondary rounded-xl p-4 text-center">
            <div className="text-2xl font-semibold text-violet-600 dark:text-violet-400">
              {s.num}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Recent certs preview */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Certifications récentes</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((c) => (
            <div key={c.title} className="border border-border/50 rounded-xl p-4 flex gap-3">
              <div className="w-12 h-12 rounded-lg bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 flex items-center justify-center text-xs font-semibold text-violet-700 dark:text-violet-300 text-center leading-tight flex-shrink-0">
                {c.score}%
              </div>
              <div>
                <div className="text-sm font-medium leading-snug">{c.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {c.issuer} · {c.issueDate.split("-").reverse().join("/")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
