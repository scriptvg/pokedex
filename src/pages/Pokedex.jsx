import React, { useEffect, useCallback } from 'react';
import { usePokemonList } from '../hooks/usePokemonList';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import PokemonList from '../components/Pokedex/PokemonList';

const LIMIT = 20;

function Pokedex() {
  const { pokemonData, isLoading, hasMore, loadMorePokemons } = usePokemonList(LIMIT);
  const { searchTerm, setSearchTerm, filteredPokemon } = usePokemonSearch(pokemonData);

  const handleScroll = useCallback(() => {
    if (isLoading || !hasMore) return;
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - 200;
    if (scrollPosition >= threshold) {
      loadMorePokemons();
    }
  }, [isLoading, hasMore, loadMorePokemons]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-100 via-white to-blue-100">
      <div className="min-h-screen max-w-7xl mx-auto px-2 sm:px-6 py-8 flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6 drop-shadow-md tracking-tight text-center select-none">
          Pokédex
        </h1>
        <PokemonList
          pokemonData={pokemonData}
          filteredPokemon={filteredPokemon}
          isLoading={isLoading}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
      </div>
    </div>
  );
}

export default Pokedex;
