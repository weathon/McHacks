import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import React from 'react';
import { Eventcalendar } from '@mobiscroll/react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {

  const view = React.useMemo(() => {
    return {
        timeline: {
            type: 'month'
        }
    };
}, []);

const myEvents = React.useMemo(() => {
  return [{
      start: '2023-01-02T00:00',
      end: '2023-01-05T00:00',
      title: 'Event 1',
      resource: 1
  }, {
      start: '2023-01-10T09:00',
      end: '2023-01-15T15:00',
      title: 'Event 2',
      resource: 3
  }, {
      start: '2023-01-20T00:00',
      end: '2023-01-23T00:00',
      title: 'Event 10',
      resource: 12
  }]
}, []);

const myResources = [{
  id: 1,
  name: 'Coffee',
  color: '#e9ec12'
}, {
  id: 2,
  name: 'Juice',
  color: '#239a21'
}, {
  id: 3,
  name: 'Water',
  color: '#ff0101'
}, {
  id: 4,
  name: 'Tea',
  color: '#d8ca1a'
}, {
  id: 5,
  name: 'Milk',
  color: '#8f1ed6'
}, {
  id: 6,
  name: 'Alcohol',
  color: '#01adff'
}];
  return (

    
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Timeline</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Timeline of Liquids Consumed</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      <Eventcalendar
           view={{
        timeline: {
            type: 'week'
        }
    }}
            data={myEvents}
            resources={myResources}
       />
        <IonList>
          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Coffee - 9:30am</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Juice - 11:00am</IonLabel>
          </IonItem>

          <IonItem>
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Water - 11:30am</IonLabel>
          </IonItem>

          <IonItem lines="none">
            <IonThumbnail slot="start">
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
            </IonThumbnail>
            <IonLabel>Water - 1:00pm</IonLabel>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
