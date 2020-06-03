import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk} from "../../redux/auth-reducer";

class HeaderApi extends React.Component {
    componentDidMount() {
        this.props.authThunk();
    }
    render() {
        return <Header authData={this.props.authData}/>
    }
}

let mapStateToProps = (state) => ({
    authData: state.authReducer
});

const HeaderContainer = connect(mapStateToProps, {authThunk})(HeaderApi);

export default HeaderContainer;