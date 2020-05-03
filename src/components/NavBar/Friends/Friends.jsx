import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    let friendsList = props.store.getState().navBar.friendsData.map(el =>
        <li className={s.item}>
            <NavLink to="/pasha">
                <img width="40" src={el.img} alt="avatar"/>
                <span>{el.name}</span>
            </NavLink>
        </li>
    )

    return (
        <section className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <ul className={s.list}>
                {friendsList}
            </ul>
        </section>
    );
}

export default Friends;
