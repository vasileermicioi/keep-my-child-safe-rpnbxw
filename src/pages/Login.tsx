import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonButton,
  IonRouterLink,
  IonRouterContext,
} from "@ionic/react";

export const Login = () => {
  return (
    <IonPage>
      <IonHeader>Login</IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Username</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonButton routerLink="/children">Login</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
