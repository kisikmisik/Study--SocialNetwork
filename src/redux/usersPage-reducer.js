let initialState = {
    users: [
        // {
        //     id: 1, photo: 'https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png',
        //     followed: false, name: 'Vladimir P.', location: 'Moscow, Russia', message: 'Я покакал'
        // },
        // {
        //     id: 2, photo: 'https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png',
        //     followed: true, name: 'Volodymyr Z.', location: 'Kiev, Ukraine', message: 'Люблю снега в конце апреля'
        // },
        // {
        //     id: 3, photo: 'https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png',
        //     followed: false, name: 'Valdemar P.', location: 'Berlin, Germany', message: 'Как правильно думать?'
        // },
        // {
        //     id: 4, photo: 'https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png',
        //     followed: false, name: 'Dima B.', location: 'Silicon Valley, USA', message: 'Что такое магина?'
        // }
    ]
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
        default:
            return state
    }
}
export default usersReducer;

export const loadUsersAC = (usersData) => ({type: 'LOAD-USERS', users: usersData})
export const followAC = (id) => ({type: 'FOLLOW-USER', userId: id})
export const unfollowAC = (id) => ({type: 'UNFOLLOW-USER', userId: id})
