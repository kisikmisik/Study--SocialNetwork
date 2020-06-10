import {profileAPI} from "../api/api";

let initialState = {
    postsData: [
        {id: 1, message: "It's my first props!", likes: 20},
        {id: 2, message: "Wow! That's amazing!", likes: 12}
    ],
    postAreaText: '',
    profileInfo: null,
    userStatus: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case 'SET-STATUS-TEXT':
            return {
                ...state,
                userStatus: action.statusText
            }
        default:
            return state
    }
}
export default profileReducer;

export const addNewPost = (message) => ({ type: 'ADD-POST', message: message})
export const setProfileInfo = (info) => ({ type: 'SET-PROFILE-INFO', info})
export const setStatusText = (statusText) => ({ type: 'SET-STATUS-TEXT', statusText})


export const getProfileInfoThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileInfo(userId).then(data => dispatch(setProfileInfo(data)))
    }
}
export const updateStatusThunk = (statusText) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(statusText).then((response) => {
            if (response.data.resultCode === 0) {
                return dispatch(setStatusText(statusText))
            } else {
                return alert("Too large status or server error")
            }
        })

    }
}
export const getUserStatusThunk = (userID) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userID).then(data => dispatch(setStatusText(data)))
    }
}

