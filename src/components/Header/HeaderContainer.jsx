import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/auth-reducer";
import * as axios from 'axios'

class HeaderApi extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then((response) => {
                this.props.setAuthData(response.data.data)
            })
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

let mapStateToProps = (state) => ({
    authData: state.authReducer
});

const HeaderContainer = connect(mapStateToProps, {setAuthData})(HeaderApi);

export default HeaderContainer;