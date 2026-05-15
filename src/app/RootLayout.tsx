import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

export default function RootLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "px-3 py-1.5 rounded-lg text-sm font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
      : "px-3 py-1.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors";

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "block px-4 py-2.5 rounded-lg text-sm font-medium bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300"
      : "block px-4 py-2.5 rounded-lg text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors";

  const links = [
    { to: "/", label: "Accueil", end: true },
    { to: "/projects", label: "Projets" },
    { to: "/experience", label: "Parcours" },
    { to: "/education", label: "Formations" },
    { to: "/certifications", label: "Certifications" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 backdrop-blur bg-background/80">
        <nav className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <NavLink to="/" className="font-semibold text-violet-600 tracking-tight">
            MJT
          </NavLink>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={navClass}>
                {label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile : ThemeToggle + bouton hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                // Icône X
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône hamburger
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Menu mobile déroulant */}
        {menuOpen && (
          <div className="md:hidden border-t border-border/50 px-4 py-3 flex flex-col gap-1 bg-background/95 backdrop-blur">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={mobileNavClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        )}
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