const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE_NEW_TEXT_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_TEXT_MESSAGE:
            state.newMessageText = action.body
            break;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.messages.push({id: '6', message: body})
            break;
    }

    return state
}

export const addMessageChange = () => ({type: SEND_MESSAGE,})
export const onMessageChaneChange = (body) => ({type: UPDATE_NEW_TEXT_MESSAGE, body: body})



export default dialogsReducer