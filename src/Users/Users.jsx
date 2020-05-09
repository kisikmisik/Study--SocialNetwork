import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let userElements = props.users.map(element =>
        <li className={s.user}>
            <NavLink to="/user">
                <img src={element.photo} alt="" width="50"/>
            </NavLink>
            {element.followed
                ? <button onClick={props.unfollowUser} className={s.follow}>Unfollow</button> :
                <button onClick={props.followUser} className={s.follow}>Follow</button>}
            <div className={s.userWrapper}>
                <p className={s.userName}>{element.name}</p>
                <p className={s.userLocation}>{element.location}</p>
                <p className={s.userStatus}>{element.message}</p>
            </div>

        </li>);
    return (
        <ul className={s.users}>
            {userElements}
        </ul>
    );
}

export default Users;
