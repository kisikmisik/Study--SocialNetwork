const ADD_MESSAGE = 'messagesPage-reducer/ADD-MESSAGE'

let initialState = {
    messagesData: [
        {id: 11, message: "hi", classSet: "me"},
        {id: 22, message: "heya", classSet: "other"},
        {id: 33, message: "What's up?", classSet: "me"},
        {id: 44, message: "ok", classSet: "other"},
        {id: 55, message: "and you?", classSet: "other"}
    ],
    peopleData: [
        {id: 111, name: "Olga"},
        {id: 222, name: "Lukasz"},
        {id: 333, name: "William"},
        {id: 444, name: "Jorge"},
        {id: 555, name: "Thom"}
    ],
    currentMessage: ""
}
let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 1,
                message: action.message
            }
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                currentMessage: ''
            }
        default:
            return state
    }
}
export default messagesReducer;

export const addNewMessage = (message) => ({ type: ADD_MESSAGE, message})
