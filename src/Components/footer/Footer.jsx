import { Heart } from "lucide-react";

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.75 2.68 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="mt-20 w-full min-h-[180px]  bg-slate-900 text-slate-300">
      <div className="h-full flex  w-full flex-col items-center justify-around gap-8 px-6 py-10 md:min-h-[120px] md:flex-row">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide text-white">
            Pokédex
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Discover, search, and explore your favorite Pokémon.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-300">
          <a href="#" className="transition hover:text-white">
            Home
          </a>

          <a href="#" className="transition hover:text-white">
            Pokédex
          </a>

          <a href="#" className="transition hover:text-white">
            About
          </a>

          <a href="#" className="transition hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="icons flex gap-4 mb-10">
          <a
            href="#"
            aria-label="GitHub"
            className="rounded-full border border-slate-600 p-2 transition hover:bg-blue-500 hover:border-blue-500 hover:text-white"
            >
            <GithubIcon />
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="rounded-full border border-slate-600 p-2 transition hover:bg-sky-500 hover:border-sky-500 hover:text-white"
            >
            <TwitterIcon />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="rounded-full border border-slate-600 p-2 transition hover:bg-pink-500 hover:border-pink-500 hover:text-white"
            >
            <InstagramIcon />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 py-6 px-4">
        <p className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-slate-400">
          Made with <Heart size={16} className="fill-red-500 text-red-500" />
          using React & Tailwind CSS
        </p>

        <p className="mt-3 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Pokédex. Powered by PokéAPI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;