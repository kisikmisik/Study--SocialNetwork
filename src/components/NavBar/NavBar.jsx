import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import Menu from "./Menu/Menu";

const NavBar = (props) => {
    return (
        <div className={s.navWrapper}>
            <Menu/>
            <Friends friendsData={props.friendsData}/>
        </div>
);
}

export default NavBar;
