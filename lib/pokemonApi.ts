/**
 * This file contains the functions to fetch data from the Pokemon API 
 */
const POKEMON_URL_API = "https://pokeapi.co/api/v2/";

export async function getPokemonList(url: string = POKEMON_URL_API + "pokemon?offset=0&limit=20") {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    const resultsWithImage = data.results.map((pokemon: any) => { 
      const id = pokemon.url.split("/")[6];
      const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`; 
      return {
        ...pokemon,
        id, 
        imageUrl,
      };
    });
      return {
        ...data,
        results: resultsWithImage,
      };
  } catch (error) {
    console.error("Error fetching data", error);
    return { results: [], next: null, error: true };
  }
}

export async function getPokemonName(name: string) {
  try {
    const response = await fetch(POKEMON_URL_API + `pokemon/${name}`);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data", error);
    return null;
  }
}  
