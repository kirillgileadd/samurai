

let store = {
    _state: {
        profilePage: {
            posts: [
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
    },
    getState() {
        return this._state
    },
    callSubcriber() {
        console.log('Sate was changed')
    },
    subscribe (observer) {
        this.callSubcriber = observer
    },


    addPost() {
        let newPost = {
            massage: this._state.profilePage.newPostTest,
            likeCounter: '0'
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostTest = ''
        this.callSubcriber(this.getState());
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostTest = newText
        this.callSubcriber(this.getState());
    },
    sendMessage  ()  {
        let newMessage = {
            id: '5',
            message:  this._state.dialogsPage.newMessageText
        }

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this.callSubcriber(this.getState());
    },
    onChangeMessage (newMessage)  {
        this._state.dialogsPage.newMessageText = newMessage
        this.callSubcriber(this.getState());
    },

    dispatch(action) { //type "ADD-POST"
        if(action.type === "ADD-POST") {
            let newPost = {
                massage: this._state.profilePage.newPostTest,
                likeCounter: '0'
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostTest = ''
            this.callSubcriber(this.getState());
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostTest = action.newText
            this.callSubcriber(this.getState());
        }
    }

}


export default store

window.store = store