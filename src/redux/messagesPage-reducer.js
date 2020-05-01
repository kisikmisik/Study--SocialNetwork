let messagesReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            state.currentMessage = action.message;
            return state
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 1,
                message: action.message
            }
            state.messagesData.push(newMessage);
            state.currentMessage = "";
            return state
        default:
            return state
    }
}
export default messagesReducer;

export const addMessageActionCreator = (message) => ({ type: 'ADD-MESSAGE', message: message})
export const changeMessageActionCreator = (message) => ({ type: 'CHANGE-MESSAGE-TEXT', message: message })
