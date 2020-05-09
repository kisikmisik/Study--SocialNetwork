import React from 'react';
import {loadUsersAC, followAC, unfollowAC} from "../redux/usersPage-reducer";
import Users from "./Users";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => {
            dispatch(loadUsersAC())
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