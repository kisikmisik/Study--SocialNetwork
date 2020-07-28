import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'appReducer/SET-AUTH-DATA'
const CHECK_AUTH_DATA = 'appReducer/CHECK-AUTH-DATA'
const SET_CAPTCHA_URL = 'appReducer/SET_CAPTCHA_URL'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false,
    captchaUrl: null
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
        case SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.url
            }
        default:
            return state

    }
}
export default authReducer;

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data})
export const checkAuthData = (status) => ({type: CHECK_AUTH_DATA, status})
export const setCaptchaUrl = (url) => ({type: SET_CAPTCHA_URL, url})

export const loginThunk = (loginData) => {
    return async (dispatch) => {
        let data = await authAPI.login(loginData);
        if (data.resultCode === 0) {
            let authData = await authAPI.getAuthData();
            if (authData.resultCode === 0) {
                dispatch(setAuthData(authData.data))
                dispatch(checkAuthData(true))
                dispatch(setCaptchaUrl(null))
            }
        } else {
            if (data.resultCode === 10) {
                let captchaResponse = await securityAPI.getCaptcha()
                dispatch(setCaptchaUrl(captchaResponse.url))
            }
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