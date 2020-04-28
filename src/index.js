import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, subscribe, changePostText, addPost} from "./state";
import {BrowserRouter} from "react-router-dom";

let renderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addMessage={addMessage}
                     addPost={addPost}
                     friendsData={state.friendsData}
                     peopleData={state.peopleData}
                     messagesData={state.messagesData}
                     postsData={state.postsData}
                     postAreaText={state.postAreaText}
                     changePostText={changePostText}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

    subscribe(renderAllTree);

    serviceWorker.unregister();
}

renderAllTree(state);
