let initialState = {
    users: [
        {
            id: 1, photo: 'https://otvet.imgsmail.ru/download/b7e42d138a330a561e16e3a896c5cb73_i-730.jpg',
            followed: false, name: 'Vladimir P.', location: 'Moscow, Russia', message: 'Я покакал'
        },
        {
            id: 2, photo: 'https://otvet.imgsmail.ru/download/b7e42d138a330a561e16e3a896c5cb73_i-730.jpg',
            followed: true, name: 'Volodymyr Z.', location: 'Kiev, Ukraine', message: 'Люблю снега в конце апреля'
        },
        {
            id: 3, photo: 'https://otvet.imgsmail.ru/download/b7e42d138a330a561e16e3a896c5cb73_i-730.jpg',
            followed: false, name: 'Valdemar P.', location: 'Berlin, Germany', message: 'Как правильно думать?'
        },
        {
            id: 4, photo: 'https://otvet.imgsmail.ru/download/b7e42d138a330a561e16e3a896c5cb73_i-730.jpg',
            followed: false, name: 'Dima B.', location: 'Silicon Valley, USA', message: 'Что такое магина?'
        }
    ]
}
let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW-USER':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                })
            }
        case 'UNFOLLOW-USER':

        case 'LOAD-USERS':

        default:
            return state
    }
}
export default usersReducer;

export const loadUsersAC = () => ({type: 'LOAD-USERS'})
export const followAC = (id) => ({type: 'FOLLOW-USER', userId: id})
export const unfollowAC = (id) => ({type: 'UNFOLLOW-USER', userId: id})
