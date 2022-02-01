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
  tenure: string;
};

const previousWorks = [
  {
    id: 1,
    name: "M16 Labs",
    type: "Internship",
    role: "Software Engineering Intern",
    tenure: "Ongoing",
    worksDone: [
      {
        id: 11,
        work: "Working on medical software",
      },
      {
        id: 12,
        work: "Working with React, APIs in Nodejs etc.",
      },
    ],
  },
  {
    id: 2,
    name: "Vinnovate Technologies",
    type: "Internship",
    role: "Product Engineering Intern",
    tenure: "1 month",
    worksDone: [
      {
        id: 21,
        work: "Implementing core features of the product",
      },
      {
        id: 22,
        work: "Working with APIs in Nodejs",
      },
    ],
  },
  {
    id: 3,
    name: "Freelancing",
    type: "Freelancing",
    role: "Web Developer",
    tenure: "5 months",
    worksDone: [
      {
        id: 31,
        work: "Making websites with MERN stack",
      },
      {
        id: 32,
        work: "Deployment to Heroku, Netlify, AWS etc.",
      },
    ],
  },

  {
    id: 4,
    name: "IEEE CS-JMI Student Chapter",
    type: "College Society",
    role: "Web Team",
    tenure: "3 months",
    worksDone: [
      {
        id: 41,
        work: "Designing and making their website",
      },
      {
        id: 42,
        work: "Managing other members in the team",
      },
    ],
  },

  {
    id: 5,
    name: "The Jamia Review",
    type: "College Society",
    role: "Web Team",
    tenure: "5 months",
    worksDone: [
      {
        id: 51,
        work: 'Prototyping and making "admissions" website',
      },
      {
        id: 52,
        work: "Managing web team, tasks, supervision and collaboration",
      },
    ],
  },
];

export default previousWorks;
