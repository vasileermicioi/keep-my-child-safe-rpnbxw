import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonDatetime,
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
import { add, refresh } from "ionicons/icons";
import React from "react";
import { useContext } from "react";
import { Child, childDataContext } from "../context/childrenDataProvider";
import "./ChildList.css";

export const ChildList = () => {
  const [childData, setChildData] = useContext(childDataContext);
  const date = new Date();

  const [present] = useIonAlert();
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Children</IonTitle>
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
                  min: "2017-03-01",
                  max: "2018-01-12",
                },
              ],
              buttons: [
                // {
                //   text: "Add date of birth",
                //   handler: () => {
                //     <IonItem>
                //       <IonLabel>Date</IonLabel>
                //       <IonDatetime
                //         displayFormat="MMMM YYYY"
                //         min="2016"
                //         max="2020-10-31"
                //       ></IonDatetime>
                //     </IonItem>;
                //   },
                // },
                "Cancel",

                {
                  text: "Add",
                  handler: (alertData) => {
                    console.log(alertData.age);
                    setChildData((prevState: any) => [
                      ...prevState,
                      {
                        Name: alertData.name,
                        birthdate: {
                          year: (alertData.age as String).slice(0, 4),
                          month: (alertData.age as String).slice(5, 7),
                          day: (alertData.age as String).slice(8, 10),
                        },
                        id: "_" + Math.random().toString(36).substr(2, 9),
                      },
                    ]);
                  },
                },
              ],
            });
          }}
        >
          {/* <IonItem>
            <IonLabel>Date</IonLabel>
            <IonDatetime
              displayFormat="MMMM YYYY"
              min="2016"
              max="2020-10-31"
            ></IonDatetime>
          </IonItem> */}
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonList>
          {(childData as Child[]).map((child: Child) => (
            <IonCard routerLink={`child/${child.id}`}>
              <IonCardContent>
                <IonAvatar>
                  <img
                    src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"
                    alt=""
                  />
                </IonAvatar>
                <IonTitle>{child.Name}</IonTitle>
                <IonCardSubtitle>
                  {" "}
                  {child.birthdate.day}/{child.birthdate.month}/
                  {child.birthdate.year}
                </IonCardSubtitle>
                <div></div>
                <div></div>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
