import React from 'react';
import PokemonCard from './PokemonCard';
import SearchBar from './SearchBar';
import Loading from '../Loading';


function PokemonList({ 
  pokemonData, 
  filteredPokemon,
  isLoading, 
  searchTerm,
  onSearchChange
}) {

  return (
    <div className="bg-white/90 mt-2 rounded-2xl shadow-lg p-4 sm:p-8 w-full max-w-6xl mx-auto transition-all duration-300">
      
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} onSearchChange={onSearchChange} />
      </div>
      {isLoading && pokemonData.length === 0 ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loading message="Cargando Pokémon..." />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-fade-in">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))}
          {isLoading && pokemonData.length > 0 && (
            <div className="col-span-full flex justify-center py-4">
              <Loading message="Cargando más Pokémon..." />
            </div>
          )}
        </div>
      )}
      {filteredPokemon.length === 0 && searchTerm && (
        <div className="flex flex-col items-center py-8">
          <span className="text-2xl text-gray-400 font-semibold mb-2">😢</span>
          <p className="text-gray-500 text-center text-lg font-medium">
            No se encontraron Pokémon con "{searchTerm}"
          </p>
        </div>
      )}
    </div>
  );
}

export default PokemonList; 
