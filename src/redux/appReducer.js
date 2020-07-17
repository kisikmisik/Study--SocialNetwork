import {authAPI} from "../api/api";
import {checkAuthData, setAuthData} from "./auth-reducer";
const UPDATE_AUTHORIZATION = 'appReducer/UPDATE-AUTHORIZATION'

let initialState = {
    authorized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_AUTHORIZATION:
            return {
                ...state,
                authorized: action.status
            }
        default:
            return state
    }

}
export let updateAuthorization = (status) => ({type: UPDATE_AUTHORIZATION, status})

export let initializeThunk = () => {
    return async (dispatch) => {
        let authData = await authAPI.getAuthData()
        if (authData.resultCode === 0) {
            dispatch(setAuthData(authData.data))
            dispatch(checkAuthData(true))
        }
        dispatch(updateAuthorization(true))


    }
}

export default appReducer;