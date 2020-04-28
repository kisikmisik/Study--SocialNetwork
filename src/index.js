import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./state";
import {BrowserRouter} from "react-router-dom";

let renderAllTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     addMessage={store.addMessage.bind(store)}
                     changePostText={store.changePostText.bind(store)}
                     addPost={store.addPost.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );

    store.subscribe(renderAllTree);

    serviceWorker.unregister();
}

renderAllTree(store.state);
