export let store = {
    renderAllTree () {
        console.log('state changed');
    },
    state: {
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
            addMessage (message) {
                let newMessage = {
                    id: 1,
                    message: message,
                    classSet: "me"
                }
                store.state.messagesPage.messagesData.push(newMessage);
                store.renderAllTree();
            }
        },
        profilePage: {
            postsData: [
                {id: 1, message: "It's my first props!", likes: 20},
                {id: 2, message: "Wow! That's amazing!", likes: 12}
            ],
            postAreaText: 'pipisya',
            changePostText(message) {
                store.state.profilePage.postAreaText = message;
                store.renderAllTree();
            },
            addPost(message) {
                let newPost = {
                    id: 3,
                    message: message,
                    likes: 15
                }
                store.state.profilePage.postsData.push(newPost);
                store.state.profilePage.postAreaText = "";
                store.renderAllTree();
            }
        },
        navBar: {
            friendsData: [
                {id: 1, name: "Sasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
                {id: 2, name: "Pasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
                {id: 3, name: "Masha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"}
            ]
        }
    },
    subscribe (observer) {
        this.renderAllTree = observer;
    }
}
window.sisi = store.state.profilePage.postAreaText;