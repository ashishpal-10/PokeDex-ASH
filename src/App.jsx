
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/HeroSection/Hero';

function App() {
  const [pokemon, setPokemon] = useState([])

  const API = "https://pokeapi.co/api/v2/pokemon?limit=100";

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





  return (
    <div className='w-full h-full mb-4'>
  <Navbar/>
  <Hero />
 <div className="w-full flex justify-center items-center gap-10 flex-col mb-10  px-6 py-10">
  <h1 className='text-6xl text-black font-bolder mb-20'>Let's catch Pokemon</h1>
  <div className="flex flex-wrap justify-center mt-10 gap-6 max-w-7xl">
    {pokemon.map((pokemonData) => (
      <Card key={pokemonData.id} pokemonData={pokemonData} />
    ))}
  </div>
</div>
  </div>
  )

}

export default App
