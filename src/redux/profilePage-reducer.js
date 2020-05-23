import {profileAPI} from "../api/api";

let initialState = {
    postsData: [
        {id: 1, message: "It's my first props!", likes: 20},
        {id: 2, message: "Wow! That's amazing!", likes: 12}
    ],
    postAreaText: '',
    profileInfo: null
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            return {
                ...state,
                postAreaText: action.message
            }
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: action.message,
                likes: 15
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                postAreaText: ""
            }
        case 'SET-PROFILE-INFO':
            return {
                ...state,
                profileInfo: action.info
            }
        default:
            return state
    }
}
export default profileReducer;

export const addNewPostActionCreator = (message) => ({ type: 'ADD-POST', message: message})
export const changeAreaTextActionCreator = (message) => ({ type: 'CHANGE-POST-TEXT', message: message})
export const setProfileInfo = (info) => ({ type: 'SET-PROFILE-INFO', info})

export const getProfileInfoThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId).then(data => dispatch(setProfileInfo(data)))
    }
}

