import {manageSubscribeAPI, usersAPI} from "../api/api";

const FOLLOW_USER = 'userPage-reducer/FOLLOW-USER'
const UFOLLOW_USER = 'userPage-reducer/UNFOLLOW-USER'
const LOAD_USERS = 'userPage-reducer/LOAD-USERS'
const SET_CURRENT_PAGE = 'userPage-reducer/SET-CURRENT-PAGE'
const SET_TOTAL_COUNT = 'userPage-reducer/SET-TOTAL-COUNT'
const CHANGE_PRELOADER_STATUS = 'userPage-reducer/CHANGE-PRELOADER-STATUS'
const TOGGLE_FOLLOW_PROGRESS = 'userPage-reducer/TOGGLE-FOLLOW-PROGRESS'


let initialState = {
    users: [],
    totalUsers: 0,
    currentPage: 1,
    pageLimit: 10,
    isFetching: false,
    isFollowInProgress: []

}

let usersReducer = (state = initialState, action) => {
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
        case UFOLLOW_USER:
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

export const getUsers = (usersData) => ({type: LOAD_USERS, users: usersData})
export const followUser = (userId) => ({type: FOLLOW_USER, userId})
export const unfollowUser = (userId) => ({type: UFOLLOW_USER, userId})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCount = (usersCount) => ({type: SET_TOTAL_COUNT, usersCount})
export const changePreloaderStatus = (currentStatus) => ({type: CHANGE_PRELOADER_STATUS, currentStatus})
export const toggleFollowProgress = (currentStatus, userID) => ({type: TOGGLE_FOLLOW_PROGRESS, currentStatus, userID})

export const getUsersThunk = (pageLimit, currentPage) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(changePreloaderStatus(true));

        let data = await usersAPI.getUsers(pageLimit, currentPage);
        dispatch(changePreloaderStatus(false));
        dispatch(getUsers(data.items));
        dispatch(setTotalCount(data.totalCount));
    }
}

export const unfollowThunk = (userID) => {
    return async (dispatch) => {
            dispatch(toggleFollowProgress(true, userID));
            let data = await manageSubscribeAPI.unfollowUser(userID);
            if (data.resultCode === 0) {
                dispatch(unfollowUser(userID));
            }
            dispatch(toggleFollowProgress(false, userID));
    }
}

export const followThunk = (userID) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, userID));

        let data = await manageSubscribeAPI.followUser(userID);
        if (data.resultCode === 0) {
            dispatch(followUser(userID));
        }
        dispatch(toggleFollowProgress(false, userID));
    }
}

