import React from 'react';
import {followUser, unfollowUser, getUsers, setCurrentPage, changePreloaderStatus} from "../../redux/usersPage-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import * as axios from 'axios';


class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.changePreloaderStatus(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${this.props.currentPage}`, {
                withCredentials: true,
                headers: {
                    "API-KEY": "62c59592-bd1c-491a-b1d5-806b63a3cad6"
                }
            })
            .then(response => {
                    this.props.changePreloaderStatus(false);
                    this.props.getUsers(response.data.items);
                    // this.props.setTotalUsersCount(response.data.totalCount)
                }
            )
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage);
        this.props.changePreloaderStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageLimit}&page=${currentPage}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "62c59592-bd1c-491a-b1d5-806b63a3cad6"
            }
        })
            .then((response) => {
                this.props.getUsers(response.data.items);
                this.props.changePreloaderStatus(false);
            })
    }

    render() {
        return <Users totalUsers={this.props.totalUsers}
                      pageLimit={this.props.pageLimit}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
                      isFetching={this.props.isFetching} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        pageLimit: state.usersPage.pageLimit,
        isFetching: state.usersPage.isFetching
    }
}
const UsersContainer = connect(mapStateToProps, {getUsers, followUser, unfollowUser, setCurrentPage, changePreloaderStatus})(UsersAPI)

export default UsersContainer;