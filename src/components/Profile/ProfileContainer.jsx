import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfoThunk,
    updateStatusThunk,
    getUserStatusThunk,
    addNewPost,
    setIsProfileYours
} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";

class ProfileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedId;
            // userId = 8001;
        }
        this.props.getUserStatusThunk(userId)
        this.props.getProfileInfoThunk(userId).then(() => {
            if (this.props.profileInfo.userId === this.props.authorizedId) {
                this.props.setIsProfileYours(true)
            } else {
                this.props.setIsProfileYours(false)
            }
        })
    }
    render() {
        return <Profile profileInfo={this.props.profileInfo}
                        userStatus={this.props.userStatus}
                        updateStatusThunk={this.props.updateStatusThunk}
                        addNewPost={this.props.addNewPost}
                        authorizedId={this.props.authorizedId}
                        isProfileYours={this.props.isProfileYours} />
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isAuth: state.authReducer.isAuthorized,
        userStatus: state.profilePage.userStatus,
        authorizedId: state.authReducer.id,
        isProfileYours: state.profilePage.isProfileYours
    }
};

export default compose (
    connect(mapStateToProps, {getProfileInfoThunk, updateStatusThunk, getUserStatusThunk, addNewPost, setIsProfileYours}),
    withAuthHoc,
    withRouter
) (ProfileAPI)


