import React from "react";
import  typeStyles  from "../../data/Pokestyle.js"; // or adjust based on your export

const Card = ({ pokemonData }) => {
  return (
    <div className="w-full  max-w-[360px] h-[500px] rounded-2xl shadow-lg flex flex-col items-center p-4 text-center mx-auto bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

      {/* Top */}
      <div className="w-full h-[75%] flex items-center justify-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-[80%] h-[75%] object-contain transition-all duration-500 hover:scale-110"
        />
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col gap-4 py-4">
        <h2 className="text-3xl font-bold capitalize">
          {pokemonData.name}
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {pokemonData.types.map((type, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-semibold capitalize text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                typeStyles[type.type.name] || "bg-gray-500"
              }`}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;