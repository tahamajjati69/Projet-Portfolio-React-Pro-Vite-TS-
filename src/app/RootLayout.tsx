import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function RootLayout() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "px-3 py-1.5 rounded-lg text-sm font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
      : "px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors";

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur bg-background/80">
        <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
          <NavLink to="/" className="font-semibold text-violet-600 tracking-tight">
            MJT
          </NavLink>
          <div className="flex items-center gap-1">
            <NavLink to="/" end className={navClass}>
              Accueil
            </NavLink>
            <NavLink to="/projects" className={navClass}>
              Projets
            </NavLink>
            <NavLink to="/experience" className={navClass}>
              Parcours
            </NavLink>
            <NavLink to="/education" className={navClass}>
              Formations
            </NavLink>
            <NavLink to="/certifications" className={navClass}>
              Certifications
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-border/50 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · Marrakech, Maroc
      </footer>
    </div>
  );
}
