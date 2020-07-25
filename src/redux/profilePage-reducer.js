import {profileAPI} from "../api/api";

const ADD_POST = 'profilePage-reducer/ADD-POST'
const SET_PROFILE_INFO = 'profilePage-reducer/SET-PROFILE-INFO'
const SET_STATUS_TEXT = 'profilePage-reducer/SET-STATUS-TEXT'
const SET_IS_PROFILE_YOURS = 'profilePage-reducer/SET_IS_PROFILE_YOURS'
const SET_PROFILE_PHOTO = 'profilePage-reducer/SET_PROFILE_PHOTO'


let initialState = {
    postsData: [
        {id: 1, message: "It's my first props!", likes: 20},
        {id: 2, message: "Wow! That's amazing!", likes: 12}
    ],
    postAreaText: '',
    profileInfo: null,
    userStatus: '',
    isProfileYours: false
}


let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
        case SET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.info

            }
        case SET_STATUS_TEXT:
            return {
                ...state,
                userStatus: action.statusText
            }
        case SET_IS_PROFILE_YOURS:
            return {
                ...state,
                isProfileYours: action.status
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                profileInfo: {...state.profileInfo, photos: action.photos}
            }
        default:
            return state
    }
}
export default profileReducer;

export const addNewPost = (message) => ({ type: ADD_POST, message: message})
export const setProfileInfo = (info) => ({ type: SET_PROFILE_INFO, info})
export const setStatusText = (statusText) => ({ type: SET_STATUS_TEXT, statusText})
export const setIsProfileYours = (status) => ({ type: SET_IS_PROFILE_YOURS, status})
export const setProfilePhoto = (photos) => ({ type: SET_PROFILE_PHOTO, photos})

export const getProfileInfoThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfileInfo(userId)
        dispatch(setProfileInfo(data))
    }
}
export const updateStatusThunk = (statusText) => {
    return async (dispatch) => {
        let response = await profileAPI.updateUserStatus(statusText);
        if (response.data.resultCode === 0) {
            return dispatch(setStatusText(statusText))
        } else {
            return alert("Too large status or server error")
        }
    }
}
export const getUserStatusThunk = (userID) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserStatus(userID)
        dispatch(setStatusText(data))
    }
}
export const updateProfilePhotoThunk = (profilePhoto) => {
    return async (dispatch) => {
        const formData = new FormData();
        formData.append('image', profilePhoto)
        let response = await profileAPI.changeProfilePhoto(formData)
        if (response.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.photos))
        }
    }
}

