import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    let peopleElements = props.peopleData.map(element =>
        <li className={s.dialog}><NavLink to="messages/3">{element.name}</NavLink></li>);
    return (
        <ul className={s.dialogs}>
            {props.drawDialogs}
        </ul>
    );
}

export default Dialogs;
