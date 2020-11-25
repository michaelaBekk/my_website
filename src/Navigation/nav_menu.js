import React from 'react';
import './nav_menu.css';

function NavMenu() {
    return (
        <div className="navigation-menu">
            <i className="material-icons nav-icons">home
                <a className="navigation-option" href="/">Home</a>
            </i>
            <i className="material-icons nav-icons">person
                <a className="navigation-option" href="/about_me">About Me</a>
            </i>
            <i className="material-icons nav-icons">folder
                <a className="navigation-option" href="/portfolio">Portfolio</a>
            </i>
            <i className="material-icons nav-icons">description
                <a className="navigation-option" href="/resume">Resume</a>
            </i>
        </div>
    )
}
export default NavMenu;