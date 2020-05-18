import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <div className="page-wrapper">
            <HeaderContainer/>
            <div className="container">
                <NavBar/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <Messages/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
