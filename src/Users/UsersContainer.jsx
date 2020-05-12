import React from 'react';
import {followAC, unfollowAC, loadUsersAC} from "../redux/usersPage-reducer";
import Users from "./Users";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users)

export default UsersContainer;