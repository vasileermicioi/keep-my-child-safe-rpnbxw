import React from "react";
import { useParams } from "react-router";
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useContext } from "react";
import { childDataContext } from "../context/childrenDataProvider";
import { Child } from "../context/childrenDataProvider";

export const ViewChild = () => {
  const [present] = useIonAlert();
  const params = useParams<{ id: string }>();
  const helper = useContext(childDataContext);
  const childData: Child[] = helper[0];
  const setChildData = helper[1];
  const date = new Date();
  const index = childData.findIndex((el) => el.id === params.id);
  const content = childData[index];

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              text="Child Metrics"
              defaultHref="/ChildList"
            ></IonBackButton>
            <IonButton
              shape="round"
              onClick={() => {
                present({
                  cssClass: "my-css",
                  header: "Add measurement",
                  message: "Add data about your child`s health",
                  inputs: [
                    {
                      name: "temperature",
                      type: "number",
                      label: "Temperature",
                      placeholder: "Temperature",
                    },
                    {
                      name: "drugsAdministred",
                      type: "text",
                      label: "Drugs Administred",
                      placeholder: "Drugs Administred",
                    },
                    {
                      name: "heartBeat",
                      type: "number",
                      label: "Heart Beat",
                      placeholder: "Heart Beat",
                    },
                    {
                      name: "respiratoryFrequency",
                      type: "number",
                      label: "Respiratory Frequency",
                      placeholder: "Respiratory Frequency",
                    },
                  ],
                  buttons: [
                    "Cancel",
                    {
                      text: "Add",
                      handler: (alertData) => {
                        setChildData((prevState: Child[]) => {
                          return prevState.map((child: Child) => {
                            return child.Name === content.Name
                              ? {
                                  ...child,
                                  measurements: [
                                    ...(content.measurements
                                      ? (content.measurements as [])
                                      : []),
                                    {
                                      temperature: alertData.temperature,
                                      drugAdministred:
                                        alertData.drugsAdministred,
                                      respiratoryFrequency:
                                        alertData.respiratoryFrequency,
                                      heartBeat: alertData.heartBeat,
                                      dateTime:
                                        date.getHours() +
                                        ":" +
                                        date.getMinutes() +
                                        " " +
                                        date.getDate(),
                                    },
                                  ],
                                }
                              : child;
                          });
                        });
                      },
                    },
                  ],
                });
              }}
            >
              +
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {index !== -1 ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>{content.Name}</h2>
              </IonLabel>
            </IonItem>

            {content.measurements?.map((measurement) => {
              console.log(content);
              return (
                <IonItemDivider>
                  <IonCard>
                    <IonCardTitle>{measurement.dateTime}</IonCardTitle>
                    <IonCardContent>
                      <p>Temperature:{measurement.temperature}</p>
                    </IonCardContent>
                    {measurement.drugAdministred ? (
                      <>
                        <IonCardContent>
                          <p>Drug Administred:{measurement.drugAdministred}</p>
                        </IonCardContent>
                      </>
                    ) : (
                      <></>
                    )}
                    {measurement.heartBeat ? (
                      <>
                        <IonCardContent>
                          <p>Heart Beat:{measurement.heartBeat}</p>
                        </IonCardContent>
                      </>
                    ) : (
                      <></>
                    )}
                    {measurement.respiratoryFrequency ? (
                      <>
                        <IonCardContent>
                          <p>
                            Respiratory Frequency:
                            {measurement.respiratoryFrequency}
                          </p>
                        </IonCardContent>
                      </>
                    ) : (
                      <></>
                    )}
                    {measurement.alert ? (
                      <>
                        <IonCardContent>
                          <p>State:{measurement.alert}</p>
                        </IonCardContent>
                      </>
                    ) : (
                      <></>
                    )}
                  </IonCard>
                </IonItemDivider>
              );
            })}
          </>
        ) : (
          <div>Child not found</div>
        )}
      </IonContent>
    </IonPage>
  );
};
