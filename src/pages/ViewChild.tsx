import { useParams } from "react-router";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { useContext } from "react";
import { childDataContext, measurement } from "../context/childrenDataProvider";
import { Child } from "../context/childrenDataProvider";
import { add, alertCircleOutline } from "ionicons/icons";
import {
  thermometerOutline,
  fitnessOutline,
  swapVerticalOutline,
} from "ionicons/icons";
import { getWarning } from "../functions/getWarning";
import { getAgeInMonths } from "../functions/getMonths";

export const ViewChild = () => {
  const [present] = useIonAlert();
  const params = useParams<{ id: string }>();
  const helper = useContext(childDataContext);
  const childData: Child[] = helper[0];
  const setChildData = helper[1];
  const date = new Date();
  const index = childData.findIndex((el) => el.id === params.id);
  const content = childData[index];
  console.log(content);
  let measurementData = [...(content.measurements as [])];
  measurementData.reverse();
  console.log(measurementData);
  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Back" defaultHref="/ChildList"></IonBackButton>
          </IonButtons>
          <IonTitle>Child metrics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <IonFabButton
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
                                    id:
                                      "_" +
                                      Math.random().toString(36).substr(2, 9),
                                    temperature: alertData.temperature,
                                    respiratoryFrequency:
                                      alertData.respiratoryFrequency,
                                    heartBeat: alertData.heartBeat,
                                    dateTime:
                                      date.getHours() +
                                      ":" +
                                      (date.getMinutes() <= 9
                                        ? "0" + date.getMinutes()
                                        : date.getMinutes()) +
                                      " " +
                                      date.getDate() +
                                      "/" +
                                      (date.getUTCMonth() <= 9
                                        ? "0" + date.getUTCMonth()
                                        : date.getUTCMonth() <= 9),
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
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        {index !== -1 ? (
          <>
            <IonItem>
              <IonLabel className="ion-text-wrap">
                <h2>{content.Name}</h2>
              </IonLabel>
            </IonItem>

            {(measurementData as measurement[]).map((measurement) => {
              return (
                <IonCard routerLink={`/measurement/${measurement.id}`}>
                  <IonList inset={true} lines="full">
                    <IonListHeader>
                      <p
                        style={{
                          marginBottom: -4,
                          marginTop: -20,
                          fontSize: "19px",
                        }}
                      >
                        {measurement.dateTime || "13:26 27/06"}
                      </p>
                    </IonListHeader>
                    <IonGrid>
                      <IonRow>
                        <IonCol>
                          <IonIcon icon={thermometerOutline}></IonIcon>
                          {measurement.temperature}
                        </IonCol>
                        {measurement.heartBeat ? (
                          <>
                            <IonCol>
                              <IonIcon icon={fitnessOutline}></IonIcon>
                              {measurement.heartBeat}
                            </IonCol>
                          </>
                        ) : (
                          <></>
                        )}
                        {measurement.respiratoryFrequency ? (
                          <>
                            <IonCol>
                              <IonIcon icon={swapVerticalOutline}></IonIcon>
                              {measurement.respiratoryFrequency}
                            </IonCol>
                          </>
                        ) : (
                          <></>
                        )}
                        {true ? (
                          <>
                            <IonCol>
                              <IonIcon icon={alertCircleOutline}></IonIcon>
                              {getWarning(
                                getAgeInMonths(
                                  content.birthdate.year,
                                  content.birthdate.month,
                                  content.birthdate.day
                                ),
                                measurement.temperature
                              )}
                            </IonCol>
                          </>
                        ) : (
                          <></>
                        )}
                      </IonRow>
                    </IonGrid>
                  </IonList>
                </IonCard>
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
