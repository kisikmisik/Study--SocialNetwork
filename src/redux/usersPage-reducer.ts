import {manageSubscribeAPI, usersAPI} from "../api/api";
import {setPhotosType} from "./profilePage-reducer";

const FOLLOW_USER = 'userPage-reducer/FOLLOW-USER'
const UNFOLLOW_USER = 'userPage-reducer/UNFOLLOW-USER'
const LOAD_USERS = 'userPage-reducer/LOAD-USERS'
const SET_CURRENT_PAGE = 'userPage-reducer/SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'userPage-reducer/SET-TOTAL-COUNT'
const CHANGE_PRELOADER_STATUS = 'userPage-reducer/CHANGE-PRELOADER-STATUS'
const TOGGLE_FOLLOW_PROGRESS = 'userPage-reducer/TOGGLE-FOLLOW-PROGRESS'

type usersType = {
    name: string
    id: number
    photos: setPhotosType
    status: string | null
    followed: boolean
}
let initialState = {
    users: [] as Array<usersType>,
    totalUsers: 0 as number,
    currentPage: 1 as number,
    pageLimit: 10 as number,
    isFetching: false as boolean,
    isFollowInProgress: [] as Array<number>
}

export type usersReducerType = typeof initialState


let usersReducer = (state = initialState, action: any): usersReducerType => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    } else {
                        return {...u}
                    }
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return {...u}
                    }
                })
            }
        case LOAD_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalUsers: action.usersCount
            }
        case CHANGE_PRELOADER_STATUS:
            return {
                ...state,
                isFetching: action.currentStatus
            }
        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                isFollowInProgress: action.currentStatus ?
                    [...state.isFollowInProgress, action.userID] :
                    state.isFollowInProgress.filter(id => id !== action.userID)
            }
        default:
            return state
    }
}
export default usersReducer;

type getUsersType = {
    type: typeof LOAD_USERS
    users: usersType
}
export const getUsers = (usersData: usersType): getUsersType => ({type: LOAD_USERS, users: usersData})

type followUserType = {
    type: typeof FOLLOW_USER
    userId: number
}
export const followUser = (userId: number): followUserType => ({type: FOLLOW_USER, userId})

type unfollowUserType = {
    type: typeof UNFOLLOW_USER
    userId: number
}
export const unfollowUser = (userId: number): unfollowUserType => ({type: UNFOLLOW_USER, userId})

type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    page: number
}
export const setCurrentPage = (page: number): setCurrentPageType => ({type: SET_CURRENT_PAGE, page})

type setTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    usersCount: number
}
export const setTotalCount = (usersCount: number): setTotalCountType => ({type: SET_TOTAL_COUNT, usersCount})

type changePreloaderStatusType = {
    type: typeof CHANGE_PRELOADER_STATUS
    currentStatus: boolean
}
export const changePreloaderStatus = (currentStatus: boolean): changePreloaderStatusType =>
    ({type: CHANGE_PRELOADER_STATUS, currentStatus})

type toggleFollowProgressType = {
    type: typeof TOGGLE_FOLLOW_PROGRESS
    currentStatus: boolean
    userID: number
}
export const toggleFollowProgress = (currentStatus: boolean, userID: number): toggleFollowProgressType =>
    ({type: TOGGLE_FOLLOW_PROGRESS, currentStatus, userID})

export const getUsersThunk = (pageLimit: number, currentPage: number) => {
    return async (dispatch: any) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(changePreloaderStatus(true));

        let data = await usersAPI.getUsers(pageLimit, currentPage);
        dispatch(changePreloaderStatus(false));
        dispatch(getUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
}

export const unfollowThunk = (userID: number) => {
    return async (dispatch: any) => {
            dispatch(toggleFollowProgress(true, userID));
            let data = await manageSubscribeAPI.unfollowUser(userID);
            if (data.resultCode === 0) {
                dispatch(unfollowUser(userID));
            }
            dispatch(toggleFollowProgress(false, userID));
    }
}

export const followThunk = (userID: number) => {
    return async (dispatch: any) => {
        dispatch(toggleFollowProgress(true, userID));

        let data = await manageSubscribeAPI.followUser(userID);
        if (data.resultCode === 0) {
            dispatch(followUser(userID));
        }
        dispatch(toggleFollowProgress(false, userID));
    }
}

