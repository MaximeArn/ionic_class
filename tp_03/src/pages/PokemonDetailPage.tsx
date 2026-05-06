import { useParams } from 'react-router-dom';
import {
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonSkeletonText,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

const TYPE_COLORS: Record<string, string> = {
  fire: '#F08030',
  water: '#6890F0',
  grass: '#78C850',
  electric: '#F8D030',
  psychic: '#F85888',
  ice: '#98D8D8',
  dragon: '#7038F8',
  dark: '#705848',
  fairy: '#EE99AC',
  normal: '#A8A878',
  fighting: '#C03028',
  flying: '#A890F0',
  poison: '#A040A0',
  ground: '#E0C068',
  rock: '#B8A038',
  bug: '#A8B820',
  ghost: '#705898',
  steel: '#B8B8D0',
};

const PokemonDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const { pokemon, loading, error } = usePokemonDetail(id ?? '');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle style={{ textTransform: 'capitalize' }}>
            {!id ? 'Détail' : loading ? 'Chargement...' : (pokemon?.name ?? 'Pokémon')}
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {!id && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60%', gap: '1rem', opacity: 0.5 }}>
            <IonIcon icon={searchOutline} style={{ fontSize: '4rem' }} />
            <IonText style={{ textAlign: 'center' }}>
              <p>Sélectionne un Pokémon<br />depuis l'onglet Pokédex</p>
            </IonText>
          </div>
        )}

        {id && error && (
          <IonText color="danger">
            <p style={{ padding: '1rem' }}>{error}</p>
          </IonText>
        )}

        {id && loading && (
          <div style={{ padding: '1rem' }}>
            <IonSkeletonText animated style={{ height: '220px', borderRadius: '8px', marginBottom: '1rem' }} />
            <IonSkeletonText animated style={{ height: '20px', marginBottom: '0.5rem' }} />
            <IonSkeletonText animated style={{ height: '20px', marginBottom: '0.5rem' }} />
            <IonSkeletonText animated style={{ height: '20px' }} />
          </div>
        )}

        {id && !loading && pokemon && (
          <>
            <div style={{ background: 'var(--ion-color-light)', textAlign: 'center', padding: '1.5rem 1rem 1rem' }}>
              <IonImg
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                style={{ width: '180px', height: '180px', margin: '0 auto' }}
              />
              <IonText color="medium" style={{ display: 'block', fontSize: '0.85rem' }}>
                #{String(pokemon.id).padStart(3, '0')}
              </IonText>
              <h1 style={{ textTransform: 'capitalize', margin: '0.25rem 0 0.75rem' }}>
                {pokemon.name}
              </h1>
              <div>
                {pokemon.types.map((t) => (
                  <IonChip
                    key={t.type.name}
                    style={{ background: TYPE_COLORS[t.type.name] ?? '#888', color: '#fff', fontWeight: 'bold' }}
                  >
                    <IonLabel style={{ textTransform: 'capitalize' }}>{t.type.name}</IonLabel>
                  </IonChip>
                ))}
              </div>
            </div>

            <IonList lines="inset" style={{ marginTop: '1rem' }}>
              <IonItem>
                <IonLabel>Height</IonLabel>
                <IonText slot="end">{(pokemon.height / 10).toFixed(1)} m</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Weight</IonLabel>
                <IonText slot="end">{(pokemon.weight / 10).toFixed(1)} kg</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Base Experience</IonLabel>
                <IonText slot="end">{pokemon.base_experience}</IonText>
              </IonItem>
              <IonItem>
                <IonLabel>Abilities</IonLabel>
                <IonText slot="end" style={{ textTransform: 'capitalize' }}>
                  {pokemon.abilities.map((a) => a.ability.name.replace('-', ' ')).join(', ')}
                </IonText>
              </IonItem>
            </IonList>

            <div style={{ padding: '1rem 1.25rem' }}>
              <h3 style={{ margin: '0 0 1rem' }}>Base Stats</h3>
              {pokemon.stats.map((s) => (
                <div key={s.stat.name} style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <IonText style={{ textTransform: 'capitalize', fontSize: '0.85rem' }}>
                      {s.stat.name.replace('-', ' ')}
                    </IonText>
                    <IonText style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>{s.base_stat}</IonText>
                  </div>
                  <IonProgressBar
                    value={s.base_stat / 255}
                    color={s.base_stat > 100 ? 'success' : s.base_stat > 60 ? 'warning' : 'danger'}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PokemonDetailPage;
