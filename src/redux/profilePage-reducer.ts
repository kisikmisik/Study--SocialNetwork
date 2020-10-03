import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const ADD_POST = 'profilePage-reducer/ADD-POST'
const SET_PROFILE_INFO = 'profilePage-reducer/SET-PROFILE-INFO'
const SET_STATUS_TEXT = 'profilePage-reducer/SET-STATUS-TEXT'
const SET_IS_PROFILE_YOURS = 'profilePage-reducer/SET_IS_PROFILE_YOURS'
const SET_PROFILE_PHOTO = 'profilePage-reducer/SET_PROFILE_PHOTO'
const UPDATE_PROFILE_DATA = 'profilePage-reducer/UPDATE_PROFILE_DATA'

type postsDataType = {
    id: number
    message: string
    likes: number
    liked: boolean
}
let initialState = {
    postsData: [
        {id: 1, message: "It's my first props!", likes: 20, liked: false},
        {id: 2, message: "Wow! That's amazing!", likes: 12, liked: false}
    ] as Array<postsDataType>,
    postAreaText: '',
    profileInfo: null as unknown as object,
    userStatus: '',
    isProfileYours: false as boolean
}

export type profileReducerType = typeof initialState;

let profileReducer = (state = initialState, action: any): profileReducerType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: action.message,
                likes: 0,
                liked: false
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
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
        case UPDATE_PROFILE_DATA:
            return {
                ...state,
                profileInfo: {...action.info}
            }
        default:
            return state
    }
}
export default profileReducer;

type addNewPostType = {
    type: typeof ADD_POST
    message: string
}
export const addNewPost = (message: string): addNewPostType => ({ type: ADD_POST, message: message})

export type setPhotosType = {
    small: string
    large: string
}
type setProfileInfoType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: setPhotosType
}
type setProfileInfoActionType = {
    type: typeof SET_PROFILE_INFO
    info: setProfileInfoType | null
}
export const setProfileInfo = (info: setProfileInfoType): setProfileInfoActionType => ({ type: SET_PROFILE_INFO, info})

type setStatusTextType = {
    type: typeof SET_STATUS_TEXT
    statusText: string
}
export const setStatusText = (statusText: string): setStatusTextType => ({ type: SET_STATUS_TEXT, statusText})

type setIsProfileYours = {
    type: typeof SET_IS_PROFILE_YOURS
    status: string
}
export const setIsProfileYours = (status: string) => ({ type: SET_IS_PROFILE_YOURS, status})

type setProfilePhotoType = {
    type: typeof SET_PROFILE_PHOTO
    photos: setPhotosType
}
export const setProfilePhoto = (photos: setPhotosType): setProfilePhotoType => ({ type: SET_PROFILE_PHOTO, photos})

type updateProfileDataType = {
    type: typeof UPDATE_PROFILE_DATA
    info: setProfileInfoType
}
export const updateProfileData = (info: setProfileInfoType): updateProfileDataType => ({ type: UPDATE_PROFILE_DATA, info})

export const getProfileInfoThunk = (userId: any) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getProfileInfo(userId)
        dispatch(setProfileInfo(data))
    }
}
export const updateStatusThunk = (statusText: any) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateUserStatus(statusText);
        if (response.data.resultCode === 0) {
            return dispatch(setStatusText(statusText))
        } else {
            return alert("Too large status or server error")
        }
    }
}
export const getUserStatusThunk = (userID: any) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getUserStatus(userID)
        dispatch(setStatusText(data))
    }
}
export const updateProfilePhotoThunk = (profilePhoto: any) => {
    return async (dispatch: any) => {
        const formData = new FormData();
        formData.append('image', profilePhoto)
        let response = await profileAPI.changeProfilePhoto(formData)
        if (response.resultCode === 0) {
            dispatch(setProfilePhoto(response.data.photos))
        }
    }
}
export const saveProfileDataThunk = (dataObject: any) => {
    return async (dispatch: any) => {
        let data = await profileAPI.saveProfileData(dataObject)
        if (data.resultCode === 0) {
            dispatch(updateProfileData(dataObject))
        } else {
            dispatch(stopSubmit("profileEdit", {_error: data.messages[0] || "Some error"}))
        }

    }
}

