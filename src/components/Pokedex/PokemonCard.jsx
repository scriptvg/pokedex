import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPokemonId, getPokemonImageUrl, capitalizeName } from '../../utils/pokemonUtils';
import { typeIcons } from '../../utils/typeIcons';
import { typeColors } from '../../utils/typeColors';
import { getPokemonDetails } from '../../services/pokemonService';

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const pokemonId = getPokemonId(pokemon.url);
  const imageUrl = getPokemonImageUrl(pokemonId);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    let mounted = true;
    getPokemonDetails(pokemon.name)
      .then(data => { if (mounted) setDetails(data); })
      .catch(() => {});
    return () => { mounted = false; };
  }, [pokemon.name]);

  return (
    <div
      onClick={() => navigate(`/pokedex/${pokemon.name}`)}
      className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center cursor-pointer hover:shadow-xl transition-shadow duration-200 group border border-gray-100 hover:border-red-400"
    >
      <div className="w-20 h-20 flex items-center justify-center relative mb-2">
        {/* Badge del ID */}
        <span className="absolute -top-2 -right-15 bg-gray-800 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md z-10 select-none">
          #{pokemonId.toString().padStart(3, '0')}
        </span>
        {!imgLoaded && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></span>
          </span>
        )}
        <img
          src={imageUrl}
          alt={pokemon.name}
          className={`w-20 h-20 object-contain transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>
      <span className="font-bold text-lg text-gray-800 group-hover:text-red-600 mb-1">
        {capitalizeName(pokemon.name)}
      </span>
      <div className="flex flex-wrap gap-1 justify-center mt-1">
        {details && details.types && details.types.map((typeInfo) => {
          const Icon = typeIcons[typeInfo.type.name];
          const color = typeColors[typeInfo.type.name] || { bg: 'bg-gray-100', text: 'text-gray-800' };
          return (
            <span
              key={typeInfo.type.name}
              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${color.bg} ${color.text}`}
            >
              {Icon && <Icon className="w-3 h-3 mr-0.5" />}
              {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonCard; 
