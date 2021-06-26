import { useParams } from "react-router";
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
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
import { getWarning } from "../functions/getWarning";
import { alertData } from "../data/alertData";
import { useContext } from "react";
import { childDataContext, measurement } from "../context/childrenDataProvider";
import { Child } from "../context/childrenDataProvider";
import { add, alertCircleOutline } from "ionicons/icons";
import {
  thermometerOutline,
  fitnessOutline,
  swapVerticalOutline,
} from "ionicons/icons";
import { alertType } from "../data/alertData";
import { getAgeInMonths } from "../functions/getMonths";
export const ViewAlert = () => {
  const params = useParams<{ id: string }>();
  const helper = useContext(childDataContext);
  const childData: Child[] = helper[0];
  let data;
  let parent;
  childData.map((child) => {
    child.measurements?.map((measurement, index) => {
      if (measurement.id === params.id) {
        data = measurement;
        parent = childData[index];
        console.log(parent);
      }
    });
  });
  const alert: string = getWarning(
    getAgeInMonths(
      (parent as unknown as Child).birthdate.year,
      (parent as unknown as Child).birthdate.month,
      (parent as unknown as Child).birthdate.day
    ),
    (data as unknown as measurement).temperature
  ) as unknown as string;
  let alertInfo;
  if (alert === "Ok") {
    alertInfo = alertData.Ok;
  } else if (alert === "Warning") {
    alertInfo = alertData.Warning;
  } else if (alert === "Alert") {
    alertInfo = alertData.Alert;
  } else {
    alertInfo = alertData.High_Alert;
  }
  return (
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton
              text="Back"
              defaultHref={`/child/${(parent as unknown as Child).id}`}
            ></IonBackButton>
          </IonButtons>
          <IonTitle>{alert}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>{alertInfo}</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};
