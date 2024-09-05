/**
 *  This file is responsible for rendering the pokemon page
*/
import { getPokemonName } from '@/lib/pokemonApi';
import { PokemonImage } from '@/components/pokemonImage';

export default async function pokemonName({ params }: { params: { pokemonName: string }}) {
  const { pokemonName } = params;
  const pokemonObject = await getPokemonName(pokemonName);
  const frontDefault = pokemonObject.sprites.other['official-artwork'].front_default;
  const frontShiny = pokemonObject.sprites.other['official-artwork'].front_shiny;
  return (
    <div className='bg-black opacity-85 text-rose-100 max-w-full lg:w-2/4 md:w-3/4
    border border-gray-300 rounded-lg shadow-lg p-4 m-auto my-6'>
      <h1 className='text-4xl font-bold pt-4 text-center'>
        #{pokemonObject.id}. {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <div className='flex justify-center'>
        <PokemonImage
          normalImage={frontDefault}
          shinyImage={frontShiny}
          name={pokemonName}
        />
      </div>
      <h3 className='text-center mt-4'>
        Weight: {pokemonObject.weight} kg - Height: {pokemonObject.height} cm
      </h3>
      <div className='flex flex-col items-center'>
        {pokemonObject.stats.map((statObject: any) => {
          const statName = statObject.stat.name;
          const statValue = statObject.base_stat;
          const normalizedStatValue = Math.min(statValue, 100); 
          return (
            <div className='flex items-center w-full mt-2' key={statName}>
              <h3 className='p-3 w-full text-left'>{statName}: {statValue}%</h3>
              <div className='relative w-full h-4 bg-gray-300 rounded-lg overflow-hidden'>
                <div
                  className='absolute top-0 left-0 h-full bg-green-500'
                  style={{ width: `${normalizedStatValue}%` }} 
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-6'>
        <h3 className='text-2xl font-bold text-center'>Abilities</h3>
        <ul className='list-disc list-inside text-center'>
          {pokemonObject.abilities.map((abilityObject: any) => (
            <li key={abilityObject.ability.name}>
              {abilityObject.ability.name.charAt(0).toUpperCase() + abilityObject.ability.name.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
