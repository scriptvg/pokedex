import axios from 'axios';

const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonList = async (limit = 20, offset = 0) => {
  try {
    const response = await axios.get(`${POKEMON_API_BASE_URL}?limit=${limit}&offset=${offset}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon list:', error);
    throw error;
  }
};

export const getPokemonDetails = async (pokemonName) => {
  try {
    const response = await axios.get(`${POKEMON_API_BASE_URL}${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon details for ${pokemonName}:`, error);
    throw error;
  };
}


