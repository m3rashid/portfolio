import { TypePreviousWorks } from "./previousWorks";

const PastExperience = ({ name, type, role, worksDone }: TypePreviousWorks) => {
  return (
    <div className="past-experience">
      <p className="name">
        Name: &nbsp;<span className="value">{name}</span>
      </p>
      <p className="type">
        Type: &nbsp;<span className="value">{type}</span>
      </p>
      <p className="role">
        My role: &nbsp;<span className="value">{role}</span>
      </p>
      <ul>
        <li>Works: </li>
        {worksDone.map((detail) => (
          <li key={detail.id}>
            {"=> "}
            <span className="value">{detail.work}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastExperience;
