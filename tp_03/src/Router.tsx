import { Redirect, Route } from 'react-router-dom';
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { listOutline, informationCircleOutline } from 'ionicons/icons';
import PokemonListPage from './pages/PokemonListPage';
import PokemonDetailPage from './pages/PokemonDetailPage';

const Router: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tabs/pokedex" component={PokemonListPage} />
      <Route exact path="/tabs/detail" component={PokemonDetailPage} />
      <Route exact path="/tabs/detail/:id" component={PokemonDetailPage} />
      <Route exact path="/">
        <Redirect to="/tabs/pokedex" />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="pokedex" href="/tabs/pokedex">
        <IonIcon icon={listOutline} />
        <IonLabel>Pokédex</IonLabel>
      </IonTabButton>
      <IonTabButton tab="detail" href="/tabs/detail">
        <IonIcon icon={informationCircleOutline} />
        <IonLabel>Détail</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default Router;
