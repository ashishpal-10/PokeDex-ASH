import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
   

      <div className="herobox mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 py-16 sm:m-10 lg:flex-row lg:px-10">
        {/* Left */}
        <div className="z-10 w-full max-w-xl text-center lg:text-left">
          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-900/10 px-4 py-2 text-sm font-medium tracking-[0.2em] text-black">
            DIGITAL POKÉDEX
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-gray-800 sm:text-6xl lg:text-7xl">
            Discover
            <br />
            <span className="text-gray-600 ">
              Every Pokémon <br />
                Instantly.
            </span>
            
          
          </h1>

          <p className="mt-8 text-base leading-8 text-gray-800 sm:text-lg">
            Explore Pokémon from every generation with detailed stats,
            abilities, evolutions, and types in one beautiful Pokédex.
          </p>

          <div className="btnbox mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <button className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-400">
              Explore Now
            </button>

            <button className="rounded-full border border-gray-500  px-8 py-4 font-semibold text-black backdrop-blur-xl transition duration-300 hover:bg-blue-500 hover:text-white">
              Random Pokémon
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex w-full justify-center">
          

          <img
            src="/public/3.svg"
            alt="Pokemon"
            className="relative z-10 w-[240px] transition duration-500 hover:scale-105 sm:w-[340px] lg:w-[460px]"
          />

         
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="animate-bounce text-3xl text-gray-500">↓</div>
      </div>
    </section>
  );
};

export default Hero;