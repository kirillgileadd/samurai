import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {massage: "It's my first post", likeCounter: '21'},
    {massage: "It's my first post", likeCounter: '21'},
    {massage: "It's my first post", likeCounter: '21'},
]

let messages = [
    {id: '1', message: "I'm fine!"},
    {id: '2', message: 'Yo'},
    {id: '3', message: 'Yo'},
    {id: '4', message: 'Yo'},
    {id: '5', message: 'Hello World!'},
]


let dialogs = [
    {id: '1', username: 'Diana Sokil', online: '1 hour ago'},
    {id: '2', username: 'Rene', online: '2 hour ago'},
    {id: '3', username: 'Kir', online: '4 hour ago'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
