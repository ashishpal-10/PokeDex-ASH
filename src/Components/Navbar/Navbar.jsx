import React, { useRef } from "react";
import { Search, X, Sun, Moon } from "lucide-react";

export default function Navbar({ search, setSearch, dark, toggleTheme }) {
  const [searchOpen, setSearchOpen] = React.useState(false);
  const inputRef = useRef(null);

  const clearSearch = () => setSearch("");

  const closeOnMobile = () => {
    setSearchOpen(false);
    clearSearch();
  };

  const inputClass =
    "w-full pl-10 pr-10 py-2.5 text-base bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-900 px-4 py-3 rounded-b-2xl border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors">
      <div className="flex items-center justify-around gap-4 h-20">
        {/* Left Side: Logo and Title */}
        <div className="flex items-center space-x-3 shrink-0">
          {/* CSS Pokéball Icon */}
          <div className="relative w-13 h-13 rounded-full border-[2.5px] border-slate-800 bg-white overflow-hidden flex flex-col justify-between before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-slate-800 before:top-1/2 before:-translate-y-1/2 after:content-[''] after:absolute after:w-2 after:h-2 after:bg-white after:border-2 after:border-slate-800 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
            <div className="h-1/2 bg-red-500"></div>
            <div className="h-1/2 bg-white"></div>
          </div>

          {/* Title Text */}
          <span className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tight">PokeDex</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>

          {/* Desktop: always-visible search bar */}
          <div className="hidden md:block relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
            <input
              type="text"
              placeholder="Search Pokémon..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Escape") clearSearch();
              }}
              className={inputClass}
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
            />
            {search && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-red-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile: search icon button */}
          <button
            onClick={() => setSearchOpen((open) => !open)}
            aria-label="Toggle search"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {searchOpen ? <X className="w-6 h-6" /> : <Search className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile: expanded search row */}
      {searchOpen && (
        <div className="md:hidden mt-10 relative">
          <Search className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500 pointer-events-none" />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            placeholder="Search Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") closeOnMobile();
            }}
            className={inputClass}
            style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem", paddingTop: "0.625rem", paddingBottom: "0.625rem" }}
          />
          {search && (
            <button
              onClick={clearSearch}
              aria-label="Clear search"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 dark:text-slate-500 hover:text-red-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
