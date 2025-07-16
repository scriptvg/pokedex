import axios from 'axios';

const POKEMON_EVOLUTION_API_BASE_URL = 'https://pokeapi.co/api/v2/evolution-chain/';

export const getPokemonEvolutionChain = async (evolutionChainId) => {
  try {
    const response = await axios.get(`${POKEMON_EVOLUTION_API_BASE_URL}${evolutionChainId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Pokémon evolution chain for ${evolutionChainId}:`, error);
    throw error;
  }
};
