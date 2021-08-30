let renderEntireThree = () => {
    console.log('Sate was changed')
}


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
            {id: '1', message: 'I am fine!'},
            {id: '2', message: 'Yo'},
            {id: '3', message: 'Yo'},
            {id: '4', message: 'Yo'},
            {id: '5', message: 'Hello World!'},
            {id: '5', message: 'Hello World!'},
        ],

        newMessageText: 'WoW',
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

window.state = state

export const addPost = () => {
    let newPost = {
        massage: state.profilePage.newPostTest,
        likeCounter: '0'
    }

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostTest = ''
    renderEntireThree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostTest = newText
    renderEntireThree(state);
}

export const onChangeMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage
    renderEntireThree(state);
}

export const sendMessage = () => {
    let newMessage = {
        id: '5',
        message: state.dialogsPage.newMessageText
    }

    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    renderEntireThree(state);
}

export const subscribe = (observer) => {
    renderEntireThree = observer
}


export default state