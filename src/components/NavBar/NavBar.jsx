import React from 'react';
import s from './NavBar.module.css';
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

const NavBar = (props) => {
    return (
        <div className={s.navWrapper}>
            <Menu/>
            <Friends friendsData={props.navBar.friendsData}/>
        </div>
);
}

export default NavBar;
