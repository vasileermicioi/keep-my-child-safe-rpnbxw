import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react";
import { useContext } from "react";
import { Child, childDataContext } from "../context/childrenDataProvider";
import { getAgeInMonths } from "../functions/getMonths";
import "./ChildList.css";

export const ChildList = () => {
  const [childData, setChildData] = useContext(childDataContext);

  const [present] = useIonAlert();
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Children</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonFab vertical="top" horizontal="end" slot="fixed">
        <IonFabButton
          onClick={() => {
            present({
              cssClass: "my-css",
              header: "Add child",
              message: "Add information about your child",
              inputs: [
                {
                  name: "name",
                  type: "text",
                  label: "Child name",
                  placeholder: "Name",
                },
                {
                  name: "weight",
                  type: "number",
                  label: "Child weight",
                  placeholder: "kg",
                },
                {
                  name: "age",
                  type: "date",
                  label: "Child age",
                  placeholder: "Age",
                  min: "2016-01-01",
                  max: "2022-01-01",
                },
              ],
              buttons: [
                "Cancel",

                {
                  text: "Add",
                  handler: (alertData) => {
                    console.log(alertData.age);
                    setChildData((prevState: any) => [
                      ...prevState,
                      {
                        Name: alertData.name,
                        weight: alertData.weight,
                        birthdate: {
                          year: (alertData.age as String).slice(0, 4),
                          month: (alertData.age as String).slice(5, 7),
                          day: (alertData.age as String).slice(8, 10),
                        },
                        id: "_" + Math.random().toString(36).substr(2, 9),

                        avarar:
                          "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",
                        measurements: [],
                      },
                    ]);
                  },
                },
              ],
            });
          }}
        >
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>
        <IonList>
          {(childData as Child[]).map((child: Child) => (
            <IonItem routerLink={`child/${child.id}`}>
              <IonAvatar>
                <img
                  src={
                    child.avatar ||
                    "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  }
                  alt="img"
                />
              </IonAvatar>
              <IonLabel>
                <h2 style={{ paddingLeft: 8 }}>{child.Name}</h2>
                <p style={{ paddingLeft: 6 }}>
                  Months:
                  {getAgeInMonths(
                    child.birthdate.year,
                    child.birthdate.month,
                    child.birthdate.day
                  )}
                </p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
