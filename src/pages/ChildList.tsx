import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { refresh } from "ionicons/icons";
import React from "react";
import MessageListItem from "../components/MessageListItem";
import { children } from "../data/children";
import { useContext } from "react";
import { Child, childDataContext } from "../context/childrenDataProvider";

export const ChildList = () => {
  const [childData, setChildData] = useContext(childDataContext);
  const date = new Date();

  const [present] = useIonAlert();
  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonButton
            shape="round"
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
                    name: "age",
                    type: "month",
                    label: "Child age",
                    placeholder: "Age",
                  },
                ],
                buttons: [
                  "Cancel",
                  {
                    text: "Add",
                    handler: (alertData) => {
                      setChildData((prevState: any) => [
                        ...prevState,
                        {
                          Name: alertData.name,
                          birthdate: {
                            year: (alertData.age as String).slice(0, 4),
                            month: (alertData.age as String).slice(5, 7),
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
            +
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed">
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inbox</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {(childData as Child[]).map((child: Child) => (
            <IonCard routerLink={`child/${child.id}`}>
              <IonCardHeader>{child.Name}</IonCardHeader>
              <IonCardContent>
                <IonAvatar>
                  <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                </IonAvatar>
                Years:{date.getFullYear() - child.birthdate.year} Months:
                {Math.abs(date.getMonth() - child.birthdate.month + 1)}
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
