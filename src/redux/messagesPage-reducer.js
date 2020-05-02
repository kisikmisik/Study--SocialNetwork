let initialState = {
    messagesData: [
        {id: 1, message: "Привет", classSet: "me"},
        {id: 2, message: "Доров", classSet: "he"},
        {id: 1, message: "Как дела?", classSet: "me"},
        {id: 2, message: "Заебца", classSet: "he"},
        {id: 2, message: "Сам как?", classSet: "he"}
    ],
    peopleData: [
        {id: 1, name: "Оленька"},
        {id: 1, name: "Дима"},
        {id: 1, name: "Лиза"},
        {id: 1, name: "Сережа"},
        {id: 1, name: "Аркаша"}
    ],
    currentMessage: ""
}
let messagesReducer = (state = initialState, action) => {
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
