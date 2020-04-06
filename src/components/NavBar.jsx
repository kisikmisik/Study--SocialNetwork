import React from 'react';

const NavBar = () => {
    return (
        <nav className="main-nav">
            <ul className="menu">
                <li className="menu__item"><a href="">Profile</a></li>
                <li className="menu__item"><a href="">Messages</a></li>
                <li className="menu__item"><a href="">News</a></li>
                <li className="menu__item"><a href="">Music</a></li>
                <li className="menu__item"><a href="">Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
