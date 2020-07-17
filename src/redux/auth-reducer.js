import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'appReducer/SET-AUTH-DATA'
const CHECK_AUTH_DATA = 'appReducer/CHECK-AUTH-DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.data
            }
        case CHECK_AUTH_DATA:
            return {
                ...state,
                isAuthorized: action.status
            }
        default:
            return state

    }
}
export default authReducer;

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data})
export const checkAuthData = (status) => ({type: CHECK_AUTH_DATA, status})

export const loginThunk = (loginData) => {
    return async (dispatch) => {
        let data = await authAPI.login(loginData);
        if (data.resultCode === 0) {
            let authData = await authAPI.getAuthData();
            if (authData.resultCode === 0) {
                dispatch(setAuthData(authData.data))
                dispatch(checkAuthData(true))
            }
        } else {
            dispatch(stopSubmit("login", {_error: data.messages[0] || "Authentication error"}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        await authAPI.logout();
        dispatch(checkAuthData(false))
        dispatch(setAuthData({id:null, email:null, login:null}))
    }
}