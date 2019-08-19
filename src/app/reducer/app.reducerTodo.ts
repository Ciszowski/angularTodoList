const initialState= {
    todo: []
}

export function ReducerTodo(state = initialState, action) {
    switch (action.type) {
        case "TODO":
            return {
                ...state,
                todo: action.payload
            }
        case "CHANGE_POS": {
            return {
                ...state,
                todo: action.payload,
            }
        }
        case "EDIT_DESCRIPTION": {
            return {
                ...state.todo,
                todo: state.todo.map((el, idx) => {
                    if (el.id === action.payload.id) {
                        return {
                            ...el,
                            description: action.payload.description
                        }
                    }
                    return el
                })
            }
        }
        case "ADD_TASK":{
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        }
        case 'DELETE_ONE':{
            return {
                ...state.todo,
                todo: state.todo.filter((el) => el.id !== action.payload)
            }
        }
        case "DELETE_ALL":
            return initialState;
        default:
            return state;
    }
}