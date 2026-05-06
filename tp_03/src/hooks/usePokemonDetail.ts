import { useState, useEffect } from 'react';
import { PokemonDetail } from '../types/pokemon';

export function usePokemonDetail(id: string) {
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setPokemon(null);
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then(setPokemon)
      .catch(() => setError('Failed to load Pokémon details'))
      .finally(() => setLoading(false));
  }, [id]);

  return { pokemon, loading, error };
}
