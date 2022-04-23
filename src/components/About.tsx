import { FC } from "react";
import Tools from "./Tools";
import previousWorks from "./previousWorks"; // TypesWorksDone, TypePreviousWorks,
import PastExperience from "./PastExperience";
import { Details, Education } from "./Details";

const About: FC = () => {
  return (
    <main id="about">
      <div className="grid">
        <div className="left">
          <img src={process.env.PUBLIC_URL + "/images/author.jpeg"} alt="" />
          <h1>
            Hey 👋 <span className="h1">Rashid</span> Here
          </h1>

          <div className="description">
            A passionate web developer and Technology enthusiast
          </div>

          <div className="details">
            <Details />
            <Education />
            <Tools />
          </div>
        </div>
        <div className="right">
          <h1>Work Experience</h1>
          {previousWorks.map((prev) => (
            <PastExperience
              key={prev.id}
              name={prev.name}
              type={prev.type}
              role={prev.role}
              tenure={prev.tenure}
              worksDone={prev.worksDone}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
