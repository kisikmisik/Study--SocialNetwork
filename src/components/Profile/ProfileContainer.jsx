import React from "react";
import Profile from "./Profile";
import * as axios from 'axios'
import {connect} from "react-redux";
import {setProfileInfo} from "../../redux/profilePage-reducer";
import {withRouter} from "react-router-dom";

class ProfileAPI extends React.Component { // first container
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8001;
        }
        axios
            .get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then((response) => {
                this.props.setProfileInfo(response.data);
            })

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
const ProfileContainer = connect(mapStateToProps, {setProfileInfo}) (WithUrlDataComponent); // third container

export default ProfileContainer
