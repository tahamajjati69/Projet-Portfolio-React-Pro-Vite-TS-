import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { useState } from "react";

function formatDate(s: string) {
  const [y, m] = s.split("-");
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const [zoom, setZoom] = useState(false);

  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && c.expiryDate < new Date().toISOString().slice(0, 7));

  return (
    <>
      {zoom && c.image && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoom(false)}
        >
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            className="max-w-4xl w-full rounded-2xl shadow-2xl"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setZoom(false); }}
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            aria-label="Fermer"
          >
            ✕
          </button>
        </div>
      )}

      <article
        className={clsx(
          "border rounded-xl overflow-hidden hover:border-violet-300 dark:hover:border-violet-700 transition-colors",
          isExpired ? "opacity-70" : ""
        )}
        aria-label={`Certification ${c.title}`}
      >
        {c.image && (
          <div
            className="relative w-full cursor-zoom-in group"
            onClick={() => setZoom(true)}
          >
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              loading="lazy"
              className="w-full object-cover"
              style={{ maxHeight: "280px", objectPosition: "top" }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                Cliquer pour agrandir
              </span>
            </div>
          </div>
        )}

        <div className="p-4">
          <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
          <p className="text-xs text-muted-foreground mt-1">
            {c.issuer}{c.instructor ? ` · ${c.instructor}` : ""} · {formatDate(c.issueDate)}
            {c.expiryDate ? ` → ${formatDate(c.expiryDate)}` : ""}
          </p>

          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {c.score !== undefined && (
              <span className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs px-2 py-0.5 rounded-full font-medium">
                Score {c.score}%
              </span>
            )}
            {c.progression !== undefined && (
              <span className="bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-400 text-xs px-2 py-0.5 rounded-full">
                {c.progression}% labs
              </span>
            )}
            {c.category && (
              <span className="bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full border border-border/50">
                {c.category}
              </span>
            )}
          </div>

          {c.skills && c.skills.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {c.skills.map((skill) => (
                <span key={skill} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full border border-border/40">
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3 mt-2 text-xs flex-wrap">
            <button onClick={() => setZoom(true)} className="text-violet-600 hover:underline cursor-pointer">
              Agrandir l'image
            </button>
            {c.credentialId && (
              <span className="text-muted-foreground truncate">ID {c.credentialId}</span>
            )}
          </div>
        </div>
      </article>
    </>
  );
}