import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/react';
import { Eventcalendar } from '@mobiscroll/react';
import React, { useEffect, useState } from 'react';

import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';


const Tab2: React.FC = () => {
  async function getcal() {
    const res = await fetch("http://127.0.0.1:8000/get_cal")
    const ans = await res.json()
    for(var i=0;i<ans.length;i++)
    {
      ans[i].start = new Date(ans[i].start);
      ans[i].end = new Date(ans[i].start);
    }
    console.log(ans)
    setEvents(ans)
  }
  const view = React.useMemo(() => {
    return {
      timeline: {
        type: 'month'
      }
    };
  }, []);

  const [myEvents, setEvents] = useState([{
    start: new Date(2020, 2, 18, 8, 0),
    end: new Date(2020, 2, 18, 17, 0),
    title: 'My First Event'
  }, {
    start: new Date(2020, 2, 18, 9, 0),
    end: new Date(2020, 2, 20, 13, 0),
    title: 'My Second Event'
  }])
  
  // useEffect(()=>{
  //   getcal()
  // },[])
  // setEvents
  const myResources = [{
    id: 1,
    name: 'Drink',
    color: '#e9ec12'
  }]

  // , {
  //   id: 2,
  //   name: 'Juice',
  //   color: '#239a21'
  // }, {
  //   id: 3,
  //   name: 'Water',
  //   color: '#ff0101'
  // }, {
  //   id: 4,
  //   name: 'Tea',
  //   color: '#d8ca1a'
  // }, {
  //   id: 5,
  //   name: 'Milk',
  //   color: '#8f1ed6'
  // }, {
  //   id: 6,
  //   name: 'Alcohol',
  //   color: '#01adff'
  // }];
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
                  <img alt="Silhouette of mountains" src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png" />
                </IonThumbnail>
                <IonLabel>Coffee - 9:30am</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png" />
                </IonThumbnail>
                <IonLabel>Juice - 11:00am</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png" />
                </IonThumbnail>
                <IonLabel>Water - 11:30am</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img alt="Silhouette of mountains" src="https://icons.iconarchive.com/icons/graphicloads/food-drink/256/drink-icon.png" />
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
