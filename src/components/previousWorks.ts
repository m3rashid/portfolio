export type TypesWorksDone = {
  id: number;
  work: string;
};

export type TypePreviousWorks = {
  id?: number;
  name: string;
  type: string;
  role: string;
  worksDone: TypesWorksDone[];
};

const previousWorks = [
  {
    id: 1,
    name: "Freelancing",
    type: "Freelancing",
    role: "Web Developer",
    worksDone: [
      {
        id: 31,
        work: "Making websites with Nodejs, MongoDB, Reactjs and other technologies",
      },
      {
        id: 32,
        work: "Deployment to Heroku and AWS",
      },
      {
        id: 33,
        work: "Managing the clients day to day increasing needs",
      },
    ],
  },

  {
    id: 2,
    name: "IEEE CS-JMI Student Chapter",
    type: "College Society",
    role: "Web Team",
    worksDone: [
      {
        id: 21,
        work: "Designing and making the society's main website",
      },
      {
        id: 22,
        work: "Managing other members in the team",
      },
      {
        id: 23,
        work: "collaboration",
      },
    ],
  },

  {
    id: 3,
    name: "The Jamia Review",
    type: "College Society",
    role: "Web Team",
    worksDone: [
      {
        id: 11,
        work: 'Prototyping and making "admissions" website',
      },
      {
        id: 12,
        work: "Managing the web team, assigning tasks and supervision",
      },
      {
        id: 13,
        work: "Collaborating with the design and content teams for changes",
      },
    ],
  },
];

export default previousWorks;
