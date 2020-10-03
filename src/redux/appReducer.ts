import {authAPI} from "../api/api";
import {checkAuthData, setAuthData} from "./auth-reducer";
const UPDATE_AUTHORIZATION = 'appReducer/UPDATE-AUTHORIZATION'


let initialState = {
    authorized: false as boolean
}

export type initialStateType = typeof initialState;


type actionType = {
    type: string
    status: boolean
}
let appReducer = (state = initialState, action: actionType): initialStateType  => {
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
type updateAuthorizationType = (status: boolean) => {type: typeof UPDATE_AUTHORIZATION, status: boolean}

export let updateAuthorization: updateAuthorizationType = (status) => ({type: UPDATE_AUTHORIZATION, status})

export let initializeThunk = () => {
    return async (dispatch: any) => {
        let authData = await authAPI.getAuthData()
        if (authData.resultCode === 0) {
            dispatch(setAuthData(authData.data))
            dispatch(checkAuthData(true))
        }
        dispatch(updateAuthorization(true))


    }
}

export default appReducer;