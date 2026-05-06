import { useState, useMemo } from 'react';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonSearchbar,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { usePokemonList } from '../hooks/usePokemonList';
import PokemonCard from '../components/PokemonCard';

const PokemonListPage: React.FC = () => {
  const { pokemon, loading, error } = usePokemonList();
  const [search, setSearch] = useState('');

  const filtered = useMemo(
    () =>
      pokemon.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          String(p.id).includes(search)
      ),
    [pokemon, search]
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Pokédex</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar
            value={search}
            onIonInput={(e) => setSearch(e.detail.value ?? '')}
            placeholder="Search by name or number..."
            debounce={150}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {error && (
          <IonText color="danger">
            <p style={{ padding: '1rem' }}>{error}</p>
          </IonText>
        )}
        <IonGrid>
          <IonRow>
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <IonCol key={i} size="4">
                    <IonSkeletonText animated style={{ height: '130px', borderRadius: '8px' }} />
                  </IonCol>
                ))
              : filtered.map((p) => (
                  <IonCol key={p.id} size="4">
                    <PokemonCard pokemon={p} />
                  </IonCol>
                ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PokemonListPage;
