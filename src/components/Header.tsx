import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className="flex">
      <div className="left">
        <img src={process.env.PUBLIC_URL + "/images/author.jpeg"} alt="" />
      </div>
      <div className="right">
        <Link className="header-link" to="/works">
          WORKS
        </Link>
        <a
          className="header-link"
          href="https://drive.google.com/file/d/1Ihhdx8kzX1d6dzNelFOcx4maXA9YuTfH/view"
          target="_blank"
          rel="noreferrer noopener"
        >
          RESUME
        </a>
      </div>
    </header>
  );
};

export default Header;
