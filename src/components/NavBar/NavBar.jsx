import React from 'react';
import s from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__list}>
                <li className={s.item}><a href="/profile">Profile</a></li>
                <li className={s.item}><a href="/messages">Messages</a></li>
                <li className={s.item}><a href="/news">News</a></li>
                <li className={s.item}><a href="/music">Music</a></li>
                <li className={s.item}><a href="/settings">Settings</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
