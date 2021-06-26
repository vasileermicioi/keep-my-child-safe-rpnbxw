import { createContext, useState } from "react";

type measurement = {
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
          respiratoryFrequency: 100,
          heartBeat: 90,
          temperature: 37.9,
        },
        {
          temperature: 38.9,
          respiratoryFrequency: 100,
          heartBeat: 90,
        },
        {
          temperature: 36.7,
          respiratoryFrequency: 100,
          heartBeat: 90,
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
          temperature: 37.7,
        },
        {
          temperature: 38.7,
        },
        {
          temperature: 36.6,
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
          temperature: 37.4,
        },
        {
          temperature: 38.4,
        },
        {
          temperature: 36.4,
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
