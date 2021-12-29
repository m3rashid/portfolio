export type ProjectType = {
  id?: string;
  title: string;
  imgsrc: string;
  description: string;
  github: string;
  deploy: string;
};

const projects = [
  {
    id: 1,
    title: "ZUNI",
    imgsrc: "/images/zuni.jpeg",
    description:
      "Zillion Utility purpose Neural authentication Interface: ZUNI (Hackathon project)",
    github: "https://github.com/sheikhazhanmohammed/ZUNI",
    deploy: "https://zuni.netlify.app/",
  },

  {
    id: 2,
    title: "Taxtds",
    imgsrc: "/images/taxtds.jpeg",
    description:
      "Taxtds: Local business directory website for all your finance and tax needs",
    deploy: "https://taxtds.herokuapp.com/",
  },

  {
    id: 3,
    title: "Cubicle",
    imgsrc: "/images/cubicle.jpg",
    description:
      "Cubicle is a modern blog website with content management system and built on nextjs",
    github: "https://github.com/m3rashid/cubicle",
    deploy: "https://cubicle.vercel.app/",
  },

  {
    id: 4,
    title: "CovidMe",
    imgsrc: "/images/covid.jpeg",
    description:
      "Resources to people in need from people trying to help (Hackathon project)",
    github: "https://github.com/m3rashid/covid_project",
    deploy: "https://cov1dme.herokuapp.com/",
  },

  {
    id: 5,
    title: "HackJMI ML",
    imgsrc: "/images/hack.jpeg",
    description:
      "Making a more robust face recognition security system (Hackathon project)",
    github: "https://github.com/hashes-jmi/HackJMI2-CheemsGamg",
  },

  {
    id: 6,
    title: "Whatsapp Bot",
    imgsrc: "/images/whatsapp.jpeg",
    description:
      "Whatsapp bot with commands to capture links, data and other useful things",
    github: "https://github.com/m3rashid/whatsapp-bot",
  },

  {
    id: 7,
    title: "Old Portfolio",
    imgsrc: "/images/old.jpg",
    description:
      "This is my old personal website created with threejs without any other framework",
    github: "https://github.com/m3rashid/m3rashid.github.io",
    deploy: "https://m3rashid.github.io/",
  },

  {
    id: 8,
    title: "Mini Projects",
    imgsrc: "/images/mini.jpeg",
    description:
      "List of some short and fun websites I created while I was learning web development",
    github: "https://github.com/m3rashid/mini_projects",
    deploy: "https://m3rashid.github.io/mini_projects/",
  },
];

export default projects;
