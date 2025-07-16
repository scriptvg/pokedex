import { useState, useMemo } from 'react';

export const usePokemonSearch = (pokemonData) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemon = useMemo(() => {
    return pokemonData.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pokemonData, searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredPokemon
  };
}; 
