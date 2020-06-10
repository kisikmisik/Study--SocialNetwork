import React from 'react';
import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import profileImage from '../../assets/img/nobody_profile_image.jpg';
import Preloader from '../common/Preloader/Preloader';

let Users = (props) => {
    let totalPagesCount = Math.ceil(props.totalUsers / props.pageLimit);
    let pages = [];
    for (let i = 1; i <= totalPagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={s.wrapper}>
            <div className={s.pages}>
                {pages.map(p => <span onClick={() => props.onPageChanged(p)}
                                      className={props.currentPage === p && s.currentPage}>{p}</span>)}
            </div>
            <ul className={s.users}>
                {props.isFetching && <Preloader/>}
                {props.users.map(u => <li key={u.id} className={s.user}>
                    <NavLink to={"/profile/" + u.id} className={s.profilePhoto}>
                        <img src={u.photos.small === null ? profileImage : u.photos.small} alt="" width="100"/>
                    </NavLink>
                    <div className={s.userWrapper}>
                        <p className={s.userName}>{u.name}</p>
                        <p className={s.userLocation}>{"u.location"}</p>
                        <p className={s.userStatus}>{u.status}</p>
                    </div>
                    {u.followed ?
                        <button disabled={props.isFollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowThunk(u.id);
                        }} className={s.followButton}>Unfollow</button> :
                        <button disabled={props.isFollowInProgress.some(id => id === u.id)} onClick={() => {
                            props.followThunk(u.id)
                        }} className={s.followButton}>Follow</button>}
                </li>)}
            </ul>
        </div>
    )
}

export default Users;






