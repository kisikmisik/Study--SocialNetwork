// this is manual version of store, used to show how store works

import messagesReducer from "./messagesPage-reducer";
import profileReducer from "./profilePage-reducer";
import navbarReducer from "./navBar-reducer";

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

    dispatch(action) {
        messagesReducer(this._state.messagesPage, action);
        profileReducer(this._state.profilePage, action);
        navbarReducer(this._state.navBar);
        this.renderAllTree();
    }
}


