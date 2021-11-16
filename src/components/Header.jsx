import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="left">
                <img src={process.env.PUBLIC_URL + '/images/author.jpeg'} alt="" />
            </div>
            <div className="right">
                <Link className="header-link" to='/works' exact={+true}>WORKS</Link>
                <a className="header-link" href="https://drive.google.com/file/d/1ICl3RxCruvITzkXiagwcHwjInLC7v7vP/view?usp=sharing" target="_blank" rel="noreferrer noopener">RESUME</a>
            </div>
        </header>
    )
}

export default Header
