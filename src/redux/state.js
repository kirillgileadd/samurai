import {renderEntireThree} from "../render";

let state = {
    profilePage: {
        posts:  [
            {massage: "It's my first post", likeCounter: '21'},
            {massage: "It's my first post", likeCounter: '21'},
            {massage: "It's my first post", likeCounter: '21'},
        ],
        newPostTest: 'it-kamasytra',
        aside: [
            {name: 'Friends', num: '3'},
            {name: 'Group', num: '6'},
        ]
    },
    dialogsPage: {
        messages: [
            {id: '1', message: "I'm fine!"},
            {id: '2', message: 'Yo'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
        ],
        dialogs: [
            {id: '1', username: 'Diana Sokil', online: '1 hour ago'},
            {id: '2', username: 'Rene', online: '2 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
            {id: '3', username: 'Kir', online: '4 hour ago'},
        ],
    },
    navBar: {
        navItems: [
            {name: 'Profile', address: '/profile'},
            {name: 'Activity', address: '/activity'},
            {name: 'Dialogs', address: '/dialogs'},
            {name: 'News', address: '/news'},
            {name: 'Music', address: '/music'},
            {name: 'Friends', address: '/friends'},
            {name: 'Settings', address: '/settings'},
        ],
        aside: [
            {name: 'Friends', num: '3'},
            {name: 'Group', num: '6'},
        ]
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        massage: postMessage,
        likeCounter: '0'
    }

    state.profilePage.posts.push(newPost)
    renderEntireThree(state);
}

export default state