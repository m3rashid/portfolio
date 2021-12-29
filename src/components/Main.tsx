import { FC } from "react";

const Main: FC = () => {
  return (
    <main id="main">
      <div className="back">#UNSTOPPABLE</div>
      <div className="computer-user">
        <div className="hello">Hello</div>
        <img src={process.env.PUBLIC_URL + "/images/code.png"} alt="" />
        <div className="there">There</div>
      </div>
    </main>
  );
};

export default Main;
