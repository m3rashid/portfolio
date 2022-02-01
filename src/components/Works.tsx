import { FC } from "react";
import Card from "./Card";
import projects from "./projectWorks";

const Works: FC = () => {
  return (
    <main id="works">
      <div className="flex">
        <h1>My Projects</h1>
        <div className="medium">
          {projects.map((entry) => {
            return (
              <Card
                key={entry.id}
                title={entry.title}
                description={entry.description}
                imgsrc={entry.imgsrc}
                github={entry.github ? entry.github : ""}
                deploy={entry.deploy ? entry.deploy : ""}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Works;
