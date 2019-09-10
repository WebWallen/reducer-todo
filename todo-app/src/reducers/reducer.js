export const initialState = [
    {
        item: 'Walk a shelter dog',
        completed: false,
        id: 3892987543,
    },
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987544,
    },
];

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ];
        case 'CROSS_OFF':
                return state.map(todo => {
                    if (state.id === todo.id) {
                      return {...todo, completed: !todo.completed}
                    }
                    else {
                      return todo;
                    }
                })
        case 'CLEAR_COMPLETE': 
            return state.filter(todo => !todo.completed);
        default: 
            return state;
    }
}