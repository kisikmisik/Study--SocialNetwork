const ADD_MESSAGE = 'messagesPage-reducer/ADD-MESSAGE'

let initialState = {
    messagesData: [
        {id: 11, message: "Привет", classSet: "me"},
        {id: 22, message: "Доров", classSet: "he"},
        {id: 33, message: "Как дела?", classSet: "me"},
        {id: 44, message: "Заебца", classSet: "he"},
        {id: 55, message: "Сам как?", classSet: "he"}
    ],
    peopleData: [
        {id: 111, name: "Оленька"},
        {id: 222, name: "Дима"},
        {id: 333, name: "Лиза"},
        {id: 444, name: "Сережа"},
        {id: 555, name: "Аркаша"}
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
