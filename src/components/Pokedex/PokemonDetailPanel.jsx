import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../../services/pokemonService';
import PokemonDetail from './PokemonDetail';
import Loading from '../Loading';

function PokemonDetailPanel() {
  const { pokemonName } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPokemonDetails(pokemonName)
      .then(data => setPokemon(data))
      .catch(() => setPokemon(null))
      .finally(() => setLoading(false));
  }, [pokemonName]);

  if (loading) return <Loading message="Cargando detalles..." />;

  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetailPanel; 
