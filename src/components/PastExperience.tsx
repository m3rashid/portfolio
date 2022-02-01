import { TypePreviousWorks } from "./previousWorks";

const PastExperience = ({
  name,
  type,
  role,
  worksDone,
  tenure,
}: TypePreviousWorks) => {
  return (
    <div className="past-experience">
      <p className="name">
        Name: &nbsp;<span className="value">{name}</span>
      </p>
      <p className="type">
        Category: &nbsp;<span className="value">{type}</span>
      </p>
      <p className="role">
        My role: &nbsp;<span className="value">{role}</span>
      </p>
      <p className="name">
        Tenure: &nbsp;<span className="value">{tenure}</span>
      </p>
      <ul>
        <li>Works: </li>
        {worksDone.map((detail) => (
          <div key={detail.id} className="about_li">
            <div>🔹 &nbsp;</div>
            <div className="work">{detail.work}</div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PastExperience;
