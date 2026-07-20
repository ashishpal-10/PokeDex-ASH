import { Heart, Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-wide text-black">
            Pokédex
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Discover, search, and explore your favorite Pokémon.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="transition hover:text-blue-600">
            Home
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Pokédex
          </a>

          <a href="#" className="transition hover:text-blue-600">
            About
          </a>

          <a href="#" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="rounded-full border border-gray-200 p-2 transition hover:bg-blue-500 hover:text-white"
          >
            <Github size={20} />
          </a>

          <a
            href="#"
            className="rounded-full border border-gray-200 p-2 transition hover:bg-sky-500 hover:text-white"
          >
            <Twitter size={20} />
          </a>

          <a
            href="#"
            className="rounded-full border border-gray-200 p-2 transition hover:bg-pink-500 hover:text-white"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 py-5">
        <p className="flex items-center justify-center gap-2 text-sm text-gray-500">
          Made with <Heart size={16} className="fill-red-500 text-red-500" />
          using React & Tailwind CSS
        </p>

        <p className="mt-2 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Pokédex. Powered by PokéAPI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;