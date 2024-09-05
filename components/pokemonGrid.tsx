/**
 *  This component is used to display a grid of Pokemon cards.
*/
"use client"

import { useState } from "react";
import { PokemonCard } from "./pokemonCard";
import { getPokemonList } from "@/lib/pokemonApi";

interface PokemonGridProps {
  initialPokemonList: any[]; 
  initialNextUrl: string | null; 
}

export function PokemonGrid({ initialPokemonList, initialNextUrl }: PokemonGridProps) {
  const [pokemonList, setPokemonList] = useState(initialPokemonList || []);
  const [nextUrl, setNextUrl] = useState<string | null>(initialNextUrl);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const searchFilter = (pokemons: any[]) => {
    return pokemons.filter((pokemon: any) => {
        return pokemon.name.toLowerCase().includes(searchText.toLowerCase());
      });
    }
  const filteredPokemons = searchFilter(pokemonList);

  const loadMorePokemons = async () => {
    if (nextUrl) {
      setLoading(true); // Start Load 
      setError(false); 
      try {
        const data = await getPokemonList(nextUrl); // more pokemon
        setPokemonList((prevPokemons) => [...prevPokemons, ...data.results]);
        setNextUrl(data.next);
      } catch (error) {
       setError(true); 
      } finally {
        setLoading(false); // End Load
      }
    }
  };
  return (
    <>
      <div className="flex justify-center mt-16 md:mt-12 lg:mt-2 lg:pb-4 ">
        <input
          type="text"
          value={searchText}
          id="pokemonName"
          autoComplete="off"
          placeholder="Search Name Pokemon..."
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md p-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>} {/* Mensaje de error */}
      <div className="mb-9 grid text-center md:mb-6 lg:mb-2 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-center">
        <div className="grid w-full max-w-sm items-center gap-1.5">
        </div>
      </div>
      {filteredPokemons.map((pokemon: any) => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            id={pokemon.id}
            imageUrl={pokemon.imageUrl}
          />
        )
      })}

      {loading ? ( 
        <p className="text-center">Loading more Pokémon...</p>
      ) : (
            nextUrl && (
              <div className="text-center mt-4">
                <button onClick={loadMorePokemons} className="px-4 py-2 bg-rose-200 text-black rounded border border-black hover:bg-white hover:text-rose-300">
                  Load More...
                </button>
              </div>
            )
          )}
    </>
  );
}