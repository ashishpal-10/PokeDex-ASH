import { useState } from "react";
import {
  RiMenu3Line,
  RiCloseLine,
  RiSearch2Line,
  
} from "@remixicon/react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-2xl border-b border-gray-200 shadow-sm">
      <div className=" max-w-7xl  h-20 px-6 flex items-center  sm:flex justify-between ">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">


          <h1 className="text-3xl  font-black tracking-wide text-gray-800">
            Pokédex
          </h1>
        </div>

        {/* Search */}

        <div className="hidden md:flex flex-1 justify-center px-10">
          <div className="relative w-full h-10 max-w-md">

            <input type="text" placeholder="Search Your Pokemon ...."   className="
      w-full
    rounded-xl
      border-gray-200
      bg-white
      p-6

     h-full

      text-gray-700
      placeholder:text-gray-400 
      placeholder:px-4
      shadow-md
      transition-all
      duration-300
      outline-none
      focus:border-blue-500
      focus:ring-4
      focus:ring-blue-200
      " />
          </div>

        </div>

        {/* Menu */}

        <div className="hidden md:flex items-center gap-8">
          <button className="font-medium hover:text-blue-600 transition">
            Home
          </button>

          <button className="font-medium hover:text-blue-600 transition">
            Favorites
          </button>
        </div>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-5 space-y-5">

          <div className="hidden md:flex flex-1 justify-center px-10">

            <div className="relative w-full max-w-lg group">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search Pokémon..."
                className="
      w-full
      rounded-full
      bg-white/70
      backdrop-blur-xl
      border
      border-gray-200
      py-3
      pl-14
      pr-5
      text-gray-700
      placeholder:text-gray-400
      shadow-md
      outline-none
      transition-all
      duration-300
      focus:border-blue-500
      focus:bg-white
      focus:shadow-xl
      focus:shadow-blue-200
      "
              />

            </div>

          </div>

          <button className="block w-full text-left">
            Home
          </button>

          <button className="block w-full text-left">
            Favorites
          </button>

        </div>
      )}
    </nav>
  );
};

export default Navbar;