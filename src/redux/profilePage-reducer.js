let initialState = {
    postsData: [
        {id: 1, message: "It's my first props!", likes: 20},
        {id: 2, message: "Wow! That's amazing!", likes: 12}
    ],
    postAreaText: ''
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
        default:
            return state
    }
}
export default profileReducer;

export const addNewPostActionCreator = (message) => ({ type: 'ADD-POST', message: message})
export const changeAreaTextActionCreator = (message) => ({ type: 'CHANGE-POST-TEXT', message: message})
