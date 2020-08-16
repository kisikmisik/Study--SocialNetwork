import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileInfoThunk,
    updateStatusThunk,
    getUserStatusThunk,
    addNewPost,
    setIsProfileYours,
    saveProfileDataThunk,
    setProfileInfo
} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";
import {withAuthHoc} from "../../hoc/withAuthHoc";
import {compose} from "redux";

class ProfileAPI extends React.Component {
    checkProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedId;
            // userId = 8001;
        }
        this.props.getProfileInfoThunk(userId).then((response) => {

            if (this.props.profileInfo.userId === this.props.authorizedId) {
                this.props.setIsProfileYours(true)
            } else {
                this.props.setIsProfileYours(false)
            }
        })
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.checkProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.checkProfile()
        }
    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}
                        userStatus={this.props.userStatus}
                        updateStatusThunk={this.props.updateStatusThunk}
                        addNewPost={this.props.addNewPost}
                        authorizedId={this.props.authorizedId}
                        isProfileYours={this.props.isProfileYours}
                        saveProfileDataThunk={this.props.saveProfileDataThunk}/>
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

export default compose(
    connect(mapStateToProps, {
        saveProfileDataThunk, getProfileInfoThunk, updateStatusThunk,
        getUserStatusThunk, addNewPost, setIsProfileYours, setProfileInfo
    }),
    withAuthHoc,
    withRouter
)(ProfileAPI)


