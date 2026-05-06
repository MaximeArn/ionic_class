import {
  IonAccordion,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenuToggle,
} from '@ionic/react';
import { MenuItemConfig } from './menuConfig';

type Props = Pick<MenuItemConfig, 'id' | 'title' | 'icon' | 'subItems'>;

const SubMenu: React.FC<Props> = ({ id, title, icon, subItems = [] }) => (
  <IonAccordion value={id}>
    <IonItem slot="header" lines="none">
      <IonIcon icon={icon} slot="start" />
      <IonLabel>{title}</IonLabel>
    </IonItem>
    <IonList slot="content">
      {subItems.map((sub) => (
        <IonMenuToggle key={sub.path} autoHide={false}>
          <IonItem
            routerLink={sub.path}
            routerDirection="none"
            lines="none"
            detail={false}
            style={{ paddingLeft: '2rem' }}
          >
            <IonLabel>{sub.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ))}
    </IonList>
  </IonAccordion>
);

export default SubMenu;
