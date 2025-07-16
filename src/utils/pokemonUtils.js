// Extraer el ID del Pokémon de su URL
export const getPokemonId = (pokemonUrl) => {
  const urlParts = pokemonUrl.split('/');
  return urlParts[urlParts.length - 2];
};

// Generar la URL de la imagen del Pokémon
export const getPokemonImageUrl = (pokemonId) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

// Capitalizar la primera letra del nombre
export const capitalizeName = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}; 
