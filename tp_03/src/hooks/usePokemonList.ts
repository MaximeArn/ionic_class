import { useState, useEffect } from 'react';
import { PokemonListItem } from '../types/pokemon';

export function usePokemonList() {
  const [pokemon, setPokemon] = useState<PokemonListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((data) => {
        const items: PokemonListItem[] = data.results.map(
          (p: { name: string; url: string }) => {
            const id = parseInt(p.url.split('/').filter(Boolean).pop()!);
            return { id, name: p.name, url: p.url };
          }
        );
        setPokemon(items);
      })
      .catch(() => setError('Failed to load Pokémon'))
      .finally(() => setLoading(false));
  }, []);

  return { pokemon, loading, error };
}
