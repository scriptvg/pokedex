import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { typeIcons } from '../../utils/typeIcons';
import { typeColors } from '../../utils/typeColors';
import { getPokemonId, capitalizeName } from '../../utils/pokemonUtils';
import { getPokemonSpecies } from '../../services/pokemonSpeciesService';
import { getPokemonEvolutionChain } from '../../services/pokemonEvolutionService';
import { getPokemonImageUrl } from '../../utils/pokemonUtils';
import PokemonStats from './PokemonStats';
import { ArrowLeft } from 'lucide-react';

function PokemonDetail({ pokemon }) {
  const navigate = useNavigate();
  const [species, setSpecies] = useState(null);
  const [speciesLoading, setSpeciesLoading] = useState(true);
  const [evolutionChain, setEvolutionChain] = useState([]);
  const [evolutionLoading, setEvolutionLoading] = useState(true);

  useEffect(() => {
    if (!pokemon) return;
    setSpeciesLoading(true);
    getPokemonSpecies(pokemon.id)
      .then(data => setSpecies(data))
      .catch(() => setSpecies(null))
      .finally(() => setSpeciesLoading(false));
  }, [pokemon]);

  useEffect(() => {
    if (!species || !species.evolution_chain) return;
    setEvolutionLoading(true);
    const evolutionChainId = getPokemonId(species.evolution_chain.url);
    getPokemonEvolutionChain(evolutionChainId)
      .then(data => {
        // Procesar la cadena evolutiva
        const chain = [];
        let current = data.chain;
        while (current) {
          chain.push({
            name: current.species.name,
            image: getPokemonImageUrl(getPokemonId(current.species.url)),
          });
          if (current.evolves_to && current.evolves_to.length > 0) {
            current = current.evolves_to[0];
          } else {
            current = null;
          }
        }
        setEvolutionChain(chain);
      })
      .catch(() => setEvolutionChain([]))
      .finally(() => setEvolutionLoading(false));
  }, [species]);

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500 text-lg">Selecciona un Pokémon para ver sus detalles.</p>
      </div>
    );
  }

  const pokemonId = getPokemonId(pokemon.species.url);
  const mainType = pokemon.types[0].type.name;
  const Icon = typeIcons[mainType];
  const color = typeColors[mainType] || { bg: 'bg-gray-100', text: 'text-gray-800' };
  const bgGradient = {
    fire: 'from-orange-200 via-orange-100 to-yellow-100',
    water: 'from-blue-200 via-blue-100 to-cyan-100',
    grass: 'from-green-200 via-green-100 to-lime-100',
    electric: 'from-yellow-200 via-yellow-100 to-orange-100',
    psychic: 'from-pink-200 via-pink-100 to-purple-100',
    ice: 'from-cyan-100 via-blue-100 to-white',
    dragon: 'from-purple-200 via-indigo-100 to-blue-100',
    dark: 'from-gray-700 via-gray-900 to-black',
    fairy: 'from-pink-100 via-pink-200 to-purple-100',
    normal: 'from-gray-100 via-gray-50 to-white',
    fighting: 'from-orange-300 via-orange-100 to-yellow-100',
    flying: 'from-indigo-100 via-blue-100 to-white',
    poison: 'from-purple-200 via-purple-100 to-green-100',
    ground: 'from-yellow-300 via-yellow-100 to-orange-100',
    rock: 'from-yellow-400 via-yellow-200 to-gray-100',
    bug: 'from-lime-200 via-green-100 to-yellow-100',
    ghost: 'from-indigo-200 via-indigo-100 to-gray-100',
    steel: 'from-gray-300 via-gray-100 to-white',
  }[mainType] || 'from-white via-gray-50 to-yellow-50';

  // Extraer flavor text en español
  let flavorText = '';
  if (species && species.flavor_text_entries) {
    const entry = species.flavor_text_entries.find(e => e.language.name === 'es');
    flavorText = entry ? entry.flavor_text.replace(/\f|\n|\r/g, ' ') : '';
  }

  // Otros datos
  const speciesColor = species?.color?.name;
  const habitat = species?.habitat?.name;
  const shape = species?.shape?.name;
  const isLegendary = species?.is_legendary;
  const isMythical = species?.is_mythical;

  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${bgGradient} transition-all duration-300 animate-fade-in`}>
      {/* Header temático */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8 flex flex-col items-center shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 top-4 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow transition"
          title="Volver"
        >
          <ArrowLeft size={24} />
        </button>


        <div className="flex flex-col items-center justify-center py-2">
          <span className="bg-gray-800 text-white text-xs font-bold rounded-full px-3 py-1 shadow select-none mb-2 absolute z-2 translate-x-18
          -translate-y-20">#{pokemonId.toString().padStart(3, '0')}</span>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-48 h-48 object-contain drop-shadow-2xl bg-white/60 rounded-full border-4 border-white animate-fade-in mb-4"
          />
          <h2 className="text-4xl font-extrabold text-white text-center drop-shadow-lg mb-2 absolute translate-y-16">{capitalizeName(pokemon.name)}</h2>
          <div className='flex gap-2'>
          {pokemon.types.map((typeInfo) => {
              const Icon = typeIcons[typeInfo.type.name];
              const color = typeColors[typeInfo.type.name] || { bg: 'bg-gray-100', text: 'text-gray-800' };
              return (
                <span
                  key={typeInfo.type.name}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${color.bg} ${color.text}`}
                >
                  {Icon && <Icon className="w-4 h-4 mr-1" />}
                  {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Datos principales en horizontal + info extra */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          {/* Altura y Peso */}
          <div className="flex flex-row gap-6 w-full md:w-auto justify-center">
            <div className="bg-blue-50 p-4 rounded-lg flex flex-col items-center min-w-[120px] shadow">
              <span className="text-blue-600 font-medium flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" /></svg>
                Altura
              </span>
              <span className="text-xl font-bold text-blue-800">{pokemon.height / 10} m</span>
            </div>
            <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center min-w-[120px] shadow">
              <span className="text-green-600 font-medium flex items-center gap-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                Peso
              </span>
              <span className="text-xl font-bold text-green-800">{pokemon.weight / 10} kg</span>
            </div>
          </div>
          {/* Habilidades */}
          <div className="flex flex-row flex-wrap gap-2 items-center w-full md:w-auto justify-center">
            <span className="font-semibold text-gray-800 mr-2">Habilidades:</span>
            {pokemon.abilities.map((abilityInfo) => (
              <span
                key={abilityInfo.ability.name}
                className="bg-gray-50 p-2 rounded-md text-gray-700 font-medium text-sm shadow"
              >
                {abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1)}
              </span>
            ))}
          </div>
        </div>
        {/* Info adicional de la especie */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-yellow-50 p-4 rounded-lg shadow flex flex-col gap-2">
            <span className="font-semibold text-yellow-700">Descripción:</span>
            {speciesLoading ? (
              <span className="text-gray-400 text-sm">Cargando descripción...</span>
            ) : (
              <span className="text-gray-700 text-base">{flavorText}</span>
            )}
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-2">
            <span className="font-semibold text-gray-700">Datos de especie:</span>
            <span className="text-gray-700 text-sm">Color: <b>{speciesColor || '-'}</b></span>
            <span className="text-gray-700 text-sm">Hábitat: <b>{habitat || '-'}</b></span>
            <span className="text-gray-700 text-sm">Forma: <b>{shape || '-'}</b></span>
            <span className="text-gray-700 text-sm">Legendario: <b>{isLegendary ? 'Sí' : 'No'}</b></span>
            <span className="text-gray-700 text-sm">Mítico: <b>{isMythical ? 'Sí' : 'No'}</b></span>
          </div>
        </div>
        {/* Stats */}
        <PokemonStats stats={pokemon.stats} />
        {/* Cadena evolutiva */}
        {evolutionChain.length > 1 && (
          <div className="mt-10 bg-purple-50 p-4 rounded-lg shadow">
            <span className="font-semibold text-purple-700">Evolución:</span>
            {evolutionLoading ? (
              <div className="text-gray-400 text-sm">Cargando evolución...</div>
            ) : (
              <div className="flex flex-row flex-wrap gap-4 mt-2 items-center justify-center ">
                {evolutionChain.map((evo, idx) => (
                  <React.Fragment key={evo.name}>
                    <div className="flex flex-col items-center">
                      <img
                        src={evo.image}
                        alt={evo.name}
                        className="w-32 h-32 cursor-pointer transition-transform hover:scale-105"
                        onClick={() => navigate(`/pokedex/${evo.name}`)}
                      />
                      <span className="text-sm font-medium">{capitalizeName(evo.name)}</span>
                    </div>
                    {idx < evolutionChain.length - 1 && (
                      <span className="text-2xl text-purple-400">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonDetail;
