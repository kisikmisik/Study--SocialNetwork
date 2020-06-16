import {authThunk} from "./auth-reducer";
import {getProfileInfoThunk} from "./profilePage-reducer";


let initialState = {
    authorized: false
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-AUTHORIZATION':
            return {
                ...state,
                authorized: action.status
            }
        default:
            return state
    }

}
export let updateAuthorization = (status) => ({type: 'UPDATE-AUTHORIZATION', status})

export let initializeThunk = () => {
    return (dispatch) => {
        let authPromise = dispatch(authThunk())
        authPromise.then(() => {dispatch(updateAuthorization(true))}).catch((error) => console.log(error))
    }
}

export default appReducer;