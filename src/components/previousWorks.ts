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
    name: "Vinnovate Technologies",
    type: "Internship",
    role: "MERN stack Developer",
    worksDone: [
      {
        id: 11,
        work: "Implementing core features of the product",
      },
      {
        id: 12,
        work: "Working on Nodejs backend APIs",
      },
      {
        id: 13,
        work: "Collaboration with teams",
      },
    ],
  },
  {
    id: 2,
    name: "Freelancing",
    type: "Freelancing",
    role: "Web Developer",
    worksDone: [
      {
        id: 21,
        work: "Making websites with MERN stack",
      },
      {
        id: 22,
        work: "Deployment to Heroku, Netlify, AWS etc.",
      },
      {
        id: 23,
        work: "Managing the client's increasing needs",
      },
    ],
  },

  {
    id: 3,
    name: "IEEE CS-JMI Student Chapter",
    type: "College Society",
    role: "Web Team",
    worksDone: [
      {
        id: 31,
        work: "Designing and making their website",
      },
      {
        id: 32,
        work: "Managing other members in the team",
      },
      {
        id: 33,
        work: "collaboration with other teams",
      },
    ],
  },

  {
    id: 4,
    name: "The Jamia Review",
    type: "College Society",
    role: "Web Team",
    worksDone: [
      {
        id: 41,
        work: 'Prototyping and making "admissions" website',
      },
      {
        id: 42,
        work: "Managing the web team, tasks and supervision",
      },
      {
        id: 43,
        work: "Collaboration with other teams",
      },
    ],
  },
];

export default previousWorks;
