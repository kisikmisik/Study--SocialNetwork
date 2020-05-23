import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {checkAuthThunk} from "../../redux/auth-reducer";

class HeaderApi extends React.Component {
    componentDidMount() {
        this.props.checkAuthThunk();
    }
    render() {
        return <Header authData={this.props.authData}/>
    }
}

let mapStateToProps = (state) => ({
    authData: state.authReducer
});

const HeaderContainer = connect(mapStateToProps, {checkAuthThunk})(HeaderApi);

export default HeaderContainer;