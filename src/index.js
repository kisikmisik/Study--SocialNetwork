import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let peopleData = [
    {id: 1, name: "Оленька"},
    {id: 1, name: "Дима"},
    {id: 1, name: "Лиза"},
    {id: 1, name: "Сережа"},
    {id: 1, name: "Аркаша"}
]

let messagesData = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Доров"},
    {id: 3, message: "Как дела?"},
    {id: 4, message: "Заебца"},
    {id: 5, message: "Сам как?"},
]

let postsData = [
    {id: 1, message: "It's my first props!", likes: 20},
    {id: 2, message: "Wow! That's amazing!", likes: 12}
]
ReactDOM.render(
  <React.StrictMode>
    <App peopleData={peopleData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
