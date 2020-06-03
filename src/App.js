import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";

function App(props) {
    return (
        <div className="page-wrapper">
            <HeaderContainer/>
            <div className="container">
                <NavBar/>
                <Route path='/login' component={Login}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <Messages/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={NewsContainer}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={SettingsContainer}/>
            </div>
        </div>
    );
}

export default App;
