import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesPage-reducer";
import navbarReducer from "./navBar-reducer";
import profileReducer from "./profilePage-reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    navBar: navbarReducer,
    profilePage: profileReducer
})

let store = createStore(reducers);

export default store;