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
                ...action.data,
                isAuthorized: true
            }
        default:
            return state

    }
}

export default authReducer;

export const setAuthData = (data) => ({type: 'SET-AUTH-DATA', data})

export const checkAuthThunk = () => {
    return (dispatch) => {
        authAPI.checkAuth().then(data => dispatch(setAuthData(data.data)))
    }
}