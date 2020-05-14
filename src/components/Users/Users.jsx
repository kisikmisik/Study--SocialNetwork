import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import profileImage from '../../assets/img/round-avatar.png'

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.getUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${currentPage}`)
            .then(response => this.props.getUsers(response.data.items))
    }

    render() {
        let totalPagesCount = Math.ceil(this.props.totalUsers / this.props.pageLimit);
        let pages = [];
        for (let i = 1; i <= totalPagesCount; i++) {
            pages.push(i);

        }
        return (
            <div>
                <div className={s.pages}>
                    {pages.map(p => <span onClick={() => this.onPageChanged(p)}
                                          className={this.props.currentPage === p && s.currentPage}>{p}</span>)}
                </div>
                <ul className={s.users}>
                    {this.props.users.map(u => <li key={u.id} className={s.user}>
                        <NavLink to="/user" className={s.profilePhoto}>
                            <img src={u.photos.small === null ? profileImage : u.photos.small} alt="" width="100"/>
                        </NavLink>
                        <div className={s.userWrapper}>
                            <p className={s.userName}>{u.name}</p>
                            <p className={s.userLocation}>{"u.location"}</p>
                            <p className={s.userStatus}>{"u.status"}</p>
                        </div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollowUser(u.id)
                            }} className={s.followButton}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.followUser(u.id)
                            }} className={s.followButton}>Follow</button>}
                    </li>)}
                </ul>
            </div>
        )
    }
}

export default Users;
