import { Search } from "lucide-react";
import { useState } from "react";

const Navbar = ({search,setSearch}) => {

//  const [search,setSearch] = useState("");

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        
        {/* Logo */}
        <div className="logo flex items-center justify-center gap-3 cursor-pointer">
            <h1 className="text-4xl tracking-wide text-black font-extrabold">
              Pokédex
            </h1>
        
        </div>

        {/* Search */}
        
          <div className="inputbox flex items-center   justify-around rounded-xl border border-white/10 bg-white/5 px-8 backdrop-blur-xl transition-all duration-300 focus-within:border-blue-400 focus-within:shadow-lg focus-within:shadow-blue-500/20">
            <Search size={20} className="remix-icon text-gray-400 " />

            <input
              type="text"
              placeholder="Search Pokémon..."
              className="h-12 w-full bg-transparent  text-black placeholder:text-gray-500 focus:outline-none"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          </div>
     
      </div>

      {/* Mobile Search */}
      {/* <div className="px-5 pb-4 md:hidden">
        <div className="flex items-center rounded-full border border-white/10 bg-white/5 px-4 backdrop-blur-xl">
          <Search size={18} className="text-gray-400" />

          <input
            type="text"
            placeholder="Search Pokémon..."
            className="h-11 w-full bg-transparent px-3 text-white placeholder:text-gray-500 focus:outline-none"
          />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;