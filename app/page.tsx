/** 
 *  This is the main page of the app. It fetches the initial list of pokemons and renders the PokemonGrid component.
*/
import { PokemonGrid } from "@/components/pokemonGrid";
import { getPokemonList } from "@/lib/pokemonApi";

export default async function Home() {
  const {results, next} = await getPokemonList();
  return (
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-center">
        <PokemonGrid initialPokemonList={results} initialNextUrl={next}/>  
      </div>
  );
}
