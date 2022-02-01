import { lazy, Suspense } from "react";

// Technologies I work with
const Fahtml5 = lazy(() => import("../svg/html5"));
const Facss3 = lazy(() => import("../svg/css3"));
const Fasass = lazy(() => import("../svg/sass"));
const Fajavascript = lazy(() => import("../svg/javascript"));
const Fatailwindcss = lazy(() => import("../svg/tailwindcss"));
const Fabootstrap = lazy(() => import("../svg/bootstrap"));
const Fareact = lazy(() => import("../svg/react"));
const Faredux = lazy(() => import("../svg/redux"));
const Fafirebase = lazy(() => import("../svg/firebase"));
const Faexpress = lazy(() => import("../svg/express"));
const Fanextdotjs = lazy(() => import("../svg/nextdotjs"));
const Fanodedotjs = lazy(() => import("../svg/nodedotjs"));
const Faelectron = lazy(() => import("../svg/electron"));
const Fajquery = lazy(() => import("../svg/jquery"));
const Fagraphql = lazy(() => import("../svg/graphql"));
const Famongodb = lazy(() => import("../svg/mongodb"));
const Fawordpress = lazy(() => import("../svg/wordpress"));
const Fasqlite = lazy(() => import("../svg/sqlite"));
const Fapython = lazy(() => import("../svg/python"));
const Faflask = lazy(() => import("../svg/flask"));
const Faandroid = lazy(() => import("../svg/android"));
const Faandroidstudio = lazy(() => import("../svg/androidstudio"));
const Fac = lazy(() => import("../svg/c"));
const Facplusplus = lazy(() => import("../svg/cplusplus"));

// Tools I use
const Favisualstudiocode = lazy(() => import("../svg/visualstudiocode"));
const Fagit = lazy(() => import("../svg/git"));
const Falinux = lazy(() => import("../svg/linux"));
const Fawindows = lazy(() => import("../svg/windows"));
const Fanetlify = lazy(() => import("../svg/netlify"));
const Faheroku = lazy(() => import("../svg/heroku"));
const Favercel = lazy(() => import("../svg/vercel"));
const Faamazonaws = lazy(() => import("../svg/amazonaws"));

const Tools = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <div className="icons-div">
        <h1>Technologies I work with</h1>
        <div>
          <Fahtml5 />
          <Facss3 />
          <Fasass />
          <Fajavascript />
          <Fatailwindcss />
          <Fabootstrap />
          <Fareact />
          <Faredux />
          <Fafirebase />
          <Faexpress />
          <Fanextdotjs />
          <Fanodedotjs />
          <Faelectron />
          <Fajquery />
          <Fagraphql />
          <Famongodb />
          <Fawordpress />
          <Fasqlite />
          <Fapython />
          <Faflask />
          <Faandroid />
          <Faandroidstudio />
          <Fac />
          <Facplusplus />
        </div>
      </div>
      <div className="icons-div">
        <h1>Tools I use</h1>
        <div>
          <Favisualstudiocode />
          <Fagit />
          <Falinux />
          <Fawindows />
          <Fanetlify />
          <Faheroku />
          <Favercel />
          <Faamazonaws />
        </div>
      </div>
    </Suspense>
  );
};

export default Tools;
