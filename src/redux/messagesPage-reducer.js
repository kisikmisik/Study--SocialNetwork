let initialState = {
    messagesData: [
        {id: 1, message: "Привет", classSet: "me"},
        {id: 2, message: "Доров", classSet: "he"},
        {id: 3, message: "Как дела?", classSet: "me"},
        {id: 4, message: "Заебца", classSet: "he"},
        {id: 5, message: "Сам как?", classSet: "he"}
    ],
    peopleData: [
        {id: 1, name: "Оленька"},
        {id: 2, name: "Дима"},
        {id: 3, name: "Лиза"},
        {id: 4, name: "Сережа"},
        {id: 5, name: "Аркаша"}
    ],
    currentMessage: ""
}
let messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            return {
                ...state,
                currentMessage: action.message
            }
        case 'ADD-MESSAGE':
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

export const addMessageActionCreator = (message) => ({ type: 'ADD-MESSAGE', message: message})
export const changeMessageActionCreator = (message) => ({ type: 'CHANGE-MESSAGE-TEXT', message: message })
