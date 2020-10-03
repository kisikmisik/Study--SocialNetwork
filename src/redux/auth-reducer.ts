import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'appReducer/SET-AUTH-DATA'
const CHECK_AUTH_DATA = 'appReducer/CHECK-AUTH-DATA'
const SET_CAPTCHA_URL = 'appReducer/SET_CAPTCHA_URL'

let initialState = {
    id: null as unknown as number,
    email: null as unknown as string,
    login: null as unknown as string,
    isAuthorized: false as boolean,
    captchaUrl: null as unknown as string
}
export type authReducerType = typeof initialState

let authReducer = (state = initialState, action: any): authReducerType => {
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

type setAuthDataType = {
    id: number | null
    email: string | null
    login: string | null
}
type setAuthDataReturnType = {
    type: typeof SET_AUTH_DATA
    data: setAuthDataType
}
export const setAuthData = (data: setAuthDataType): setAuthDataReturnType => ({type: SET_AUTH_DATA, data})

type checkAuthDataType = {
    type: typeof CHECK_AUTH_DATA
    status: boolean
}
export const checkAuthData = (status: boolean): checkAuthDataType => ({type: CHECK_AUTH_DATA, status})

type setCaptchaUrlType = {
    type: typeof SET_CAPTCHA_URL
    url: string | null
}
export const setCaptchaUrl = (url: string | null): setCaptchaUrlType => ({type: SET_CAPTCHA_URL, url})

export const loginThunk = (loginData: any) => {
    return async (dispatch: any) => {
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
    return async (dispatch: any) => {
        await authAPI.logout();
        dispatch(checkAuthData(false))
        dispatch(setAuthData({id: null, email: null, login: null}))
    }
}