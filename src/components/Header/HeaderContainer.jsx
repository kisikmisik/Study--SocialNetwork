import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderApi extends React.Component {
    render() {
        return <Header authData={this.props.authData} logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) => ({
    authData: state.authReducer
});

const HeaderContainer = connect(mapStateToProps, {logout})(HeaderApi);

export default HeaderContainer;