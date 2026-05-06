import { IonCard, IonCardContent, IonImg, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { PokemonListItem } from '../types/pokemon';

const PokemonCard: React.FC<{ pokemon: PokemonListItem }> = ({ pokemon }) => {
  const history = useHistory();

  return (
    <IonCard onClick={() => history.push(`/tabs/detail/${pokemon.id}`)} style={{ cursor: 'pointer', margin: '4px' }}>
      <IonImg
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        alt={pokemon.name}
        style={{ width: '80px', height: '80px', margin: '8px auto 0', display: 'block', imageRendering: 'pixelated' }}
      />
      <IonCardContent style={{ textAlign: 'center', padding: '4px 4px 8px' }}>
        <IonText color="medium" style={{ fontSize: '0.65rem', display: 'block' }}>
          #{String(pokemon.id).padStart(3, '0')}
        </IonText>
        <strong style={{ textTransform: 'capitalize', fontSize: '0.8rem' }}>{pokemon.name}</strong>
      </IonCardContent>
    </IonCard>
  );
};

export default PokemonCard;
