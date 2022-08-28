import React from 'react';
import { IonMenu, IonIcon, IonMenuButton, IonHeader,IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonRouterOutlet } from '@ionic/react';
import { menuOutline } from "ionicons/icons";
import { menuController } from "@ionic/core";

const Drawer: React.FC = () => (
  <IonMenu
    side="start"
    menuId="drawernavigator"
    content-id="drawernavigator"
    swipe-gesture={true}
    disabled={false}
    maxEdgeStart={100}
    hidden={false}
    type="overlay"
  >
    <IonHeader translucent>
      <IonToolbar color="primary">
        <IonTitle>
          <IonIcon slot="start" icon={menuOutline}></IonIcon>
        </IonTitle>
        <IonButtons slot="start">
          <IonMenuButton
            autoHide={true}
            onClick={() => menuController.close()}
          ></IonMenuButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem href='/'>Home</IonItem>
        <IonItem href='/about'>About</IonItem>
        <IonItem href='/contact'>Contact</IonItem>
      </IonList>
    </IonContent>
  </IonMenu>

);

export default Drawer