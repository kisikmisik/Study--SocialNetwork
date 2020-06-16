import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesPage-reducer";
import navBarReducer from "./navBar-reducer";
import profileReducer from "./profilePage-reducer";
import usersReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";


let reducers = combineReducers({
    messagesPage: messagesReducer,
    navBar: navBarReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    authReducer: authReducer,
    app: appReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;