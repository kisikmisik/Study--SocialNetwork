let initialState = {
    users: [],
    totalUsers: 100,
    currentPage: 1,
    pageLimit: 10,
    isFetching: false
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
        default:
            return state
    }
}
export default usersReducer;

export const getUsers = (usersData) => ({type: 'LOAD-USERS', users: usersData})
export const followUser = (id) => ({type: 'FOLLOW-USER', userId: id})
export const unfollowUser = (id) => ({type: 'UNFOLLOW-USER', userId: id})
export const setCurrentPage = (page) => ({type: 'SET-CURRENT-PAGE', page})
// export const setTotalCountAC = (usersCount) => ({type: 'SET-TOTAL-COUNT', usersCount}) too many users
export const changePreloaderStatus = (currentStatus) => ({type: 'CHANGE-PRELOADER-STATUS', currentStatus})
