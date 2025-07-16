import axios from 'axios';

const POKEMON_SPECIES_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species/';

export const getPokemonSpecies = async (pokemonIdOrName) => {
  try {
    const response = await axios.get(`${POKEMON_SPECIES_API_BASE_URL}${pokemonIdOrName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon species for ${pokemonIdOrName}:`, error);
    throw error;
  }
};
