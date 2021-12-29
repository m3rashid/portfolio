import { FC } from "react";
import { Link } from "react-router-dom";

// socials
import Fagithub from "../svg/github";
import Falinkedin from "../svg/linkedin";
import Fatwitter from "../svg/twitter";
import Fayoutube from "../svg/youtube";
import Fadevdotto from "../svg/devdotto";

const Footer: FC = () => {
  return (
    <footer>
      <div className="flex">
        <div className="left">
          <a
            href="https://github.com/m3rashid"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Fagithub />
          </a>
          <a
            href="https://www.linkedin.com/in/m3rashid/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Falinkedin />
          </a>
          <a
            href="https://twitter.com/m3_rashid"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Fatwitter />
          </a>
          <a
            href="https://www.youtube.com/channel/UCeNqGjDNF0JJdWbd8jrgJdw"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Fayoutube />
          </a>
          <a
            href="https://dev.to/m3rashid"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Fadevdotto />
          </a>
        </div>
        <div className="right">
          <div className="navigate">NAVIGATE</div>
          <div className="links">
            <Link className="footer-link" to="/">
              HOME
            </Link>
            <Link className="footer-link" to="/about">
              ABOUT
            </Link>
            <Link className="footer-link" to="/works">
              WORKS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
