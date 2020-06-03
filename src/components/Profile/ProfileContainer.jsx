import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfoThunk, updateStatusThunk, getUserStatusThunk} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";

class ProfileAPI extends React.Component { // first container
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8001;
        }
        this.props.getUserStatusThunk(userId)
        this.props.getProfileInfoThunk(userId)
    }
    render() {
        return <Profile profileInfo={this.props.profileInfo}
                        userStatus={this.props.userStatus}
                        updateStatusThunk={this.props.updateStatusThunk}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.authReducer.isAuthorized,
        userStatus: state.profilePage.userStatus
    }
};

export default compose (
    connect(mapStateToProps, {getProfileInfoThunk, updateStatusThunk, getUserStatusThunk}),
    withAuthHoc,
    withRouter
) (ProfileAPI)


