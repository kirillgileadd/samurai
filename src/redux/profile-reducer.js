const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {massage: "It's my first post", likeCounter: '21'},
        {massage: "It's my first post", likeCounter: '21'},
        {massage: "It's my first post", likeCounter: '21'},
    ],
    newPostTest: '',
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                massage: state.newPostTest,
                likeCounter: '0'
            }
            state.posts.push(newPost)
            state.newPostTest = ''
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostTest = action.newText
            break;
    }

    return state
}

export const addPostActionChange = () => ({type: ADD_POST,})
export const onPostChangeActionChange = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer