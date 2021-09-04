import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import navbarReducer from "./navbar-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'

let store = {
    _state: {
        profilePage: {
            posts: [
                {massage: "It's my first post", likeCounter: '21'},
                {massage: "It's my first post", likeCounter: '21'},
                {massage: "It's my first post", likeCounter: '21'},
            ],
            newPostTest: '',
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

            newMessageText: '',
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

        },
        aside: {
            asideItems: [
                {name: 'Friends', num: '3'},
                {name: 'Group', num: '6'},
            ]
        },
    },
    _callSubcriber() {
        console.log('Sate was changed')
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubcriber = observer
    },


    dispatch(action) { //type "ADD-POST"
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.aside = asideReducer(this._state.aside, action)
        this._state.navBar = navbarReducer(this._state.navBar, action)
        this._callSubcriber(this._state);
    }

}




export default store

window.store = store