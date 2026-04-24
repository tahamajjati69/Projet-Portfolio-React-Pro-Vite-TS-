import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace XXXX with your Formspree ID
    await fetch("https://formspree.io/f/XXXX", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setSent(true);
  }

  return (
    <section className="grid gap-8 md:grid-cols-2">
      <Helmet>
        <title>Contact — MAJJATI MOHAMED TAHA</title>
        <meta name="description" content="Contactez MAJJATI MOHAMED TAHA pour toute opportunité professionnelle." />
      </Helmet>

      <div>
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-muted-foreground mt-2 leading-relaxed">
          Disponible pour des opportunités de développement web ou mobile. N'hésitez pas à me contacter !
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex gap-3 text-sm">
            <span className="text-muted-foreground w-24">Nom</span>
            <span className="font-medium">{profile.name}</span>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="text-muted-foreground w-24">Email</span>
            <a href={`mailto:${profile.email}`} className="text-violet-600 hover:underline">
              {profile.email}
            </a>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="text-muted-foreground w-24">Localisation</span>
            <span>{profile.location}</span>
          </div>
          <div className="flex gap-3 text-sm">
            <span className="text-muted-foreground w-24">Disponible</span>
            <span className="text-emerald-600 font-medium">Oui</span>
          </div>
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
      </div>

      <div>
        {sent ? (
          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6 text-center">
            <p className="text-emerald-700 dark:text-emerald-400 font-medium">
              Message envoyé avec succès !
            </p>
            <p className="text-sm text-muted-foreground mt-1">Je vous répondrai dans les plus brefs délais.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Nom complet</label>
              <input
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full border border-border/50 rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:border-violet-400"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Email</label>
              <input
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className="w-full border border-border/50 rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:border-violet-400"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Bonjour Taha, je souhaite..."
                className="w-full border border-border/50 rounded-lg px-3 py-2 text-sm bg-background focus:outline-none focus:border-violet-400 resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-700 text-white text-sm py-2.5 rounded-lg transition-colors font-medium"
            >
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
