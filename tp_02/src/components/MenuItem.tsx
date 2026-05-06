import { IonIcon, IonItem, IonLabel, IonMenuToggle } from '@ionic/react';
import { MenuItemConfig } from './menuConfig';

type Props = Pick<MenuItemConfig, 'title' | 'icon' | 'path'>;

const MenuItem: React.FC<Props> = ({ title, icon, path }) => (
  <IonMenuToggle autoHide={false}>
    <IonItem routerLink={path} routerDirection="none" lines="none" detail={false}>
      <IonIcon icon={icon} slot="start" />
      <IonLabel>{title}</IonLabel>
    </IonItem>
  </IonMenuToggle>
);

export default MenuItem;
