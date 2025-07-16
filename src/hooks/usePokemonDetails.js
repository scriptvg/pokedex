import { useState } from 'react';
import { getPokemonDetails } from '../services/pokemonService';

export const usePokemonDetails = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = async (pokemonName) => {
    try {
      const details = await getPokemonDetails(pokemonName);
      setSelectedPokemon(details);
    } catch (error) {
      console.log(`Failed to fetch details for ${pokemonName}:`, error);
      setSelectedPokemon(null);
    }
  };

  return {
    selectedPokemon,
    handlePokemonClick
  };
}; 
