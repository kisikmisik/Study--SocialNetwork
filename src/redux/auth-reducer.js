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