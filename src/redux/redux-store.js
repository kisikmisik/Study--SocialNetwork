import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesPage-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profilePage-reducer";
import usersReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    messagesPage: messagesReducer,
    navBar: navBarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;