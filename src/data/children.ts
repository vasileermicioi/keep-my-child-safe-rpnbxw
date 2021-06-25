type measurement = {
  temperature: number;
  respiratoryFrequency?: number;
  heartBeat?: number;
  drugAdministred?: string;
  alert?: string;
  dateTime?: string;
};

export interface Child {
  Name: string;
  birthdate: {
    year: number;
    month: number;
  };
  id: string;
  avatar?: string;
  measurements?: measurement[];
}

export const children: Child[] = [
  {
    Name: "Mihai",
    birthdate: {
      month: 2,
      year: 2008,
    },
    id: "0",
    measurements: [
      {
        temperature: 37.9,
      },
      {
        temperature: 38.9,
      },
      {
        temperature: 36.7,
      },
    ],
  },
  {
    Name: "Nikita",
    birthdate: {
      month: 5,
      year: 2014,
    },
    id: "1",
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
    },
    id: "2",
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
];
