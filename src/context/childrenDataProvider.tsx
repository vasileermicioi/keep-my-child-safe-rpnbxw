import { createContext, useState } from "react";

export type measurement = {
  id: string;
  temperature: number;
  respiratoryFrequency?: number;
  heartBeat?: number;
  weight?: number;
  alert?: string;
  dateTime?: string;
};

export interface Child {
  Name: string;
  birthdate: {
    year: number;
    month: number;
    day: number;
  };
  id: string;
  avatar?: string;
  measurements?: measurement[];
}

export const childDataContext = createContext({} as any);

const ChildrenDataProvider = (props: any) => {
  const [childData, setChildData] = useState([
    {
      Name: "Mihai",
      birthdate: {
        month: 2,

        year: 2018,

        day: 13,
      },
      id: "0",
      avatar:
        "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      measurements: [
        {
          dateTime: "12:14 27/06",
          id: "VPV0fWOSc4",
          respiratoryFrequency: 57,
          heartBeat: 77,
          temperature: 36.6,
        },
        {
          dateTime: "14:12 27/06",
          id: "PN1nVInLcw",
          temperature: 37.5,
          respiratoryFrequency: 51,
          heartBeat: 73,
        },
        {
          dateTime: "17:03 27/06",
          id: "n4sxkjAkUg",
          temperature: 38.1,
          respiratoryFrequency: 55,
          heartBeat: 80,
        },
      ],
    },
    {
      Name: "Nikita",
      birthdate: {
        month: 5,

        year: 2019,

        day: 8,
      },
      id: "1",
      avatar:
        "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=925&q=80",
      measurements: [
        {
          dateTime: "07:14 04/12",
          id: "ESDot93zGn",
          respiratoryFrequency: 56,
          heartBeat: 90,
          temperature: 36.5,
        },
        {
          dateTime: "10:33 04/12",
          id: "MUyC31smp1",
          temperature: 37.3,
          respiratoryFrequency: 56,
          heartBeat: 90,
        },
        {
          dateTime: "11:21 04/12",
          id: "hKR9tAsECk",
          temperature: 37.9,
          respiratoryFrequency: 56,
          heartBeat: 90,
        },
      ],
    },
    {
      Name: "Anastasia",
      birthdate: {
        month: 4,
        year: 2021,
        day: 9,
      },
      id: "2",
      avatar:
        "https://images.unsplash.com/photo-1544126592-807ade215a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      measurements: [
        {
          dateTime: "19:14 23/07",
          id: "6SNRIHpR10",
          respiratoryFrequency: 52,
          heartBeat: 92,
          temperature: 36.6,
        },
        {
          dateTime: "20:12 23/07",
          id: "Fys97VhCLM",
          temperature: 37.5,
          respiratoryFrequency: 58,
          heartBeat: 87,
        },
        {
          dateTime: "23:55 23/07",
          id: "38NyIWtCLa",
          temperature: 38.1,
          respiratoryFrequency: 57,
          heartBeat: 90,
        },
      ],
    },
  ]);

  return (
    <childDataContext.Provider value={[childData, setChildData]}>
      {props.children}
    </childDataContext.Provider>
  );
};

export default ChildrenDataProvider;
