import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfoThunk} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";

class ProfileAPI extends React.Component { // first container
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8001;
        }
        this.props.getProfileInfoThunk(userId)

    }
    render() {
        return <Profile profileInfo={this.props.profileInfo}/>
    }
}

let WithUrlDataComponent = withRouter(ProfileAPI); // second container


let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo
    }
};
const ProfileContainer = connect(mapStateToProps, {getProfileInfoThunk}) (WithUrlDataComponent); // third container

export default ProfileContainer
