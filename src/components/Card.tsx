import { ProjectType } from "./projectWorks";

const Card = ({ title, imgsrc, description, github, deploy }: ProjectType) => {
  return (
    <div>
      <div className="card">
        <h1 className="project-title">{title}</h1>
        <p className="project-description">{description}</p>
        <img src={imgsrc} alt={title + " preview"} />
        <div className="show">
          {github && (
            <a
              className="github"
              href={github}
              target="_blank"
              rel="noreferrer noopener"
            >
              View on Github
            </a>
          )}
          {deploy && (
            <a
              className="deploy"
              href={deploy}
              target="_blank"
              rel="noreferrer noopener"
            >
              View Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
