import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({ title, children }) => (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>{children}</IonContent>
  </IonPage>
);

export default PageLayout;
