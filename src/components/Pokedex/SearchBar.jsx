import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default SearchBar; 
