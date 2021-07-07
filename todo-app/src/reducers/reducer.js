export const initialState = [ // default render info
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) { // list of desired effects
        case 'NEW_TODO': 
            return [...state, action.payload]
        case 'MARK_COMPLETE':
            return [...state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo)];
            // ^ create a new array of the same to-do list but with the item clicked marked as done (or not)
        case 'CLEAR_COMPLETED':
            return [...state.filter(todo => !todo.completed)]
            // ^ filter out the to-do's that have already been completed
        case 'CLEAR_ALL':
            return [];
        default: 
            return state;
    }
}