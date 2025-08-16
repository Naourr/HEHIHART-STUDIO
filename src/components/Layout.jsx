// src/components/Layout.jsx
import { useEffect, useRef, useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";

export default function Layout() {
  const [dark, setDark] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // init from localStorage or system pref
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
    else setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // apply/remove `dark` class on <html>
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // measure header height -> CSS var (--header-h)
  useEffect(() => {
    const setVar = () => {
      const h = headerRef.current?.offsetHeight ?? 64;
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  return (
    <div className="min-h-screen bg-bg text-ink dark:bg-[#0B0B0C] dark:text-white transition-colors duration-200">
      {/* keep header above any hovered/zoomed cards */}
      <header
        ref={headerRef}
        className="px-6 py-4 flex items-center justify-between sticky top-0 z-50 isolate bg-bg/90 dark:bg-[#0B0B0C]/80 backdrop-blur border-b border-black/5 dark:border-white/10"
      >
        <Link to="/" className="font-medium tracking-wide">
          HEHIHART
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/works" className="hover:underline">
            Works
          </NavLink>
          <NavLink to="/about" className="hover:underline">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:underline">
            Contact
          </NavLink>

          {/* Dark mode toggle */}
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            className="ml-2 rounded-full border border-black/10 dark:border-white/20 px-3 py-1 text-xs hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {dark ? "☀︎ Light" : "☾ Dark"}
          </button>
        </nav>
      </header>

      {/* On Home remove padding so hero is edge-to-edge;
          other pages keep the comfortable layout paddings */}
      <main
        className={
          isHome ? "p-0" : "relative z-0 px-4 sm:px-6 md:px-10 lg:px-16 py-10"
        }
      >
        <Outlet />
      </main>

      {/* Hide footer on Home so hero fills the screen cleanly */}
      {!isHome && (
        <footer className="px-6 py-10 text-xs text-neutral-500 dark:text-neutral-400 border-t border-black/5 dark:border-white/10">
          © {new Date().getFullYear()} HEHIHART
        </footer>
      )}
    </div>
  );
}
