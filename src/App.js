import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <div className="page-wrapper">
            <Header/>
            <div className="container">
                <NavBar store={props.store}/>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/messages' render={() => <Messages store={props.store}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
