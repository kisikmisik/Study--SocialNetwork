import React from 'react';
import {followAC, unfollowAC, loadUsersAC, setPageAC, setTotalCountAC} from "../../redux/usersPage-reducer";
import Users from "./Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        pageLimit: state.usersPage.pageLimit
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (usersData) => {
            dispatch(loadUsersAC(usersData))
        },
        followUser: (id) => {
            dispatch(followAC(id))
        },
        unfollowUser: (id) => {
            dispatch(unfollowAC(id))
        },
        setCurrentPage: (page) => {
            dispatch(setPageAC(page))
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalCountAC(usersCount))
        }

    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;