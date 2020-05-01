let profileReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            state.postAreaText = action.message;
            return state;
        case 'ADD-POST':
            let newPost = {
                id: 3,
                message: action.message,
                likes: 15
            }
            state.postsData.push(newPost);
            state.postAreaText = "";
            return state
        default:
            return state
    }
}
export default profileReducer;

export const addNewPostActionCreator = (message) => ({ type: 'ADD-POST', message: message})
export const changeAreaTextActionCreator = (message) => ({ type: 'CHANGE-POST-TEXT', message: message})
