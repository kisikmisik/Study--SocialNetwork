import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesPage-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profilePage-reducer";
import usersReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    navBar: navBarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    authReducer: authReducer
})

let store = createStore(reducers);

export default store;