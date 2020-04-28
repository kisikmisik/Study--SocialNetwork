let renderAllTree = () => {
    console.log('State changed');
}

let state = {
    peopleData: [
    {id: 1, name: "Оленька"},
    {id: 1, name: "Дима"},
    {id: 1, name: "Лиза"},
    {id: 1, name: "Сережа"},
    {id: 1, name: "Аркаша"}
],
    messagesData: [
    {id: 1, message: "Привет", classSet: "me"},
    {id: 2, message: "Доров", classSet: "he"},
    {id: 1, message: "Как дела?", classSet: "me"},
    {id: 2, message: "Заебца", classSet: "he"},
    {id: 2, message: "Сам как?", classSet: "he"}
],
    postsData: [
    {id: 1, message: "It's my first props!", likes: 20},
    {id: 2, message: "Wow! That's amazing!", likes: 12}
],
    friendsData: [
        {id: 1, name: "Sasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
        {id: 2, name: "Pasha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"},
        {id: 3, name: "Masha", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/LACMTA_Circle_Gold_Line.svg/1200px-LACMTA_Circle_Gold_Line.svg.png"}
    ],
    postAreaText: 'pipisya',
}
export let changePostText = (message) => {
    state.postAreaText = message;
    renderAllTree();
}

export let addPost = message => {
    let newPost = {
        id: 3,
        message: message,
        likes: 15
    }
    state.postsData.push(newPost);
    state.postAreaText = "";
    renderAllTree();
}

export let addMessage = message => {
    let newMessage = {
        id: 1,
        message: message,
        classSet: "me"
    }
    state.messagesData.push(newMessage);
    renderAllTree();
}

export let subscribe = observer => {
    renderAllTree = observer;
}

export default state;