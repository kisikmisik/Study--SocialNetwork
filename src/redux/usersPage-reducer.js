import {manageSubscribeAPI, usersAPI} from "../api/api";

let initialState = {
    users: [],
    totalUsers: 100,
    currentPage: 1,
    pageLimit: 10,
    isFetching: false,
    isFollowInProgress: []
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW-USER':
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
        case 'UNFOLLOW-USER':
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
        case 'LOAD-USERS':
            return  {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        case 'SET-TOTAL-COUNT':
            return {
                ...state,
                totalUsers: action.usersCount
            }
        case 'CHANGE-PRELOADER-STATUS':
            return {
                ...state,
                isFetching: action.currentStatus
            }
        case 'TOGGLE-FOLLOW-PROGRESS':
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

export const getUsers = (usersData) => ({type: 'LOAD-USERS', users: usersData})
export const followUser = (userId) => ({type: 'FOLLOW-USER', userId})
export const unfollowUser = (userId) => ({type: 'UNFOLLOW-USER', userId})
export const setCurrentPage = (page) => ({type: 'SET-CURRENT-PAGE', page})
// export const setTotalCountAC = (usersCount) => ({type: 'SET-TOTAL-COUNT', usersCount}) too many users
export const changePreloaderStatus = (currentStatus) => ({type: 'CHANGE-PRELOADER-STATUS', currentStatus})
export const toggleFollowProgress = (currentStatus, userID) => ({type: 'TOGGLE-FOLLOW-PROGRESS', currentStatus, userID})

export const getUsersThunk = (pageLimit, currentPage) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
       dispatch(changePreloaderStatus(true));
        usersAPI.getUsers(pageLimit, currentPage).then(data => {
               dispatch(changePreloaderStatus(false));
                dispatch(getUsers(data.items));
                // this.props.setTotalUsersCount(data.totalCount) -- too many users, can't deal with them
            }
        )
    }
}

export const unfollowThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userID));
        manageSubscribeAPI.unfollowUser(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowUser(userID));
            }
            dispatch(toggleFollowProgress(false, userID));
        })
    }
}

export const followThunk = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowProgress(true, userID));
        manageSubscribeAPI.followUser(userID).then((data) => {
            if (data.resultCode === 0) {
                dispatch(followUser(userID));
            }
            dispatch(toggleFollowProgress(false, userID));
        })
    }
}

