import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import profileImage from '../../assets/img/nobody_profile_image.jpg';
import Preloader from '../common/Preloader/Preloader';
import * as axios from 'axios';

let Users = (props) => {
    let totalPagesCount = Math.ceil(props.totalUsers / props.pageLimit);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }
    if (props.isFetching) {
        return <Preloader/>
    } else {
        return (
            <div className={s.wrapper}>
                <div className={s.pages}>
                    {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                          className={props.currentPage === p && s.currentPage}>{p}</span>)}
                </div>
                <ul className={s.users}>
                    {props.users.map(u => <li key={u.id} className={s.user}>
                        <NavLink to={"/profile/" + u.id} className={s.profilePhoto}>
                            <img src={u.photos.small === null ? profileImage : u.photos.small} alt="" width="100"/>
                        </NavLink>
                        <div className={s.userWrapper}>
                            <p className={s.userName}>{u.name}</p>
                            <p className={s.userLocation}>{"u.location"}</p>
                            <p className={s.userStatus}>{"u.status"}</p>
                        </div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "62c59592-bd1c-491a-b1d5-806b63a3cad6"
                                    }
                                }).then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollowUser(u.id);
                                    }
                                })
                            }} className={s.followButton}>Unfollow</button> :
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "62c59592-bd1c-491a-b1d5-806b63a3cad6"
                                    }
                                }).then((response) => {
                                    if (response.data.resultCode === 0) {
                                        props.followUser(u.id)
                                    }
                                })

                            }} className={s.followButton}>Follow</button>}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Users;






