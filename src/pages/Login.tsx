import { IonPage, IonButton, IonAvatar, IonImg } from "@ionic/react";
import "./Login.css";
export const Login = () => {
  return (
    <IonPage>
      <img
        src="https://penfieldbuildingblocks.org/wp-content/uploads/2018/08/the-mother-child-relationship.jpg"
        alt=""
        style={{
          borderRadius: "40%",
          paddingLeft: "60px",
          paddingRight: "60px",
          paddingBottom: "35px",
        }}
      ></img>

      <IonButton routerLink="/children" size={"large"}>
        Login
      </IonButton>
    </IonPage>
  );
};
