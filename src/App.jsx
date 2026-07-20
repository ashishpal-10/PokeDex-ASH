
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';
import "dotenv"
// import Footer from './Components/footer/Footer';

function App() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("");

  const API = import.meta.env.VITE_POKI_URI;

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

  const searchData = pokemon.filter((pokemonData) =>
    pokemonData.name.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(searchData);



  return (
    <div className='w-full h-full mb-4'>
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <div className="w-full flex justify-center items-center gap-10 flex-col mb-10  px-6 py-10">
        <h1 className='text-6xl text-black font-bolder mb-20'>Let's catch Pokemon</h1>
        <div className="flex flex-wrap justify-center mt-10 gap-6 max-w-7xl">
          {searchData.map((pokemonData) => (
            <Card key={pokemonData.id} pokemonData={pokemonData} />
          ))}
        </div>
      {/* <Footer/> */}
      </div>
    </div>
  )

}

export default App
