import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonToggle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
      <IonItem>
        <IonLabel>Lights On</IonLabel>
        <IonToggle slot="end"></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Alcohol Detection On/Off</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Coffee detection On/Off</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
      <IonItem>
        <IonLabel>Metric/US Units</IonLabel>
        <IonToggle slot="end" checked={true}></IonToggle>
      </IonItem>
    </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
