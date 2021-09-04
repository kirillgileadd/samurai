let initialState = {
    navItems: [
        {name: 'Profile', address: '/profile'},
        {name: 'Activity', address: '/activity'},
        {name: 'Dialogs', address: '/dialogs'},
        {name: 'News', address: '/news'},
        {name: 'Music', address: '/music'},
        {name: 'Friends', address: '/friends'},
        {name: 'Settings', address: '/settings'},
    ],
}

const navbarReducer = (state = initialState, action) => {

    return state
}

export default navbarReducer