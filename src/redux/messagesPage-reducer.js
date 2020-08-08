const SEND_MESSAGE = 'messagesPage-reducer/SEND-MESSAGE'

// at the moment there is no api for dialogs at our server, so I temporarily put mocks
let initialState = {
    dialogsData: [
        {id: 111, name: "Olga Plotskaya", photo: '', messages: [
                {id: 11, message: "hi Olga Plotskaya", classSet: "me"},
                {id: 22, message: "heya", classSet: "other"},
                {id: 33, message: "What's up?", classSet: "me"},
                {id: 44, message: "ok", classSet: "other"},
                {id: 55, message: "and you?", classSet: "other"}
                ]},
        {id: 222, name: "Lukasz Kowalski", photo: '', messages: [
                {id: 11, message: "hello Lukasz", classSet: "me"},
                {id: 22, message: "heya", classSet: "other"},
                {id: 33, message: "What's up?", classSet: "me"},
                {id: 44, message: "ok", classSet: "other"},
                {id: 55, message: "and you?", classSet: "other"}
            ]},
        {id: 333, name: "William Smith", photo: '', messages: [
                {id: 11, message: "hi William", classSet: "me"},
                {id: 22, message: "heya", classSet: "other"},
                {id: 33, message: "What's up?", classSet: "me"},
                {id: 44, message: "ok", classSet: "other"},
                {id: 55, message: "and you?", classSet: "other"}
            ]},
        {id: 444, name: "Jorge Washington", photo: '', messages: [
                {id: 11, message: "hi Jorge", classSet: "me"},
                {id: 22, message: "heya", classSet: "other"},
                {id: 33, message: "What's up?", classSet: "me"},
                {id: 44, message: "ok", classSet: "other"},
                {id: 55, message: "and you?", classSet: "other"}
            ]},
        {id: 555, name: "Thom Yorke", photo: '', messages: [
                {id: 11, message: "hi Thom", classSet: "me"},
                {id: 22, message: "heya", classSet: "other"},
                {id: 33, message: "What's up?", classSet: "me"},
                {id: 44, message: "ok", classSet: "other"},
                {id: 55, message: "and you?", classSet: "other"}
            ]}
    ]
}
let messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: action.message,
                classSet: 'me'
            }
            let dialogsDataCopy = JSON.parse(JSON.stringify(state.dialogsData))
            dialogsDataCopy[action.dialogIndex].messages.push(newMessage)
            return {
                ...state,
                dialogsData: dialogsDataCopy,

            }
        default:
            return state
    }
}
export default messagesReducer;

export const sendNewMessage = (message, dialogIndex) => ({ type: SEND_MESSAGE, message, dialogIndex})
