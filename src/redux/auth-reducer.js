import {authAPI} from "../api/api";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthorized: false
}

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-AUTH-DATA':
            return {
                ...state,
                ...action.data
            }
        case 'CHECK-AUTH-DATA':
            return {
                ...state,
                isAuthorized: action.status
            }
        default:
            return state

    }
}

export default authReducer;

export const setAuthData = (data) => ({type: 'SET-AUTH-DATA', data})
export const checkAuthData = (status) => ({type: 'CHECK-AUTH-DATA', status})

export const authThunk = () => {
    return (dispatch) => {
        authAPI.getAuthData().then((data) => {
            if (data.resultCode === 0) {
                dispatch(checkAuthData(true))
                dispatch(setAuthData(data.data))
            }

        })
    }
}

export const loginThunk = (loginData) => {
    return (dispatch) => {
        authAPI.login(loginData).then(data => {
            if (data.resultCode === 0) {
                authAPI.getAuthData().then((data) => {
                    if (data.resultCode === 0) {
                        dispatch(checkAuthData(true))
                        dispatch(setAuthData(data.data))
                    }

                })
            } else {

            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(() => {
            dispatch(checkAuthData(false))
            dispatch(setAuthData({id:null, email:null, login:null}))
        })
    }
}