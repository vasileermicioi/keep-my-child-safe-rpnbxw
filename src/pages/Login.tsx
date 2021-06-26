import { IonPage, IonButton } from "@ionic/react";
import "./Login.css";
export const Login = () => {
  return (
    <IonPage color="white">
      <IonButton routerLink="/children" size={"large"}>
        Login
      </IonButton>
    </IonPage>
  );
};
