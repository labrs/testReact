import React from 'react';
import dataLinks from './data/links.json'

const Header = () => {
    return (
        <header id="intro">
            <article className="fullheight">
            <div className="hgroup">
                <h1>LABRS TEST site with Amplify</h1>
                <h2>Hotel Page</h2>
                <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
            </div>
            </article>

            <nav id="nav">
            <div className="navbar">
                <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
                <ul>
                    {
                        dataLinks.map((link) =>
                            <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                        )
                    }
                </ul>
            </div>
            </nav>
        </header>
        
    );
}

export default Header;