
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState, useRef } from 'react';
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import Pagination from './Components/Pagination/Pagination';
import Footer from './Components/footer/Footer';
import useTheme from './hooks/useTheme';


const PER_PAGE = 20;

function App() {
  const { dark, toggleTheme } = useTheme();
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsRef = useRef(null);

  // const API = import.meta.env.VITE_POKI_URI;
  
  const API = "https://pokeapi.co/api/v2/pokemon?limit=20";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API)
      const data = await res.json();
      // console.log(data)



      const detailedpokemonData = data.results.map(async (curpokemon) => {
        const res = await fetch(curpokemon.url);
        const data = await res.json()
        return data;

      })

      // console.log(detailedpokemonData)

      const detailedresponse = await Promise.all(detailedpokemonData);
      setPokemon(detailedresponse);
      console.log(detailedresponse);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, [])

  const query = search.trim().toLowerCase();

  const searchData = query
    ? pokemon.filter((pokemonData) =>
        pokemonData.name.toLowerCase().includes(query)
      )
    : pokemon;

  const noResults = query !== "" && searchData.length === 0;

  const totalPages = Math.ceil(searchData.length / PER_PAGE);

  const safePage = totalPages > 0 ? Math.min(currentPage, totalPages) : 1;

  const paginatedData = searchData.slice(
    (safePage - 1) * PER_PAGE,
    safePage * PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages || page === safePage) return;
    setCurrentPage(page);
    cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  return (
    <div className='w-full h-full mb-4'>
      <Navbar search={search} setSearch={handleSearch} dark={dark} toggleTheme={toggleTheme} />
      <Hero />
      <div ref={cardsRef} className="w-full flex justify-center items-center gap-10 flex-col mb-10  px-6 py-10">
        <h1 className='text-6xl text-black dark:text-white font-bolder mb-20'>Let's catch Pokemon</h1>
        <div className="flex flex-wrap justify-center mt-10 gap-6 max-w-7xl">
          {paginatedData.map((pokemonData) => (
            <Card key={pokemonData.id} pokemonData={pokemonData} />
          ))}
        </div>
        {noResults && (
          <p className="text-2xl text-gray-500 dark:text-gray-400 mt-6">
            No Pokémon found for "{search}".
          </p>
        )}
        {totalPages > 1 && (
          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      <Footer />
      </div>
    </div>
  )

}

export default App
