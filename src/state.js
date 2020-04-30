export let store = {
    renderAllTree () {
        console.log('state changed');
    },
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, message: "It's my first props!", likes: 20},
                {id: 2, message: "Wow! That's amazing!", likes: 12}
            ],
            postAreaText: ''
        },
        navBar: {
            friendsData: [
                {id: 1, name: "Sasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
                {id: 2, name: "Pasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
                {id: 3, name: "Masha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"}
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this.renderAllTree = observer;
    },

    // addMessage (message) {
    //     let newMessage = {
    //         id: 1,
    //         message: message
    //     }
    //     this._state.messagesPage.messagesData.push(newMessage);
    //     this.renderAllTree();
    // },
    // changePostText(message) {
    //     this._state.profilePage.postAreaText = message;
    //     this.renderAllTree();
    // },
    // addPost(message) {
    //     let newPost = {
    //         id: 3,
    //         message: message,
    //         likes: 15
    //     }
    //     this._state.profilePage.postsData.push(newPost);
    //     this._state.profilePage.postAreaText = "";
    //     this.renderAllTree();
    // },
    dispatch(action) {
        if (action.type === 'ADD-MESSAGE') {
            let newMessage = {
                id: 1,
                message: action.message
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this.renderAllTree();

        } else if (action.type === 'CHANGE-POST-TEXT') {
            this._state.profilePage.postAreaText = action.message;
            this.renderAllTree();

        } else if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: action.message,
                likes: 15
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.postAreaText = "";
            this.renderAllTree();

        } else if (action.type === 'CHANGE-MESSAGE-TEXT') {
            this._state.messagesPage.currentMessage = action.message;
            this.renderAllTree();
        }
    }
}

export const addMessageActionCreator = (message) => ({ type: 'ADD-MESSAGE', message: message})
export const addNewPostActionCreator = (message) => ({ type: 'ADD-POST', message: message})
export const changeAreaTextActionCreator = (message) => ({ type: 'CHANGE-POST-TEXT', message: message})
export const changeMessageActionCreator = (message) => ({ type: 'CHANGE-MESSAGE-TEXT', message: message })

