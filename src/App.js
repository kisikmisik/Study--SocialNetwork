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
                <NavBar state={props.state}/>
                <Route path='/profile' render={() => <Profile state={props.state}
                                                              changePostText={props.changePostText}
                                                              addPost={props.addPost}/>}/>
                <Route path='/messages' render={() => <Messages addMessage={props.addMessage}
                                                                state={props.state}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
