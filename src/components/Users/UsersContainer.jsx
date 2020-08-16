import React from 'react';
import {
    setCurrentPage,
    getUsersThunk,
    followThunk, unfollowThunk
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthHoc} from "../../hoc/withAuthHoc";


class UsersData extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.pageLimit, this.props.currentPage)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsersThunk(this.props.pageLimit, currentPage)
    }

    render() {
        return <Users totalUsers={this.props.totalUsers}
                      pageLimit={this.props.pageLimit}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      followUser={this.props.followUser}
                      unfollowUser={this.props.unfollowUser}
                      isFetching={this.props.isFetching}
                      isFollowInProgress={this.props.isFollowInProgress}
                      toggleFollowProgress={this.props.toggleFollowProgress}
                      unfollowThunk={this.props.unfollowThunk}
                      followThunk={this.props.followThunk}/>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        currentPage: state.usersPage.currentPage,
        pageLimit: state.usersPage.pageLimit,
        isFetching: state.usersPage.isFetching,
        isFollowInProgress: state.usersPage.isFollowInProgress
    }
}

export default compose (
    connect(mapStateToProps, {setCurrentPage, getUsersThunk, followThunk, unfollowThunk}),
    withAuthHoc
) (UsersData);