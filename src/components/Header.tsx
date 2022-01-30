import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex">
      <div className="left">
        <img src={process.env.PUBLIC_URL + "/images/favicon.png"} alt="logo" />
      </div>

      <div className="right">
        <a
          href="https://cubicle.vercel.app/"
          target="_blank"
          rel="noreferrer noopener"
          className="header-link"
        >
          BLOGS
        </a>

        <a
          className="header-link"
          href="https://drive.google.com/file/d/1pd_gXysgBKwNZHjA3EhNJGWkQH-9eyOz/view"
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
