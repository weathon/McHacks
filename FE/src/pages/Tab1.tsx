import { IonList, IonItem, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow, IonThumbnail, IonImg, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { IonCard } from '@ionic/react';
import Reat ,{useState} from react;


import './Tab1.css';

type Item = {
  src: string;
  text: string;
};

const items: Item[] = [{ src: 'https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27bar%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27January%27%2C%20%27February%27%2C%20%27March%27%2C%20%27April%27%2C%20%27May%27%2C%20%27June%27%2C%20%27July%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%201%27%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgba(255%2C%2099%2C%20132%2C%200.5)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B-31%2C%20-70%2C%20-30%2C%20-33%2C%20-9%2C%2014%2C%20-41%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27Dataset%202%27%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgba(54%2C%20162%2C%20235%2C%200.5)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B73%2C%2041%2C%2029%2C%2061%2C%20-65%2C%2059%2C%2038%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27Bar%20Chart%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20anchor%3A%20%27center%27%2C%0A%20%20%20%20%20%20%20%20align%3A%20%27center%27%2C%0A%20%20%20%20%20%20%20%20color%3A%20%27%23666%27%2C%0A%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20weight%3A%20%27normal%27%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A', text: 'Sample Chart' }];


const Tab1: any = () => {
  const [data, setData] = useSate([]);

  const Http = new XMLHttpRequest();
  const url='/cook';
  Http.open("GET", url);
  Http.send();
  
  Http.onreadystatechange = (e) => {
    setData(Http.responseText)
  }
  
  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Main Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Main page</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1><center>Main Page</center></h1>
        
        <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg src={image.src} style={{ width: '200px', height: '50px' }}/>
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>

        <IonCard>
        <IonGrid>
        <IonRow>
          <IonCol size-md="6">Graph1</IonCol>
          <IonCol size-md="6">Graph2</IonCol>
        </IonRow>
      </IonGrid>
      <IonCardHeader>
        <IonCardTitle>Total Liquid</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Your total liquid intake is {data.latte_ML_ammount + data.soda_ML_amount + + data.Orange_Juice_ML_amount
        + data.Coke_ML_Ammount + data.flavoured_coke_ML_amount + data.RedBull_ML_amount + data.Flavoured_energydrink_ML_amount + 
        data.Wine_ML_amount + data.White_Wine_ML_amount + data.Black_Coffee_ML_amount + data.Tomatao_Juice_ML_amount + data.Apple_Juice_ML_amount + data.Mtn_Dew_ML_amount
    } ml
      </IonCardContent>
      </IonCard>

        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Alcohol Content</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Your total alcohol % is {data.alcohol_amount}
      </IonCardContent>
      </IonCard>

      <IonCard>
      <IonCardHeader>
        <IonCardTitle>Coffee Content</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Your total coffee content is {data.coffee_ML} ml
      </IonCardContent>
      </IonCard>



      </IonContent>
    </IonPage>
  );
  
};

export default Tab1;
