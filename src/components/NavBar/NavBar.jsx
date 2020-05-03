import React from 'react';
import s from './NavBar.module.css';
import Menu from "./Menu/Menu";
import FriendsContainer from "./Friends/FriendsContainer";

const NavBar = (props) => {
    return (
        <div className={s.navWrapper}>
            <Menu/>
            <FriendsContainer/>
        </div>
);
}

export default NavBar;
