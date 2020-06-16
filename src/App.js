import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginWithAuth from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {initializeThunk} from "./redux/appReducer";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeThunk()
    }

    render() {
        if (this.props.authorized) {
            return (
                <div className="page-wrapper">
                    <HeaderContainer/>
                    <div className="container">
                        <NavBar/>
                        <Route path='/login' component={LoginWithAuth}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <Messages/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/news' component={NewsContainer}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={SettingsContainer}/>
                    </div>
                </div>
            );
        } else {
            return <Preloader/>
        }

    }
}

let mapStateToProps = (state) => {
    return {
        authorized: state.app.authorized
    }
}

let AppWithCheck = connect(mapStateToProps, {initializeThunk}) (App)

export default AppWithCheck;
