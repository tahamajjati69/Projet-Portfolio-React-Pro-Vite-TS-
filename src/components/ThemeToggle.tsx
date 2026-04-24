import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      className="ml-2 border border-border/50 rounded-lg px-3 py-1.5 text-sm hover:bg-secondary transition-colors"
      onClick={() => setDark(!dark)}
      aria-label="Basculer le thème"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
