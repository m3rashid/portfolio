import React from 'react'
import { Link } from 'react-router-dom'
// import { faGithub } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faInstagram, faYoutube, faDev } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer>
            <div className="flex">
                <div className="left">
                    <a href="https://github.com/m3rashid" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/m3rashid/" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://twitter.com/m3_rashid" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.instagram.com/m3_rashid" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.youtube.com/channel/UCeNqGjDNF0JJdWbd8jrgJdw" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="https://dev.to/m3rashid" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faDev} /></a>
                </div>
                <div className="right">
                <div className="navigate">NAVIGATE</div>
                    <div className="links">
                        <Link className="footer-link" to='/' exact={+true}>HOME</Link>
                        <Link className="footer-link" to='/about' exact={+true}>ABOUT</Link>
                        <Link className="footer-link" to='/works' exact={+true}>WORKS</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
