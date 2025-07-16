import { useState, useEffect } from 'react';
import { getPokemonList } from '../services/pokemonService';

export const usePokemonList = (limit = 20) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMorePokemons();
    // eslint-disable-next-line
  }, []);

  const loadMorePokemons = async () => {
    setIsLoading(true);
    try {
      const data = await getPokemonList(limit, offset);
      setPokemonData(prev => {
        // Filtrar duplicados por nombre
        const existingNames = new Set(prev.map(p => p.name));
        const newPokemons = data.results.filter(p => !existingNames.has(p.name));
        return [...prev, ...newPokemons];
      });
      setOffset(prev => prev + limit);
      if (!data.next) setHasMore(false);
    } catch (error) {
      console.log('Failed to fetch pokemon:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    pokemonData,
    isLoading,
    hasMore,
    loadMorePokemons
  };
}; 
