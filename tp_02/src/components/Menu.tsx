import {
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { menuOutline } from 'ionicons/icons';
import { menuItems } from './menuConfig';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const Menu: React.FC = () => (
  <IonMenu contentId="main">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
        <IonButtons slot="end">
          <IonMenuToggle>
            <IonButton>
              <IonIcon icon={menuOutline} />
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonAccordionGroup>
        {menuItems.map((item) =>
          item.subItems ? (
            <SubMenu key={item.id} id={item.id} title={item.title} icon={item.icon} subItems={item.subItems} />
          ) : (
            <MenuItem key={item.id} title={item.title} icon={item.icon} path={item.path} />
          )
        )}
      </IonAccordionGroup>
    </IonContent>
  </IonMenu>
);

export default Menu;
